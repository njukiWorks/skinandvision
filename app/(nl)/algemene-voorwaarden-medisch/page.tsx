import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = buildMetadata({
  title: "Geneeskundige Behandelingsovereenkomst | Skin & Vision Clinic Amsterdam",
  description:
    "Algemene voorwaarden voor medische behandelingen bij Skin & Vision Clinics B.V. — de geneeskundige behandelingsovereenkomst.",
  path: "/algemene-voorwaarden-medisch",
});

export default function AlgemeneVoorwaardenMedischPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2a2420] h-[280px] flex items-end pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <SectionLabel className="mb-4 text-[#ff8835]">Juridisch</SectionLabel>
          <h1
            className="text-white font-display font-light"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
          >
            Geneeskundige Behandelingsovereenkomst
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-sm text-[#2a2420]" style={{ fontFamily: "var(--font-body)" }}>

              {/* Parties */}
              <div className="mb-10 space-y-5 text-[#b0a090] leading-relaxed">
                <h2
                  className="text-[#2a2420] font-display font-light"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  De ondergetekenden:
                </h2>
                <p>
                  De stichting Skin &amp; Vision Clinics (hierna: Skin &amp; Vision Clinics), gevestigd te
                  Amsterdam, rechtsgeldig vertegenwoordigd en mede handelend namens de aan
                  haar kliniek verbonden medisch specialisten die blijkens het patiëntendossier bij de
                  behandeling van de patiënt betrokken zijn, verder gezamenlijk te noemen: &ldquo;de kliniek
                  c.s.&rdquo; en individueel: &ldquo;de kliniek&rdquo; en &ldquo;de specialist&rdquo;;
                </p>

                <h2
                  className="text-[#2a2420] font-display font-light"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  en
                </h2>
                <p>
                  De natuurlijke persoon bekend onder de naam vermeld op de e-mail waarmee deze
                  overeenkomst is toegestuurd en wonende op het in het patiëntendossier vermelde
                  adres, hierna te noemen: &ldquo;de patiënt&rdquo;;
                </p>

                <h2
                  className="text-[#2a2420] font-display font-light"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  In aanmerking nemende:
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    dat de patiënt aan de specialist en aan de kliniek opdracht geeft tot een
                    medische behandeling, gericht op het verminderen of verhelpen van
                    functionele klachten aan het gezicht of de oogleden, zoals vastgesteld in de
                    verwijsbrief die aan de kliniek is verstrekt;
                  </li>
                  <li>
                    dat partijen het gewenst achten de wederzijdse rechten en verplichtingen vast
                    te leggen in deze geneeskundige behandelingsovereenkomst.
                  </li>
                </ul>

                <div className="border-b border-[#e8e0d4] pt-2 pb-6">
                  <h2
                    className="text-[#2a2420] font-display font-light"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                  >
                    Zijn overeengekomen als volgt:
                  </h2>
                </div>
              </div>

              {/* Articles */}
              <LegalSection number="1" title="Zorgplicht van de behandelaar en de kliniek">
                <p>
                  De specialist en de kliniek nemen bij de uitvoering van deze overeenkomst de zorg
                  van een goed hulpverlener in acht en handelen volgens de op hen rustende
                  verantwoordelijkheid.
                </p>
                <p>
                  Indien noodzakelijk kan de specialist of kliniek aanvullende diagnostiek of
                  beoordeling laten verrichten door een deskundig arts buiten de kliniek, mits dit in het
                  belang is van zorgvuldige besluitvorming.
                </p>
              </LegalSection>

              <LegalSection number="2" title="Bekendheid en instemming met de behandelovereenkomst en algemene voorwaarden">
                <p>De patiënt ontvangt deze behandelovereenkomst en algemene voorwaarden voorafgaand aan de afspraak.</p>
                <p className="font-semibold text-[#2a2420]">
                  De patiënt wordt uitdrukkelijk gevraagd om vóór de behandeling akkoord te
                  gaan, bijvoorbeeld door het zetten van een handtekening of het aanvinken van
                  akkoord in het digitale dossier.
                </p>
                <p>
                  De patiënt heeft gelegenheid gehad om vragen te stellen en verklaart door akkoord
                  te gaan voldoende te zijn geïnformeerd.
                </p>
              </LegalSection>

              <LegalSection number="3" title="Inlichtingen- en medewerkingsplicht van de patiënt">
                <p>
                  De patiënt verstrekt alle informatie die redelijkerwijs nodig is voor een goede
                  behandeling en werkt zoveel mogelijk mee door adviezen en voorschriften op te
                  volgen.
                </p>
              </LegalSection>

              <LegalSection number="4" title="Informatieplicht van de specialist en de kliniek">
                <p>De kliniek en/of specialist informeert de patiënt op begrijpelijke wijze, en desgevraagd schriftelijk, over:</p>
                <ul>
                  <li>het noodzakelijke onderzoek en/of behandeling,</li>
                  <li>de uit te voeren verrichtingen,</li>
                  <li>de te verwachten gevolgen en risico&apos;s,</li>
                  <li>alternatieve behandelmethoden,</li>
                  <li>het beoogde resultaat.</li>
                </ul>
                <p>
                  Indien het verstrekken van informatie ernstig nadeel voor de patiënt zou opleveren,
                  of als de patiënt expliciet geen informatie wenst, kan hiervan worden afgezien.
                </p>
              </LegalSection>

              <LegalSection number="5" title="Geheimhouding">
                <p>
                  De kliniek en specialist verstrekken zonder toestemming van de patiënt geen
                  informatie of inzage aan derden, tenzij wettelijk verplicht. Medische verrichtingen
                  vinden buiten waarneming van anderen plaats, tenzij de patiënt hier nadrukkelijk mee
                  instemt.
                </p>
              </LegalSection>

              <LegalSection number="6" title="Toestemming van/namens de patiënt">
                <p>
                  De patiënt geeft op basis van de verstrekte informatie toestemming voor de
                  besproken behandeling, zoals vastgelegd in het dossier.
                </p>
                <p>
                  Deze toestemming omvat het inschakelen van andere deskundigen indien
                  noodzakelijk, ongeacht het specialisme.
                </p>
                <p>Toestemming kan altijd worden ingetrokken.</p>
                <p>
                  Indien tijdens de behandeling een ingrijpender ingreep nodig blijkt, wordt hiervoor
                  altijd eerst aanvullende toestemming gevraagd, tenzij de patiënt vooraf een
                  gemachtigde heeft aangewezen.
                </p>
                <p>Op verzoek wordt schriftelijk vastgelegd voor welke ingrepen toestemming is verleend.</p>
                <p className="font-semibold text-[#2a2420]">
                  Bij spoed of onvoorziene situaties kan – indien redelijkerwijs niet anders
                  mogelijk – worden afgeweken van deze toestemmingsprocedure, conform
                  wettelijke bepalingen.
                </p>
              </LegalSection>

              <LegalSection number="7" title="Medisch dossier">
                <p>
                  De kliniek houdt een medisch dossier bij met gegevens over de gezondheid,
                  verrichtingen en relevante documenten.
                </p>
                <p>Op verzoek voegt de kliniek een schriftelijke verklaring van de patiënt toe.</p>
                <p>Het dossier wordt minimaal vijftien jaar bewaard, zoals wettelijk voorgeschreven.</p>
                <p>
                  De patiënt heeft recht op inzage en afschrift, met uitzondering van persoonlijke
                  werkaantekeningen en voor zover de privacy van anderen niet wordt geschaad.
                </p>
                <p>
                  Op verzoek worden gegevens binnen drie maanden vernietigd, tenzij de wet zich
                  hiertegen verzet of gegevens van belang zijn voor derden.
                </p>
                <p>
                  Persoonsgegevens worden verwerkt conform de geldende wetgeving, waaronder de
                  AVG. Deze gegevens worden uitsluitend gebruikt voor de uitvoering van de
                  behandeling en niet gedeeld met derden zonder toestemming, tenzij wettelijk
                  verplicht.
                </p>
              </LegalSection>

              <LegalSection number="8" title="Aansprakelijkheid">
                <p>
                  De kliniek en/of specialist zijn aansprakelijk voor schade als gevolg van
                  tekortkomingen bij alle handelingen die onder deze overeenkomst binnen de kliniek
                  plaatsvinden.
                </p>
                <p>
                  Er is <strong>geen beperking of uitsluiting</strong> van aansprakelijkheid.
                </p>
              </LegalSection>

              <LegalSection number="9" title="Betaling">
                <p>
                  De patiënt is verantwoordelijk voor betaling van de nota&apos;s voor de behandeling.
                  Facturen worden in opdracht van de kliniek c.s. verzonden en geïncasseerd door
                  Infomedics, volgens hun geldende voorwaarden.
                </p>
                <p className="font-semibold text-[#2a2420]">
                  De patiënt ontvangt deze voorwaarden voorafgaand aan de behandeling, en
                  deze zijn te vinden op{" "}
                  <a
                    href="https://www.infomedics.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff8835] hover:underline"
                  >
                    www.infomedics.nl
                  </a>.
                </p>
              </LegalSection>

              <LegalSection number="10" title="Opzegging">
                <p>
                  De patiënt kan de behandelingsovereenkomst op elk moment beëindigen.
                  De specialist of de kliniek kan de behandelingsovereenkomst alleen opzeggen bij{" "}
                  <strong>gewichtige redenen</strong>, bijvoorbeeld bij een ernstig verstoorde
                  behandelrelatie, bedreiging van medewerkers, of als de behandeling medisch
                  onverantwoord is geworden.
                </p>
                <p>
                  Van de totstandkoming van deze overeenkomst wordt een aantekening gemaakt in
                  het patiëntendossier. Dit blijkt uit het verslag van het eerste overleg.
                </p>
                <p className="italic text-[#b0a090] mt-4">
                  Versie 1.0, vastgesteld op 21 juli 2025
                </p>
              </LegalSection>

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
      <div className="pl-10 text-[#b0a090] text-sm leading-relaxed space-y-3 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-[#ff8835] [&_a:hover]:underline [&_strong]:text-[#2a2420]">
        {children}
      </div>
      <div className="mt-8 w-full h-px bg-[#e8e0d4]" />
    </div>
  );
}
