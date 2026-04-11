import { buildMetadata } from "@/lib/metadata";
import { clinicSchema } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AboutTeaser from "@/components/sections/AboutTeaser";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang === "en") {
    return buildMetadata({
      title: "Skin & Vision Clinic | Eyelid Surgery & Botox Treatments Amsterdam",
      description:
        "BIG-registered ophthalmologists specialised in eyelid surgery and Botox treatments in Amsterdam. Over 28 years of medical expertise, rated 9.9/10 on ZorgkaartNederland.",
      path: "/en",
    });
  }
  return buildMetadata({
    title: "Skin & Vision Clinic | Ooglidcorrectie & Botoxbehandelingen Amsterdam",
    description:
      "BIG-geregistreerde oogartsen gespecialiseerd in ooglidcorrectie en botoxbehandelingen in Amsterdam. Meer dan 28 jaar ervaring, 9.9/10 op ZorgkaartNederland.",
    path: "/",
  });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <HeroSection lang={lang} />
      <StatsBar />
      <AboutTeaser />
      <ServicesGrid />
      <TestimonialsSection />
      <BlogPreview />
      <CTABanner />
      <NewsletterSignup />
    </>
  );
}
