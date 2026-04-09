"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  }

  return (
    <section className="relative overflow-hidden bg-[#2a2420] py-20 lg:py-24">
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff8835]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-12 text-center">
        {/* Label */}
        <span className="inline-flex items-center gap-2.5 text-[#ff8835] text-[11px] uppercase tracking-[0.28em] font-sans font-semibold mb-5">
          <span className="w-5 h-px bg-[#ff8835]" />
          Nieuwsbrief
          <span className="w-5 h-px bg-[#ff8835]" />
        </span>

        <h3
          className="text-white font-display font-light mb-3"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)" }}
        >
          Blijf op de <em className="italic text-[#ff8835]">hoogte</em>
        </h3>
        <p className="text-white/50 text-sm mb-10 leading-relaxed">
          Ontvang nieuws over behandelingen, tips en aanbiedingen van Skin &amp; Vision Clinic.
        </p>

        {status === "success" ? (
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <span className="text-[#ff8835] text-lg">✓</span>
            <p className="text-white/80 text-sm">Bedankt! U ontvangt binnenkort een bevestiging.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Uw e-mailadres"
              required
              className="flex-1 bg-white/8 border border-white/15 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-[#ff8835] focus:bg-white/12 transition-all duration-200"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#ff8835] text-white font-sans font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,136,53,0.4)] transition-all duration-300 disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Bezig..." : "Aanmelden"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
