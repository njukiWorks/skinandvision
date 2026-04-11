import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";

const ZORGKAART_URL =
  "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "About Us | Skin & Vision Clinic Amsterdam",
    description:
      "Learn more about Dr. R.J.H.M. Kloos and Skin & Vision Clinic. BIG-registered ophthalmologist with over 28 years of experience in eyelid correction and botox treatments.",
    path: "/en/over-ons",
  });
}

export default async function AboutPageEn({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/skin-and-vision-about-us-img.jpg" alt="" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/85 via-[#2a2420]/60 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <SectionLabel className="mb-5 text-[#ff8835]">Skin & Vision Clinic</SectionLabel>
          <h1
            className="text-white font-display font-light max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            About Us
          </h1>
          <p className="text-white/65 text-sm mt-4 max-w-md leading-relaxed">
            Over 28 years of medical expertise and personal care in Amsterdam.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="/images/3.JPG"
                alt="Skin & Vision Clinic Amsterdam"
                fill
                className="object-cover object-top"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="flex flex-col gap-8">
            <SectionLabel>The clinic</SectionLabel>
            <h2
              className="text-[#2a2420] font-display font-light leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Skin &amp; Vision Clinic
            </h2>

            <div className="space-y-3 text-[#b0a090] text-sm leading-relaxed">
              <p>
                Skin &amp; Vision Clinic is a specialised oculoplastic clinic in Amsterdam,
                focused on medical and cosmetic care for eyes, eyelids and the face — from
                eyelid corrections and ptosis surgery to lacrimal duct care and botox treatments.
              </p>
              <p>
                Every patient receives a personal consultation and treatment plan, tailored to
                individual wishes and medical situation.
              </p>
            </div>

            <ul className="space-y-2">
              {[
                "Specialised oculoplastic clinic in Amsterdam",
                "BIG-registered ophthalmologists",
                "Medical and cosmetic treatments",
                "9.9/10 on ZorgkaartNederland",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#2a2420]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={ZORGKAART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#fff0e6] text-[#ff8835] font-sans font-medium text-sm rounded-full px-6 py-3 hover:bg-[#ffaa6b]/20 transition-colors w-fit"
            >
              <span className="text-yellow-400">★★★★★</span>
              View on ZorgkaartNederland
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f2ede6] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel className="items-center mb-8">Our philosophy</SectionLabel>
            <div
              className="text-[#ff8835]/20 font-display font-light leading-none select-none mb-2"
              style={{ fontFamily: "var(--font-display)", fontSize: "8rem" }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote
              className="text-[#2a2420] font-display font-light italic leading-relaxed -mt-8"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
            >
              Every treatment begins with listening. Only by fully understanding your
              wishes and concerns can we deliver the result you deserve.
            </blockquote>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="w-10 h-px bg-[#ff8835]" />
              <p className="text-[#b0a090] text-sm font-sans">Dr. R.J.H.M. Kloos</p>
              <span className="w-10 h-px bg-[#ff8835]" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline="Meet the clinic"
        subtext="Schedule a no-obligation introductory consultation with Dr. Kloos and discover what Skin & Vision Clinic can do for you."
      />
    </>
  );
}
