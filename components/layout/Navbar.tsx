"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Over Ons", href: "/over-ons" },
  {
    label: "Behandelingen",
    href: "/behandelingen",
    children: [
      { label: "Ooglidcorrectie", href: "/behandelingen/ooglidcorrectie" },
      { label: "Botoxbehandelingen", href: "/behandelingen/botoxbehandelingen" },
      { label: "Ptosis Correctie", href: "/behandelingen/ptosis-correctie" },
      { label: "Andere Behandelingen", href: "/behandelingen/andere-behandelingen" },
    ],
  },
  { label: "Vergoeding & Declaratie", href: "/vergoeding-declaratie" },
  { label: "Voor Verwijzers", href: "/voor-verwijzers" },
  { label: "Tarieven", href: "/tarieven" },
  { label: "Blog", href: "/blog" },
  { label: "Recensies", href: "/ervaringen" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  lang?: string;
}

export default function Navbar({ lang = "nl" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const root = lang === "nl" ? "" : "/en";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/nl" || pathname === "/";
    return pathname.startsWith(href);
  };

  const otherLangPath = (() => {
    if (lang === "nl") {
      // Home page → English home
      if (pathname === "/nl" || pathname === "/") return "/en";
      // Inner pages: map to /en/<path> if an EN equivalent exists,
      // otherwise fall back to /en
      return "/en";
    } else {
      // English home → Dutch home
      if (pathname === "/en" || pathname === "/en/") return "/nl";
      // Any /en/<path> → strip prefix
      const stripped = pathname.replace(/^\/en/, "");
      return stripped || "/nl";
    }
  })();

  return (
    <>
      {/* Topbar */}
      <div className="hidden lg:block bg-[#2a2420] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6 text-white/70">
            <a href="tel:+31646096641" className="flex items-center gap-1.5 hover:text-[#ff8835] transition-colors">
              <Phone size={11} />
              <span>+31 6 4609 6641</span>
            </a>
            <a href="mailto:info@skinandvision.nl" className="flex items-center gap-1.5 hover:text-[#ff8835] transition-colors">
              <Mail size={11} />
              <span>info@skinandvision.nl</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              <span>Pietersbergweg 291, 1105 BM Amsterdam</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            {/* Socials */}
            <div className="flex items-center gap-3 text-white/60">
              <a href="https://www.instagram.com/skin_and_vision/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8835] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/skinandvision" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8835] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/skinandvision" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8835] transition-colors" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
            {/* Language switcher */}
            <div className="flex items-center gap-1 ml-2 border-l border-white/20 pl-4">
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${lang === "nl" ? "text-[#ff8835]" : "text-white/50 hover:text-white cursor-pointer"} transition-colors`}>NL</span>
              <span className="text-white/30 text-xs">|</span>
              <Link href={otherLangPath} className={`text-xs font-medium px-2 py-0.5 rounded ${lang === "en" ? "text-[#ff8835]" : "text-white/50 hover:text-white"} transition-colors`}>EN</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href={`/nl`} className="flex items-center shrink-0">
            <Image
              src="/logo/main-logo-no-bg.png"
              alt="Skin & Vision Clinic"
              width={180}
              height={54}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.children ? link.href : `${root}${link.href}`}
                  className={`relative flex items-center gap-1 text-[13px] font-sans font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-[#ff8835]"
                      : "text-[#2a2420] hover:text-[#ff8835] hover:bg-[#fff8f3]"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#ff8835] rounded-full" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <div className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[#f2ede6] py-2 transition-all duration-200 ${
                    activeDropdown === link.href ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={`${root}${child.href}`}
                        className="block px-4 py-2.5 text-sm text-[#2a2420] hover:text-[#ff8835] hover:bg-[#fff8f3] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right: CTA + mobile lang + hamburger */}
          <div className="flex items-center gap-3">
            {/* Mobile lang switcher */}
            <div className="xl:hidden flex items-center gap-1 text-xs font-medium">
              <span className={lang === "nl" ? "text-[#ff8835]" : "text-[#b0a090]"}>NL</span>
              <span className="text-[#e8e0d4]">|</span>
              <Link href={otherLangPath} className={lang === "en" ? "text-[#ff8835]" : "text-[#b0a090] hover:text-[#ff8835] transition-colors"}>EN</Link>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center bg-[#ff8835] text-white text-sm font-sans font-semibold rounded-full px-5 py-2.5 hover:bg-[#e8773a] hover:shadow-[0_6px_20px_rgba(255,136,53,0.35)] transition-all duration-300 whitespace-nowrap"
            >
              Boek Afspraak
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 text-[#2a2420] hover:text-[#ff8835] transition-colors cursor-pointer"
              aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0f0d0c] flex flex-col transition-all duration-400 xl:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <Image
            src="/logo/main-logo-no-bg.png"
            alt="Skin & Vision Clinic"
            width={150}
            height={45}
            className="h-10 w-auto brightness-0 invert"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-white hover:text-[#ff8835] transition-colors cursor-pointer"
            aria-label="Menu sluiten"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav className="flex flex-col flex-1 overflow-y-auto px-6 py-6 gap-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={`${root}${link.href}`}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between text-white text-lg font-display py-3.5 border-b border-white/10 hover:text-[#ff8835] transition-all duration-200 ${
                isActive(link.href) ? "text-[#ff8835]" : ""
              }`}
              style={{
                fontFamily: "var(--font-display)",
                transitionDelay: menuOpen ? `${i * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile footer */}
        <div className="px-6 py-6 border-t border-white/10 space-y-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex justify-center bg-[#ff8835] text-white text-sm font-semibold rounded-full px-8 py-4 hover:bg-[#e8773a] transition-colors"
          >
            Boek Afspraak
          </a>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-white/60">
            <span className={lang === "nl" ? "text-[#ff8835]" : ""}>NL</span>
            <span className="text-white/20">|</span>
            <Link href={otherLangPath} onClick={() => setMenuOpen(false)} className={lang === "en" ? "text-[#ff8835]" : "hover:text-white transition-colors"}>EN</Link>
          </div>
          <div className="text-center text-white/40 text-xs space-y-1">
            <p>+31 6 4609 6641</p>
            <p>info@skinandvision.nl</p>
          </div>
        </div>
      </div>
    </>
  );
}
