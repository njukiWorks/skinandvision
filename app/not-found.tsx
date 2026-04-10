import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina niet gevonden | Skin & Vision Clinic",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#faf8f5] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[#ff8835] text-xs font-sans uppercase tracking-[0.2em] font-semibold mb-6">
        404
      </p>
      <h1
        className="font-display font-light text-[#2a2420] mb-4"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
      >
        Pagina niet <em className="italic">gevonden</em>
      </h1>
      <p className="text-[#b0a090] text-base max-w-md mb-10 leading-relaxed">
        De pagina die u zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of neem contact met ons op.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Link
          href="/nl"
          className="bg-[#ff8835] text-white rounded-full px-8 py-3.5 text-sm font-sans font-medium hover:bg-[#ffaa6b] transition-all duration-300"
        >
          Terug naar home
        </Link>
        <Link
          href="/contact"
          className="border border-[#ff8835] text-[#ff8835] rounded-full px-8 py-3.5 text-sm font-sans font-medium hover:bg-[#fff0e6] transition-all duration-300"
        >
          Contact opnemen
        </Link>
      </div>
    </main>
  );
}
