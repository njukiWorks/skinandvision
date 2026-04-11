import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "For Referrers",
    description:
      "Skin & Vision Clinic is the specialist in eyelid surgery. Fast referrals, short waiting times, BIG-registered ophthalmologists in Amsterdam.",
    path: "/en/voor-verwijzers",
  });
}

const reasons = [
  {
    title: "Fully specialised",
    desc: "We focus exclusively on eyelid surgery and oculoplastic treatments — no general ophthalmology.",
  },
  {
    title: "BIG-registered ophthalmologists",
    desc: "All treatments are performed by certified, BIG-registered ophthalmologists with extensive experience.",
  },
  {
    title: "Fast access",
    desc: "Short waiting times, fast access to diagnostics and treatment. After referral we contact the patient ourselves.",
  },
  {
    title: "Full reporting",
    desc: "You receive a comprehensive report after every treatment. We communicate proactively about your patient's progress.",
  },
  {
    title: "Available for consultation",
    desc: "Our doctors are available for collegial consultation on indications and treatment options.",
  },
  {
    title: "Amsterdam location",
    desc: "All our care is provided at our Amsterdam location, easily accessible by public transport and car.",
  },
];

const indications = [
  "Ptosis (drooping eyelids)",
  "Dermatochalasis (excess skin upper eyelid)",
  "Ectropion (lower eyelid turning outward)",
  "Entropion (lower eyelid turning inward)",
  "Chalazion / meibomian cyst",
  "Eyelid tumours (benign and malignant)",
  "Blepharospasm",
  "Hemifacial spasm",
  "Excessive tearing (epiphora)",
  "Cosmetic eyelid correction",
];

export default async function ForReferrersPageEn({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/skin-and-vision-2.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/88 via-[#2a2420]/65 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Professionals</span>
          </div>
          <h1
            className="text-white font-display font-light leading-tight mb-5 max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            For <em className="italic text-[#ff8835]">Referrers</em>
          </h1>
          <p className="text-white/65 text-sm leading-relaxed max-w-lg">
            Specialised clinic for functional and cosmetic eyelid care. Fast access, short waiting times and top-level treatments.
          </p>
        </div>
      </section>

      {/* Referral section */}
      <section className="bg-[#faf8f5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ff8835]" />
                <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Send a referral</span>
              </div>
              <h2
                className="text-[#2a2420] font-display font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                Fast and easy referral
              </h2>
              <div className="space-y-5 text-[#b0a090] text-sm leading-relaxed">
                <p>
                  Upon receipt of your referral, we will contact the patient ourselves.
                  <strong className="text-[#2a2420]"> Your patient does not need to take any action.</strong>
                </p>
                <p>
                  For correct and fast processing of the referral, please include the
                  following information:
                </p>
                <ul className="space-y-2 pl-4">
                  {[
                    "Patient name and date of birth",
                    "AGB code of the referring physician",
                    "Patient phone number",
                    "Diagnosis / reason for referral",
                    "Relevant medical history",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:info@skinandvision.nl?subject=Patient%20referral"
                  className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,136,53,0.3)] transition-all duration-300"
                >
                  Send referral by email
                </a>
                <a
                  href="tel:+31646096641"
                  className="inline-flex items-center gap-2 border border-[#ff8835] text-[#ff8835] font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#fff0e6] transition-all duration-300"
                >
                  Call us: +31 6 4609 6641
                </a>
              </div>
            </div>

            {/* Indications */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ff8835]" />
                <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Indications</span>
              </div>
              <h2
                className="text-[#2a2420] font-display font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                What can you refer for?
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
                <div className="grid grid-cols-1 gap-3">
                  {indications.map((ind) => (
                    <div key={ind} className="flex items-center gap-3 py-2 border-b border-[#f2ede6] last:border-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                      <span className="text-[#2a2420] text-sm">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Why Skin & Vision?</span>
              <span className="w-8 h-px bg-[#ff8835]" />
            </div>
            <h2
              className="text-[#2a2420] font-display font-light"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
            >
              Referring to a <em className="italic text-[#ff8835]">specialist</em>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="bg-[#faf8f5] rounded-2xl p-8 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-[#ff8835] font-display text-3xl font-light mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[#2a2420] font-semibold mb-2">{r.title}</h3>
                <p className="text-[#b0a090] text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f2ede6] py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[#2a2420] font-display font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
            Have questions? <em className="italic text-[#ff8835]">Get in touch.</em>
          </h2>
          <p className="text-[#b0a090] mb-8 leading-relaxed text-sm">
            Our doctors are available for collegial consultation on indications or treatment options.
            Send your referral to <a href="mailto:info@skinandvision.nl" className="text-[#ff8835] hover:underline">info@skinandvision.nl</a> or
            call us at <a href="tel:+31646096641" className="text-[#ff8835] hover:underline">+31 6 4609 6641</a>.
          </p>
        </div>
      </section>
    </>
  );
}
