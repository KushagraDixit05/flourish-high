# 04 — Hero Section & Navbar

---

## Navbar

**File:** `src/components/layout/Navbar.tsx`

### Behaviour

- `position: fixed`, `top: 1rem`, full width, `z-50`
- Transparent on load; becomes `liquid-glass` bg on scroll past 60px
  (`window.scrollY > 60` toggled via a `useEffect` + `useState`)
- On mobile: hide center links, show hamburger → slide-down overlay menu

### Layout

```
[  Logo circle  ]   [ Home · Products · Services · Why Us · About ]   [ Request a Quote → ]   [ spacer ]
```

### Code sketch

```tsx
"use client";
import { useState, useEffect }  from "react";
import { ArrowUpRight }          from "lucide-react";
import { cn }                    from "@/lib/utils";

const NAV_LINKS = ["Home", "Products", "Services", "Why Us", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);   // mobile menu

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={cn(
      "fixed top-4 left-0 right-0 z-50 px-8 lg:px-16",
      "flex items-center justify-between",
    )}>
      {/* Logo */}
      <div className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="font-display italic text-white text-xl select-none">fh</span>
      </div>

      {/* Center nav pill (desktop) */}
      <div className={cn(
        "hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5",
        "transition-all duration-300",
        scrolled && "bg-black/20"
      )}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="px-3 py-2 text-sm font-body font-medium text-white/90 hover:text-white
                       rounded-full transition-colors duration-200"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 flex items-center gap-1 bg-white text-fh-base rounded-full
                     px-4 py-2 text-sm font-body font-semibold whitespace-nowrap
                     hover:bg-white/90 transition-colors duration-200"
        >
          Request a Quote <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Spacer (desktop) / hamburger (mobile) */}
      <div className="w-12 h-12 flex items-center justify-end">
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="absolute top-16 left-4 right-4 liquid-glass-strong rounded-[1.25rem]
                        p-6 flex flex-col gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-white font-body text-lg"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-fh-base rounded-full px-4 py-2 text-sm font-semibold
                       text-center font-body"
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
```

---

## Hero Section

**File:** `src/components/sections/Hero.tsx`

### Video source (free, swappable)

```
Pexels ID 2169880 — aerial spice market / grain fields
https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_24fps.mp4
```

Replace with any Pexels/Coverr free video URL. Trade/agricultural footage works best.

### Section layout

```
absolute z-0  → FadingVideo (120% wide, top-anchored)
relative z-10 → flex col, min-h-screen
  ├─ <Navbar />   (fixed, sits here semantically)
  ├─ flex-1 centered content
  │   ├─ Badge chip
  │   ├─ BlurText headline
  │   ├─ Subheading (motion.p)
  │   ├─ CTA row
  │   └─ Stat cards row
  └─ <MarqueeStrip />
     Partners strip
```

### Framer Motion entrance pattern

All content items use `motion.div` / `motion.p` with:

```tsx
initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
animate={{ filter: "blur(0px)",  opacity: 1, y: 0  }}
transition={{ duration: 0.7, ease: "easeOut", delay: X }}
```

| Element | delay |
|---------|-------|
| Badge | 0.4s |
| BlurText headline | (internal stagger, starts 0.5s) |
| Subheading | 0.8s |
| CTA row | 1.1s |
| Stat cards | 1.3s |
| Partners | 1.4s |

### Copy

```
EYEBROW badge:
  [NEW]  "Maiden Certified Exports to 20+ Countries"

HEADLINE (BlurText):
  "Where Indian
   Commodities
   Meet the World."

SUBHEADING:
  "Sourcing, exporting and importing quality goods
   across Asia, the Middle East, and beyond — with
   full documentation and on-time delivery."

CTA PRIMARY:   "Request a Quote →"   (liquid-glass-strong, rounded-full)
CTA SECONDARY: "View Our Products"   (plain text link, arrow icon)
```

### Stat cards (2 cards, liquid-glass, w-[220px] rounded-[1.25rem] p-5)

