import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek" }, { status: 400 });
  }

  const { naam, rating, behandeling, tekst } = body;

  if (!naam?.trim() || !rating || !tekst?.trim()) {
    return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
  }

  const ratingNum = parseInt(rating, 10);
  if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return NextResponse.json({ error: "Ongeldige beoordeling" }, { status: 400 });
  }

  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (convexUrl) {
    try {
      const res = await fetch(`${convexUrl}/api/mutation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: "reviews:submit",
          args: {
            name: naam.trim(),
            rating: ratingNum,
            ...(behandeling?.trim() ? { treatment: behandeling.trim() } : {}),
            text: tekst.trim(),
          },
          format: "json",
        }),
      });
      if (!res.ok) {
        console.error("Convex reviews error:", await res.text());
        return NextResponse.json({ error: "Opslaan mislukt" }, { status: 500 });
      }
    } catch (err) {
      console.error("Convex reviews fetch error:", err);
      return NextResponse.json({ error: "Opslaan mislukt" }, { status: 500 });
    }
  }

  // Send notification email to clinic
  if (process.env.RESEND_API_KEY) {
    const stars = "★".repeat(ratingNum) + "☆".repeat(5 - ratingNum);
    try {
      await resend.emails.send({
        from: "Skin & Vision Website <noreply@skinandvision.nl>",
        to: "info@skinandvision.nl",
        subject: `Nieuwe beoordeling van ${naam.trim()} — ${ratingNum}/5 sterren`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #2a2420;">
            <h2 style="color: #ff8835; margin-bottom: 24px;">Nieuwe patiëntbeoordeling via skinandvision.nl</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; width: 140px;">Naam</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${naam.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600;">Beoordeling</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 18px; color: #f59e0b;">${stars} (${ratingNum}/5)</td>
              </tr>
              ${behandeling?.trim() ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600;">Behandeling</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${behandeling.trim()}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Ervaring</td>
                <td style="padding: 10px 0; white-space: pre-wrap; font-style: italic;">"${tekst.trim()}"</td>
              </tr>
            </table>
            <p style="margin-top: 32px; padding: 16px; background: #fff0e6; border-radius: 8px; font-size: 13px; color: #b0a090;">
              Deze beoordeling staat op <strong>in afwachting van goedkeuring</strong> in de database. Keur de beoordeling goed om hem op de website te tonen.
            </p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Resend review notification error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
