# 05–09 — Remaining Sections

Products · Services · Why Us · Contact · Footer

---

# 05 — Products Section

**File:** `src/components/sections/Products.tsx`
**id:** `#products`
**bg:** FadingVideo (agricultural fields / spice market overhead)

### Video source
```
Pexels ID 7667722 — overhead drone of colorful spice market
https://videos.pexels.com/video-files/7667722/7667722-uhd_2560_1440_25fps.mp4
```

### Layout

```
Section header (kicker + headline)
───────────────────────────────────
3×2 product category grid
───────────────────────────────────
CTA row: "Can't find your product? Request custom sourcing →"
```

### Section header copy
```
KICKER:   // Our Products
HEADLINE: "Quality Goods,
           Globally Traded"
```

### 6 Product categories

```ts
const CATEGORIES = [
  {
    name:  "Spices & Herbs",
    desc:  "Turmeric, red chilli, cardamom, pepper, coriander — direct from Andhra Pradesh & Kerala.",
    tags:  ["FSSAI Cert", "Phytosanitary", "Export Grade"],
    icon:  "Leaf",
  },
  {
    name:  "Rice Varieties",
    desc:  "Basmati, Sona Masoori, Idly Rice, Ponni — sourced from Punjab, Telangana & Tamil Nadu.",
    tags:  ["Non-GMO", "APEDA Cert", "Custom Milling"],
    icon:  "Wheat",
  },
  {
    name:  "Pulses & Lentils",
    desc:  "Chana dal, toor dal, moong, urad — cleaned, sorted and export-packed.",
    tags:  ["Machine Cleaned", "Low Moisture", "Bulk & Retail"],
    icon:  "Circle",
  },
  {
    name:  "Edible Oils",
    desc:  "Cold-pressed coconut oil, groundnut oil, sesame oil — food-grade certified.",
    tags:  ["Cold Press", "Food Grade", "BRC Aligned"],
    icon:  "Droplets",
  },
  {
    name:  "FMCG Goods",
    desc:  "Packaged foods, personal care, household goods — bulk wholesale for distributors.",
    tags:  ["Multi-SKU", "Private Label", "MOQ Flexible"],
    icon:  "Package",
  },
  {
    name:  "Custom Sourcing",
    desc:  "Don't see your product? We'll source it from our 200+ verified Indian suppliers.",
    tags:  ["Any Commodity", "24hr Response", "Free Quote"],
    icon:  "Search",
  },
];
```

### Card component

```tsx
// Each card: liquid-glass, rounded-[1.25rem], p-6, min-h-[340px], flex col
// Top row: icon square (liquid-glass, 44×44, rounded-[0.75rem]) + tag chips (flex-wrap right)
// Flex-1 spacer
// Bottom: title (font-display italic text-3xl) + desc (text-sm font-body font-light)
// Hover: translateY(-4px), gold top border scales in (origin-left scale-x-0 → scale-x-100)

<motion.div
  whileHover={{ y: -4 }}
  className="liquid-glass rounded-[1.25rem] p-6 min-h-[340px] flex flex-col
             group relative cursor-pointer"
>
  {/* Gold hover border */}
  <span className="absolute top-0 left-0 right-0 h-[1.5px] bg-fh-gold
                   scale-x-0 group-hover:scale-x-100 origin-left
                   transition-transform duration-300 rounded-t-[1.25rem]" />

  {/* Top row */}
  <div className="flex items-start justify-between gap-4">
    <div className="liquid-glass w-11 h-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
    </div>
    <div className="flex flex-wrap justify-end gap-1.5 max-w-[65%]">
      {tags.map((tag) => (
        <span key={tag}
          className="liquid-glass rounded-full px-3 py-1 text-[11px]
                     font-body text-white/80 whitespace-nowrap">
          {tag}
        </span>
      ))}
    </div>
  </div>

  <div className="flex-1" />

  {/* Bottom */}
  <div className="mt-6">
    <h3 className="font-display italic text-3xl md:text-4xl text-white
                   tracking-[-1px] leading-none">{name}</h3>
    <p className="mt-3 text-sm font-body font-light text-white/80
                  leading-snug max-w-[32ch]">{desc}</p>
  </div>
</motion.div>
```

### Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-8 md:px-16 lg:px-20">
  {CATEGORIES.map((cat) => <ProductCard key={cat.name} {...cat} />)}
</div>
```

### Scroll entrance

Wrap the grid in a `motion.div` with `whileInView={{ opacity: 1, y: 0 }}`,
`initial={{ opacity: 0, y: 40 }}`, `viewport={{ once: true, amount: 0.1 }}`.

---

# 06 — Services Section

**File:** `src/components/sections/Services.tsx`
**id:** `#services`
**bg:** FadingVideo (container port / freight dock)

