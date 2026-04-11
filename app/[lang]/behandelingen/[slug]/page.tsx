import { notFound } from "next/navigation";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { buildProcedureSchema } from "@/lib/seo";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

interface TreatmentEn {
  slug: string;
  title: string;
  category: "chirurgisch" | "botox" | "medisch";
  shortDescription: string;
  fullDescription: string;
  image: string;
  duration?: string;
  recovery?: string;
  highlights: string[];
}

const treatmentsEn: TreatmentEn[] = [
  {
    slug: "ooglidcorrectie",
    title: "Eyelid Correction",
    category: "chirurgisch",
    shortDescription:
      "Upper eyelid correction (Blepharoplasty) for both medical and cosmetic indications, performed by BIG-registered ophthalmologists.",
    fullDescription: `Eyelid correction, also known as Blepharoplasty, is a procedure in which excess skin, muscle, or fatty tissue is removed from the eyelids. At Skin & Vision Clinic we perform both upper (Boven-Blepharoplasty) and lower (Onder-Blepharoplasty) eyelid correction.

**When is eyelid correction appropriate?**

Eyelid correction can be indicated both medically and cosmetically:
- **Medical:** When drooping eyelids obstruct the visual field or ptosis affects vision.
- **Cosmetic:** When heavy, drooping eyelids create a tired or aged appearance.

**The procedure step by step**

1. Consultation & planning with Dr. Kloos
2. Procedure under local anaesthesia (45–90 minutes)
3. Recovery period: 1–2 weeks of swelling and bruising
4. Sutures removed after 5–7 days
5. Full recovery after 4–6 weeks

**Why an ophthalmologist?**

Dr. Kloos combines in-depth knowledge of ocular anatomy with oculoplastic surgical expertise. This intersection of ophthalmology and plastic surgery guarantees a safe result with attention to natural aesthetics.`,
    image: "/images/upper-eyelid-correction.jpg",
    duration: "45–90 minutes",
    recovery: "1–2 weeks",
    highlights: [
      "Performed by BIG-registered ophthalmologist",
      "Local anaesthesia",
      "Medical & cosmetic indications",
      "Full recovery in 4–6 weeks",
    ],
  },
  {
    slug: "botoxbehandelingen",
    title: "Botox Treatments",
    category: "botox",
    shortDescription:
      "Precision botox treatments around the eyes by a BIG-registered ophthalmologist with unique anatomical expertise.",
    fullDescription: `Botox treatments at Skin & Vision Clinic are performed by Dr. Kloos, a BIG-registered ophthalmologist with years of experience in the periocular area.

**What is botox?**

Botulinum toxin type A temporarily blocks the nerve-muscle connection, causing wrinkles to relax and smooth out. The effect lasts 3–4 months and is fully reversible.

**The advantage of an ophthalmologist**

The area around the eyes contains complex musculature (m. orbicularis oculi). Inexperienced practitioners risk complications such as ptosis, dry eyes, or asymmetry. As an ophthalmologist, Dr. Kloos has daily clinical experience with this anatomy.

**Treatment options**

- Forehead lines & frown lines (glabella)
- Crow's feet
- Brow lift
- Bunny lines (lines on the nose)
- Chin dimples
- Masseter (teeth grinding / jaw clenching)
- Medical indications: blepharospasm, hemifacial spasm, epiphora

**The treatment process**

1. Consultation: wishes, medical history, personal advice
2. Injection session: 15–30 minutes, resume daily activities immediately
3. Follow-up after 2 weeks`,
    image: "/images/botox-image-1.jpg",
    duration: "15–30 minutes",
    recovery: "Resume activities immediately",
    highlights: [
      "BIG-registered ophthalmologist",
      "In-depth anatomical expertise",
      "CE/FDA-certified preparations",
      "Follow-up after 2 weeks",
    ],
  },
  {
    slug: "ptosis-correctie",
    title: "Ptosis Correction",
    category: "chirurgisch",
    shortDescription:
      "Surgical correction of drooping upper eyelid (ptosis) to restore visual field and natural appearance.",
    fullDescription: `Ptosis is a condition in which the upper eyelid hangs too low, which can affect both the visual field and appearance. Dr. Kloos specialises in ptosis surgery for both medical and cosmetic indications.

**Causes of ptosis**

- Congenital (congenital ptosis)
- Age-related (involutional ptosis)
- Neurological causes
- Post-traumatic

**The procedure**

Ptosis correction is performed under local anaesthesia. Depending on the cause and severity, levator resection or plication is chosen. The operation takes 60–90 minutes per eye.

**Recovery**

After the procedure, swelling and bruising are normal. Sutures are removed after 5–7 days. Full recovery takes 4–6 weeks.`,
    image: "/images/ptosis-surgery.jpg",
    duration: "60–90 minutes per eye",
    recovery: "4–6 weeks full recovery",
    highlights: [
      "Medical & cosmetic indications",
      "May be covered by insurance",
      "Local anaesthesia",
      "BIG-registered ophthalmologist",
    ],
  },
  {
    slug: "andere-behandelingen",
    title: "Other Treatments",
    category: "medisch",
    shortDescription:
      "Oculoplastic procedures such as entropion and ectropion correction by specialist ophthalmologists.",
    fullDescription: `In addition to eyelid correction and botox treatments, Skin & Vision Clinic offers a wide range of oculoplastic procedures.

**Entropion correction**

Entropion is a condition in which the eyelid turns inward, causing the eyelashes to irritate the eye surface. Surgical correction resolves this permanently.

**Ectropion correction**

With ectropion, the lower eyelid turns outward, leading to tear drainage problems and irritation. Correction is carried out surgically under local anaesthesia.

**Cosmetic treatments**

In addition to medical indications, we also offer other cosmetic treatments around the eye area. Contact us for a personal consultation.`,
    image: "/images/cosmetic-treatment.jpg",
    duration: "Depending on treatment",
    recovery: "Depending on treatment",
    highlights: [
      "Entropion & ectropion correction",
      "Medical indications",
      "BIG-registered ophthalmologist",
      "Personal treatment plan",
    ],
  },
];

