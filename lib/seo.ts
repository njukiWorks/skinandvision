export const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Skin & Vision Clinic",
  url: "https://skinandvision.nl",
  logo: "https://skinandvision.nl/logo/main-logo.png",
  description:
    "BIG-geregistreerde oogartsen gespecialiseerd in ooglidcorrectie en botoxbehandelingen in Amsterdam.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pietersbergweg 291",
    addressLocality: "Amsterdam",
    postalCode: "1105 BM",
    addressCountry: "NL",
  },
  telephone: "+31646096641",
  email: "info@skinandvision.nl",
  medicalSpecialty: ["Ophthalmology", "OculoplasticSurgery"],
  sameAs: [
    "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894",
  ],
};

export function buildProcedureSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    procedureType:
      "https://health-lifesci.schema.org/SurgicalProcedure",
    bodyLocation: "Eyelid",
    performer: {
      "@type": "Physician",
      name: "Skin & Vision Clinic",
      medicalSpecialty: "Ophthalmology",
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
    url: post.url,
    image: post.image,
    publisher: {
      "@type": "Organization",
      name: "Skin & Vision Clinic",
      logo: "https://skinandvision.nl/logo/main-logo.png",
    },
  };
}
