"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Route, ShieldCheck } from "lucide-react";
import FadingVideo from "@/components/ui/FadingVideo";
import BlurText from "@/components/ui/BlurText";
import MarqueeStrip from "@/components/ui/MarqueeStrip";

// Cloudfront URL (from specialized prompt) — high-quality aerial grain/nature footage
const HERO_VIDEO =
  //"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4";
  "https://videos.pexels.com/video-files/26796988/12008898_2560_1440_30fps.mp4";
const MARKETS = ["Australia", "New Zealand", "Japan", "UK", "Middle East"];

const STAT_CARDS = [
  { Icon: Route,        num: "End-to-End",        label: "Sourcing to delivery, one partner" },
  { Icon: ShieldCheck,  num: "Quality Inspected",  label: "Every shipment, pre-departure" },
];

const motionBase = {
  initial: { opacity: 0, y: 20, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
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

      {/* Dark overlay — ensures text contrast over bright video */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,14,12,0.55) 0%, rgba(10,14,12,0.35) 40%, rgba(10,14,12,0.60) 80%, rgba(10,14,12,0.85) 100%)",
        }}
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
              India's Artisan Heritage, Traded Globally
            </span>
          </motion.div>

          {/* Headline — BlurText word-by-word */}
          <BlurText
            text="Where Indian Craft Meets the World."
            className="font-display italic text-display-xl text-white leading-[0.9] max-w-3xl"
            style={{
              letterSpacing: "-4px",
              textShadow: "0 2px 32px rgba(0,0,0,0.7), 0 1px 8px rgba(0,0,0,0.9)",
            } as React.CSSProperties}
          />

          {/* Subheading */}
          <motion.p
            {...motionBase}
            transition={{ ...motionBase.transition, delay: 0.8 }}
            className="font-body font-light text-sm md:text-base text-white max-w-xl leading-relaxed mt-2"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}
          >
            Connecting global buyers with India's finest handicrafts, home décor,
            textiles, carpets, and artisan products — with reliable sourcing and
            full export support from a trusted trade partner.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...motionBase}
            transition={{ ...motionBase.transition, delay: 1.1 }}
            className="flex items-center gap-4 mt-2"
          >
            {/* Primary CTA — solid white, matches Navbar CTA exactly */}
            <a
              href="https://fhi-tool-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white rounded-full px-4 py-2 text-sm font-body font-semibold whitespace-nowrap hover:bg-white/90 transition-colors duration-200"
              style={{ color: "#0e1210" }}
            >
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Secondary CTA — same navbar pill glass recipe */}
            <a
              href="#products"
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-body font-medium text-white/85 hover:text-white border border-white/10 transition-colors duration-200 hover:bg-white/10"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                background: "rgba(255,255,255,0.06)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12)",
              }}
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
                className="flex flex-col gap-4 p-5 w-[220px]"
                style={{
                  borderRadius: "1.25rem",
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.2)",
                }}
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#c8a96e" }} />
                <div>
                  <p
                    className="font-display italic text-white"
                    style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", letterSpacing: "-0.5px", lineHeight: 1.15 }}
                  >
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
            Serving buyers across
          </span>
          <div className="flex items-center gap-10 md:gap-14 flex-wrap justify-center px-4">
            {MARKETS.map((m) => (
              <span key={m} className="font-display italic text-xl md:text-2xl text-white/80 tracking-tight">
                {m}
              </span>
            ))}
          </div>
        </motion.div>

        <MarqueeStrip />
      </div>
    </section>
  );
}
