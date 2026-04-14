import { NextRequest, NextResponse } from "next/server";

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

  return NextResponse.json({ ok: true });
}
