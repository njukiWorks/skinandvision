import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Ooglidcorrectie",
    description:
      "Blepharoplatiek voor zowel medische als esthetische indicaties. Herstel van gezichtsveld en een frisser, uitgerust uiterlijk door een BIG-geregistreerde oogarts.",
    image: "/images/upper-eyelid-correction-2.jpg",
    href: "/behandelingen/ooglidcorrectie",
    label: "Chirurgie",
    accent: "Bovenste & onderste ooglid",
  },
  {
    title: "Botoxbehandelingen",
    description:
      "Precisie-injecties door een oogarts met unieke anatomische expertise rondom de ogen. Zowel cosmetisch als medisch (blepharospasme, epiphora).",
    image: "/images/botox-image-1.jpg",
    href: "/behandelingen/botoxbehandelingen",
    label: "Injectables",
    accent: "Cosmetisch & medisch",
  },
  {
    title: "Andere Behandelingen",
    description:
      "Ptosis correctie, entropion- en ectropioncorrectie en andere oculoplastische ingrepen door gespecialiseerde oogartsen.",
    image: "/images/ptosis-surgery-2.jpg",
    href: "/behandelingen",
    label: "Oculoplastiek",
    accent: "Ptosis · Entropion · Ectropion",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#faf8f5] py-24 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Onze specialisaties</span>
            <span className="w-8 h-px bg-[#ff8835]" />
          </div>
          <h2
            className="text-[#2a2420] font-display font-light leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            }}
          >
            Behandelingen op maat van{" "}
            <em className="italic text-[#ff8835]">uw wensen</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.14)] hover:-translate-y-2 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c]/70 via-[#0f0d0c]/20 to-transparent" />
                {/* Label badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#ff8835] px-3 py-1.5 rounded-full">
                    {service.label}
                  </span>
                </div>
                {/* Accent text */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/70 text-xs font-sans">{service.accent}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3
                  className="text-[#2a2420] font-display font-light mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.3rem, 2vw, 1.6rem)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#b0a090] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#ff8835] text-sm font-medium font-sans group-hover:gap-3 transition-all duration-300">
                  Meer lezen
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All treatments link */}
        <div className="text-center mt-12">
          <Link
            href="/behandelingen"
            className="inline-flex items-center gap-2 border border-[#e8e0d4] text-[#2a2420] text-sm font-sans font-medium rounded-full px-8 py-3.5 hover:border-[#ff8835] hover:text-[#ff8835] hover:bg-[#fff8f3] transition-all duration-300"
          >
            Alle behandelingen bekijken
          </Link>
        </div>
      </div>
    </section>
  );
}
