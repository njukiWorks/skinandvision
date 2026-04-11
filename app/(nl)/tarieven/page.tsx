import { buildMetadata } from "@/lib/metadata";
import { tarieven } from "@/content/tarieven";
import PriceCard from "@/components/ui/PriceCard";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "Tarieven | Skin & Vision Clinic",
  description:
    "Transparante tarieven voor ooglidcorrectie, botoxbehandelingen en andere oculoplastische ingrepen bij Skin & Vision Clinic Amsterdam.",
  path: "/tarieven",
});

export default function TarievenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/botox-rates-img.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/85 via-[#2a2420]/60 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <SectionLabel className="mb-5 text-[#ff8835]">Transparante tarieven</SectionLabel>
          <h1
            className="text-white font-display font-light max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Tarieven
          </h1>
          <p className="text-white/65 text-sm mt-4 max-w-md leading-relaxed">
            Alle vermelde tarieven zijn richtprijzen. De definitieve kosten worden besproken tijdens uw persoonlijke consultatie.
          </p>
        </div>
      </section>

      {/* Price cards */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {tarieven.map((category, i) => (
              <ScrollReveal key={category.id} delay={i * 0.1}>
                <PriceCard category={category} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 bg-[#fff0e6] rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3
                  className="text-[#2a2420] font-display text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Vergoeding via zorgverzekering
                </h3>
                <p className="text-[#b0a090] text-sm leading-relaxed">
                  Sommige behandelingen — zoals ptosiscorrectie bij medische indicatie — kunnen
                  (gedeeltelijk) vergoed worden door uw zorgverzekeraar. Vraag ernaar tijdens
                  uw consultatie.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline="Persoonlijk advies over uw behandeling"
        subtext="Elk behandelplan is uniek. Maak een afspraak en ontvang een transparante offerte op maat."
      />
    </>
  );
}