function getTreatmentEn(slug: string): TreatmentEn | undefined {
  return treatmentsEn.find((t) => t.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "en") return {};
  const treatment = getTreatmentEn(slug);
  if (!treatment) return {};
  return buildMetadata({
    title: `${treatment.title} | Skin & Vision Clinic`,
    description: treatment.shortDescription,
    path: `/en/behandelingen/${slug}`,
  });
}

export default async function TreatmentPageEn({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "en") return null;

  const treatment = getTreatmentEn(slug);
  if (!treatment) notFound();

  const schema = buildProcedureSchema(treatment.title, treatment.shortDescription);
  const categoryLabel =
    treatment.category === "chirurgisch" ? "Surgery" : treatment.category === "botox" ? "Injectables" : "Medical";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative h-[320px] lg:h-[474px]">
        <Image src={treatment.image} alt={treatment.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0c]/60 to-[#0f0d0c]/80" />
        <div className="absolute inset-0 flex items-end max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <div className="text-white">
            <SectionLabel className="mb-4">{categoryLabel}</SectionLabel>
            <h1
              className="font-display font-light"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {treatment.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-[#2a2420]" style={{ fontFamily: "var(--font-sans)" }}>
              {treatment.fullDescription.split("\n\n").map((para, i) => {
                if (para.startsWith("##")) {
                  return (
                    <h2
                      key={i}
                      className="font-display font-light text-[#2a2420] mt-10 mb-4"
                      style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                    >
                      {para.replace("## ", "")}
                    </h2>
                  );
                }
                if (para.startsWith("**") && para.endsWith("**")) {
                  return <p key={i} className="font-semibold text-[#2a2420]">{para.replace(/\*\*/g, "")}</p>;
                }
                if (para.startsWith("- ") || para.includes("\n- ")) {
                  const items = para.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-[#2a2420] text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-[#b0a090] leading-relaxed mb-4 text-sm">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_32px_rgba(0,0,0,0.06)] lg:sticky lg:top-28">
              <SectionLabel className="mb-6">Quick overview</SectionLabel>
              <ul className="space-y-4 mb-8">
                {treatment.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#2a2420]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                    {h}
                  </li>
                ))}
                {treatment.duration && (
                  <li className="flex items-start gap-3 text-sm text-[#2a2420]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                    Duration: {treatment.duration}
                  </li>
                )}
                {treatment.recovery && (
                  <li className="flex items-start gap-3 text-sm text-[#2a2420]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                    Recovery: {treatment.recovery}
                  </li>
                )}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Questions about this treatment?"
        subtext="Dr. Kloos will gladly discuss your wishes and options during a personal consultation."
      />
    </>
  );
}
