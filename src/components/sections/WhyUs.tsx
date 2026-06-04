"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

// ── CountUp component ────────────────────────────────────────────────────────
function CountUp({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count  = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v) + suffix);

  useEffect(() => {
    if (inView) animate(count, target, { duration: 2, ease: "easeOut" });
  }, [inView, count, target]);

  return (
    <motion.span
      ref={ref}
      className="font-display italic text-white"
      style={{ fontSize: "clamp(2.5rem,5vw,3.5rem)", letterSpacing: "-2px" }}
    >
      {rounded}
    </motion.span>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
  { target: 500, label: "Shipments completed"      },
  { target: 20,  label: "Countries served"         },
  { target: 200, label: "Verified suppliers"       },
  { target: 15,  label: "Years combined experience" },
];

const DIFFERENTIATORS = [
  { n: "01", title: "Deep Sourcing Network",  desc: "200+ verified suppliers across Indian agricultural regions." },
  { n: "02", title: "Compliance-First",       desc: "All shipments fully documented to destination-country standards." },
  { n: "03", title: "24hr Quote Turnaround",  desc: "Quotes within 24 hours. Samples arranged within 2 weeks." },
  { n: "04", title: "20+ Trade Lanes",        desc: "Established routes across Asia, MENA, and Europe." },
  { n: "05", title: "Quality Guaranteed",     desc: "Pre-shipment inspection is standard on every order." },
  { n: "06", title: "Long-Term Partnerships", desc: "Average client relationship exceeds 3 years." },
];

const CERTS = [
  "IEC Registered",
  "GST Compliant",
  "FSSAI Listed",
  "APEDA Member",
  "Phytosanitary Approved",
];

// ── Component ────────────────────────────────────────────────────────────────
export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="px-8 md:px-16 lg:px-20 py-24"
      style={{ background: "#0e1210" }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
          // Why Choose Us
        </p>
        <h2
          className="font-display italic text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-2px" }}
        >
          Built on trust.<br />Driven by results.
        </h2>
      </motion.div>

      {/* Stat counters */}
      <motion.div
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
      </motion.div>

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

      {/* Certification badges */}
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
