import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const submit = mutation({
  args: {
    name: v.string(),
    rating: v.number(),
    treatment: v.optional(v.string()),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("reviews", {
      ...args,
      created_at: Date.now(),
      approved: false,
    });
  },
});

export const getApproved = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("reviews")
      .withIndex("by_approved_and_created_at", (q) => q.eq("approved", true))
      .order("desc")
      .collect();
  },
});
