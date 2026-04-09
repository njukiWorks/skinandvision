import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { behandelingen } from "@/content/behandelingen";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";

export const metadata = buildMetadata({
  title: "Behandelingen | Ooglidcorrectie & Botoxbehandelingen",
  description:
    "Overzicht van alle behandelingen bij Skin & Vision Clinic: ooglidcorrectie, botoxbehandelingen, ptosis correctie en meer. Uitgevoerd door BIG-geregistreerde oogartsen.",
  path: "/behandelingen",
});

export default function BehandelingenPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[434px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/skin-and-vision.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/85 via-[#2a2420]/60 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <SectionLabel className="mb-5 text-[#ff8835]">Onze behandelingen</SectionLabel>
          <h1
            className="text-white font-display font-light max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Behandelingen op maat
          </h1>
          <p className="text-white/65 text-sm mt-4 max-w-md leading-relaxed">
            Specialistische oculoplastische zorg door een BIG-geregistreerde oogarts in Amsterdam.
          </p>
        </div>
      </section>

      {/* Treatment grid */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {behandelingen.map((t, i) => (
              <ScrollReveal key={t.slug} delay={i * 0.1}>
                <Link
                  href={`/behandelingen/${t.slug}`}
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
                      Meer lezen →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
