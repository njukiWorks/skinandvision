import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";

const BASE = "https://skinandvision.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const static_routes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/over-ons`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/behandelingen`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/tarieven`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const blog_routes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...static_routes, ...blog_routes];
}
