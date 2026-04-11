import { notFound } from "next/navigation";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { buildProcedureSchema } from "@/lib/seo";
import { behandelingen, getTreatmentBySlug } from "@/content/behandelingen";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";

const BOOKING_URL =
  "https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo";

export function generateStaticParams() {
  return behandelingen.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return buildMetadata({
    title: treatment.title,
    description: treatment.shortDescription,
    path: `/behandelingen/${slug}`,
  });
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const schema = buildProcedureSchema(treatment.title, treatment.shortDescription);

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
            <SectionLabel className="mb-4">{treatment.category === "chirurgisch" ? "Chirurgie" : treatment.category === "botox" ? "Injectables" : "Medisch"}</SectionLabel>
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
            <div
              className="prose prose-lg max-w-none text-[#2a2420]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
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
                  const items = para.split("\n").filter(l => l.startsWith("- "));
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
              <SectionLabel className="mb-6">Snel overzicht</SectionLabel>
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
                    Duur: {treatment.duration}
                  </li>
                )}
                {treatment.recovery && (
                  <li className="flex items-start gap-3 text-sm text-[#2a2420]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                    Herstel: {treatment.recovery}
                  </li>
                )}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center bg-[#ff8835] text-white font-sans font-medium rounded-full px-8 py-3.5 text-sm hover:bg-[#ffaa6b] transition-colors"
              >
                Afspraak Maken
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="Heeft u vragen over deze behandeling?" subtext="Dr. Kloos bespreekt graag uw wensen en mogelijkheden tijdens een persoonlijk consultatie." />
    </>
  );
}
