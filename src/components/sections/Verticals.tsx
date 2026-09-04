"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe2, Cpu, Anchor } from "lucide-react";

const VERTICALS = [
  {
    num: "01",
    Icon: Globe2,
    title: "Promoting Art to the World",
    subtitle: "India's artisan heritage, for global markets",
    desc: "We champion India's rich tradition of handicrafts, home décor, carpets, and artisan craft — connecting skilled makers with international buyers who value authenticity, culture, and craftsmanship. Our deep sourcing relationships with India's artisan clusters give global buyers access to products that carry real heritage.",
    accent: "#c8a96e",
    imgSrc: "/products/traditional-handicraft.jpeg",
  },
  {
    num: "02",
    Icon: Cpu,
    title: "FHI Technology & Services",
    subtitle: "Building the future of trade ecosystems",
    desc: "Flourish High International is developing a digital ecosystem designed to bridge artisans, manufacturers, and global buyers more efficiently. While that platform evolves, we apply technology-informed processes to sourcing, supplier verification, and trade documentation — making every transaction smoother and more transparent.",
    accent: "#52b788",
    imgSrc: "/globe-trade.png",
  },
  {
    num: "03",
    Icon: Anchor,
    title: "Import & Export Solutions",
    subtitle: "End-to-end trade, reliably delivered",
    desc: "From understanding your requirements through to final delivery at your port, FHI manages the complete trade journey. Quality inspection, export documentation, customs coordination, and logistics support — all handled by a partner who understands both Indian manufacturing and international buyer expectations.",
    accent: "#c8a96e",
    imgSrc: "/ship.jpeg",
  },
];

type Vertical = (typeof VERTICALS)[number];

function VerticalCard({ v, i }: { v: Vertical; i: number }) {
  const accentRgb = v.accent === "#c8a96e" ? "200,169,110" : "82,183,136";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.65, ease: "easeOut" as const, delay: i * 0.12 }}
      viewport={{ once: true, amount: 0.15 }}
      className="group relative overflow-hidden"
      style={{
        borderRadius: "1.25rem",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.025)",
      }}
    >
      {/* Gold hover border top */}
      <span
        className="absolute top-0 left-0 right-0 h-[1.5px] z-20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        style={{ background: v.accent }}
      />

      {/* On mobile: stack image on top, text below.
          On desktop: image left (fixed width), text right (flex-1). */}
      <div className="flex flex-col md:flex-row md:items-stretch">

        {/* ── Image ──────────────────────────────────────────────────── */}
        {/*
          The key requirement for next/image fill:
            • parent must be position:relative
            • parent must have a defined height (or be stretched by flex)

          Mobile:  The image wrapper has a fixed pixel height (240px).
          Desktop: The outer flex is `md:items-stretch`, so the image wrapper
                   stretches to match the text column height automatically.
                   We just set a min-height so it never collapses.
        */}
        <div
          className="relative overflow-hidden flex-shrink-0 md:hidden"
          style={{
            height: "240px",
            width: "100%",
            borderRadius: "1.25rem 1.25rem 0 0",
          }}
        >
          <Image
            src={v.imgSrc}
            alt={v.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
            priority={i === 0}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(14,18,16,0) 40%, rgba(14,18,16,0.85) 100%)",
            }}
          />
        </div>

        {/* Desktop-only image panel — rendered separately to avoid height conflicts */}
        <div
          className="relative hidden md:block flex-shrink-0 overflow-hidden"
          style={{
            width: "340px",
            /* No fixed height — flex stretching from md:items-stretch handles it */
            minHeight: "300px",
            borderRadius: "1.25rem 0 0 1.25rem",
          }}
        >
          <Image
            src={v.imgSrc}
            alt={v.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="340px"
            priority={i === 0}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(14,18,16,0) 50%, rgba(14,18,16,0.9) 100%)",
            }}
          />
        </div>

        {/* ── Text content ─────────────────────────────────────────── */}
        <div className="flex-1 p-7 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-5">
            <span
              className="font-display italic text-4xl leading-none select-none"
              style={{ color: v.accent, opacity: 0.4 }}
            >
              {v.num}
            </span>
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{
                borderRadius: "0.75rem",
                background: `rgba(${accentRgb},0.12)`,
                border: `1px solid rgba(${accentRgb},0.25)`,
              }}
            >
              <v.Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: v.accent }} />
            </div>
          </div>

          <p
            className="font-body text-xs font-medium uppercase tracking-widest mb-2"
            style={{ color: v.accent }}
          >
            {v.subtitle}
          </p>
          <h3
            className="font-display italic text-white mb-4 leading-[1.05]"
            style={{ fontSize: "clamp(1.5rem,2.5vw,2.2rem)", letterSpacing: "-0.5px" }}
          >
            {v.title}
          </h3>
          <p className="font-body font-light text-sm text-white/65 leading-relaxed max-w-xl">
            {v.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Verticals() {
  return (
    <section
      id="what-we-do"
      className="relative overflow-hidden px-8 md:px-16 lg:px-20 py-24"
      style={{ background: "#0e1210" }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16 max-w-2xl"
      >
        <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
          What We Do
        </p>
        <h2
          className="font-display italic text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-2px" }}
        >
          Three pillars of<br />everything we build.
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {VERTICALS.map((v, i) => (
          <VerticalCard key={v.num} v={v} i={i} />
        ))}
      </div>
    </section>
  );
}
