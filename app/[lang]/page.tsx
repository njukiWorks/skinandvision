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

export const metadata = buildMetadata({
  title: "Skin & Vision Clinic | Ooglidcorrectie & Botoxbehandelingen Amsterdam",
  description:
    "BIG-geregistreerde oogartsen gespecialiseerd in ooglidcorrectie en botoxbehandelingen in Amsterdam. Meer dan 28 jaar ervaring, 9.9/10 op ZorgkaartNederland.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <AboutTeaser />
      <TestimonialsSection />
      <BlogPreview />
      <CTABanner />
      <NewsletterSignup />
    </>
  );
}
