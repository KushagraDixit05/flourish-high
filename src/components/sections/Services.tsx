"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, FlaskConical, ShieldCheck, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Understand Your Requirements",
    desc: "We listen carefully to your sourcing needs, market specifications, target quality standards, and delivery expectations — so we start with complete clarity.",
    Icon: MessageSquare,
  },
  {
    num: "02",
    title: "Identify Trusted Suppliers",
    desc: "We connect you with verified manufacturers and artisans from our curated network across India's established production clusters — matched precisely to your product category.",
    Icon: Users,
  },
  {
    num: "03",
    title: "Sampling & Commercial Alignment",
    desc: "Before any commitment, we arrange product samples and ensure quality, specifications, and pricing all meet your expectations and market requirements.",
    Icon: FlaskConical,
  },
  {
    num: "04",
    title: "Quality Check & Packaging",
    desc: "Rigorous pre-shipment inspection is standard on every order. We oversee packaging to ensure products arrive exactly as agreed — no surprises.",
    Icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Export Documentation & Shipping",
    desc: "We handle complete logistics support — documentation, customs coordination, and freight — for smooth international delivery to your port.",
    Icon: PackageCheck,
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="relative overflow-hidden px-8 md:px-16 lg:px-20 py-24"
      style={{ background: "#0e1210" }}
    >
      {/* Subtle separator top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.2), transparent)" }}
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeOut" as const }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-16"
      >
        <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
          How We Work
        </p>
        <h2
          className="font-display italic text-white leading-[0.9]"
          style={{ fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-2px" }}
        >
          Simple process,<br />reliable results.
        </h2>
        <p className="mt-6 font-body font-light text-white/60 text-sm leading-relaxed max-w-lg">
          From first enquiry to final delivery, we manage every step of the trade journey — so you can focus on your business.
        </p>
      </motion.div>

      {/* Steps — alternating layout on desktop */}
      <div className="relative">
        {/* Vertical connector line (desktop) */}
        <div
          className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.2) 10%, rgba(200,169,110,0.2) 90%, transparent)" }}
        />

        <div className="flex flex-col gap-8 md:gap-12">
          {STEPS.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: isEven ? -30 : 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, ease: "easeOut" as const, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`relative flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-6 md:gap-12`}
              >
                {/* Content card — half width on desktop */}
                <div
                  className="flex-1 p-6 md:p-8 group"
                  style={{
                    borderRadius: "1.25rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "border-color 0.3s",
                  }}
                >
                  {/* Number + icon row */}
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="font-display italic text-5xl leading-none select-none"
                      style={{ color: "#c8a96e", opacity: 0.35 }}
                    >
                      {step.num}
                    </span>
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                      style={{
                        borderRadius: "0.75rem",
                        background: "rgba(200,169,110,0.12)",
                        border: "1px solid rgba(200,169,110,0.25)",
                      }}
                    >
                      <step.Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: "#c8a96e" }} />
                    </div>
                  </div>
                  <h3
                    className="font-display italic text-white mb-3"
                    style={{ fontSize: "clamp(1.3rem,2vw,1.75rem)", letterSpacing: "-0.5px", lineHeight: 1.1 }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body font-light text-sm text-white/60 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Centre node on the connector line (desktop only) */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 z-10" style={{ width: "2px" }}>
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: "#c8a96e", boxShadow: "0 0 12px rgba(200,169,110,0.6)" }}
                  />
                </div>

                {/* Spacer on opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-col sm:flex-row items-center gap-4 justify-center"
      >
        <p className="font-body text-sm text-white/60">Ready to start?</p>
        <a
          href="#contact"
          className="flex items-center gap-1.5 bg-white rounded-full px-5 py-2.5 text-sm font-body font-semibold hover:bg-white/90 transition-colors duration-200"
          style={{ color: "#0e1210" }}
        >
          Send a Trade Enquiry
        </a>
      </motion.div>
    </section>
  );
}
