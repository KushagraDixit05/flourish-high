"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Globe } from "lucide-react";
import FadingVideo  from "@/components/ui/FadingVideo";
import BlurText     from "@/components/ui/BlurText";
import MarqueeStrip from "@/components/ui/MarqueeStrip";

// Cloudfront URL (from specialized prompt) — high-quality aerial grain/nature footage
const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";

const PARTNERS = ["Agrimark", "SpiceRoute", "HarvestCo", "TradeAxis", "Vantage"];

const STAT_CARDS = [
  { Icon: Clock, num: "500+", label: "Shipments Completed" },
  { Icon: Globe, num: "20+",  label: "Countries Served"    },
];

const motionBase = {
  initial:    { opacity: 0, y: 20, filter: "blur(10px)" },
  animate:    { opacity: 1, y: 0,  filter: "blur(0px)"  },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden" style={{ background: "#0e1210" }}>
      {/* Video BG — 120% wide, top-anchored */}
      <FadingVideo
        src={HERO_VIDEO}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Hero brand mark — top-left, appears immediately */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0 }}
          className="absolute top-6 left-6 md:top-8 md:left-10 lg:left-14 z-20 pointer-events-none"
        >
          <Image
            src="/logo-golden.png"
            alt="Flourish High International"
            width={96}
            height={96}
            priority
            className="object-contain md:w-28 md:h-28"
            style={{ filter: "drop-shadow(0 2px 16px rgba(200,169,110,0.4))" }}
          />
        </motion.div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center gap-6">

          {/* Badge */}
          <motion.div
            {...motionBase}
            transition={{ ...motionBase.transition, delay: 0.4 }}
            className="liquid-glass rounded-full flex items-center gap-2 pr-3"
          >
            <span
              className="rounded-full px-3 py-1 text-xs font-body font-semibold"
              style={{ background: "white", color: "#0e1210" }}
            >
              New
            </span>
            <span className="text-sm font-body text-white/90">
              Maiden Certified Exports to 20+ Countries
            </span>
          </motion.div>

          {/* Headline — BlurText word-by-word */}
          <BlurText
            text="Where Indian Commodities Meet the World."
            className="font-display italic text-display-xl text-white leading-[0.9] max-w-3xl"
            style={{ letterSpacing: "-4px" } as React.CSSProperties}
          />

          {/* Subheading */}
          <motion.p
            {...motionBase}
            transition={{ ...motionBase.transition, delay: 0.8 }}
            className="font-body font-light text-sm md:text-base text-white/80 max-w-xl leading-relaxed mt-2"
          >
            Sourcing, exporting and importing quality goods across Asia, the Middle East,
            and beyond — with full documentation and on-time delivery guaranteed.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...motionBase}
            transition={{ ...motionBase.transition, delay: 1.1 }}
            className="flex items-center gap-6 mt-2"
          >
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-white flex items-center gap-2"
            >
              Request a Quote <ArrowUpRight className="h-5 w-5" />
            </a>
            <a
              href="#products"
              className="text-sm font-body text-white/80 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              View Products <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            {...motionBase}
            transition={{ ...motionBase.transition, delay: 1.3 }}
            className="flex items-stretch gap-4 mt-4"
          >
            {STAT_CARDS.map(({ Icon, num, label }) => (
              <div
                key={label}
                className="liquid-glass flex flex-col gap-4 p-5 w-[220px]"
                style={{ borderRadius: "1.25rem" }}
              >
                <Icon className="text-white w-7 h-7" strokeWidth={1.5} />
                <div>
                  <p className="font-display italic text-4xl text-white" style={{ letterSpacing: "-1px", lineHeight: 1 }}>
                    {num}
                  </p>
                  <p className="font-body font-light text-xs text-white/70 mt-2">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partners strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body font-medium text-white">
            Trusted by traders across Asia &amp; the Middle East
          </span>
          <div className="flex items-center gap-12 md:gap-16 flex-wrap justify-center px-4">
            {PARTNERS.map((p) => (
              <span key={p} className="font-display italic text-2xl md:text-3xl text-white tracking-tight">
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <MarqueeStrip />
      </div>
    </section>
  );
}
