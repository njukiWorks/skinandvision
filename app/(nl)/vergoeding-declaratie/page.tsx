import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Vergoeding & Declaratie",
  description:
    "Uw medische behandeling bij Skin & Vision Clinic wordt bij medische indicatie vergoed door alle zorgverzekeraars — ook zonder contract.",
  path: "/vergoeding-declaratie",
});

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

const steps = [
  {
    num: "01",
    title: "Verwijzing aanvragen",
    desc: "Vraag een verwijzing aan bij uw huisarts of medisch specialist voor een behandeling bij Skin & Vision Clinics.",
  },
  {
    num: "02",
    title: "Afspraak maken",
    desc: "Maak eenvoudig een afspraak via ons online systeem of neem telefonisch contact met ons op. Stuur uw verwijzing mee voorafgaand aan uw eerste afspraak.",
  },
  {
    num: "03",
    title: "Behandeling",
    desc: "U wordt behandeld door onze BIG-geregistreerde oogarts. Wij begeleiden u zorgvuldig gedurende het gehele traject.",
  },
  {
    num: "04",
    title: "Declaratie en afhandeling",
    desc: "U ontvangt de factuur via Infomedics. Deze dient u in bij uw zorgverzekeraar. Na ontvangst van de afrekenspecificatie stuurt u deze aan ons door. Vervolgens betaalt u alleen het vergoede bedrag en een eventueel bedrag dat onder uw eigen risico of eigen bijdrage valt.",
  },
];

export default function VergoedingDeclaratiePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#f2ede6] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff8835] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Vergoeding</span>
            </div>
            <h1
              className="text-[#2a2420] font-display font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Vergoed door alle{" "}
              <em className="italic text-[#ff8835]">zorgverzekeraars</em>
            </h1>
            <p className="text-[#b0a090] text-lg leading-relaxed max-w-2xl">
              Uw medische behandeling bij Skin &amp; Vision Clinic wordt — bij medische indicatie
              én verwijzing door uw huisarts of medisch specialist — gewoon vergoed door alle
              zorgverzekeraars. U hoeft zich geen zorgen te maken: ook zonder contract
              kunt u bij ons terecht voor verzekerde zorg.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ff8835]" />
                <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Hoe werkt het?</span>
              </div>
              <h2
                className="text-[#2a2420] font-display font-light leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Van verwijzing tot behandeling
              </h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-6 group">
                    <div className="shrink-0">
                      <span className="text-[#ff8835] font-display text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>
                        {step.num}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-[#2a2420] font-semibold mb-2 text-base">{step.title}</h3>
                      <p className="text-[#b0a090] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm text-[#b0a090] mb-6 leading-relaxed">
                  <strong className="text-[#2a2420]">Let op:</strong> Esthetische behandelingen (zoals cosmetische botox of
                  puur esthetische ooglidcorrectie zonder medische indicatie) vallen buiten de
                  basisverzekering en worden niet vergoed. Informeer bij uw zorgverzekeraar
                  of uw aanvullende verzekering hier dekking voor biedt.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-sans font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#e8773a] hover:shadow-[0_8px_24px_rgba(255,136,53,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Maak een afspraak
                </a>
              </div>
            </div>

            {/* Insurance logos / info */}
            <div>
              <div className="bg-[#fff0e6] border border-[#ff8835]/20 rounded-2xl p-8">
                <h3 className="text-[#2a2420] font-semibold mb-3">Vragen over vergoeding?</h3>
                <p className="text-[#b0a090] text-sm leading-relaxed mb-5">
                  Neem contact met ons op. Ons team helpt u graag om de vergoedingsmogelijkheden
                  voor uw specifieke situatie te verhelderen.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+31646096641" className="flex items-center gap-2 text-[#ff8835] hover:underline font-medium">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    +31 6 4609 6641
                  </a>
                  <a href="mailto:info@skinandvision.nl" className="flex items-center gap-2 text-[#ff8835] hover:underline font-medium">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    info@skinandvision.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2a2420] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Afspraak maken</span>
            <span className="w-8 h-px bg-[#ff8835]" />
          </div>
          <h2 className="text-white font-display font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
            Klaar om een <em className="italic text-[#ff8835]">afspraak</em> te maken?
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed max-w-xl mx-auto text-sm">
            Vraag uw verwijzing aan bij uw huisarts en maak direct een afspraak bij Skin &amp; Vision Clinic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-semibold rounded-full px-8 py-4 text-sm hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,136,53,0.4)] transition-all duration-300"
            >
              Boek nu uw afspraak
            </a>
            <a
              href="tel:+31646096641"
              className="inline-flex items-center gap-2 border border-white/20 text-white/75 text-sm font-medium rounded-full px-8 py-4 hover:border-[#ff8835] hover:text-[#ff8835] transition-all duration-300"
            >
              +31 6 4609 6641
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
