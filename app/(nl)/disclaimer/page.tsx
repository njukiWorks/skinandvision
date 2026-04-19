import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = buildMetadata({
  title: "Disclaimer | Skin & Vision Clinic Amsterdam",
  description:
    "Lees de disclaimer van Skin & Vision Clinics over het gebruik van onze website en de informatie die wij verstrekken.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2a2420] h-[280px] flex items-end pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <SectionLabel className="mb-4 text-[#ff8835]">Juridisch</SectionLabel>
          <h1
            className="text-white font-display font-light"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Disclaimer
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="prose prose-sm max-w-none text-[#2a2420]" style={{ fontFamily: "var(--font-body)" }}>

              <p className="text-[#b0a090] leading-relaxed mb-10">
                Skin &amp; Vision Clinics B.V. &mdash; versie juli 2025
              </p>

              <div className="mb-10">
                <ul className="space-y-5 list-none pl-0">
                  <li className="flex gap-4 text-sm text-[#b0a090] leading-relaxed">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff8835] mt-2" />
                    <span>
                      De inhoud met de bijbehorende (technische) functionaliteiten van deze website
                      is met de grootst mogelijke zorg en aandacht samengesteld. De medisch
                      inhoudelijke teksten worden intern getoetst door medische professionals.
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm text-[#b0a090] leading-relaxed">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff8835] mt-2" />
                    <span>
                      Op deze site treft u een indicatie van de wachttijd. Aan de wachttijden kunt u
                      derhalve geen rechten ontlenen. Uw behandelend arts kan u een persoonlijke
                      indicatie geven van de wachttijd, afgestemd op uw situatie.
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm text-[#b0a090] leading-relaxed">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff8835] mt-2" />
                    <span>
                      Deze site geeft geen medisch advies. Wanneer u gezondheidsklachten heeft
                      raden wij u te allen tijde aan contact op te nemen met uw huisarts (of
                      eventueel uw specialist).
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm text-[#b0a090] leading-relaxed">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff8835] mt-2" />
                    <span>
                      Aan de inhoud van deze website kunnen op geen enkele wijze rechten worden
                      ontleend of aanspraken worden gemaakt.
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm text-[#b0a090] leading-relaxed">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#ff8835] mt-2" />
                    <span>
                      Alle informatie op deze website is onder voorbehoud van druk-, zet-, prijs-, en
                      programmeerfouten.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 w-full h-px bg-[#e8e0d4]" />

              <div className="mt-10 text-sm text-[#b0a090] space-y-1">
                <p className="font-medium text-[#2a2420]">Skin &amp; Vision Clinics B.V.</p>
                <p>Pietersbergweg 291, 1105 BM Amsterdam</p>
                <p>
                  E:{" "}
                  <a href="mailto:info@skinandvision.nl" className="text-[#ff8835] hover:underline">
                    info@skinandvision.nl
                  </a>
                </p>
                <p>
                  W:{" "}
                  <a href="https://www.skinandvision.nl" target="_blank" rel="noopener noreferrer" className="text-[#ff8835] hover:underline">
                    skinandvision.nl
                  </a>
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}