import type { Metadata } from "next";

const BASE_URL = "https://skinandvision.nl";

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/og-default.jpg",
  keywords = [],
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const defaultKeywords = [
    "ooglidcorrectie Amsterdam",
    "blepharoplastiek",
    "botoxbehandelingen oogarts",
    "BIG-geregistreerde oogarts",
    "oculoplastische chirurgie",
    "Skin & Vision Clinic",
    "Dr. Kloos oogarts",
    "ptosis correctie",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: {
        "nl-NL": `${BASE_URL}${path}`,
        "en-US": `${BASE_URL}/en${path}`,
        "x-default": `${BASE_URL}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "Skin & Vision Clinic",
      locale: "nl_NL",
      type,
      images: [
        {
          url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${BASE_URL}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
