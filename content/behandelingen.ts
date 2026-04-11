export interface Treatment {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration?: string;
  recovery?: string;
  category: "chirurgisch" | "botox" | "medisch";
  highlights: string[];
}

export const behandelingen: Treatment[] = [
  {
    slug: "ooglidcorrectie",
    title: "Ooglidcorrectie",
    shortDescription:
      "Bovenooglidcorrectie (Blepharoplatiek) voor zowel medische als esthetische indicaties, uitgevoerd door BIG-geregistreerde oogartsen.",
    fullDescription: `Een ooglidcorrectie, ook wel Blepharoplatiek genoemd, is een ingreep waarbij overtollig huid, spier- of vetweefsel van de oogleden wordt verwijderd. Bij Skin & Vision Clinic onderscheiden we Boven-Blepharoplatiek en Onder-Blepharoplatiek.

**Wanneer is een ooglidcorrectie zinvol?**

Een ooglidcorrectie kan zowel medisch als esthetisch geïndiceerd zijn:
- **Medisch:** Wanneer hangende oogleden het gezichtsveld belemmeren of ptosis (hangooglid) de visus beïnvloedt.
- **Esthetisch:** Wanneer zware, hangende oogleden een vermoeide of ouder uitstraling geven.

**De ingreep stap voor stap**

1. Consultatie & planning met Dr. Kloos
2. Ingreep onder lokale verdoving (45–90 minuten)
3. Herstelperiode: 1–2 weken zwelling en blauwe plekken
4. Hechtingen worden na 5–7 dagen verwijderd
5. Volledig herstel na 4–6 weken

**Waarom een oogarts?**

Dr. Kloos combineert diepgaande kennis van de ooganatomie met oculoplastische chirurgische expertise. Dit snijvlak van oogheelkunde en plastische chirurgie garandeert een veilig resultaat met oog voor natuurlijke esthetiek.`,
    image: "/images/upper-eyelid-correction.jpg",
    duration: "45–90 minuten",
    recovery: "1–2 weken",
    category: "chirurgisch",
    highlights: [
      "Uitgevoerd door BIG-geregistreerde oogarts",
      "Lokale verdoving",
      "Medisch én esthetisch geïndiceerd",
      "Volledig herstel in 4–6 weken",
    ],
  },
  {
    slug: "botoxbehandelingen",
    title: "Botoxbehandelingen",
    shortDescription:
      "Precisie-botoxbehandelingen rondom de ogen door een BIG-geregistreerde oogarts met unieke anatomische expertise.",
    fullDescription: `Botoxbehandelingen bij Skin & Vision Clinic worden uitgevoerd door Dr. Kloos, een BIG-geregistreerde oogarts met jarenlange ervaring in het perioculaire gebied.

**Wat is botox?**

Botulinetoxine type A blokkeert tijdelijk de zenuw-spierverbinding, waardoor rimpels ontspannen en vervlakken. Het effect is 3–4 maanden werkzaam en volledig omkeerbaar.

**Het voordeel van een oogarts**

Het gebied rondom de ogen bevat complexe musculatuur (m. orbicularis oculi). Onervaren uitvoerders lopen het risico op complicaties zoals ptosis, droge ogen of asymmetrie. Als oogarts heeft Dr. Kloos dagelijks klinische ervaring met deze anatomie.

**Behandelmogelijkheden**

- Voorhoofdlijnen & fronsrimpels (glabella)
- Kraaienpootjes
- Wenkbrauw-lifting
- Bunny lines (lijntjes op de neus)
- Putjes in de kin
- Masseter (knarsetanden / kaakklemmen)
- Medische indicaties: blepharospasme, hemifaciale spasme, epiphora

**Het behandelproces**

1. Consultatie: wensen, medische voorgeschiedenis, persoonlijk advies
2. Injectiesessie: 15–30 minuten, direct hervatten dagelijkse activiteiten
3. Follow-up na 2 weken`,
    image: "/images/botox-image-1.jpg",
    duration: "15–30 minuten",
    recovery: "Direct activiteiten hervatten",
    category: "botox",
    highlights: [
      "BIG-geregistreerde oogarts",
      "Diepgaande anatomische expertise",
      "CE/FDA-gecertificeerde preparaten",
      "Follow-up na 2 weken",
    ],
  },
  {
    slug: "ptosis-correctie",
    title: "Ptosis Correctie",
    shortDescription:
      "Chirurgische correctie van hangooglid (ptosis) voor herstel van gezichtsveld en esthetiek.",
    fullDescription: `Ptosis is een aandoening waarbij het bovenste ooglid te laag hangt, wat zowel het gezichtsveld als het uiterlijk kan beïnvloeden. Dr. Kloos is gespecialiseerd in ptosischirurgie voor zowel medische als esthetische indicaties.

**Oorzaken van ptosis**

- Aangeboren (congenitale ptosis)
- Ouderdomsgebonden (invololutionaire ptosis)
- Neurologische oorzaken
- Post-traumatisch

**De ingreep**

De ptosiscorrectie wordt uitgevoerd onder lokale verdoving. Afhankelijk van de oorzaak en ernst wordt gekozen voor levator-resectie of -plicatie. De operatieduur is 60–90 minuten per oog.

**Herstel**

Na de ingreep is zwelling en een blauw oog normaal. De hechtingen worden na 5–7 dagen verwijderd. Volledig herstel duurt 4–6 weken.`,
    image: "/images/ptosis-surgery.jpg",
    duration: "60–90 minuten per oog",
    recovery: "4–6 weken volledig herstel",
    category: "chirurgisch",
    highlights: [
      "Medisch én esthetisch geïndiceerd",
      "Kan vergoed worden door zorgverzekeraar",
      "Lokale verdoving",
      "BIG-geregistreerde oogarts",
    ],
  },
  {
    slug: "andere-behandelingen",
    title: "Andere Behandelingen",
    shortDescription:
      "Oculoplastische ingrepen zoals entropion- en ectropioncorrectie door gespecialiseerde oogartsen.",
    fullDescription: `Naast ooglidcorrectie en botoxbehandelingen biedt Skin & Vision Clinic een breed scala aan oculoplastische ingrepen.

**Entropion correctie**

Entropion is een aandoening waarbij het ooglid naar binnen kantelt, waardoor de wimpers het oogoppervlak irriteren. Chirurgische correctie lost dit permanent op.

**Ectropion correctie**

Bij ectropion kantelt het onderste ooglid naar buiten, wat leidt tot traanafvoerproblemen en irritatie. Correctie geschiedt chirurgisch onder lokale verdoving.

**Cosmetische behandelingen**

Naast medische indicaties bieden we ook andere cosmetische behandelingen rondom het ooggebied. Neem contact op voor een persoonlijk gesprek.`,
    image: "/images/cosmetic-treatment.jpg",
    duration: "Afhankelijk van behandeling",
    recovery: "Afhankelijk van behandeling",
    category: "medisch",
    highlights: [
      "Entropion en ectropion correctie",
      "Medische indicaties",
      "BIG-geregistreerde oogarts",
      "Persoonlijk behandelplan",
    ],
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return behandelingen.find((b) => b.slug === slug);
}
