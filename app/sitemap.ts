import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { behandelingen } from "@/content/behandelingen";

const BASE = "https://skinandvision.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const static_routes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { nl: BASE, en: `${BASE}/en` } },
    },
    {
      url: `${BASE}/behandelingen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { nl: `${BASE}/behandelingen`, en: `${BASE}/en/behandelingen` } },
    },
    {
      url: `${BASE}/tarieven`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { nl: `${BASE}/tarieven`, en: `${BASE}/en/tarieven` } },
    },
    {
      url: `${BASE}/over-ons`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { nl: `${BASE}/over-ons`, en: `${BASE}/en/over-ons` } },
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { nl: `${BASE}/contact`, en: `${BASE}/en/contact` } },
    },
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
      alternates: { languages: { nl: `${BASE}/blog`, en: `${BASE}/en/blog` } },
    },
    {
      url: `${BASE}/ervaringen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: { languages: { nl: `${BASE}/ervaringen`, en: `${BASE}/en/ervaringen` } },
    },
    {
      url: `${BASE}/vergoeding-declaratie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          nl: `${BASE}/vergoeding-declaratie`,
          en: `${BASE}/en/vergoeding-declaratie`,
        },
      },
    },
    {
      url: `${BASE}/voor-verwijzers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
      alternates: {
        languages: {
          nl: `${BASE}/voor-verwijzers`,
          en: `${BASE}/en/voor-verwijzers`,
        },
      },
    },
  ];

  const treatment_routes: MetadataRoute.Sitemap = behandelingen.map((b) => ({
    url: `${BASE}/behandelingen/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    alternates: {
      languages: {
        nl: `${BASE}/behandelingen/${b.slug}`,
        en: `${BASE}/en/behandelingen/${b.slug}`,
      },
    },
  }));

  const blog_routes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.65,
    alternates: {
      languages: {
        nl: `${BASE}/blog/${post.slug}`,
        en: `${BASE}/en/blog/${post.slug}`,
      },
    },
  }));

  return [...static_routes, ...treatment_routes, ...blog_routes];
}
