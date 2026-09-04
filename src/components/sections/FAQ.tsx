"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import GlobalReach from "@/components/sections/GlobalReach";

const FAQS = [
  {
    q: "What products does FHI trade?",
    a: "Flourish High International works across multiple export-ready categories sourced from India. Our primary focus includes Indian handicrafts and home décor, textiles and hospitality linen, carpets and rugs, and paper & stationery products. We also support custom sourcing requirements — including select spices, specialty textiles, and other categories — based on buyer specifications.",
  },
  {
    q: "Do you manufacture products?",
    a: "No, FHI is a trading and sourcing company. We connect global buyers with trusted Indian manufacturers, artisans, and suppliers who produce the products. Our value lies in supplier relationships, quality coordination, and trade facilitation — not in manufacturing.",
  },
  {
    q: "Can you help source custom or niche products?",
    a: "Absolutely. We work closely with buyers to understand their specific requirements and connect them with suppliers who can fulfill custom orders. Whether it's a specific craft style, linen specification, or an emerging product category, we'll identify the right supplier from our network.",
  },
  {
    q: "Do you support export logistics and documentation?",
    a: "Yes, we provide complete export support — including pre-shipment quality inspection, packaging coordination, export documentation, and shipping coordination. Our goal is to ensure smooth international delivery with no surprises.",
  },
  {
    q: "Who can contact FHI?",
    a: "We welcome enquiries from importers, distributors, sourcing partners, retailers, and any business interested in Indian products or establishing long-term trade relationships. Whether you're placing your first order or looking for a reliable ongoing sourcing partner, we're ready to talk.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" as const, delay: index * 0.07 }}
      viewport={{ once: true, amount: 0.3 }}
      className="border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span
          className="font-display italic text-white group-hover:text-white/90 transition-colors"
          style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", letterSpacing: "-0.3px", lineHeight: 1.2 }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: open ? "rgba(200,169,110,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${open ? "rgba(200,169,110,0.3)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform duration-300"
            style={{ color: "#c8a96e", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-6 font-body font-light text-sm text-white/65 leading-relaxed max-w-3xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden px-8 md:px-16 lg:px-20 py-24"
      style={{ background: "#0e1210" }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.2), transparent)" }}
      />

      {/* Two-column grid: FAQ left, World Map right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── Left column: FAQ content ─────────────────────────────────── */}
        <div>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
              FAQ
            </p>
            <h2
              className="font-display italic text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-2px" }}
            >
              Everything you need<br />to know about FHI.
            </h2>
          </motion.div>

          {/* FAQ items */}
          <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="font-body text-sm text-white/60">
              Still have questions?{" "}
              <a href="#contact" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
                Send us a message →
              </a>
            </p>
          </motion.div>
        </div>

        {/* ── Right column: World Map ──────────────────────────────────── */}
        <div className="lg:sticky lg:top-24">
          <GlobalReach />
        </div>

      </div>
    </section>
  );
}
