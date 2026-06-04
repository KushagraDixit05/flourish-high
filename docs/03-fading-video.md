# 03 — FadingVideo & BlurText Components

Both are `"use client"` components — they use refs, effects, and browser APIs.

---

## FadingVideo

### What it does

- Plays a `<video>` on loop using a **manual loop** (no `loop` attribute)
- Crossfades: fades in on load, fades out just before `ended`, fades back in on restart
- All fades are driven by `requestAnimationFrame` — **no CSS transitions on the video**
- Multiple instances can run independently (Hero BG, Services BG, Contact BG)

### Constants

```ts
const FADE_MS       = 500;   // ms for each fade transition
const FADE_OUT_LEAD = 0.55;  // seconds before end to start fade-out
```

### `src/components/ui/FadingVideo.tsx`

```tsx
"use client";

import { useRef, useEffect } from "react";

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef    = useRef<HTMLVideoElement>(null);
  const rafRef      = useRef<number>(0);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // ── Fade helper (rAF-driven, resumes from current opacity) ──────────
    function fadeTo(target: number, durationMs: number) {
      cancelAnimationFrame(rafRef.current);
      const start    = performance.now();
      const startVal = parseFloat(video!.style.opacity ?? "0");

      function step(now: number) {
        const t = Math.min((now - start) / durationMs, 1);
        video!.style.opacity = String(startVal + (target - startVal) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(step);
      }
      rafRef.current = requestAnimationFrame(step);
    }

    // ── Event handlers ───────────────────────────────────────────────────
    function onLoaded() {
      video!.style.opacity = "0";
      video!.play().catch(() => {});
      fadeTo(1, FADE_MS);
    }

    function onTimeUpdate() {
      const remaining = video!.duration - video!.currentTime;
      if (!fadingOutRef.current && remaining <= FADE_OUT_LEAD && remaining > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    }

    function onEnded() {
      video!.style.opacity = "0";
      setTimeout(() => {
        if (!video) return;
        video.currentTime   = 0;
        fadingOutRef.current = false;
        video.play().catch(() => {});
        fadeTo(1, FADE_MS);
      }, 100);
    }

    video.style.opacity = "0";
    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended",      onEnded);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("ended",      onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style, opacity: 0 }}
    />
  );
}
```

### Usage examples

```tsx
// Hero — 120% size, top-anchored focal point
<FadingVideo
  src="https://videos.pexels.com/video-files/XXXXX/file.mp4"
  className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
  style={{ width: "120%", height: "120%" }}
/>

// Services / Contact — full bleed
<FadingVideo
  src="https://videos.pexels.com/video-files/YYYYY/file.mp4"
  className="absolute inset-0 w-full h-full object-cover z-0"
/>
```

---

## BlurText

### What it does

- Splits text into words, animates each word independently
- Entrance triggered by `IntersectionObserver` (fires once at 10% visibility)
- Each word: blur 10 → 5 → 0, opacity 0 → 0.5 → 1, y 50 → -5 → 0
- Stagger: 100ms per word

### `src/components/ui/BlurText.tsx`

```tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion }                       from "framer-motion";

interface BlurTextProps {
  text:      string;
  className?: string;
}

const wordVariants = {
  hidden: {
    filter:  "blur(10px)",
    opacity: 0,
    y:       50,
  },
  visible: (i: number) => ({
    filter:  ["blur(10px)", "blur(5px)", "blur(0px)"],
    opacity: [0,            0.5,          1],
    y:       [50,           -5,           0],
    transition: {
      duration: 0.7,
      delay:    i * 0.1,
      times:    [0, 0.5, 1],
      ease:     "easeOut",
    },
  }),
};

export default function BlurText({ text, className }: BlurTextProps) {
  const ref        = useRef<HTMLParagraphElement>(null);
  const [fired, setFired] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFired(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          initial="hidden"
          animate={fired ? "visible" : "hidden"}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
```

### Usage

```tsx
<BlurText
  text="Where Indian Commodities Meet the World."
  className="font-display italic text-display-xl text-white leading-[0.9] max-w-3xl tracking-[-4px]"
/>
```

---

## MarqueeStrip

A simple CSS-animation marquee. Used in Hero to show product category names.

### `src/components/ui/MarqueeStrip.tsx`

```tsx
const ITEMS = [
  "Basmati Rice", "Spices & Herbs", "Pulses & Lentils",
  "Edible Oils",  "Agricultural Commodities", "FMCG Goods",
  "Custom Sourcing", "Certified Exports",
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full py-3 bg-fh-green/20 border-y border-white/10">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display italic text-2xl text-fh-gold tracking-tight"
          >
            ◆ {item}
          </span>
        ))}
      </div>
    </div>
  );
}
```

> The `animate-marquee` class uses the keyframe defined in `tailwind.config.ts`:
> `marquee: { from: translateX(0), to: translateX(-50%) }` at `28s linear infinite`.
> Duplicating the array to 2× means the loop is seamless.
