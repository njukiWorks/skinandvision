import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("newsletter_subscribers")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      if (!existing.active) {
        await ctx.db.patch(existing._id, { active: true });
      }
      return { status: "already_subscribed" };
    }

    await ctx.db.insert("newsletter_subscribers", {
      email: args.email,
      subscribed_at: Date.now(),
      active: true,
    });
    return { status: "subscribed" };
  },
});
