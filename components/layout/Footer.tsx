"use client";

import Link from "next/link";
import Image from "next/image";
import { trackBookingClick, trackPhoneClick } from "@/lib/analytics";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";
const ZORGKAART_URL =
  "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894";

const navLinks = [
  { label: "Home", href: "/nl" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Behandelingen", href: "/behandelingen" },
  { label: "Vergoeding & Declaratie", href: "/vergoeding-declaratie" },
  { label: "Voor Verwijzers", href: "/voor-verwijzers" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Blog", href: "/blog" },
  { label: "Recensies", href: "/ervaringen" },
  { label: "Contact", href: "/contact" },
];

const treatments = [
  { label: "Ooglidcorrectie", href: "/behandelingen/ooglidcorrectie" },
  { label: "Botoxbehandelingen", href: "/behandelingen/botoxbehandelingen" },
  { label: "Ptosis Correctie", href: "/behandelingen/ptosis-correctie" },
  { label: "Andere Behandelingen", href: "/behandelingen/andere-behandelingen" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a2420] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Image
              src="/logo/main-logo-no-bg.png"
              alt="Skin & Vision Clinic"
              width={170}
              height={52}
              className="h-11 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-[#b0a090] text-sm leading-relaxed">
              BIG-geregistreerde oogartsen gespecialiseerd in ooglidcorrectie
              en botoxbehandelingen in Amsterdam.
            </p>
            <a
              href={ZORGKAART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-[#ff8835] transition-colors group"
            >
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-[#b0a090] group-hover:text-[#ff8835] transition-colors">9.9/10 ZorgkaartNederland</span>
            </a>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-1">
              <a href="https://www.instagram.com/skin_and_vision/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#ff8835] hover:border-[#ff8835] transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/skinandvision" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#ff8835] hover:border-[#ff8835] transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/skinandvision" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#ff8835] hover:border-[#ff8835] transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Navigatie */}
          <div>
            <h4 className="text-[#ff8835] text-xs uppercase tracking-[0.2em] font-semibold mb-5">Navigatie</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#b0a090] text-sm hover:text-[#ff8835] transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Behandelingen */}
          <div>
            <h4 className="text-[#ff8835] text-xs uppercase tracking-[0.2em] font-semibold mb-5">Behandelingen</h4>
            <ul className="space-y-2.5">
              {treatments.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="text-[#b0a090] text-sm hover:text-[#ff8835] transition-colors duration-200">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackBookingClick("footer")}
                className="inline-flex items-center gap-2 bg-[#ff8835] text-white text-sm font-semibold rounded-full px-6 py-2.5 hover:bg-[#e8773a] transition-colors"
              >
                Boek Afspraak
              </a>
            </div>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-[#ff8835] text-xs uppercase tracking-[0.2em] font-semibold mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="block text-[#faf8f5] font-medium text-xs uppercase tracking-wider mb-1">Adres</span>
                <p className="text-[#b0a090]">Pietersbergweg 291<br />1105 BM Amsterdam</p>
              </li>
              <li>
                <span className="block text-[#faf8f5] font-medium text-xs uppercase tracking-wider mb-1">Telefoon</span>
                <a href="tel:+31646096641" onClick={trackPhoneClick} className="text-[#b0a090] hover:text-[#ff8835] transition-colors">+31 6 4609 6641</a>
              </li>
              <li>
                <span className="block text-[#faf8f5] font-medium text-xs uppercase tracking-wider mb-1">E-mail</span>
                <a href="mailto:info@skinandvision.nl" className="text-[#b0a090] hover:text-[#ff8835] transition-colors">info@skinandvision.nl</a>
              </li>
              <li>
                <span className="block text-[#faf8f5] font-medium text-xs uppercase tracking-wider mb-1">Openingstijden</span>
                <p className="text-[#b0a090]">Ma–Vr: 09:00–17:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#b0a090] text-xs">
          <p>© {new Date().getFullYear()} Skin &amp; Vision Clinic Amsterdam. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
            <Link href="/privacy" className="hover:text-[#ff8835] transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden-medisch" className="hover:text-[#ff8835] transition-colors">Voorwaarden Medisch</Link>
            <Link href="/algemene-voorwaarden-cosmetisch" className="hover:text-[#ff8835] transition-colors">Voorwaarden Cosmetisch</Link>
            <span className="text-white/20">KvK: 98350226</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
