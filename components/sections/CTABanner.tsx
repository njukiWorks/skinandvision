"use client";

import Image from "next/image";
import { trackBookingClick, trackPhoneClick } from "@/lib/analytics";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Klaar voor een persoonlijk gesprek?",
  subtext = "Maak een afspraak bij Skin & Vision Clinic en ontdek welke behandeling bij u past.",
}: CTABannerProps) {
  return (
    <section className="relative bg-[#0f0d0c] py-24 md:py-28 overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/iStock-1132034531.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0d0c] via-[#0f0d0c]/80 to-[#0f0d0c]" />

      {/* Decorative circle */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff8835]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-8 h-px bg-[#ff8835]" />
          <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Afspraak maken</span>
          <span className="w-8 h-px bg-[#ff8835]" />
        </div>

        <h2
          className="text-white font-display font-light leading-tight mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.8rem)",
          }}
        >
          {headline.includes("?") ? (
            <>
              {headline.split("?")[0]}
              <em className="italic text-[#ff8835]">?</em>
            </>
          ) : (
            <>
              <em className="italic text-[#ff8835]">{headline.split(" ").slice(0, 2).join(" ")}</em>{" "}
              {headline.split(" ").slice(2).join(" ")}
            </>
          )}
        </h2>

        <p className="text-white/60 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackBookingClick("cta_banner")}
            className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-semibold rounded-full px-10 py-4 text-sm hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,136,53,0.45)] transition-all duration-300"
          >
            Afspraak Maken
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="tel:+31646096641"
            onClick={trackPhoneClick}
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-sm font-medium rounded-full px-8 py-4 hover:border-[#ff8835] hover:text-[#ff8835] transition-all duration-300"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +31 6 4609 6641
          </a>
        </div>
      </div>
    </section>
  );
}
