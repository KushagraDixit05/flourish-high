# 02 — Design System

Tokens, Tailwind config, `globals.css`, and the liquid-glass CSS utilities.

---

## `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fh: {
          base:    "#0e1210",
          surface: "#f5f1eb",
          green:   "#2d6a4f",
          "green-light": "#52b788",
          "green-dark":  "#1b4332",
          gold:    "#c8a96e",
          "gold-light":  "#e8d5a3",
          muted:   "#7a7068",
          border:  "#ffffff1a",   // white/10 — used for glass borders
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,8vw,7rem)",   { lineHeight: "0.9",  letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem,5vw,5rem)",   { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem,3vw,2.75rem)",{ lineHeight: "1.05" }],
      },
      borderRadius: {
        DEFAULT: "9999px",   // bare `rounded` → pill (matches prompt spec)
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)", filter: "blur(10px)" },
          to:   { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        marquee:   "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
```

---

## `src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ─── Brand token shortcuts ─────────────────────────────── */
:root {
  --fh-base:    #0e1210;
  --fh-surface: #f5f1eb;
  --fh-green:   #2d6a4f;
  --fh-gold:    #c8a96e;
  --fh-muted:   #7a7068;
}

/* ─── Selection ─────────────────────────────────────────── */
::selection {
  background: #2d6a4f;
  color: #f5f1eb;
}

/* ─── Smooth scroll ──────────────────────────────────────── */
html { scroll-behavior: smooth; }

/* ══════════════════════════════════════════════════════════
   LIQUID-GLASS UTILITIES
   Two variants: subtle (nav, cards) and strong (primary CTA)
   ══════════════════════════════════════════════════════════ */

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.45) 0%,
    rgba(255, 255, 255, 0.15) 20%,
    rgba(255, 255, 255, 0)    40%,
    rgba(255, 255, 255, 0)    60%,
    rgba(255, 255, 255, 0.15) 80%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Strong variant — primary CTA, heavy blur */
.liquid-glass-strong {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  border: none;
  box-shadow:
    4px 4px 4px rgba(0, 0, 0, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}

.liquid-glass-strong::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.5)  0%,
    rgba(255, 255, 255, 0.2)  20%,
    rgba(255, 255, 255, 0)    40%,
    rgba(255, 255, 255, 0)    60%,
    rgba(255, 255, 255, 0.2)  80%,
    rgba(255, 255, 255, 0.5)  100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* ─── Decorative ruled line (used in Hero, section headers) ─ */
.ruled-line {
  display: block;
  height: 1px;
  background: linear-gradient(90deg, #2d6a4f, transparent);
  transform-origin: left;
}
```

---

## Typography rules

| Usage | Font | Weight | Style |
|-------|------|--------|-------|
| Section headlines | Cormorant Garamond | 300 | **Italic** always |
| Hero BlurText | Cormorant Garamond | 400 | Italic |
| Body copy | DM Sans | 300–400 | Normal |
| Nav links | DM Sans | 500 | Normal |
| Eyebrow / kicker | DM Sans | 500 | Normal, tracked |
| Stat numbers | Cormorant Garamond | 400 | Italic |

```tsx
// Tailwind usage examples
className="font-display italic text-display-xl text-white"
className="font-body font-light text-sm text-white/80"
className="font-body font-medium text-xs uppercase tracking-widest text-fh-gold"
```

---

## Color usage rules

| Token | Use |
|-------|-----|
| `fh-base` `#0e1210` | Page background, card backgrounds |
| `fh-surface` `#f5f1eb` | Light-mode surfaces (not used on dark pages) |
| `fh-green` `#2d6a4f` | CTA backgrounds, accent borders, active states |
| `fh-gold` `#c8a96e` | Eyebrows, stat labels, tag chips, decorative lines |
| `fh-muted` `#7a7068` | Secondary body text |
| `white/90` | Primary text on dark |
| `white/60` | Secondary text on dark |
| `white/20` | Borders on dark |

**Never** use purple gradients, generic blues, or pure `#ffffff` backgrounds.
