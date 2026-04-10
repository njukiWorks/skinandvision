import { query } from "./_generated/server";
import { v } from "convex/values";

export const getPublished = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("blog_posts")
      .withIndex("by_published", (q) => q.eq("published", true))
      .order("desc")
      .collect();
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blog_posts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});
