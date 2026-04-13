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

  const { naam, email, telefoon, behandeling, bericht } = body;

  if (!naam?.trim() || !email?.trim() || !bericht?.trim()) {
    return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
  }

  // Save to Convex
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (convexUrl) {
    try {
      const res = await fetch(`${convexUrl}/api/mutation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: "contact:submit",
          args: {
            name: naam.trim(),
            email: email.trim(),
            ...(telefoon?.trim() ? { phone: telefoon.trim() } : {}),
            ...(behandeling?.trim() ? { treatment: behandeling.trim() } : {}),
            message: bericht.trim(),
          },
          format: "json",
        }),
      });
      if (!res.ok) {
        console.error("Convex contact error:", await res.text());
      }
    } catch (err) {
      console.error("Convex contact fetch error:", err);
    }
  }

  // Send notification email to clinic
  if (process.env.RESEND_API_KEY) {
    try {
      await resend.emails.send({
        from: "Skin & Vision Website <noreply@skinandvision.nl>",
        to: "info@skinandvision.nl",
        replyTo: email.trim(),
        subject: `Nieuw contactformulier van ${naam.trim()}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #2a2420;">
            <h2 style="color: #ff8835; margin-bottom: 24px;">Nieuw bericht via skinandvision.nl</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600; width: 140px;">Naam</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${naam.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600;">E-mail</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${email.trim()}</td>
              </tr>
              ${telefoon?.trim() ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600;">Telefoon</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${telefoon.trim()}</td>
              </tr>` : ""}
              ${behandeling?.trim() ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-weight: 600;">Behandeling</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4;">${behandeling.trim()}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; font-weight: 600; vertical-align: top;">Bericht</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${bericht.trim()}</td>
              </tr>
            </table>
            <p style="margin-top: 32px; font-size: 12px; color: #b0a090;">
              Beantwoord dit bericht door direct te reageren op dit e-mailadres — de reply-to is ingesteld op ${email.trim()}.
            </p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Resend contact notification error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
