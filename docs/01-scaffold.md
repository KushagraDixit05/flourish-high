# 01 — Scaffold & Project Setup

---

## Bootstrap

```bash
npx create-next-app@latest flourishhigh \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd flourishhigh
```

## Install dependencies

```bash
npm install framer-motion lucide-react clsx tailwind-merge
```

That's the entire dependency list. No CMS, no form library, no email SDK for now.

---

## Folder structure

```
flourishhigh/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← root layout: fonts, metadata, body bg
│   │   └── page.tsx            ← single page: imports all sections in order
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Products.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── FadingVideo.tsx  ← reused by Hero, Services, Contact
│   │       ├── BlurText.tsx     ← word-by-word blur-in animation
│   │       └── MarqueeStrip.tsx ← looping horizontal scroll strip
│   ├── lib/
│   │   └── utils.ts            ← cn() helper (clsx + tailwind-merge)
│   └── styles/
│       └── globals.css         ← liquid-glass utilities, custom tokens
├── public/
│   └── (empty — all assets are remote URLs)
├── tailwind.config.ts
└── next.config.ts
```

---

## `src/app/page.tsx`

This is the **only** route. It renders every section top-to-bottom.

```tsx
import Navbar    from "@/components/layout/Navbar";
import Hero      from "@/components/sections/Hero";
import Products  from "@/components/sections/Products";
import Services  from "@/components/sections/Services";
import WhyUs     from "@/components/sections/WhyUs";
import Contact   from "@/components/sections/Contact";
import Footer    from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-[#0e1210] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
```

---

## `src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  weight:   ["300", "400", "600"],
  style:    ["normal", "italic"],
  subsets:  ["latin"],
  variable: "--font-cormorant",
  display:  "swap",
});

const dmSans = DM_Sans({
  subsets:  ["latin"],
  variable: "--font-dm-sans",
  display:  "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flourishhigh.com"),
  title: "Flourish High International — India-based Trading Company",
  description:
    "India-based international trader. Export and import of quality agricultural commodities, spices, pulses, and FMCG goods. Get a free trade quote.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-[#0e1210] antialiased">{children}</body>
    </html>
  );
}
```

---

## `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## `next.config.ts`

```ts
import type { NextConfig } from "next";

const config: NextConfig = {
  // Allow remote video hostnames if self-hosting later
  // No image domains needed — we use <video> not next/image for BG
};

export default config;
```
