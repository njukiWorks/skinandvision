import { NextRequest, NextResponse } from "next/server";

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

  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
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
    } catch (err) {
      console.error("Convex newsletter fetch error:", err);
      return NextResponse.json({ error: "Aanmelden mislukt" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
