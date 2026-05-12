import { mutation, internalAction, internalQuery } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { Resend } from "resend";

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    treatment: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("contact_submissions", {
      ...args,
      created_at: Date.now(),
      read: false,
    });
    await ctx.scheduler.runAfter(0, internal.contact.sendNotification, args);
    return id;
  },
});

export const getAllSubmissions = internalQuery({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contact_submissions").order("asc").collect();
  },
});

export const sendNotification = internalAction({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    treatment: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (_ctx, args) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Skin & Vision Clinic <noreply@skinandvision.nl>",
      to: "info@skinandvision.nl",
      subject: `Nieuw contactformulier van ${args.name}`,
      html: `
        <h2>Nieuw contactformulier ingediend</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold">Naam</td><td style="padding:8px">${args.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">E-mail</td><td style="padding:8px"><a href="mailto:${args.email}">${args.email}</a></td></tr>
          ${args.phone ? `<tr><td style="padding:8px;font-weight:bold">Telefoon</td><td style="padding:8px">${args.phone}</td></tr>` : ""}
          ${args.treatment ? `<tr><td style="padding:8px;font-weight:bold">Behandeling</td><td style="padding:8px">${args.treatment}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Bericht</td><td style="padding:8px;white-space:pre-wrap">${args.message}</td></tr>
        </table>
        <p style="margin-top:24px;color:#888;font-size:12px">Ingediend via skinandvision.nl</p>
      `,
    });
  },
});
