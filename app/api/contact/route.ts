import { NextRequest, NextResponse } from "next/server";

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
        return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
      }
    } catch (err) {
      console.error("Convex contact fetch error:", err);
      return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
