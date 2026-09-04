"use client";

// import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

// ── CountUp component ────────────────────────────────────────────────────────
// function CountUp({ target, suffix = "+" }: { target: number; suffix?: string }) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const inView = useInView(ref, { once: true });
//   const count = useMotionValue(0);
//   const rounded = useTransform(count, (v) => Math.round(v) + suffix);
//
//   useEffect(() => {
//     if (inView) animate(count, target, { duration: 2, ease: "easeOut" });
//   }, [inView, count, target]);
//
//   return (
//     <motion.span
//       ref={ref}
//       className="font-display italic text-white"
//       style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", letterSpacing: "-2px" }}
//     >
//       {rounded}
//     </motion.span>
//   );
// }

// ── Data ─────────────────────────────────────────────────────────────────────
// const STATS = [
//   { target: 500, label: "Shipments completed" },
//   { target: 20, label: "Countries served" },
//   { target: 200, label: "Supplier network" },
//   { target: 5, label: "Core product categories" },
// ];

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Reliable Supplier Network",
    desc: "A curated network of verified Indian manufacturers and artisans — across textiles, handicrafts, carpets, stationery, and emerging categories.",
  },
  {
    n: "02",
    title: "Strong Focus on Handicrafts",
    desc: "Deep expertise in artisan products and traditional crafts, with direct access to India's established production clusters.",
  },
  {
    n: "03",
    title: "Flexible Sourcing",
    desc: "Adaptable to diverse product categories and specific buyer requirements — from standardised linen to bespoke artisan pieces.",
  },
  {
    n: "04",
    title: "Transparent Communication",
    desc: "Clear, honest dialogue throughout every stage of the trade process. No hidden steps, no surprises.",
  },
  {
    n: "05",
    title: "Quality Checks Before Shipment",
    desc: "Rigorous pre-shipment inspection is standard on every order — ensuring product standards are met before goods leave India.",
  },
  {
    n: "06",
    title: "Long-Term Partnership Mindset",
    desc: "We focus on building lasting, reliable trade relationships that go well beyond individual transactions.",
  },
];

const CERTS = [
  "IEC Registered",
  "GST Compliant",
  "Export Ready",
  "Quality Inspected",
  "Long-Term Partners",
];

// ── Component ────────────────────────────────────────────────────────────────
export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="px-8 md:px-16 lg:px-20 py-24 relative"
      style={{ background: "#0e1210" }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.2), transparent)" }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
          Why Choose FHI
        </p>
        <h2
          className="font-display italic text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-2px" }}
        >
          Your trusted partner<br />for Indian trade.
        </h2>
      </motion.div>

      {/* Stat counters — commented out until FHI has verified numbers to publish */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pb-16 border-b border-white/10"
      >
        {STATS.map(({ target, label }) => (
          <div key={label} className="flex flex-col gap-1">
            <CountUp target={target} />
            <p className="font-body font-light text-sm text-white/60 mt-1">{label}</p>
          </div>
        ))}
      </motion.div> */}

      {/* Differentiator grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      >
        {DIFFERENTIATORS.map(({ n, title, desc }) => (
          <div
            key={title}
            className="relative flex flex-col p-6 border border-white/10 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", borderRadius: "1.25rem" }}
          >
            {/* Decorative large number */}
            <span
              className="absolute -top-4 -right-2 font-display italic select-none pointer-events-none"
              style={{
                fontSize: "8rem",
                lineHeight: 1,
                color: "#c8a96e",
                opacity: 0.05,
              }}
            >
              {n}
            </span>
            <h3
              className="font-display italic text-white mb-3"
              style={{ fontSize: "clamp(1.25rem,2vw,1.6rem)", letterSpacing: "-0.5px" }}
            >
              {title}
            </h3>
            <p className="font-body font-light text-sm text-white/60 leading-relaxed">{desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Trade commitment badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mt-16"
      >
        {CERTS.map((cert) => (
          <span
            key={cert}
            className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body font-medium border"
            style={{ color: "#c8a96e", borderColor: "rgba(200,169,110,0.2)" }}
          >
            ✓ {cert}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
