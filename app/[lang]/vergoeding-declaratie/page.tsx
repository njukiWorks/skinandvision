import { buildMetadata } from "@/lib/metadata";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "Insurance & Billing",
    description:
      "Your medical treatment at Skin & Vision Clinic is covered by all health insurers when medically indicated — even without a contract.",
    path: "/en/vergoeding-declaratie",
  });
}

const insurers = [
  "Zilveren Kruis / OHRA",
  "CZ / Delta Lloyd / OHRA Zorg",
  "Menzis",
  "VGZ / IZZ / IZA",
  "DSW / Stad Holland",
  "ONVZ / PNO Zorg",
  "Zorg en Zekerheid",
  "ASR / De Amersfoortse",
];

const steps = [
  {
    num: "01",
    title: "Request a referral",
    desc: "Ask your GP or medical specialist for a referral for treatment at Skin & Vision Clinic.",
  },
  {
    num: "02",
    title: "Book an appointment",
    desc: "Make an appointment via our online system or call us. Bring your referral to the first appointment.",
  },
  {
    num: "03",
    title: "Treatment",
    desc: "You receive treatment from our BIG-registered ophthalmologist. We take care of the rest.",
  },
  {
    num: "04",
    title: "Billing",
    desc: "We bill your health insurer directly. You don't need to do anything yourself.",
  },
];

export default async function InsurancePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#f2ede6] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff8835] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Insurance</span>
            </div>
            <h1
              className="text-[#2a2420] font-display font-light leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Covered by all{" "}
              <em className="italic text-[#ff8835]">health insurers</em>
            </h1>
            <p className="text-[#b0a090] text-lg leading-relaxed max-w-2xl">
              Your medical treatment at Skin &amp; Vision Clinic is — with medical indication
              and a referral from your GP or medical specialist — covered by all health insurers.
              No need to worry: even without a contract, you can come to us for insured care.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ff8835]" />
                <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">How does it work?</span>
              </div>
              <h2
                className="text-[#2a2420] font-display font-light leading-tight mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
              >
                From referral to treatment
              </h2>
              <div className="space-y-8">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-6">
                    <div className="shrink-0">
                      <span className="text-[#ff8835] font-display text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>
                        {step.num}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="text-[#2a2420] font-semibold mb-2 text-base">{step.title}</h3>
                      <p className="text-[#b0a090] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-sm text-[#b0a090] mb-6 leading-relaxed">
                  <strong className="text-[#2a2420]">Please note:</strong> Cosmetic treatments (such as cosmetic botox or
                  purely cosmetic eyelid correction without medical indication) fall outside basic insurance and
                  are not covered. Check with your insurer whether your supplementary insurance covers this.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-sans font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#e8773a] hover:shadow-[0_8px_24px_rgba(255,136,53,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book an appointment
                </a>
              </div>
            </div>

            {/* Insurance info */}
            <div>
              <div className="bg-[#faf8f5] rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-[#ff8835]" />
                  <span className="text-[#ff8835] text-xs uppercase tracking-[0.2em] font-semibold">Contracted insurers</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {insurers.map((v) => (
                    <div key={v} className="flex items-center gap-2 text-sm text-[#2a2420]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0" />
                      {v}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#b0a090] mt-4 leading-relaxed">
                  Does your insurer offer a restitution policy? Then a non-contracted provider
                  will also be (partially) reimbursed.
                </p>
              </div>

              <div className="bg-[#fff0e6] border border-[#ff8835]/20 rounded-2xl p-8">
                <h3 className="text-[#2a2420] font-semibold mb-3">Questions about coverage?</h3>
                <p className="text-[#b0a090] text-sm leading-relaxed mb-5">
                  Contact us. Our team is happy to help clarify the reimbursement options
                  for your specific situation.
                </p>
                <div className="space-y-2 text-sm">
                  <a href="tel:+31646096641" className="flex items-center gap-2 text-[#ff8835] hover:underline font-medium">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    +31 6 4609 6641
                  </a>
                  <a href="mailto:info@skinandvision.nl" className="flex items-center gap-2 text-[#ff8835] hover:underline font-medium">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    info@skinandvision.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2a2420] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Book appointment</span>
            <span className="w-8 h-px bg-[#ff8835]" />
          </div>
          <h2 className="text-white font-display font-light mb-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
            Ready to make an <em className="italic text-[#ff8835]">appointment</em>?
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed max-w-xl mx-auto text-sm">
            Request a referral from your GP and book an appointment at Skin &amp; Vision Clinic directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-semibold rounded-full px-8 py-4 text-sm hover:bg-[#e8773a] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,136,53,0.4)] transition-all duration-300"
            >
              Book your appointment now
            </a>
            <a
              href="tel:+31646096641"
              className="inline-flex items-center gap-2 border border-white/20 text-white/75 text-sm font-medium rounded-full px-8 py-4 hover:border-[#ff8835] hover:text-[#ff8835] transition-all duration-300"
            >
              +31 6 4609 6641
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
