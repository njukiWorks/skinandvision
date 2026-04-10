# Skin & Vision Clinic — Build Progress

## ✅ Completed

### Foundation
- [x] CLAUDE.md trimmed to 12k chars
- [x] `skin-vision/` deleted — project lives at `skinandvision/` root
- [x] `next.config.ts` — redirects (nieuws→blog) + image formats
- [x] `app/globals.css` — brand tokens (gold/ivory/charcoal), Tailwind v4
- [x] `app/layout.tsx` — root layout, Cormorant/DM Sans/Lora fonts, GTM inline
- [x] `app/page.tsx` — redirects `/` → `/nl`
- [x] `proxy.ts` — lang routing (Dutch at root, EN at /en/)
- [x] `lib/utils.ts` — cn(), formatPrice()
- [x] `lib/metadata.ts` — buildMetadata() helper
- [x] `lib/seo.ts` — JSON-LD schemas (MedicalBusiness, MedicalProcedure, BlogPosting)

### Content
- [x] `content/tarieven.ts` — all prices +€50 applied
- [x] `content/behandelingen.ts` — 4 treatment entries
- [x] `content/blog.ts` — 2 full Dutch blog articles

### UI Components
- [x] `components/ui/Button.tsx`
- [x] `components/ui/SectionLabel.tsx`
- [x] `components/ui/ScrollReveal.tsx`
- [x] `components/ui/AnimatedCounter.tsx`
- [x] `components/ui/PriceCard.tsx`
- [x] `components/layout/Navbar.tsx` — transparent→frosted scroll, mobile overlay
- [x] `components/layout/Footer.tsx` — 3-col, dark charcoal, gold accents
- [x] `components/sections/HeroSection.tsx` — full-viewport, stagger animation
- [x] `components/sections/StatsBar.tsx` — animated counters
- [x] `components/sections/ServicesGrid.tsx` — 3 treatment cards
- [x] `components/sections/AboutTeaser.tsx` — Dr. Kloos + ZorgkaartNL badge
- [x] `components/sections/TestimonialsSection.tsx`
- [x] `components/sections/BlogPreview.tsx`
- [x] `components/sections/CTABanner.tsx`
- [x] `components/sections/NewsletterSignup.tsx` — wired to /api/newsletter

### Forms
- [x] `components/forms/ContactForm.tsx` — react-hook-form + zod + zodResolver, wired to /api/contact

### Pages
- [x] `app/[lang]/layout.tsx` — shared Header + Footer
- [x] `app/[lang]/page.tsx` — home page (all sections assembled)
- [x] `app/(nl)/layout.tsx` — Dutch inner pages route group
- [x] `app/(nl)/behandelingen/page.tsx`
- [x] `app/(nl)/behandelingen/[slug]/page.tsx`
- [x] `app/(nl)/tarieven/page.tsx`
- [x] `app/(nl)/over-ons/page.tsx`
- [x] `app/(nl)/blog/page.tsx`
- [x] `app/(nl)/blog/[slug]/page.tsx`
- [x] `app/(nl)/contact/page.tsx` — ContactForm + Google Maps + booking CTA
- [x] `app/not-found.tsx` — custom 404, brand-styled
- [x] `app/sitemap.ts`
- [x] `app/robots.ts`

### API Routes
- [x] `app/api/contact/route.ts` — validates input, forwards to Convex HTTP API
- [x] `app/api/newsletter/route.ts` — validates input, forwards to Convex HTTP API

### Convex Backend
- [x] `convex/schema.ts` — blog_posts, contact_submissions, newsletter_subscribers
- [x] `convex/contact.ts` — submit mutation
- [x] `convex/newsletter.ts` — subscribe mutation (idempotent)
- [x] `convex/blog.ts` — getPublished + getBySlug queries

### Config & Deployment
- [x] `.env.local.example` — template with all required vars
- [x] `.vercelignore` — excludes old-site and large dirs
- [x] Build passes — 20+ pages, 0 errors

## 🔲 Remaining (manual steps)

### Convex Activation
1. Run `npx convex dev` — authenticates, creates `convex.json` and `convex/_generated/`
2. Run `npx convex deploy` — deploys functions to production
3. Copy the deployment URL into `NEXT_PUBLIC_CONVEX_URL`

### Vercel Deployment
1. Push repo to GitHub (private)
2. Import project in Vercel dashboard
3. Add env vars from `.env.local.example` (`vercel env add` or dashboard)
4. Deploy — Vercel auto-detects Next.js
5. Add custom domain `skinandvision.nl` → verify DNS

### Nice-to-have
- [ ] `public/og-default.jpg` — OG image for social sharing (1200×630)
- [ ] `/en/` English home page content
