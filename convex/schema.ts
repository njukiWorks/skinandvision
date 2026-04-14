import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blog_posts: defineTable({
    slug: v.string(),
    title: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    author: v.string(),
    published_at: v.number(),
    published: v.boolean(),
    hero_image: v.optional(v.string()),
    reading_time: v.optional(v.number()),
    meta_description: v.optional(v.string()),
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published", "published_at"]),

  contact_submissions: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    treatment: v.optional(v.string()),
    message: v.string(),
    created_at: v.number(),
    read: v.boolean(),
  }),

  newsletter_subscribers: defineTable({
    email: v.string(),
    subscribed_at: v.number(),
    active: v.boolean(),
  }).index("by_email", ["email"]),

  reviews: defineTable({
    name: v.string(),
    rating: v.number(),
    treatment: v.optional(v.string()),
    text: v.string(),
    created_at: v.number(),
    approved: v.boolean(),
  }).index("by_approved_and_created_at", ["approved", "created_at"]),
});
