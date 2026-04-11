import Image from "next/image";
import Link from "next/link";

const ZORGKAART_URL =
  "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894";

const credentials = [
  "BIG-geregistreerd oogarts",
  "Lid NVvO (Nederlandse Vereniging voor Oogheelkunde)",
  "Universitaire opleiding: Universiteit Leiden",
  "Specialisatie: VU Medisch Centrum Amsterdam",
  "Werkzaam in AMC, UMC Utrecht, Rotterdam Eye Hospital & Maastricht UMC+",
  "Publicaties in internationale medische tijdschriften",
];

export default function AboutTeaser() {
  return (
    <section className="bg-[#f2ede6] py-24 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image column */}
          <div className="relative">
            {/* Decorative bg element */}
            <div className="hidden sm:block absolute -top-8 -left-8 w-48 h-48 bg-[#ff8835]/10 rounded-full blur-2xl" />
            <div className="relative h-[380px] sm:h-[500px] lg:h-[640px] rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/dr.RoelJHMKloos.jpg"
                alt="Dr. R.J.H.M. Kloos — BIG-geregistreerd oogarts bij Skin & Vision Clinic Amsterdam"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c]/50 via-transparent to-transparent" />
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-4 right-2 sm:-right-4 lg:bottom-8 lg:-right-8 bg-white rounded-xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.12)] max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-base">★★★★★</span>
              </div>
              <p className="text-[#2a2420] text-xl font-display font-light" style={{ fontFamily: "var(--font-display)" }}>9.9 / 10</p>
              <p className="text-[#b0a090] text-[11px] leading-snug mt-0.5">ZorgkaartNederland<br />5+ beoordelingen</p>
            </div>

            {/* Experience badge */}
            <div className="absolute top-6 left-2 sm:-left-4 lg:-left-8 bg-[#ff8835] text-white rounded-xl p-4 shadow-lg">
              <p className="text-2xl font-display font-light leading-none" style={{ fontFamily: "var(--font-display)" }}>25+</p>
              <p className="text-[10px] uppercase tracking-wider mt-1 opacity-80">Jaar ervaring</p>
            </div>
          </div>

          {/* Text column */}
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Over de kliniek</span>
            </div>

            <h2
              className="text-[#2a2420] font-display font-light leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Dr. R.J.H.M. Kloos —{" "}
              <em className="italic text-[#ff8835]">oculoplastisch specialist</em>
            </h2>

            <div className="space-y-4 text-[#b0a090] text-sm leading-relaxed">
              <p>
                Dr. R.J.H.M. Kloos is een BIG-geregistreerde oogarts en oculoplastisch specialist
                met diepgaande expertise in chirurgische en esthetische behandelingen van de ogen,
                oogleden en het gezicht. Hij studeerde geneeskunde aan de Universiteit Leiden en
                specialiseerde zich aan het VU Medisch Centrum Amsterdam.
              </p>
              <p>
                Met ervaring opgedaan in het AMC, UMC Utrecht, Rotterdam Eye Hospital en Maastricht UMC+
                biedt dr. Kloos bij Skin &amp; Vision Clinic persoonlijke zorg op maat — of u nu komt
                voor een medische ingreep of een esthetische behandeling.
              </p>
            </div>

            {/* Credentials list */}
            <ul className="space-y-2.5">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#2a2420]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/over-ons"
                className="inline-flex items-center justify-center gap-2 bg-[#ff8835] text-white text-sm font-semibold rounded-full px-8 py-3.5 hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,136,53,0.35)] transition-all duration-300"
              >
                Over de kliniek
              </Link>
              <a
                href={ZORGKAART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#e8e0d4] text-[#2a2420] text-sm font-medium rounded-full px-8 py-3.5 hover:border-[#ff8835] hover:text-[#ff8835] hover:bg-[#fff8f3] transition-all duration-300"
              >
                <span className="text-yellow-400">★</span>
                Bekijk beoordelingen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