| Card | Icon | Number | Label |
|------|------|--------|-------|
| 1 | Clock outline (Lucide) | `500+` | Shipments Completed |
| 2 | Globe outline (Lucide) | `20+`  | Countries Served |

```tsx
// Stat card structure
<div className="liquid-glass rounded-[1.25rem] p-5 w-[220px] flex flex-col gap-4">
  <Globe className="text-white w-7 h-7" strokeWidth={1.5} />
  <div>
    <p className="font-display italic text-4xl text-white tracking-[-1px] leading-none">20+</p>
    <p className="font-body font-light text-xs text-white/70 mt-2">Countries Served</p>
  </div>
</div>
```

### Partners strip

```tsx
const PARTNERS = ["Agrimark", "SpiceRoute", "HarvestCo", "TradeAxis", "Vantage"];

// Render as:
<div className="flex flex-col items-center gap-4 pb-8">
  <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white">
    Trusted by traders across Asia & the Middle East
  </span>
  <div className="flex items-center gap-12 md:gap-16">
    {PARTNERS.map((p) => (
      <span key={p} className="font-display italic text-2xl md:text-3xl text-white tracking-tight">
        {p}
      </span>
    ))}
  </div>
</div>
```

> Replace partner names with real ones from client. If no real partners yet, use country flag
> names or export board names (APEDA, SPICES BOARD, etc.).

### Full component outline

```tsx
"use client";
import { motion }       from "framer-motion";
import FadingVideo      from "@/components/ui/FadingVideo";
import BlurText         from "@/components/ui/BlurText";
import MarqueeStrip     from "@/components/ui/MarqueeStrip";
import Navbar           from "@/components/layout/Navbar";
import { ArrowUpRight, Globe, Clock } from "lucide-react";

const HERO_VIDEO = "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_24fps.mp4";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-fh-base overflow-hidden">
      {/* Video BG */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center gap-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0)" }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="liquid-glass rounded-full flex items-center gap-2 pr-3"
          >
            <span className="bg-white text-fh-base rounded-full px-3 py-1 text-xs font-body font-semibold">
              New
            </span>
            <span className="text-sm font-body text-white/90">
              Maiden Certified Exports to 20+ Countries
            </span>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Where Indian Commodities Meet the World."
            className="font-display italic text-display-xl text-white leading-[0.9]
                       max-w-3xl tracking-[-4px]"
          />

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0)" }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="font-body font-light text-sm md:text-base text-white/80
                       max-w-xl leading-relaxed mt-2"
          >
            Sourcing, exporting and importing quality goods across Asia, the Middle East,
            and beyond — with full documentation and on-time delivery guaranteed.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0)" }}
            transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-6 mt-2"
          >
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body
                         font-medium text-white flex items-center gap-2"
            >
              Request a Quote <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#products"
              className="text-sm font-body text-white/80 hover:text-white
                         flex items-center gap-1.5 transition-colors"
            >
              View Products <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0,  filter: "blur(0)" }}
            transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
            className="flex items-stretch gap-4 mt-4"
          >
            {[
              { icon: Clock,  num: "500+", label: "Shipments Completed" },
              { icon: Globe,  num: "20+",  label: "Countries Served"    },
            ].map(({ icon: Icon, num, label }) => (
              <div key={label} className="liquid-glass rounded-[1.25rem] p-5 w-[220px]
                                          flex flex-col gap-4">
                <Icon className="text-white w-7 h-7" strokeWidth={1.5} />
                <div>
                  <p className="font-display italic text-4xl text-white
                                 tracking-[-1px] leading-none">{num}</p>
                  <p className="font-body font-light text-xs text-white/70 mt-2">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body
                           font-medium text-white">
            Trusted by traders across Asia & the Middle East
          </span>
          <div className="flex items-center gap-12 md:gap-16">
            {["Agrimark", "SpiceRoute", "HarvestCo", "TradeAxis", "Vantage"].map((p) => (
              <span key={p} className="font-display italic text-2xl md:text-3xl
                                        text-white tracking-tight">{p}</span>
            ))}
          </div>
        </motion.div>

        <MarqueeStrip />
      </div>
    </section>
  );
}
```
