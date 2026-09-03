"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HIGHLIGHTS = [
  { label: "Textiles & Home Décor", desc: "Standardised linen and curated décor for global retail" },
  { label: "Handicrafts & Carpets", desc: "Artisan-made products from India's established craft clusters" },
  { label: "Custom Sourcing", desc: "Tailored to any buyer requirement across emerging categories" },
];

export default function About() {
  return (
    <section
      id="about-fhi"
      className="relative overflow-hidden px-8 md:px-16 lg:px-20 py-24"
      style={{ background: "#0e1210" }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.25), transparent)" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
            About FHI
          </p>
          <h2
            className="font-display italic text-white leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", letterSpacing: "-2px" }}
          >
            India&apos;s trade bridge<br />to the world.
          </h2>

          <p className="mt-6 font-body font-light text-white/65 text-sm leading-relaxed">
            Flourish High International is a global trading and sourcing company dedicated to connecting India&apos;s diverse ecosystem of manufacturers, suppliers, and artisans with international markets.
          </p>
          <p className="mt-4 font-body font-light text-white/65 text-sm leading-relaxed">
            We work closely with a trusted network of partners across textiles, handicrafts, and home décor — enabling global buyers in Australia, New Zealand, Japan, and beyond to access high-quality, competitively sourced products. Our approach combines deep local sourcing expertise with a strong understanding of international market expectations.
          </p>

          {/* Highlight list */}
          <div className="mt-8 flex flex-col gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label} className="flex gap-4 items-start">
                <span
                  className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                  style={{ background: "#c8a96e", marginTop: "6px" }}
                />
                <div>
                  <p className="font-body font-medium text-sm text-white">{h.label}</p>
                  <p className="font-body font-light text-xs text-white/55 mt-0.5">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-8 text-sm font-body font-medium transition-colors hover:text-white/80"
            style={{ color: "#c8a96e" }}
          >
            Start a trade conversation <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Right: Image stack */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Primary image */}
          <div
            className="relative overflow-hidden"
            style={{ borderRadius: "1.25rem", aspectRatio: "4/3" }}
          >
            <Image
              src="/globe-trade.png"
              alt="Global trade network"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom right, rgba(14,18,16,0) 50%, rgba(14,18,16,0.6) 100%)" }}
            />
          </div>

          {/* Floating inset image — bottom-left */}
          <div
            className="absolute -bottom-5 -left-5 overflow-hidden border-4"
            style={{
              borderRadius: "1rem",
              borderColor: "#0e1210",
              width: "140px",
              height: "140px",
            }}
          >
            <Image
              src="/products/carpet-weaving.jpeg"
              alt="Carpet weaving artisan"
              fill
              className="object-cover"
              sizes="140px"
            />
          </div>

          {/* Vision quote chip */}
          <div
            className="absolute top-4 right-4 max-w-[200px] p-4"
            style={{
              borderRadius: "1rem",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(14,18,16,0.7)",
              border: "1px solid rgba(200,169,110,0.2)",
            }}
          >
            <p className="font-display italic text-white text-sm leading-snug" style={{ letterSpacing: "-0.3px" }}>
              &ldquo;Simplifying international trade while helping Indian craftsmanship reach global markets.&rdquo;
            </p>
            <p className="font-body text-[10px] mt-2 uppercase tracking-widest" style={{ color: "#c8a96e" }}>
              Our Vision
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
