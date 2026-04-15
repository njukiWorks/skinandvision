import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = buildMetadata({
  title: "Privacyverklaring | Skin & Vision Clinic Amsterdam",
  description:
    "Lees hoe Skin & Vision Clinics B.V. uw persoonsgegevens verwerkt en beschermt conform de AVG.",
  path: "/privacy",
});

export default function PrivacyPage() {
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
            Privacyverklaring
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="prose prose-sm max-w-none text-[#2a2420]" style={{ fontFamily: "var(--font-body)" }}>

              <p className="text-[#b0a090] leading-relaxed mb-10">
                Skin &amp; Vision Clinics B.V. hecht grote waarde aan de bescherming van uw
                persoonsgegevens. In deze privacyverklaring informeren wij u helder en transparant
                over hoe wij met uw gegevens omgaan. Deze verklaring is van toepassing op alle
                cliënten, zowel voor verzekerde medische zorg als voor cosmetische behandelingen.
              </p>

              <LegalSection number="1" title="Wat zijn persoonsgegevens?">
                <p>
                  Persoonsgegevens zijn alle gegevens die direct of indirect tot u als individu
                  herleidbaar zijn, zoals naam, geboortedatum, adres, e-mailadres, telefoonnummer en
                  gezondheidsgegevens. Wij verwerken deze gegevens wanneer u bij ons een
                  behandeling ondergaat of contact met ons opneemt.
                </p>
              </LegalSection>

              <LegalSection number="2" title="Welke gegevens verwerken wij?">
                <p>Wij verwerken de volgende categorieën persoonsgegevens:</p>
                <ul>
                  <li>Identificatiegegevens (zoals naam, adres, telefoonnummer, e-mailadres, geboortedatum);</li>
                  <li>Medische gegevens die relevant zijn voor uw behandeling;</li>
                  <li>Verwijsbrieven en medische voorgeschiedenis (indien van toepassing);</li>
                  <li>Financiële gegevens ten behoeve van declaratie en facturatie;</li>
                  <li>Communicatiegegevens (zoals e-mailcontact, ingevulde vragenlijsten, toestemmingsverklaringen);</li>
                  <li>Overige gegevens die u actief aan ons verstrekt (bijvoorbeeld bij contactformulieren of klachtenprocedures).</li>
                </ul>
              </LegalSection>

              <LegalSection number="3" title="Doeleinden en grondslagen van verwerking">
                <p>
                  Wij verwerken uw persoonsgegevens uitsluitend op basis van een geldige grondslag
                  volgens de Algemene Verordening Gegevensbescherming (AVG):
                </p>
                <ul>
                  <li>Uitvoering van de behandelovereenkomst (zowel medisch als cosmetisch);</li>
                  <li>
                    Uw uitdrukkelijke toestemming (bijvoorbeeld voor het delen van gegevens met
                    derden zoals verwijzers of apothekers; deze toestemming wordt schriftelijk of
                    digitaal vastgelegd);
                  </li>
                  <li>Het voldoen aan wettelijke verplichtingen (zoals de WGBO, Wkkgz en fiscale bewaarplicht);</li>
                  <li>
                    Gerechtvaardigd belang, uitsluitend indien de verwerking niet op een andere
                    grondslag kan worden gebaseerd (bijvoorbeeld voor kwaliteitsbewaking en
                    interne audits, met afweging van uw privacybelang).
                  </li>
                </ul>
              </LegalSection>

              <LegalSection number="4" title="Met wie delen wij uw gegevens?">
                <p>Uw persoonsgegevens worden alleen gedeeld met:</p>
                <ul>
                  <li>
                    Zorgverleners binnen onze kliniek die direct betrokken zijn bij uw behandeling
                    (op basis van het &apos;need-to-know&apos;-principe);
                  </li>
                  <li>
                    Uw verwijzer of huisarts, uitsluitend met uw expliciete toestemming, welke wij
                    schriftelijk/digitaal vastleggen;
                  </li>
                  <li>Apothekers, zorgverzekeraars en administratieve verwerkers indien van toepassing en wettelijk toegestaan;</li>
                  <li>
                    Externe dienstverleners (zoals IT-leveranciers of accountants), waarmee altijd
                    een verwerkersovereenkomst conform AVG is gesloten;
                  </li>
                  <li>Overheidsinstanties indien wij daartoe wettelijk verplicht zijn (zoals IGJ of de Belastingdienst).</li>
                </ul>
                <p className="italic text-[#b0a090] text-sm mt-3">
                  Uw gegevens worden nooit verstrekt aan partijen buiten de Europese
                  Economische Ruimte (EER). Indien wij gebruikmaken van cloudopslag,
                  bevinden deze servers zich binnen de EER.
                </p>
              </LegalSection>

              <LegalSection number="5" title="Beveiliging van uw gegevens">
                <p>
                  Wij nemen passende technische en organisatorische maatregelen om uw
                  persoonsgegevens te beschermen tegen verlies, ongeoorloofde toegang of
                  onrechtmatige verwerking, waaronder:
                </p>
                <ul>
                  <li>Beveiligde toegang tot systemen (tweefactorauthenticatie, autorisatiebeleid);</li>
                  <li>Encryptie van opslagmedia en back-ups;</li>
                  <li>Periodieke controle en actualisatie van beveiligingsmaatregelen;</li>
                  <li>Loggen en monitoren van toegang tot medische dossiers;</li>
                  <li>Alleen bevoegde medewerkers hebben toegang tot uw gegevens, en zij zijn tot geheimhouding verplicht;</li>
                  <li>
                    Elektronische overdracht van medische gegevens (zoals verwijzingen) gebeurt
                    via beveiligde kanalen (bijvoorbeeld ZorgMail).
                  </li>
                </ul>
                <p className="italic text-[#b0a090] text-sm mt-3">
                  Skin &amp; Vision Clinics B.V. heeft een Functionaris Gegevensbescherming (FG)
                  aangesteld. Voor vragen over privacy kunt u bij de FG terecht via{" "}
                  <a href="mailto:privacy@skinandvision.nl" className="text-[#ff8835] hover:underline">
                    privacy@skinandvision.nl
                  </a>.
                </p>
              </LegalSection>

              <LegalSection number="6" title="Bewaartermijn">
                <p>
                  Uw persoonsgegevens worden niet langer bewaard dan strikt noodzakelijk. Voor
                  medische dossiers geldt een wettelijke bewaartermijn van 20 jaar (artikel 7:454 lid 3
                  BW), gerekend vanaf de laatste wijziging. Voor cosmetische behandelingen hanteren
                  wij een bewaartermijn van 10 jaar, tenzij op grond van wet- of regelgeving een
                  andere termijn geldt. Na afloop van de bewaartermijn worden uw gegevens veilig en
                  zorgvuldig vernietigd.
                </p>
              </LegalSection>

              <LegalSection number="7" title="Uw rechten">
                <p>U heeft op grond van de AVG de volgende rechten:</p>
                <ul>
                  <li>Recht op inzage en afschrift van uw gegevens;</li>
                  <li>Recht op correctie (rectificatie) van onjuiste of onvolledige gegevens;</li>
                  <li>Recht op verwijdering (&apos;recht op vergetelheid&apos;), voor zover geen wettelijke bewaarplicht geldt;</li>
                  <li>Recht op beperking van de verwerking;</li>
                  <li>Recht op bezwaar tegen de verwerking van uw gegevens;</li>
                  <li>Recht op overdraagbaarheid van uw gegevens (dataportabiliteit).</li>
                </ul>
                <p className="italic text-[#b0a090] text-sm mt-3">
                  U kunt uw verzoek per e-mail indienen via{" "}
                  <a href="mailto:privacy@skinandvision.nl" className="text-[#ff8835] hover:underline">
                    privacy@skinandvision.nl
                  </a>. Wij reageren uiterlijk binnen vier weken op uw verzoek.
                </p>
              </LegalSection>

              <LegalSection number="8" title="Datalekken en incidenten">
                <p>
                  Bij een beveiligingsincident (datalek) met mogelijk risico voor uw privacy melden wij
                  dit bij de Autoriteit Persoonsgegevens (AP) en, indien van toepassing, ook direct aan
                  u. Wij houden een intern register van datalekken bij en nemen passende
                  maatregelen om herhaling te voorkomen.
                </p>
              </LegalSection>

              <LegalSection number="9" title="Klachten en toezicht">
                <p>
                  Bent u van mening dat wij niet correct met uw persoonsgegevens omgaan, dan kunt
                  u contact opnemen met onze Functionaris Gegevensbescherming via{" "}
                  <a href="mailto:privacy@skinandvision.nl" className="text-[#ff8835] hover:underline">
                    privacy@skinandvision.nl
                  </a>. Daarnaast kunt u een klacht indienen bij de Autoriteit Persoonsgegevens via{" "}
                  <a
                    href="https://www.autoriteitpersoonsgegevens.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff8835] hover:underline"
                  >
                    www.autoriteitpersoonsgegevens.nl
                  </a>.
                </p>
              </LegalSection>

              <LegalSection number="10" title="Contact">
                <ul className="not-prose space-y-1 text-[#2a2420] text-sm">
                  <li>Skin &amp; Vision Clinics B.V.</li>
                  <li>Pietersbergweg 291</li>
                  <li>1105 BM Amsterdam</li>
                  <li>
                    E:{" "}
                    <a href="mailto:privacy@skinandvision.nl" className="text-[#ff8835] hover:underline">
                      privacy@skinandvision.nl
                    </a>
                  </li>
                  <li>
                    W:{" "}
                    <a
                      href="https://www.skinandvision.nl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ff8835] hover:underline"
                    >
                      skinandvision.nl
                    </a>
                  </li>
                </ul>
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
      <div className="pl-10 text-[#b0a090] text-sm leading-relaxed space-y-3 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-[#ff8835] [&_a:hover]:underline">
        {children}
      </div>
      <div className="mt-8 w-full h-px bg-[#e8e0d4]" />
    </div>
  );
}
