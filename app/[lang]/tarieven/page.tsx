import { buildMetadata } from "@/lib/metadata";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "Pricing | Skin & Vision Clinic",
    description:
      "Transparent pricing for eyelid correction, botox treatments and other oculoplastic procedures at Skin & Vision Clinic Amsterdam.",
    path: "/en/tarieven",
  });
}

const pricingEn = [
  {
    id: "botox",
    label: "Injectables",
    title: "Botox Treatments",
    description:
      "Botulinum toxin is used for both cosmetic and medical indications and always requires a personal treatment session. During a consultation you will receive a transparent personalised quote.",
    procedures: [
      { name: "Baby Botox ½ zone (frown, forehead or crow's feet)", price: 130 },
      { name: "Botox 1 zone (frown, forehead or crow's feet)", price: 200 },
      { name: "Botox 2 zones (frown, forehead or crow's feet)", price: 340 },
      { name: "Botox 3 zones (frown, forehead and crow's feet)", price: 490 },
      { name: "Epiphora (excessive tear production)", price: 130 },
      { name: "Botox brow lift", price: 130 },
      { name: "Botox bunny lines (lines on the nose)", price: 130 },
      { name: "Botox chin dimples", price: 130 },
      { name: "Botox masseter (teeth grinding / jaw clenching)", price: 340 },
      { name: "Blepharospasm (involuntary eyelid movements)", price: 340 },
      { name: "Hemifacial spasm (muscle twitches one side of face)", price: 490 },
    ],
    footnote: "Prices are indicative. The final costs are determined during the consultation based on your personal treatment plan.",
  },
  {
    id: "relfydess",
    label: "Injectables",
    title: "Innovative Botox Treatment with Relfydess",
    description:
      "Relfydess is an innovative botulinum toxin preparation injected in liquid form, particularly suitable for refined treatments. During a consultation you will receive a transparent personalised quote.",
    procedures: [
      { name: "Baby Botox ½ zone (frown, forehead or crow's feet)", price: 180 },
      { name: "Botox 1 zone (frown, forehead or crow's feet)", price: 250 },
      { name: "Botox 2 zones (frown, forehead or crow's feet)", price: 390 },
      { name: "Botox 3 zones (frown, forehead and crow's feet)", price: 540 },
      { name: "Epiphora (excessive tear production)", price: 150 },
      { name: "Botox brow lift", price: 180 },
      { name: "Botox bunny lines (lines on the nose)", price: 180 },
      { name: "Botox chin dimples", price: 180 },
      { name: "Botox masseter (teeth grinding / jaw clenching)", price: 390 },
    ],
    footnote: "Prices are indicative. The final costs are determined during the consultation based on your personal treatment plan.",
  },
  {
    id: "surgical",
    label: "Surgery",
    title: "Surgical Treatments",
    description:
      "Every face is unique and every situation requires an individual treatment plan. Prices may differ from the guide prices on our website. During the consultation you will receive a transparent quote.",
    procedures: [
      { name: "Upper eyelid correction (Blepharoplasty, both eyes)", price: 850 },
      { name: "Lower eyelid correction", price: 1050 },
      { name: "Ptosis surgery one eye", price: 1050 },
      { name: "Ptosis surgery both eyes", price: 1550 },
      { name: "Combination upper and lower eyelid correction", price: 1750 },
    ],
    footnote: "All surgical treatments are performed under local anaesthesia. Includes consultation and post-operative check.",
  },
];

export default async function PricingPageEn({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/botox-rates-img.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/85 via-[#2a2420]/60 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <SectionLabel className="mb-5 text-[#ff8835]">Transparent pricing</SectionLabel>
          <h1
            className="text-white font-display font-light max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Pricing
          </h1>
          <p className="text-white/65 text-sm mt-4 max-w-md leading-relaxed">
            All listed prices are indicative. Final costs are discussed during your personal consultation.
          </p>
        </div>
      </section>

      {/* Price cards */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {pricingEn.map((category, i) => (
              <ScrollReveal key={category.id} delay={i * 0.1}>
                <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.07)] p-8 lg:p-10 hover:shadow-[0_12px_56px_rgba(0,0,0,0.11)] hover:-translate-y-1 transition-all duration-350 flex flex-col">
                  <div className="mb-8 pb-8 border-b border-[#f0ebe4]">
                    <SectionLabel className="mb-4">{category.label}</SectionLabel>
                    <h3
                      className="font-display text-2xl lg:text-3xl text-[#2a2420] mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {category.title}
                    </h3>
                    <p className="text-[#b0a090] text-sm leading-relaxed">{category.description}</p>
                  </div>
                  <ul className="space-y-0 flex-1">
                    {category.procedures.map((proc, j) => (
                      <li
                        key={proc.name}
                        className={`flex items-center justify-between gap-4 py-3.5 ${
                          j !== category.procedures.length - 1 ? "border-b border-[#f0ebe4]" : ""
                        }`}
                      >
                        <span className="text-[#4a3a2a] text-sm leading-snug flex-1">{proc.name}</span>
                        <span className="bg-[#fff0e6] text-[#ff8835] font-sans font-semibold text-sm px-3 py-1 rounded-full whitespace-nowrap">
                          {formatPrice(proc.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {category.footnote && (
                    <p className="mt-6 text-xs text-[#b0a090] italic leading-relaxed border-t border-[#f0ebe4] pt-6">
                      {category.footnote}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 bg-[#fff0e6] rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3
                  className="text-[#2a2420] font-display text-xl mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Insurance reimbursement
                </h3>
                <p className="text-[#b0a090] text-sm leading-relaxed">
                  Some treatments — such as ptosis correction with medical indication — may be
                  (partially) reimbursed by your health insurer. Ask about this during
                  your consultation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner
        headline="Personal advice on your treatment"
        subtext="Every treatment plan is unique. Book an appointment and receive a transparent personalised quote."
      />
    </>
  );
}
