const BASE = "https://skinandvision.nl";
const LOGO = `${BASE}/logo/main-logo.png`;

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Skin & Vision Clinic",
  url: BASE,
  inLanguage: "nl-NL",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE}/behandelingen?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${BASE}/#medicalBusiness`,
  name: "Skin & Vision Clinic",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: LOGO,
    width: 400,
    height: 120,
  },
  image: `${BASE}/images/hero-bg.jpg`,
  description:
    "BIG-geregistreerde oogartsen gespecialiseerd in ooglidcorrectie en botoxbehandelingen in Amsterdam. 28+ jaar ervaring, 5000+ patiënten behandeld.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pietersbergweg 291",
    addressLocality: "Amsterdam",
    postalCode: "1105 BM",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3132,
    longitude: 4.9644,
  },
  telephone: "+31646096641",
  email: "info@skinandvision.nl",
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  medicalSpecialty: ["Ophthalmology", "OculoplasticSurgery"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.9",
    bestRating: "10",
    worstRating: "1",
    reviewCount: "5000",
    ratingCount: "5000",
  },
  sameAs: [
    "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894",
  ],
  hasMap: "https://maps.google.com/?q=Pietersbergweg+291+Amsterdam",
  founder: {
    "@type": "Physician",
    "@id": `${BASE}/#drkloos`,
    name: "Dr. R.J.H.M. Kloos",
    jobTitle: "BIG-geregistreerd Oogarts",
    medicalSpecialty: ["Ophthalmology", "OculoplasticSurgery"],
    image: `${BASE}/images/dr.RoelJHMKloos.jpg`,
    sameAs: [
      "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894",
    ],
    worksFor: { "@id": `${BASE}/#medicalBusiness` },
  },
};

export const drKloosSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${BASE}/#drkloos`,
  name: "Dr. R.J.H.M. Kloos",
  jobTitle: "BIG-geregistreerd Oogarts",
  description:
    "Dr. Kloos is BIG-geregistreerd oogarts met oculoplastische specialisatie. Actief als oogarts sinds 1996 met meer dan 28 jaar ervaring.",
  image: `${BASE}/images/dr.RoelJHMKloos.jpg`,
  medicalSpecialty: ["Ophthalmology", "OculoplasticSurgery"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "BIG-registratie",
    recognizedBy: {
      "@type": "Organization",
      name: "BIG-register Nederland",
      url: "https://www.bigregister.nl",
    },
  },
  worksFor: { "@id": `${BASE}/#medicalBusiness` },
  sameAs: [
    "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894",
  ],
};

export function buildProcedureSchema(name: string, description: string, slug?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: slug ? `${BASE}/behandelingen/${slug}` : `${BASE}/behandelingen`,
    procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
    bodyLocation: "Eyelid",
    status: "https://health-lifesci.schema.org/ActiveActionStatus",
    performer: {
      "@id": `${BASE}/#medicalBusiness`,
    },
    recognizingAuthority: {
      "@type": "Organization",
      name: "BIG-register Nederland",
      url: "https://www.bigregister.nl",
    },
  };
}

export function buildBlogSchema(post: {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: post.url,
    image: post.image
      ? {
          "@type": "ImageObject",
          url: post.image.startsWith("http") ? post.image : `${BASE}${post.image}`,
          width: 1200,
          height: 630,
        }
      : undefined,
    inLanguage: "nl-NL",
    author: {
      "@id": `${BASE}/#drkloos`,
    },
    publisher: {
      "@id": `${BASE}/#medicalBusiness`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(
  questions: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
