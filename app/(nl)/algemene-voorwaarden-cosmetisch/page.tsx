import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = buildMetadata({
  title: "Behandelovereenkomst Cosmetische Zorg | Skin & Vision Clinic Amsterdam",
  description:
    "Algemene voorwaarden voor cosmetische behandelingen bij Skin & Vision Clinics B.V. — de behandelovereenkomst cosmetische zorg.",
  path: "/algemene-voorwaarden-cosmetisch",
});

export default function AlgemeneVoorwaardenCosmetischPage() {
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
            Behandelovereenkomst Cosmetische Zorg
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
                  De besloten vennootschap Skin &amp; Vision Clinics B.V. (hierna te noemen: Skin &amp; Vision
                  Clinics), gevestigd te Amsterdam, rechtsgeldig vertegenwoordigd en mede handelend
                  namens de aan haar kliniek verbonden specialisten die blijkens het cliëntendossier bij
                  de behandeling van de cliënt betrokken zijn, verder gezamenlijk te noemen: &ldquo;de kliniek
                  c.s.&rdquo; en individueel: &ldquo;de kliniek&rdquo; en &ldquo;de behandelaar&rdquo;;
                </p>

                <h2
                  className="text-[#2a2420] font-display font-light"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  en
                </h2>
                <p>
                  De natuurlijke persoon bekend onder de naam vermeld op de e-mail waarmee deze
                  overeenkomst is toegestuurd en wonende op het in het cliëntendossier vermelde adres,
                  hierna te noemen: &ldquo;de cliënt&rdquo;;
                </p>

                <h2
                  className="text-[#2a2420] font-display font-light"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  in aanmerking nemende:
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    dat de cliënt op eigen verzoek een cosmetische behandeling ondergaat die
                    gericht is op verbetering van het uiterlijk, zonder medische indicatie;
                  </li>
                  <li>
                    dat partijen het wenselijk achten de wederzijdse rechten en verplichtingen vast te
                    leggen;
                  </li>
                </ul>

                <div className="border-b border-[#e8e0d4] pt-2 pb-6">
                  <h2
                    className="text-[#2a2420] font-display font-light"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                  >
                    zijn overeengekomen als volgt:
                  </h2>
                </div>
              </div>

              {/* Articles */}
              <LegalSection number="1" title="Zorgplicht van de behandelaar en de kliniek">
                <p>
                  De behandelaar verricht de cosmetische behandeling zorgvuldig en in overeenstemming
                  met de professionele standaard binnen de esthetische sector.
                </p>
              </LegalSection>

              <LegalSection number="2" title="Bekendheid met behandelovereenkomst en algemene voorwaarden">
                <p>
                  De cliënt wordt geacht met deze cosmetische behandelingsovereenkomst tevens
                  algemene voorwaarden te hebben ingestemd zodra hij/zij verschijnt voor de afspraak
                  bij de kliniek.
                </p>
                <p>
                  Deze overeenkomst is voorafgaand aan de afspraak gedeeld met de cliënt en de cliënt
                  is derhalve bekend met dit document en heeft gelegenheid gehad om vragen te stellen.
                  Door aan de afspraak gevolg te geven, verklaart de cliënt voldoende te zijn ingelicht.
                </p>
              </LegalSection>

              <LegalSection number="3" title="Inlichtingen- en medewerkingsplicht van de cliënt">
                <p>
                  De cliënt geeft aan de behandelaar en de kliniek naar beste weten alle inlichtingen die
                  redelijkerwijs nodig zijn voor een goede uitvoering van de behandeling.
                </p>
                <p>
                  De cliënt verleent zoveel mogelijk medewerking aan het onderzoek en de behandeling
                  door adviezen en voorschriften van de kliniek c.s. op te volgen.
                </p>
              </LegalSection>

              <LegalSection number="4" title="Informatieplicht van de behandelaar en de kliniek">
                <p>
                  De kliniek en/of behandelaar informeert de cliënt op duidelijke wijze, en desgevraagd
                  schriftelijk, over:
                </p>
                <ul>
                  <li>het noodzakelijke onderzoek en/of behandeling,</li>
                  <li>de uit te voeren verrichtingen,</li>
                  <li>de te verwachten gevolgen en risico&apos;s,</li>
                  <li>alternatieve behandelmethoden,</li>
                  <li>de beoogde esthetische resultaten.</li>
                </ul>
                <p>
                  De cliënt is zich ervan bewust dat het hier een niet-medisch noodzakelijke behandeling
                  betreft, waarvan het resultaat mede afhankelijk is van persoonlijke factoren. Er wordt
                  geen garantie op het beoogde effect gegeven.
                </p>
              </LegalSection>

              <LegalSection number="5" title="Geheimhoudingsplicht">
                <p>
                  De kliniek en de behandelaar verstrekken aan anderen dan de cliënt geen informatie of
                  inzage in het dossier zonder toestemming van de cliënt, tenzij wettelijk verplicht.
                </p>
                <p>
                  Behandelingen vinden plaats buiten waarneming van derden, tenzij de cliënt daarvoor
                  uitdrukkelijk toestemming heeft gegeven.
                </p>
              </LegalSection>

              <LegalSection number="6" title="Toestemming van/namens de cliënt">
                <p>
                  Op basis van de verstrekte informatie geeft de cliënt toestemming voor de behandeling
                  zoals besproken en vastgelegd in het cliëntendossier.
                </p>
                <p>
                  Deze toestemming omvat ook het inschakelen van andere deskundigen indien dit
                  noodzakelijk wordt geacht in het kader van een zorgvuldige uitvoering van de
                  behandeling.
                </p>
                <p>
                  De cliënt erkent dat het hier geen medische zorg betreft, maar een cosmetische
                  behandeling op eigen verzoek. De toestemming kan te allen tijde worden ingetrokken.
                </p>
                <p>
                  Indien tijdens de behandeling een andere handeling noodzakelijk blijkt, dient hiervoor
                  aanvullende toestemming te worden gegeven, tenzij de cliënt bij voorbaat een
                  gemachtigde heeft aangewezen.
                </p>
                <p>Op verzoek wordt schriftelijk vastgelegd voor welke ingrepen toestemming is gegeven.</p>
              </LegalSection>

              <LegalSection number="7" title="Cliëntendossier">
                <p>
                  De kliniek houdt een dossier bij met gegevens over de gezondheid en uitgevoerde
                  verrichtingen van de cliënt.
                </p>
                <p>Op verzoek wordt een schriftelijke verklaring van de cliënt aan het dossier toegevoegd.</p>
                <p>
                  Het dossier wordt bewaard gedurende ten minste tien jaar, of langer indien redelijkerwijs
                  noodzakelijk.
                </p>
                <p>
                  De cliënt heeft recht op inzage en afschrift, met uitzondering van persoonlijke
                  werkaantekeningen en voor zover dat de privacy van anderen zou schaden.
                </p>
                <p>
                  Op verzoek worden gegevens binnen drie maanden vernietigd, tenzij een wettelijk
                  voorschrift zich hiertegen verzet of de gegevens redelijkerwijs van belang zijn voor
                  derden.
                </p>
              </LegalSection>

              <LegalSection number="8" title="Aansprakelijkheid">
                <p>
                  De kliniek spant zich in om de behandeling zorgvuldig uit te voeren met inachtneming
                  van professionele standaarden.
                </p>
                <p>
                  De kliniek is niet aansprakelijk voor tegenvallende esthetische resultaten, tenzij sprake
                  is van aantoonbare verwijtbare schade.
                </p>
                <p>
                  Aansprakelijkheid is in alle gevallen beperkt tot het bedrag dat door de
                  aansprakelijkheidsverzekering wordt uitgekeerd.
                </p>
              </LegalSection>

              <LegalSection number="9" title="Betaling">
                <p>
                  Voor cosmetische behandelingen geldt dat deze niet voor vergoeding in aanmerking
                  komen. De kosten zijn voor eigen rekening en dienen voorafgaand aan de behandeling te
                  worden voldaan.
                </p>
                <p>
                  De cliënt draagt zorg voor voldoening van de nota&apos;s voor de aan de behandeling
                  verbonden kosten. In opdracht van de kliniek c.s. kunnen facturen worden verzonden en
                  geïncasseerd door een derde partij.
                </p>
              </LegalSection>

              <LegalSection number="10" title="Annulering en opzegging">
                <p>De cliënt kan de behandelingsovereenkomst op elk moment beëindigen.</p>
                <p>
                  Bij annulering binnen 48 uur voor de afspraak kan 50% van de behandelkosten in
                  rekening worden gebracht, tenzij sprake is van overmacht.
                </p>
                <p>
                  De kliniek of behandelaar kan de overeenkomst slechts beëindigen bij zwaarwegende
                  redenen, waarbij zorg wordt gedragen voor passende overdracht of verwijzing.
                </p>
                <p>
                  Van de totstandkoming van deze overeenkomst is aantekening gemaakt in het
                  cliëntendossier. Die aantekening blijkt uit het verslag van het eerste consult.
                </p>
                <p className="italic text-[#b0a090] mt-4">
                  Skin &amp; Vision Clinics B.V. — versie 1, juli 2025
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
