import { query, mutation, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { Resend } from "resend";

export const submit = mutation({
  args: {
    name: v.string(),
    rating: v.number(),
    treatment: v.optional(v.string()),
    text: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("reviews", {
      ...args,
      created_at: Date.now(),
      approved: false,
    });
    await ctx.scheduler.runAfter(0, internal.reviews.sendNotification, args);
    return id;
  },
});

export const sendNotification = internalAction({
  args: {
    name: v.string(),
    rating: v.number(),
    treatment: v.optional(v.string()),
    text: v.string(),
  },
  handler: async (_ctx, args) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const stars = "★".repeat(args.rating) + "☆".repeat(5 - args.rating);
    await resend.emails.send({
      from: "Skin & Vision Clinic <noreply@skinandvision.nl>",
      to: "info@skinandvision.nl",
      subject: `Nieuwe recensie van ${args.name} (${stars})`,
      html: `
        <h2>Nieuwe recensie ingediend — wacht op goedkeuring</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold">Naam</td><td style="padding:8px">${args.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Beoordeling</td><td style="padding:8px;font-size:18px">${stars}</td></tr>
          ${args.treatment ? `<tr><td style="padding:8px;font-weight:bold">Behandeling</td><td style="padding:8px">${args.treatment}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Recensie</td><td style="padding:8px;white-space:pre-wrap">${args.text}</td></tr>
        </table>
        <p style="margin-top:16px;color:#555">Log in op het Convex dashboard om de recensie goed te keuren.</p>
        <p style="margin-top:8px;color:#888;font-size:12px">Ingediend via skinandvision.nl</p>
      `,
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
