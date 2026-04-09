import type { Metadata } from "next";

const BASE_URL = "https://skinandvision.nl";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-default.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: {
        "nl-NL": `${BASE_URL}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "Skin & Vision Clinic",
      locale: "nl_NL",
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}
