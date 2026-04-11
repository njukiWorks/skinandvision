import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { buildBlogSchema } from "@/lib/seo";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import SectionLabel from "@/components/ui/SectionLabel";
import CTABanner from "@/components/sections/CTABanner";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    image: post.heroImage,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const schema = buildBlogSchema({
    title: post.title,
    description: post.metaDescription,
    date: post.date,
    url: `https://skinandvision.nl/blog/${post.slug}`,
    image: `https://skinandvision.nl${post.heroImage}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="relative h-[320px] lg:h-[434px]">
        <Image src={post.heroImage} alt={post.title} fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0d0c]/40 to-[#0f0d0c]/80" />
        <div className="absolute inset-0 flex items-end max-w-4xl mx-auto px-6 lg:px-12 pb-16">
          <div className="text-white">
            <span className="inline-block bg-[#ff8835] text-white text-xs font-sans font-semibold px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1
              className="font-display font-light leading-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
            >
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/60 text-xs mt-4">
              <span>
                {new Date(post.date).toLocaleDateString("nl-NL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span>·</span>
              <span>{post.readingTime} min lezen</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#faf8f5] py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#b0a090] text-sm hover:text-[#ff8835] transition-colors mb-10"
          >
            ← Terug naar blog
          </Link>

          <article className="space-y-6">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="font-display font-light text-[#2a2420] mt-10 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.includes(":**")) {
                const lines = block.split("\n");
                return (
                  <div key={i} className="space-y-2">
                    {lines.map((line, j) => {
                      if (line.startsWith("**") && line.endsWith("**")) {
                        return <p key={j} className="font-semibold text-[#2a2420] text-sm">{line.replace(/\*\*/g, "")}</p>;
                      }
                      if (line.startsWith("- ")) {
                        return (
                          <div key={j} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                            <span className="text-[#2a2420] text-sm leading-relaxed">{line.replace("- ", "")}</span>
                          </div>
                        );
                      }
                      return <p key={j} className="text-[#b0a090] text-sm leading-relaxed">{line}</p>;
                    })}
                  </div>
                );
              }
              if (block.startsWith("- ") || block.includes("\n- ")) {
                const items = block.split("\n").filter(l => l.startsWith("- "));
                return (
                  <ul key={i} className="space-y-2">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8835] shrink-0 mt-2" />
                        <span className="text-[#2a2420] text-sm leading-relaxed">{item.replace("- ", "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-[#b0a090] text-sm leading-relaxed">
                  {block}
                </p>
              );
            })}
          </article>
        </div>
      </section>

      <CTABanner
        headline="Klaar voor een afspraak?"
        subtext="Maak direct een afspraak bij Skin & Vision Clinic."
      />
    </>
  );
}
