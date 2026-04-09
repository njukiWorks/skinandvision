# Skin & Vision Clinic — Build Progress

## ✅ Completed
- [x] CLAUDE.md trimmed to 12k chars
- [x] `skin-vision/` deleted — project lives at `skinandvision/` root
- [x] `next.config.ts` — redirects (nieuws→blog) + image formats
- [x] `app/globals.css` — brand tokens (gold/ivory/charcoal), Tailwind v4
- [x] `app/layout.tsx` — root layout, Cormorant/DM Sans/Lora fonts, GTM
- [x] `app/page.tsx` — redirects `/` → `/nl`
- [x] `proxy.ts` — lang routing (Dutch at root, EN at /en/)
- [x] `lib/utils.ts` — cn(), formatPrice()
- [x] `lib/metadata.ts` — buildMetadata() helper
- [x] `lib/seo.ts` — JSON-LD schemas (MedicalBusiness, MedicalProcedure, BlogPosting)
- [x] `content/tarieven.ts` — all prices +€50 applied
- [x] `content/behandelingen.ts` — 4 treatment entries
- [x] `content/blog.ts` — 2 full Dutch blog articles
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
- [x] `components/sections/NewsletterSignup.tsx`
- [x] `components/forms/ContactForm.tsx` — react-hook-form + zod
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
- [x] `app/sitemap.ts`
- [x] `app/robots.ts`
- [x] **Build passes** — 17 pages, 0 errors

## 🔲 Remaining

### Convex Backend (optional — site works without it)
- [ ] `npx convex init` + `convex/schema.ts`
- [ ] `convex/contact.ts` — wire ContactForm mutation
- [ ] `convex/newsletter.ts` — wire NewsletterSignup mutation
- [ ] `convex/blog.ts`

### Deployment
- [ ] Create `.env.local` with real values (GTM_ID, CONVEX_URL, etc.)
- [ ] Push to GitHub private repo
- [ ] Connect Vercel, set env vars
- [ ] Configure domain `skinandvision.nl`
- [ ] `npx convex deploy` to production

### Nice-to-have
- [ ] `components/forms/NewsletterForm.tsx` (extracted standalone)
- [ ] `/en/` English home page content
- [ ] `not-found.tsx` custom 404
- [ ] OG image `public/og-default.jpg`
