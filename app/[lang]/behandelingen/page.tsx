import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "Treatments | Eyelid Correction & Botox Treatments",
    description:
      "Overview of all treatments at Skin & Vision Clinic: eyelid correction, botox treatments, ptosis correction and more. Performed by BIG-registered ophthalmologists.",
    path: "/en/behandelingen",
  });
}

const treatmentsEn = [
  {
    slug: "ooglidcorrectie",
    title: "Eyelid Correction",
    shortDescription:
      "Upper eyelid correction (Blepharoplasty) for both medical and cosmetic indications, performed by BIG-registered ophthalmologists.",
    image: "/images/upper-eyelid-correction.jpg",
    highlights: ["BIG-registered ophthalmologist", "Local anaesthesia", "Medical & cosmetic", "Recovery in 4–6 weeks"],
  },
  {
    slug: "botoxbehandelingen",
    title: "Botox Treatments",
    shortDescription:
      "Precision botox treatments around the eyes by a BIG-registered ophthalmologist with unique anatomical expertise.",
    image: "/images/botox-image-1.jpg",
    highlights: ["BIG-registered ophthalmologist", "Deep anatomical expertise", "CE/FDA-certified", "Follow-up after 2 weeks"],
  },
  {
    slug: "ptosis-correctie",
    title: "Ptosis Correction",
    shortDescription:
      "Surgical correction of drooping upper eyelid (ptosis) to restore visual field and natural appearance.",
    image: "/images/ptosis-surgery.jpg",
    highlights: ["Medical & cosmetic indications", "May be covered by insurance", "Local anaesthesia", "BIG-registered ophthalmologist"],
  },
  {
    slug: "andere-behandelingen",
    title: "Other Treatments",
    shortDescription:
      "Oculoplastic procedures such as entropion and ectropion correction by specialist ophthalmologists.",
    image: "/images/cosmetic-treatment.jpg",
    highlights: ["Entropion & ectropion correction", "Medical indications", "BIG-registered ophthalmologist", "Personal treatment plan"],
  },
];

export default async function TreatmentsPageEn({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/skin-and-vision.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/85 via-[#2a2420]/60 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <SectionLabel className="mb-5 text-[#ff8835]">Our treatments</SectionLabel>
          <h1
            className="text-white font-display font-light max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Tailored treatments
          </h1>
          <p className="text-white/65 text-sm mt-4 max-w-md leading-relaxed">
            Specialist oculoplastic care by a BIG-registered ophthalmologist in Amsterdam.
          </p>
        </div>
      </section>

      {/* Treatment grid */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {treatmentsEn.map((t, i) => (
              <ScrollReveal key={t.slug} delay={i * 0.1}>
                <Link
                  href={`/en/behandelingen/${t.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-350"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c]/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-8">
                    <h2
                      className="text-[#2a2420] text-2xl font-display mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t.title}
                    </h2>
                    <p className="text-[#b0a090] text-sm leading-relaxed mb-5">{t.shortDescription}</p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {t.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[#fff0e6] text-[#ff8835] rounded-full px-3 py-1 font-sans">
                          {h}
                        </span>
                      ))}
                    </div>
                    <span className="text-[#ff8835] text-sm font-sans font-medium group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Book your consultation"
        subtext="Schedule a personal consultation with Dr. Kloos to discuss your wishes and options."
      />
    </>
  );
}
