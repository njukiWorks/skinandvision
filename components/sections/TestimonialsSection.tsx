import Link from "next/link";

const ZORGKAART_URL =
  "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894";

const testimonials = [
  {
    name: "Jos Grouter",
    date: "4 april 2026",
    rating: 5,
    text: "Zeer fijn personeel. Zeer professionele kliniek. De behandeling viel erg mee. Goede nazorg.",
    initials: "JG",
  },
  {
    name: "Paula Brink-wille",
    date: "9 maart 2026",
    rating: 5,
    text: "Zeer vriendelijk ontvangen en de behandeling heb ik als zeer prettige ervaring als professioneel ervaren.",
    initials: "PB",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f2ede6] py-24 md:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">
                Ervaringen
              </span>
            </div>
            <h2
              className="text-[#2a2420] font-display font-light leading-tight"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Wat onze{" "}
              <em className="italic text-[#ff8835]">patiënten</em> zeggen
            </h2>
          </div>

          {/* ZorgkaartNL trust badge */}
          <a
            href={ZORGKAART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300 self-start lg:self-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-display font-light text-[#ff8835]" style={{ fontFamily: "var(--font-display)" }}>
                9.9
              </div>
              <div className="text-[10px] text-[#b0a090] uppercase tracking-widest">/10</div>
            </div>
            <div className="w-px h-10 bg-[#e8e0d4]" />
            <div>
              <div className="text-yellow-400 text-sm mb-0.5">★★★★★</div>
              <div className="text-[#2a2420] text-xs font-semibold">ZorgkaartNederland</div>
              <div className="text-[#b0a090] text-[10px]">28+ beoordelingen</div>
            </div>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-[0_4px_32px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote mark */}
              <div className="text-[#ff8835]/20 font-display font-light leading-none select-none" style={{ fontFamily: "var(--font-display)", fontSize: "4rem" }}>
                &ldquo;
              </div>

              <p className="text-[#6a5a4a] text-sm leading-relaxed flex-1 -mt-6">
                {t.text}
              </p>

              <div className="flex items-center justify-between border-t border-[#f0ebe4] pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#fff0e6] flex items-center justify-center text-[#ff8835] text-xs font-bold font-sans">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-[#2a2420] text-sm font-semibold">{t.name}</p>
                    <p className="text-[#b0a090] text-[11px] font-medium">{t.date}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm">{"★".repeat(t.rating)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-12 text-center">
          <Link
            href="/ervaringen"
            className="inline-flex items-center gap-2 border border-[#e8e0d4] text-[#2a2420] text-sm font-sans font-medium rounded-full px-8 py-3.5 hover:border-[#ff8835] hover:text-[#ff8835] hover:bg-white transition-all duration-300"
          >
            Alle ervaringen lezen
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
