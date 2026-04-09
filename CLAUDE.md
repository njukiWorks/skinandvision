# CLAUDE.md — Skin & Vision Clinic Website Rebuild
### Medical and Cosmetic Eyelid Care, BIG-registered ophthalmologists Amsterdam

## 1. MISSION & CONSTRAINTS

**Goal:** Rebuild skinandvision.nl into a luxury Next.js platform. Aesthetic: Bella Beauty Home 5 — cinematic hero sections, large editorial serif typography, warm neutral/cream backgrounds, gold accents, generous whitespace, scroll-reveal animations.

**Stack:** Next.js 16 (App Router, `app/` at root), TypeScript, Tailwind CSS v4, Convex (blog/contact/newsletter). Use `proxy.ts` (not `middleware.ts`) for routing.

| Rule | Detail |
|---|---|
| Language | Dutch primary. All page copy in Dutch. `lang="nl"` |
| Accent color | `#ff8835` (orange-gold) — CTAs, underlines, active states |
| Replace | "Wrinkle Treatment(s)" / "Rimpelbehandeling(en)" → **"Botoxbehandelingen"** everywhere |
| Prices | All procedure prices **+€50** from old-site values |
| News | Remove entirely; replace with Blog. Min 2 articles |
| Booking URL | `https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo` |
| ZorgkaartNL | `https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894` |
| Assets | From `/old-site/images/` → `public/images/`, logos → `public/logo/` |
| No auth | Public website only |

**Clinic details:**
- Address: Pietersbergweg 291, 1105 BM Amsterdam
- Phone: +31 6 4609 6641
- Email: info@skinandvision.nl
- Doctor: Dr. R.J.H.M. Kloos, BIG-registered ophthalmologist (since 1996)
- Stats: 28+ jaar ervaring · 5000+ patiënten · 9.9/10 ZorgkaartNederland

## 2. VISUAL DESIGN SYSTEM

```css
:root {
  --color-gold:       #ff8835;
  --color-gold-light: #ffaa6b;
  --color-gold-muted: #fff0e6;
  --color-ivory:      #faf8f5;
  --color-linen:      #f2ede6;
  --color-stone:      #e8e0d4;
  --color-taupe:      #b0a090;
  --color-charcoal:   #2a2420;
  --color-ink:        #1a1614;
  --color-obsidian:   #0f0d0c;
}
```

**Fonts:** Cormorant Garamond (display/headlines), DM Sans (UI/labels/body), Lora (long body text)

**Typography scale (Tailwind custom):**
```
display: clamp(3.5rem, 8vw, 7rem)   hero headline
h1:      clamp(2.5rem, 5vw, 4.5rem)
h2:      clamp(1.8rem, 3vw, 3rem)
h3:      clamp(1.3rem, 2vw, 1.8rem)
```

**Motion (Framer Motion):**
```typescript
FADE_UP  = { initial:{opacity:0,y:32}, animate:{opacity:1,y:0}, transition:{duration:0.7,ease:[0.25,0.1,0.25,1]} }
STAGGER  = { animate:{transition:{staggerChildren:0.12}} }
```
Cards: `hover:-translate-y-1 hover:shadow-[0_8px_48px_rgba(0,0,0,0.12)] transition-all duration-350`

**Component tokens:**
- Primary CTA: `bg-[#ff8835] text-white rounded-full px-8 py-3.5 hover:bg-[#ffaa6b] transition`
- Secondary CTA: `border border-[#ff8835] text-[#ff8835] rounded-full px-8 py-3.5 hover:bg-[#fff0e6] transition`
- Section label: `text-[#ff8835] text-xs font-sans uppercase tracking-[0.2em] font-semibold`
- Gold divider: `w-12 h-0.5 bg-[#ff8835]`
- Card: `bg-white rounded-2xl shadow-[0_4px_32px_rgba(0,0,0,0.06)]`
- Nav scrolled: `bg-white/90 backdrop-blur-md shadow-sm`
- Section padding: `py-24 md:py-32 lg:py-40`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`

## 3. PROJECT STRUCTURE

```
skin-vision/
├── proxy.ts                        ← lang redirect (Dutch=root, EN=/en/)
├── next.config.ts
├── app/
│   ├── layout.tsx                  ← root layout, fonts, GTM head/body
│   ├── page.tsx                    ← redirect to /nl
│   ├── globals.css
│   ├── [lang]/
│   │   ├── layout.tsx              ← Header + Footer for nl + en home
│   │   └── page.tsx                ← Home page sections
│   ├── (nl)/                       ← Dutch inner pages (no URL prefix)
│   │   ├── layout.tsx
│   │   ├── behandelingen/page.tsx
│   │   ├── behandelingen/[slug]/page.tsx
│   │   ├── tarieven/page.tsx
│   │   ├── over-ons/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   └── contact/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx              ← transparent→frosted scroll, mobile hamburger
│   │   ├── Footer.tsx              ← 3-col dark charcoal
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── StatsBar.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── CTABanner.tsx
│   │   └── NewsletterSignup.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── AnimatedCounter.tsx
│   │   └── PriceCard.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx         ← react-hook-form + zod + Convex
│   │   └── NewsletterForm.tsx
│   └── analytics/
│       └── GoogleTagManager.tsx
├── lib/
│   ├── metadata.ts                 ← buildMetadata() helper
│   ├── seo.ts                      ← JSON-LD schema builders
│   └── utils.ts
├── content/
│   ├── behandelingen.ts
│   └── tarieven.ts
└── convex/
    ├── schema.ts
    ├── blog.ts
    ├── contact.ts
    └── newsletter.ts