### Video source
```
Pexels ID 1321208 — aerial container port time-lapse
https://videos.pexels.com/video-files/1321208/1321208-uhd_2560_1440_30fps.mp4
```

### Layout (mirrors Capabilities section from prompt exactly)

```
Kicker: // Services
Headline: "Trade,
            evolved"

3-column card grid (identical structure to Products cards)
```

### 3 Service cards

```ts
const SERVICES = [
  {
    name: "Export Services",
    desc: "End-to-end sourcing, quality inspection, documentation and freight from India to your port.",
    tags: ["FOB / CIF / CFR", "APEDA Docs", "Pre-Ship Inspect", "Phytosanitary"],
    icon: "Ship",
  },
  {
    name: "Import Services",
    desc: "We procure goods internationally on your behalf — supplier vetting, customs clearance, last-mile.",
    tags: ["Supplier Vetting", "Customs Filing", "Lab Testing", "Bonded Warehouse"],
    icon: "PackageOpen",
  },
  {
    name: "Trade Consulting",
    desc: "HS code advisory, RoDTEP / duty optimisation, market entry research, and compliance guidance.",
    tags: ["HS Code Advice", "Duty Optimise", "Market Research", "Compliance"],
    icon: "FileSearch",
  },
];
```

Card structure is **identical** to Products cards. Reuse the same card component,
or extract a shared `<CapabilityCard>` used by both sections.

---

# 07 — Why Us Section

**File:** `src/components/sections/WhyUs.tsx`
**id:** `#why-us`
**bg:** Dark `#0e1210` (no video — let this section breathe as a static dark section)

### Layout

```
Section header (kicker + headline)
───────────────────────────────────
Stat counter row (4 numbers)
───────────────────────────────────
3-col differentiator card grid
───────────────────────────────────
Trust / certification badge row
```

### Copy

```
KICKER:   // Why Choose Us
HEADLINE: "Built on trust.
            Driven by results."
```

### 4 Stat counters

| Number | Label |
|--------|-------|
| `500+` | Shipments completed |
| `20+` | Countries served |
| `200+` | Verified suppliers |
| `15+` | Years combined experience |

**Animation:** Use Framer Motion `useMotionValue` + `animate()` to count up from 0
when the section enters viewport (`useInView`). Suffix the number with `+`.

```tsx
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

function CountUp({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const count  = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v) + suffix);

  useEffect(() => {
    if (inView) animate(count, target, { duration: 2, ease: "easeOut" });
  }, [inView]);

  return (
    <motion.span ref={ref} className="font-display italic text-5xl text-white tracking-[-2px]">
      {rounded}
    </motion.span>
  );
}
```

### 6 Differentiator cards (3-col grid)

```ts
const DIFFERENTIATORS = [
  { title: "Deep Sourcing Network",    desc: "200+ verified suppliers across Indian agricultural regions." },
  { title: "Compliance-First",         desc: "All shipments fully documented to destination-country standards." },
  { title: "24hr Quote Turnaround",    desc: "Quotes within 24 hours. Samples arranged within 2 weeks." },
  { title: "20+ Trade Lanes",          desc: "Established routes across Asia, MENA, and Europe." },
  { title: "Quality Guaranteed",       desc: "Pre-shipment inspection is standard on every order." },
  { title: "Long-Term Partnerships",   desc: "Average client relationship exceeds 3 years." },
];
```

Card style: dark `bg-white/5` surface, thin `border border-white/10`,
`rounded-[1.25rem] p-6`. Large decorative number in the background
(Cormorant italic, `text-[8rem] opacity-5 text-fh-gold absolute`).

### Certification / trust badge row

```tsx
const CERTS = ["IEC Registered", "GST Compliant", "FSSAI Listed", "APEDA Member", "Phytosanitary Approved"];

<div className="flex flex-wrap justify-center gap-3 mt-16">
  {CERTS.map((cert) => (
    <span key={cert}
      className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body
                 font-medium text-fh-gold border border-fh-gold/20">
      ✓ {cert}
    </span>
  ))}
</div>
```

---

# 08 — Contact / RFQ Section

**File:** `src/components/sections/Contact.tsx`
**id:** `#contact`
**bg:** FadingVideo (cargo ship at sea / port at golden hour)

### Video source
```
Pexels ID 3753372 — cargo ship aerial golden hour
https://videos.pexels.com/video-files/3753372/3753372-uhd_2560_1440_25fps.mp4
```

### Layout

```
┌───────────────────────────────────────────┐
│  Section header (left-aligned)            │
│  KICKER: // Get in Touch                  │
│  HEADLINE: "Start your                    │
│             trade journey."               │
├──────────────────┬────────────────────────┤
│  Left column     │  Right column          │
│  ─────────────── │  ──────────────────── │
│  Contact info    │  RFQ Form              │
│  + WhatsApp btn  │  (liquid-glass card)   │
└──────────────────┴────────────────────────┘
```

