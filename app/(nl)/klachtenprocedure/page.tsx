import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = buildMetadata({
  title: "Klachtenprocedure | Skin & Vision Clinic Amsterdam",
  description:
    "Niet tevreden? Lees hoe u een klacht kunt indienen bij Skin & Vision Clinics en hoe wij deze vertrouwelijk behandelen.",
  path: "/klachtenprocedure",
});

export default function KlachtenprocedurePage() {
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
            Klachtenprocedure
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="prose prose-sm max-w-none text-[#2a2420]" style={{ fontFamily: "var(--font-body)" }}>

              <p className="text-[#b0a090] leading-relaxed mb-10">
                Bij Skin &amp; Vision Clinics doen wij er alles aan om u professioneel en zorgvuldig
                te behandelen. Bent u toch niet tevreden over onze zorg of dienstverlening, dan
                horen wij dat graag. Hieronder vindt u onze klachtenprocedure.
              </p>

              <LegalSection number="1" title="Klacht indienen">
                <p>
                  U kunt uw klacht schriftelijk indienen via{" "}
                  <a href="mailto:info@skinandvision.nl" className="text-[#ff8835] hover:underline">
                    info@skinandvision.nl
                  </a>.
                </p>
                <p>Vermeld daarbij in ieder geval:</p>
                <ul>
                  <li>uw volledige naam en contactgegevens;</li>
                  <li>de datum van de behandeling;</li>
                  <li>een duidelijke omschrijving van uw klacht.</li>
                </ul>
                <p>Uw klacht wordt vertrouwelijk behandeld.</p>
              </LegalSection>

              <LegalSection number="2" title="Behandeling van uw klacht">
                <p>
                  Na ontvangst van uw klacht sturen wij u binnen enkele werkdagen een
                  ontvangstbevestiging. Vervolgens wordt uw klacht intern beoordeeld. U ontvangt
                  binnen vier weken na ontvangst van uw klacht een inhoudelijke reactie.
                </p>
              </LegalSection>

              <LegalSection number="3" title="Onafhankelijke bemiddeling via DOKh">
                <p>
                  Bent u niet tevreden over de afhandeling van uw klacht, dan kan uw klacht &ndash;
                  met uw toestemming &ndash; worden doorgestuurd naar DOKh voor onafhankelijke
                  bemiddeling. U kunt ook zelf rechtstreeks contact opnemen via{" "}
                  <a href="mailto:klachten@dokh.nl" className="text-[#ff8835] hover:underline">
                    klachten@dokh.nl
                  </a>{" "}
                  of{" "}
                  <a
                    href="https://www.dokh.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff8835] hover:underline"
                  >
                    www.dokh.nl
                  </a>.
                </p>
              </LegalSection>

              <LegalSection number="4" title="Klachtenfunctionaris en geschillencommissie">
                <p>
                  DOKh kan een onafhankelijke klachtenfunctionaris inschakelen om u kosteloos te
                  begeleiden. Indien nodig kan uw klacht worden voorgelegd aan de erkende
                  geschillencommissie. De uitspraak hiervan is bindend voor beide partijen.
                </p>
                <p className="italic text-[#b0a090] text-sm mt-3">
                  Deze klachtenprocedure voldoet aan de eisen van de Wkkgz.
                </p>
              </LegalSection>

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

function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-7 h-7 rounded-full bg-[#fff0e6] text-[#ff8835] text-xs font-bold font-sans flex items-center justify-center shrink-0">
          {number}
        </span>
        <h2
          className="text-[#2a2420] font-display font-light"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
        >
          {title}
        </h2>
      </div>
      <div className="pl-10 text-[#b0a090] text-sm leading-relaxed space-y-3 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-[#ff8835] [&_a:hover]:underline">
        {children}
      </div>
      <div className="mt-8 w-full h-px bg-[#e8e0d4]" />
    </div>
  );
}