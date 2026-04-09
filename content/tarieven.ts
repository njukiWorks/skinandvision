// Pricing data: original old-site prices + €50 across the board
// Old → New:
//   Baby Botox ½ zone: €80 → €130
//   Botox 1 zone: €150 → €200
//   Botox 2 zones: €290 → €340
//   Botox 3 zones: €440 → €490
//   Epiphora: €80 → €130
//   Wenkbrauw lifting: €80 → €130
//   Bunny lines: €80 → €130
//   Kin putjes: €80 → €130
//   Masseter: €290 → €340
//   Blepharospasme: €290 → €340
//   Hemifaciale spasme: €440 → €490
//   Bovenooglidcorrectie: €800 → €850
//   Onderooglidcorrectie: €1000 → €1050
//   Ptosis 1 oog: €1000 → €1050
//   Ptosis beide ogen: €1500 → €1550
//   Combinatie boven+onder: €1700 → €1750

export interface Procedure {
  name: string;
  price: number;
  note?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  description: string;
  procedures: Procedure[];
  footnote?: string;
}

export const tarieven: PriceCategory[] = [
  {
    id: "botoxbehandelingen",
    title: "Botoxbehandelingen",
    description:
      "Botulinetoxine wordt gebruikt voor zowel cosmetische als medische indicaties en vereist altijd een persoonlijke behandeling. Tijdens een consultatie ontvangt u een transparante offerte op maat.",
    procedures: [
      { name: "Baby Botox ½ zone (fronsrimpel, voorhoofd of kraaienpootjes)", price: 130 },
      { name: "Botox 1 zone (fronsrimpel, voorhoofd of kraaienpootjes)", price: 200 },
      { name: "Botox 2 zones (fronsrimpel, voorhoofd of kraaienpootjes)", price: 340 },
      { name: "Botox 3 zones (fronsrimpel, voorhoofd en kraaienpootjes)", price: 490 },
      { name: "Epiphora (overmatige traanproductie)", price: 130 },
      { name: "Botox wenkbrauw lifting", price: 130 },
      { name: "Botox lijntjes op de neus (bunny lines)", price: 130 },
      { name: "Botox putjes in de kin", price: 130 },
      { name: "Botox masseter (knarsetanden / kaakklemmen)", price: 340 },
      { name: "Blepharospasme (onvrijwillige ooglidbewegingen)", price: 340 },
      { name: "Hemifaciale spasme (spiertrekkingen één zijde gezicht)", price: 490 },
    ],
    footnote:
      "Prijzen zijn richtprijzen. De definitieve kosten worden bepaald tijdens de consultatie op basis van uw persoonlijke behandelplan.",
  },
  {
    id: "chirurgische-behandelingen",
    title: "Chirurgische Behandelingen",
    description:
      "Elk gezicht is uniek en elke situatie vereist een individueel behandelplan. Prijzen kunnen afwijken van de richtprijzen op onze website. Tijdens de consultatie ontvangt u een transparante offerte.",
    procedures: [
      { name: "Bovenooglidcorrectie (blepharoplastie, beide ogen)", price: 850 },
      { name: "Onderooglidcorrectie", price: 1050 },
      { name: "Ptosis operatie één oog", price: 1050 },
      { name: "Ptosis operatie beide ogen", price: 1550 },
      { name: "Combinatie boven- en onderooglidcorrectie", price: 1750 },
    ],
    footnote:
      "Alle chirurgische behandelingen worden uitgevoerd onder lokale verdoving. Inclusief consultatie en nacontrole.",
  },
];
