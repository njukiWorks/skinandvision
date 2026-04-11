"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

const content = {
  nl: {
    label: "BIG-geregistreerde oogartsen · Amsterdam",
    headlineStart: "Gespecialiseerde kliniek voor oculoplastiek,",
    headlineEm: "ooglidchirurgie en Botox",
    body: "Wij bieden medische en cosmetische behandelingen rond ogen en oogleden, van ooglidcorrecties en ptosischirurgie tot Botoxbehandelingen door oogartsen — altijd met oog voor veiligheid, precisie en een natuurlijk resultaat.",
    cta: "Afspraak Plannen",
    ctaSecondary: "Meer over ons",
    ctaSecondaryHref: "/over-ons",
  },
  en: {
    label: "BIG-registered ophthalmologists · Amsterdam",
    headlineStart: "Oculoplastic specialist for",
    headlineEm: "eyes, eyelids & skin",
    body: "Skin & Vision Clinic is an Oculoplastic Specialist Clinic offering expert care for eye, eyelid, and facial conditions, alongside advanced skin treatments. We provide services including eyelid surgery, tear duct care, and Botox treatments, delivering safe, precise, and natural-looking results.",
    cta: "Book Appointment",
    ctaSecondary: "About us",
    ctaSecondaryHref: "/en",
  },
};

export default function HeroSection({ lang = "nl" }: { lang?: string }) {
  const t = content[lang as keyof typeof content] ?? content.nl;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#edeae4]">
      {/* Right-side image — clean, fades into background on left edge */}
      <div className="absolute right-0 top-0 bottom-0 w-[65%] lg:w-[60%]">
        <Image
          src="/images/iStock.jpg"
          alt="Ooglidcorrectie en botoxbehandelingen Amsterdam"
          fill
          className="object-cover object-[60%_15%]"
          priority
          quality={95}
        />
        {/* Fade left edge into background color — this creates the seamless blend */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#edeae4] via-[#edeae4]/60 to-transparent" />
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-[#edeae4]/70 lg:hidden" />
      </div>

      {/* Content — vertically centred, all fits above the fold */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pt-[90px] pb-10 lg:pb-16">
        <div className="max-w-[525px]">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#a09070] text-[11px] uppercase tracking-[0.28em] font-sans font-medium mb-3"
          >
            {t.label}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#1e1a18] font-display font-light leading-[1.08] tracking-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
            }}
          >
            {t.headlineStart}{" "}
            <em className="italic text-[#ff8835]">{t.headlineEm}</em>
          </motion.h1>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-[#7a6a58] text-[14px] leading-relaxed mb-7"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#2a2420] text-white font-sans font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-[#ff8835] hover:shadow-[0_8px_32px_rgba(255,136,53,0.35)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              {t.cta}
            </a>
            <Link
              href={t.ctaSecondaryHref}
              className="inline-flex items-center gap-2 text-[#7a6a58] font-sans text-sm font-medium hover:text-[#ff8835] transition-colors duration-300 group whitespace-nowrap"
            >
              {t.ctaSecondary}
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300 shrink-0">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
