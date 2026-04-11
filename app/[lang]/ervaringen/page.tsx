import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";

const ZORGKAART_URL =
  "https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return {};
  return buildMetadata({
    title: "Reviews & Experiences",
    description:
      "Read patient experiences at Skin & Vision Clinic Amsterdam. 9.9/10 on ZorgkaartNederland. Share your own experience.",
    path: "/en/ervaringen",
  });
}

const reviews = [
  {
    name: "M. van der Berg",
    treatment: "Upper Eyelid Correction",
    rating: 5,
    date: "March 2025",
    text: "After years of suffering from drooping eyelids that impaired my visual field, I finally took the step. Dr. Kloos helped me excellently. The result is wonderful — I look rested and fresh. Communication before and after the procedure was perfect.",
  },
  {
    name: "A. Jansen",
    treatment: "Botox Treatments",
    rating: 5,
    date: "February 2025",
    text: "I was initially sceptical about botox, but Dr. Kloos's expertise as an ophthalmologist gave me the confidence I was looking for. The result is subtle and completely natural. The treatment was virtually painless and the team was exceptionally friendly.",
  },
  {
    name: "T. Smit",
    treatment: "Ptosis Correction",
    rating: 5,
    date: "January 2025",
    text: "Professional clinic with a warm welcome. Dr. Kloos took plenty of time for my consultation and explained everything clearly. The procedure went smoothly and recovery was quick. I am very satisfied with the result.",
  },
  {
    name: "L. de Vries",
    treatment: "Lower Eyelid Correction",
    rating: 5,
    date: "December 2024",
    text: "Excellent care from start to finish. Clear explanation beforehand about the procedure and possible risks. After the procedure I felt completely at ease and recovery went smoothly. Very happy with the result!",
  },
  {
    name: "R. Bakker",
    treatment: "Eyelid Correction (both eyes)",
    rating: 5,
    date: "November 2024",
    text: "Dr. Kloos is a true professional. He listens carefully to your wishes and gives honest advice. The clinic is calm and professionally set up. I would definitely recommend him to anyone considering eyelid correction.",
  },
  {
    name: "C. van Houten",
    treatment: "Periocular Botox",
    rating: 5,
    date: "October 2024",
    text: "As an ophthalmologist, Dr. Kloos has unique knowledge of the anatomy around the eyes. This gives extra confidence for botox treatments in that area. The result is natural and exactly what I wanted. Absolutely coming back for the next treatment.",
  },
];

export default async function ReviewsPageEn({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "en") return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[474px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/about-img.jpg" alt="" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/88 via-[#2a2420]/65 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-24 lg:py-36">
          <div className="flex items-center gap-3 mb-4 md:mb-5">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Patient experiences</span>
          </div>
          <h1
            className="text-white font-display font-light leading-tight mb-5 max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            What our <em className="italic text-[#ff8835]">patients</em> say
          </h1>
          <p className="text-white/65 text-sm leading-relaxed max-w-md mb-8">
            Your satisfaction is our greatest compliment.
          </p>
          {/* Score badge */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
            <div>
              <div className="text-2xl font-display font-light text-[#ff8835]" style={{ fontFamily: "var(--font-display)" }}>9.9</div>
              <div className="text-[10px] text-white/50 uppercase tracking-widest">/ 10</div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <div className="text-yellow-400 text-sm leading-none mb-1">★★★★★</div>
              <a href={ZORGKAART_URL} target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs hover:text-[#ff8835] transition-colors">
                ZorgkaartNederland
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-[#faf8f5] rounded-2xl p-8 flex flex-col gap-5 hover:shadow-[0_8px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-400 text-lg gap-0.5">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="text-[#b0a090] text-xs">{review.date}</span>
                </div>
                <p className="text-[#2a2420] text-sm leading-relaxed italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-[#e8e0d4] pt-4">
                  <p className="text-[#2a2420] text-sm font-semibold">{review.name}</p>
                  <p className="text-[#ff8835] text-xs mt-0.5 font-medium">{review.treatment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={ZORGKAART_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#ff8835] text-[#ff8835] font-semibold rounded-full px-8 py-3.5 text-sm hover:bg-[#fff0e6] hover:-translate-y-0.5 transition-all duration-300"
            >
              All reviews on ZorgkaartNederland
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Share your experience */}
      <section className="bg-[#f2ede6] py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#ff8835]" />
            <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Your experience</span>
            <span className="w-8 h-px bg-[#ff8835]" />
          </div>
          <h2
            className="text-[#2a2420] font-display font-light mb-4"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
          >
            Share your <em className="italic text-[#ff8835]">experience</em>
          </h2>
          <p className="text-[#b0a090] mb-8 leading-relaxed">
            Your opinion is very important to us. Whether you are satisfied with a treatment,
            the service, or the atmosphere in our clinic — we love to hear it. Your review helps
            others make an informed choice.
          </p>
          <a
            href={ZORGKAART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff8835] text-white font-semibold rounded-full px-8 py-4 hover:bg-[#e8773a] hover:shadow-[0_12px_32px_rgba(255,136,53,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Write a review
          </a>
        </div>
      </section>
    </>
  );
}
