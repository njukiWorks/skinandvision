import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Voor Verwijzers",
  description:
    "Skin & Vision Clinic is dé specialist in ooglidchirurgie. Snel verwijzen, korte wachttijden, BIG-geregistreerde oogartsen in Amsterdam.",
  path: "/voor-verwijzers",
});

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

const reasons = [
  {
    title: "Volledig gespecialiseerd",
    desc: "Wij zijn uitsluitend gericht op ooglidchirurgie en oculoplastische behandelingen — geen algemene oogheelkunde.",
  },
  {
    title: "BIG-geregistreerde oogartsen",
    desc: "Alle behandelingen worden uitgevoerd door gecertificeerde, BIG-geregistreerde oogartsen met ruime ervaring.",
  },
  {
    title: "Snelle toegang",
    desc: "Korte wachttijden, snelle toegang tot diagnostiek en behandeling. Na verwijzing nemen wij zelf contact op met de patiënt.",
  },
  {
    title: "Volledige rapportage",
    desc: "U ontvangt na elke behandeling een uitgebreid verslag. Wij communiceren proactief over de voortgang van uw patiënt.",
  },
  {
    title: "Bereikbaar voor overleg",
    desc: "Onze artsen zijn bereikbaar voor collegiaal overleg over indicaties en behandelopties.",
  },
  {
    title: "Locatie Amsterdam",
    desc: "Al onze zorg wordt geleverd op onze locatie in Amsterdam, goed bereikbaar met openbaar vervoer en auto.",
  },
];

const indications = [
  "Ptosis (hangende oogleden)",
  "Dermatochalazis (huidoverschot bovenste ooglid)",
  "Ectropion (omgeklapt onderooglid naar buiten)",
  "Entropion (omgeklapt onderooglid naar binnen)",
  "Chalazion / hagelkorrel",
  "Ooglidtumoren (benigne en maligne)",
  "Blepharospasme",
  "Hemifaciale spasme",
  "Overmatig tranen (epiphora)",
  "Cosmetische ooglidcorrectie",
];

export default function VoorVerwijzersPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/skin-and-vision-2.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/88 via-[#2a2420]/65 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Professionals</span>
          </div>
          <h1
            className="text-white font-display font-light leading-tight mb-5 max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            Voor <em className="italic text-[#ff8835]">Verwijzers</em>
          </h1>
          <p className="text-white/65 text-sm leading-relaxed max-w-lg">
            Gespecialiseerde kliniek voor functionele en esthetische ooglidzorg. Snelle toegang, korte wachttijden en behandelingen op topniveau.
          </p>
        </div>
      </section>

      {/* Verwijzing sturen */}
      <section className="bg-[#faf8f5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ff8835]" />
                <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Verwijzing sturen</span>
              </div>
              <h2
                className="text-[#2a2420] font-display font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Snel en eenvoudig verwijzen
              </h2>
              <div className="space-y-5 text-[#b0a090] text-sm leading-relaxed">
                <p>
                  Na ontvangst van uw verwijzing nemen wij zelf contact op met de patiënt.
                  <strong className="text-[#2a2420]"> Uw patiënt hoeft dus geen actie te ondernemen.</strong>
                </p>
                <p>
                  Voor een juiste en snelle verwerking van de verwijzing vragen wij u om de
                  volgende gegevens te vermelden:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    "Naam en geboortedatum van de patiënt",
                    "AGB-code van de verwijzend arts",
                    "Telefoonnummer van de patiënt",
                    "Diagnose / reden van verwijzing",
                    "Relevante medische voorgeschiedenis",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@skinandvision.nl?subject=Verwijzing%20patiënt"
                  className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,136,53,0.3)] transition-all duration-300"
                >
                  Stuur verwijzing per e-mail
                </a>
                <a
                  href="tel:+31646096641"
                  className="inline-flex items-center gap-2 border border-[#ff8835] text-[#ff8835] font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#fff0e6] transition-all duration-300"
                >
                  Bel ons: +31 6 4609 6641
                </a>
              </div>
            </div>

            {/* Indicaties */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ff8835]" />
                <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Indicaties</span>
              </div>
              <h2
                className="text-[#2a2420] font-display font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Waarvoor kunt u verwijzen?
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-1 gap-3">
                  {indications.map((ind) => (
                    <div key={ind} className="flex items-center gap-3 py-2 border-b border-[#f2ede6] last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                      <span className="text-[#2a2420] text-sm">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Waarom Skin & Vision?</span>
              <span className="w-8 h-px bg-[#ff8835]" />
            </div>
            <h2
              className="text-[#2a2420] font-display font-light"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Verwijzen naar een <em className="italic text-[#ff8835]">specialist</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-[#faf8f5] rounded-2xl p-8 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-[#ff8835] font-display text-3xl font-light mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[#2a2420] font-semibold mb-2">{r.title}</h3>
                <p className="text-[#b0a090] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f2ede6] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[#2a2420] font-display font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Heeft u vragen? <em className="italic text-[#ff8835]">Neem contact op.</em>
          </h2>
          <p className="text-[#b0a090] mb-8 leading-relaxed text-sm">
            Onze artsen zijn beschikbaar voor collegiaal overleg over indicaties of behandelopties.
            Stuur uw verwijzing naar <a href="mailto:info@skinandvision.nl" className="text-[#ff8835] hover:underline">info@skinandvision.nl</a> of
            bel ons op <a href="tel:+31646096641" className="text-[#ff8835] hover:underline">+31 6 4609 6641</a>.
          </p>
        </div>
      </section>
    </>
  );
}