### Left column: contact info

```tsx
const CONTACT = {
  email:    "info@flourishhigh.com",
  phone:    "+91 XXXXXXXXXX",
  whatsapp: "+91 XXXXXXXXXX",
  address:  "India",              // fill in from client
};

// WhatsApp deep link
const waUrl = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}
               ?text=Hello%2C%20I%27m%20interested%20in%20trading%20with%20Flourish%20High.`;
```

### RFQ Form fields (UI only — no submission yet)

| Field | Type | Required |
|-------|------|----------|
| Full Name | text | ✓ |
| Email Address | email | ✓ |
| Company Name | text | — |
| Country | text | ✓ |
| Product of Interest | text | ✓ |
| Estimated Quantity / MOQ | text | — |
| Message | textarea | — |

```tsx
// Form wrapper — liquid-glass-strong card
<div className="liquid-glass-strong rounded-[1.25rem] p-8">
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Full Name *"
        className="bg-white/5 border border-white/10 rounded-full px-4 py-3
                   text-sm font-body text-white placeholder:text-white/40
                   focus:outline-none focus:border-fh-green transition-colors"
      />
      {/* ... repeat for all fields */}
    </div>
    <textarea
      placeholder="Tell us about your requirements..."
      rows={4}
      className="mt-4 w-full bg-white/5 border border-white/10 rounded-[1rem] px-4 py-3
                 text-sm font-body text-white placeholder:text-white/40
                 focus:outline-none focus:border-fh-green transition-colors resize-none"
    />
    <button
      type="submit"
      className="mt-4 w-full bg-fh-green hover:bg-fh-green-light text-white
                 rounded-full px-6 py-3 text-sm font-body font-semibold
                 flex items-center justify-center gap-2 transition-colors duration-200"
    >
      Send Inquiry <ArrowUpRight className="h-4 w-4" />
    </button>
  </form>
</div>
```

> **Wiring it up later:** Replace `onSubmit={(e) => e.preventDefault()}` with a call
> to `/api/contact` (Resend) or Formspree endpoint. See Phase 4 doc from the full plan.

---

# 09 — Footer

**File:** `src/components/layout/Footer.tsx`

### Layout

```
┌──────────┬──────────┬──────────┬──────────────┐
│ Logo     │ Navigate │ Products │ Contact      │
│ tagline  │ ──────── │ ──────── │ ──────────── │
│ social   │ links    │ category │ address      │
│ icons    │          │ links    │ phone/email  │
└──────────┴──────────┴──────────┴──────────────┘
─────────────────────────────────────────────────
© 2025 Flourish High International · IEC: XXXXXXXXXX · GST: XXXXXXXXXX
```

### Code sketch

```tsx
export default function Footer() {
  return (
    <footer className="bg-fh-base border-t border-white/10 px-8 md:px-16 lg:px-20 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

        {/* Col 1: Brand */}
        <div className="col-span-2 md:col-span-1">
          <p className="font-display italic text-2xl text-white">Flourish High</p>
          <p className="font-body text-sm text-white/60 mt-2 leading-relaxed max-w-[220px]">
            India-based international trading company. Quality commodities, globally traded.
          </p>
          <div className="flex gap-3 mt-4">
            {/* LinkedIn, WhatsApp icons (Lucide) */}
          </div>
        </div>

        {/* Col 2: Navigate */}
        <div>
          <p className="font-body text-xs font-medium text-fh-gold uppercase tracking-widest mb-4">
            Navigate
          </p>
          {["Products", "Services", "Why Us", "About", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="block font-body text-sm text-white/60 hover:text-white mb-2 transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Col 3: Products */}
        <div>
          <p className="font-body text-xs font-medium text-fh-gold uppercase tracking-widest mb-4">
            Products
          </p>
          {["Spices & Herbs", "Rice Varieties", "Pulses & Lentils", "Edible Oils", "FMCG Goods"].map((l) => (
            <a key={l} href="#products"
              className="block font-body text-sm text-white/60 hover:text-white mb-2 transition-colors">
              {l}
            </a>
          ))}
        </div>

        {/* Col 4: Contact */}
        <div>
          <p className="font-body text-xs font-medium text-fh-gold uppercase tracking-widest mb-4">
            Contact
          </p>
          <p className="font-body text-sm text-white/60 mb-2">info@flourishhigh.com</p>
          <p className="font-body text-sm text-white/60 mb-2">+91 XXXXXXXXXX</p>
          <p className="font-body text-sm text-white/60 leading-relaxed">India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row
                      items-center justify-between gap-4">
        <p className="font-body text-xs text-white/40">
          © 2025 Flourish High International. All rights reserved.
        </p>
        <p className="font-body text-xs text-white/30">
          IEC: XXXXXXXXXX · GST: XXXXXXXXXX
        </p>
      </div>
    </footer>
  );
}
```
