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

  const { email } = body;

  if (!email?.trim()) {
    return NextResponse.json({ error: "E-mailadres verplicht" }, { status: 400 });
  }

  // Save to Convex
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  let alreadySubscribed = false;

  if (convexUrl) {
    try {
      const res = await fetch(`${convexUrl}/api/mutation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: "newsletter:subscribe",
          args: { email: email.trim() },
          format: "json",
        }),
      });
      if (!res.ok) {
        console.error("Convex newsletter error:", await res.text());
        return NextResponse.json({ error: "Aanmelden mislukt" }, { status: 500 });
      }
      const data = await res.json();
      if (data?.value?.status === "already_subscribed") {
        alreadySubscribed = true;
      }
    } catch (err) {
      console.error("Convex newsletter fetch error:", err);
      return NextResponse.json({ error: "Aanmelden mislukt" }, { status: 500 });
    }
  }

  // Send welcome email to new subscribers only
  if (process.env.RESEND_API_KEY && !alreadySubscribed) {
    try {
      await resend.emails.send({
        from: "Skin & Vision Clinic <noreply@skinandvision.nl>",
        to: email.trim(),
        subject: "Welkom bij Skin & Vision Clinic",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #2a2420; margin: 0 auto;">
            <div style="background: #2a2420; padding: 32px; text-align: center;">
              <h1 style="color: #ff8835; font-size: 24px; margin: 0; font-weight: 300; letter-spacing: 0.05em;">
                Skin &amp; Vision Clinic
              </h1>
              <p style="color: #b0a090; font-size: 12px; margin: 8px 0 0; text-transform: uppercase; letter-spacing: 0.15em;">
                Medische &amp; Cosmetische Ooglidchirurgie · Amsterdam
              </p>
            </div>
            <div style="padding: 40px 32px; background: #faf8f5;">
              <h2 style="color: #2a2420; font-size: 20px; font-weight: 400; margin-bottom: 16px;">
                Bedankt voor uw aanmelding
              </h2>
              <p style="color: #5a4f48; line-height: 1.7; margin-bottom: 16px;">
                U bent nu aangemeld voor de nieuwsbrief van Skin &amp; Vision Clinic. U ontvangt als eerste
                nieuws over behandelingen, tips en aanbiedingen van onze kliniek.
              </p>
              <p style="color: #5a4f48; line-height: 1.7; margin-bottom: 32px;">
                Wilt u een afspraak maken? Dat kan snel en eenvoudig via onze online agenda.
              </p>
              <a href="https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo"
                style="display: inline-block; background: #ff8835; color: white; text-decoration: none;
                       padding: 14px 32px; border-radius: 999px; font-size: 14px; font-weight: 600;">
                Maak een afspraak
              </a>
            </div>
            <div style="padding: 24px 32px; background: #f2ede6; text-align: center; font-size: 11px; color: #b0a090; line-height: 1.6;">
              <p style="margin: 0;">Skin &amp; Vision Clinic · Pietersbergweg 291, 1105 BM Amsterdam</p>
              <p style="margin: 4px 0 0;">
                <a href="https://skinandvision.nl" style="color: #ff8835; text-decoration: none;">skinandvision.nl</a>
                &nbsp;·&nbsp;
                <a href="mailto:info@skinandvision.nl" style="color: #ff8835; text-decoration: none;">info@skinandvision.nl</a>
              </p>
            </div>
          </div>
        `,
      });
    } catch (err) {
      console.error("Resend welcome email error:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