```

## 4. ROUTING ARCHITECTURE

- `app/page.tsx` → `redirect('/nl')`
- `app/[lang]/page.tsx` → home for `/nl` and `/en`
- `app/[lang]/layout.tsx` → layout with Header/Footer
- `app/(nl)/` → route group for Dutch inner pages at root URLs
- `proxy.ts` → detects locale, redirects root `/` to `/nl`

Header `root` variable: `lang === "nl" ? "" : "/en"` — Dutch nav links are root-level paths.

## 5. PAGES

### Home (`/nl`)
Sections in order:
1. **HeroSection** — Full-viewport bg image (`hero-bg.jpg`), dark overlay, stagger-animated headline (Cormorant italic), gold pill CTA "Maak een afspraak" → booking URL, ghost link "Meer over ons" → `/over-ons`
2. **StatsBar** — Animated counters: 28+ jaar · 5000+ patiënten · 9.9/10. Gold numbers, charcoal label, linen bg strip
3. **ServicesGrid** — 3 cards: Ooglidcorrectie / Botoxbehandelingen / Andere behandelingen. Hover lift + gold overlay
4. **AboutTeaser** — Asymmetric: Dr. Kloos photo left, editorial copy right + gold divider + ZorgkaartNL trust badge
5. **TestimonialsSection** — Patient reviews from old-site, star ratings, gold accents
6. **BlogPreview** — Latest 2 posts (static from content/)
7. **CTABanner** — Obsidian bg, large Cormorant italic, gold CTA
8. **NewsletterSignup** — Linen bg, email → Convex mutation

### `/over-ons`
- PageHero, MissionBlock, DoctorProfile (Dr. Kloos bio + ZorgkaartNL link), CertificationsBar, CTABanner

### `/behandelingen`
- Treatment cards: Ooglidcorrectie, Botoxbehandelingen, Ptosis correctie, Andere oculoplastische ingrepen
- Each links to `/behandelingen/[slug]` with full description + MedicalProcedure JSON-LD + booking CTA

### `/tarieven`
- PriceCard components per category. Luxury card layout, gold accents, consultation CTA

### `/blog`
- Blog index, cards with hero image / category / title / excerpt / reading time

### `/contact`
- ContactForm (name, email, phone?, behandeling dropdown, bericht) → Convex
- Clinic info, Google Maps embed, booking CTA button

## 6. NAVBAR

```typescript
const navLinks = [
  { label: 'Behandelingen', href: '/behandelingen' },
  { label: 'Over Ons',      href: '/over-ons' },
  { label: 'Tarieven',      href: '/tarieven' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Contact',       href: '/contact' },
]
// Right: "Afspraak Maken" gold pill CTA → booking URL
// Logo: /logo/main-logo.png
// Transparent on hero → white/90 + backdrop-blur on scroll > 80px
// Mobile: hamburger → full-screen overlay with stagger
```

## 7. FOOTER

3-column layout (desktop), stacked mobile. Charcoal bg, ivory text, gold accents.
- Col 1: Logo + tagline + socials
- Col 2: Nav links
- Col 3: Address · Phone · Email · Opening hours
- Bottom: © copyright · KvK · Privacy policy

## 8. PRICING (+€50 from old-site)

**Botoxbehandelingen:**
| Behandeling | Oud | Nieuw |
|---|---|---|
| Baby Botox ½ zone | €80 | **€130** |
| Botox 1 zone | €150 | **€200** |
| Botox 2 zones | €290 | **€340** |
| Botox 3 zones | €440 | **€490** |
| Epiphora | €80 | **€130** |
| Wenkbrauw lifting | €80 | **€130** |
| Bunny lines | €80 | **€130** |
| Kin putjes | €80 | **€130** |
| Masseter (knarsetanden) | €290 | **€340** |
| Blepharospasme | €290 | **€340** |
| Hemifaciale spasme | €440 | **€490** |

**Chirurgische behandelingen:**
| Behandeling | Oud | Nieuw |
|---|---|---|
| Bovenooglidcorrectie (beide ogen) | €800 | **€850** |
| Onderooglidcorrectie | €1000 | **€1050** |
| Ptosis operatie 1 oog | €1000 | **€1050** |
| Ptosis operatie beide ogen | €1500 | **€1550** |
| Combinatie boven + onder | €1700 | **€1750** |

## 9. CONVEX BACKEND

```typescript
// convex/schema.ts
blog_posts: defineTable({
  slug, title, excerpt, content, category, author,
  published_at: v.number(), published: v.boolean(),
  hero_image?: v.string(), reading_time?: v.number(), meta_description?: v.string()
}).index("by_slug",["slug"]).index("by_published",["published","published_at"])

contact_submissions: defineTable({
  name, email, phone?: v.string(), treatment?: v.string(),
  message, created_at: v.number(), read: v.boolean()
})

newsletter_subscribers: defineTable({
  email, subscribed_at: v.number(), active: v.boolean()
}).index("by_email",["email"])
```

## 10. BLOG ARTICLES

**Article 1:** slug `ooglidcorrectie-wat-u-moet-weten`
- Title: "Ooglidcorrectie: Alles wat u moet weten over blepharoplastie"
- Date: 2025-03-10 · Category: Behandelingen · ~6 min
- Topics: wat is blepharoplastie, medisch vs esthetisch, stap-voor-stap ingreep, waarom oogarts, CTA

**Article 2:** slug `botoxbehandelingen-door-oogarts`
- Title: "Botoxbehandelingen door een oogarts: precisie die het verschil maakt"
- Date: 2025-04-02 · Category: Botoxbehandelingen · ~5 min
- Topics: botulinetoxine uitleg, perioculair gebied risico's, behandelingen, veiligheid, CTA

Both articles in Dutch, luxury editorial tone, medically accurate. CTA → ClinicMinds booking URL.

## 11. SEO & METADATA

```typescript
// lib/metadata.ts
export function buildMetadata({ title, description, path, image }): Metadata {
  return {
    title, description,
    metadataBase: new URL("https://skinandvision.nl"),
    alternates: { canonical: `https://skinandvision.nl${path}` },
    openGraph: { title, description, siteName: "Skin & Vision Clinic", locale: "nl_NL" },
  }
}
```

JSON-LD schemas:
- Homepage: MedicalBusiness (name, address, telephone, medicalSpecialty, sameAs ZorgkaartNL)
- Treatments: MedicalProcedure
- Blog: BlogPosting

## 12. ENVIRONMENT VARIABLES

```bash
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_SITE_URL=https://skinandvision.nl
NEXT_PUBLIC_BOOKING_URL=https://schedule.clinicminds.com/?clinic=636e9065-78db-11f0-953e-0667c42d6c5b&hide-logo
NEXT_PUBLIC_ZORGKAART_URL=https://www.zorgkaartnederland.nl/zorgverlener/oogarts-kloos-r-j-h-m-126894
```

## 13. next.config.ts

```typescript
redirects: [
  { source: '/nieuws', destination: '/blog', permanent: true },
  { source: '/nieuws/:path*', destination: '/blog', permanent: true },
]
images: { formats: ['image/avif', 'image/webp'] }
```

## 14. QUALITY GATES

- Lighthouse: Performance ≥90, SEO 100, A11y ≥90
- Zero occurrences of "Wrinkle" / "Rimpelbehandeling" in any output
- All prices exactly +€50 from old-site values
- `lang="nl"` on all pages, hreflang present
- No "Nieuws" in nav/footer — only "Blog"
- All external links working (ZorgkaartNL + ClinicMinds)
- ContactForm → Convex mutation working
- Mobile responsive: 320px / 375px / 768px / 1280px

---
*Version 2.0 · April 2026*
