# 10 — Deploy, Vercel & Launch Checklist

---

## Local dev

```bash
npm run dev        # http://localhost:3000
npm run build      # production build — check for TS errors
npm run start      # test production build locally
```

---

## Vercel deploy (zero-config)

```bash
npm i -g vercel
vercel              # follow prompts — links to Vercel project
vercel --prod       # push to production
```

### Custom domain

1. In Vercel dashboard → Project → Settings → Domains → Add `flourishhigh.com`
2. Vercel provides DNS records:
   - `A` record: `flourishhigh.com` → `76.76.21.21`
   - `CNAME`: `www.flourishhigh.com` → `cname.vercel-dns.com`
3. Add in your domain registrar (GoDaddy / Namecheap / etc.)
4. Propagates in 5–30 min. Vercel auto-provisions SSL.

---

## Environment variables

This version has **no env vars** — the form is UI-only and no API keys are needed.

When you wire up the RFQ form later, add:

```bash
# In Vercel dashboard → Settings → Environment Variables
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=info@flourishhigh.com
```

---

## `next.config.ts` — video domains (optional)

If you self-host videos later, add to `remotePatterns`. For now (Pexels CDN URLs),
no config change is needed — `<video src="...">` isn't subject to Next.js image domain rules.

```ts
const config: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "videos.pexels.com" },
    ],
  },
};
```

---

## Performance: video loading tip

Pexels free URLs can be slow on first load. For production, download the MP4s and
host them on:
- **Vercel Blob** (`@vercel/blob`) — cheap, CDN-backed
- **Cloudflare R2** — free egress, S3-compatible
- **Bunny.net** — cheapest video CDN for India-region traffic

```tsx
// Swap the src constants in each section component:
const HERO_VIDEO     = "https://your-cdn.com/hero.mp4";
const SERVICES_VIDEO = "https://your-cdn.com/services.mp4";
const CONTACT_VIDEO  = "https://your-cdn.com/contact.mp4";
```

---

## Pre-launch checklist

### Content
- [ ] Replace placeholder partner names with real ones (or remove strip)
- [ ] Fill in IEC, GST registration numbers in Footer
- [ ] Add real phone number and email
- [ ] Add real address
- [ ] Replace `XXXXXXXXXX` WhatsApp number with actual business number
- [ ] Replace stat numbers (500+, 20+, 200+) with real figures if different
- [ ] Replace placeholder cert names with actual held certifications

### Technical
- [ ] `npm run build` completes with zero TypeScript errors
- [ ] All 3 videos load on mobile (test on real device, not just DevTools)
- [ ] FadingVideo crossfades correctly on Safari (test `-webkit-backdrop-filter`)
- [ ] Navbar scroll behaviour works (glass effect on scroll)
- [ ] Mobile menu opens and closes
- [ ] Form fields are tappable on mobile (44px min touch target)
- [ ] No horizontal overflow at 375px viewport
- [ ] WhatsApp deep link opens correctly on mobile

### SEO
- [ ] `metadata` title and description in `layout.tsx` filled with real copy
- [ ] OG image created: `public/og-image.png` (1200×630px)
- [ ] Add to `layout.tsx` metadata:
  ```ts
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630 }] }
  ```
- [ ] `robots.ts` (optional but good):
  ```ts
  // app/robots.ts
  export default function robots() {
    return { rules: { userAgent: "*", allow: "/" } };
  }
  ```

### Lighthouse targets

| Metric | Target |
|--------|--------|
| Performance | ≥ 85 (video BG limits this — acceptable) |
| Accessibility | ≥ 95 |
| Best Practices | 100 |
| SEO | 100 |

**Performance tips if score is low:**
- Add `loading="lazy"` fallback poster images to `<video>` tags
- Add `poster="..."` attribute to each `<video>` (shows while video loads)
- The 120% hero video is intentional — it will slightly hurt LCP. Acceptable trade-off for the cinematic effect.

---

## After launch: wiring up the RFQ form

When ready, install Resend and create the API route:

```bash
npm install resend react-hook-form @hookform/resolvers zod
```

Create `src/app/api/contact/route.ts` — see Phase 2 plan doc from the full redesign plan
for the full implementation including Zod schema and Resend email template.
