import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

export default function BlogPreview() {
  const posts = blogPosts.slice(0, 2);

  return (
    <section className="bg-[#faf8f5] py-24 md:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ff8835]" />
              <span className="text-[#ff8835] text-xs uppercase tracking-[0.25em] font-sans font-semibold">Kennisbank</span>
            </div>
            <h2
              className="text-[#2a2420] font-display font-light"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              }}
            >
              Laatste <em className="italic text-[#ff8835]">artikelen</em>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-[#ff8835] text-sm font-medium hover:gap-3 transition-all duration-300 whitespace-nowrap"
          >
            Alle artikelen
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-[0_4px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-400 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0c]/40 to-transparent" />
                <span className="absolute top-4 left-4 bg-[#ff8835] text-white text-[10px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide">
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
                  <span className="w-1 h-1 rounded-full bg-[#e8e0d4]" />
                  <span>{post.readingTime} min lezen</span>
                </div>
                <h3
                  className="text-[#2a2420] font-display font-light mb-3 group-hover:text-[#ff8835] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                >
                  {post.title}
                </h3>
                <p className="text-[#b0a090] text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[#ff8835] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  Lees artikel
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#ff8835] text-sm font-medium">
            Alle artikelen bekijken →
          </Link>
        </div>
      </div>
    </section>
  );
}
