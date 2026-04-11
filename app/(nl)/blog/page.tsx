import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts } from "@/content/blog";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata = buildMetadata({
  title: "Blog | Skin & Vision Clinic",
  description:
    "Lees artikelen van Skin & Vision Clinic over ooglidcorrectie, botoxbehandelingen en oculoplastische zorg in Amsterdam.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#2a2420] h-[434px] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/post-1.jpg" alt="" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a2420]/85 via-[#2a2420]/60 to-[#2a2420]/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <SectionLabel className="mb-5 text-[#ff8835]">Kennisbank</SectionLabel>
          <h1
            className="text-white font-display font-light max-w-xl"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Blog
          </h1>
          <p className="text-white/65 text-sm mt-4 max-w-md leading-relaxed">
            Medische inzichten en tips van onze specialisten over ooglidcorrectie en botoxbehandelingen.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-[#faf8f5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-350"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-[#ff8835] text-white text-xs font-sans font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-[#b0a090] text-xs mb-4">
                      <span>
                        {new Date(post.date).toLocaleDateString("nl-NL", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span>·</span>
                      <span>{post.readingTime} min lezen</span>
                    </div>
                    <h2
                      className="text-[#2a2420] text-xl font-display mb-3 group-hover:text-[#ff8835] transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-[#b0a090] text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
