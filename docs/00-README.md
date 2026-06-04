# Flourish High — Next.js Cinematic Landing
## Project Master Index

---

## What we're building

A **single-page Next.js 14 site** — one route (`/`), six full-height sections that scroll
continuously. Cinematic video backgrounds with a custom rAF crossfade loop, liquid-glass
design system, Framer Motion entrance animations, and a Refined Mercantile visual identity.

No CMS in this version. No routing. No backend. Deployable to Vercel in one push.

---

## Sections (scroll order)

| # | Section | File |
|---|---------|------|
| 1 | Navbar (fixed) | `components/layout/Navbar.tsx` |
| 2 | Hero | `components/sections/Hero.tsx` |
| 3 | Products / Categories | `components/sections/Products.tsx` |
| 4 | Services / Capabilities | `components/sections/Services.tsx` |
| 5 | Why Us / Stats | `components/sections/WhyUs.tsx` |
| 6 | Contact / RFQ | `components/sections/Contact.tsx` |
| 7 | Footer | `components/layout/Footer.tsx` |

---

## Plan documents

| File | Covers |
|------|--------|
| `01-scaffold.md` | `create-next-app`, dependencies, folder structure |
| `02-design-system.md` | Tokens, fonts, `globals.css`, Tailwind config, liquid-glass CSS |
| `03-fading-video.md` | `FadingVideo` component — exact rAF crossfade spec |
| `04-hero.md` | Hero section — BlurText, Navbar, stat cards, marquee |
| `05-products.md` | Products section — category cards, hover states |
| `06-services.md` | Services section — capability cards, tags, icons |
| `07-whyus.md` | Why Us — stat counters, differentiator grid |
| `08-contact.md` | Contact section — RFQ form (UI only), WhatsApp link |
| `09-footer.md` | Footer — links, reg numbers, social |
| `10-deploy.md` | Vercel deploy, DNS, env vars, Lighthouse checklist |

---

## Tech stack (pinned)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 — App Router, TypeScript |
| Styling | Tailwind CSS v3 + custom `globals.css` |
| Animation | Framer Motion v11 |
| Icons | Lucide React |
| Fonts | Cormorant Garamond + DM Sans (next/font/google) |
| Video BG | Free Pexels/Coverr MP4 URLs (swappable) |
| Hosting | Vercel |

---

## Design tokens (quick ref)

```
--fh-base:    #0e1210   near-black warm
--fh-surface: #f5f1eb   parchment off-white
--fh-green:   #2d6a4f   forest green (accent)
--fh-gold:    #c8a96e   warm gold (secondary accent)
--fh-muted:   #7a7068   secondary text

font-display → Cormorant Garamond (always italic in headings)
font-body    → DM Sans
```

---

## Estimated build time

Solo developer, components built one section at a time:

| Phase | Time |
|-------|------|
| Scaffold + design system | ~2 h |
| FadingVideo + Hero | ~3 h |
| Products + Services | ~2 h |
| Why Us + Contact + Footer | ~2 h |
| Polish + deploy | ~1 h |
| **Total** | **~10 h** |
