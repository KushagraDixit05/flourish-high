"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Ship, PackageOpen, FileSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadingVideo from "@/components/ui/FadingVideo";

const SERVICES_VIDEO =
  //"https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4";
  "https://videos.pexels.com/video-files/29903737/12836096_2560_1440_60fps.mp4";
interface ServiceCard {
  name: string;
  desc: string;
  tags: string[];
  Icon: LucideIcon;
  imgSrc: string;
}

const SERVICES: ServiceCard[] = [
  {
    name: "Export Services",
    desc: "End-to-end sourcing, quality inspection, documentation and freight from India to your port.",
    tags: ["FOB / CIF / CFR", "APEDA Docs", "Pre-Ship Inspect", "Phytosanitary"],
    Icon: Ship,
    imgSrc: "/products/export-services.png",
  },
  {
    name: "Import Services",
    desc: "We procure goods internationally on your behalf — supplier vetting, customs clearance, last-mile.",
    tags: ["Supplier Vetting", "Customs Filing", "Lab Testing", "Bonded Warehouse"],
    Icon: PackageOpen,
    imgSrc: "/products/import-services.png",
  },
  {
    name: "Trade Consulting",
    desc: "HS code advisory, RoDTEP / duty optimisation, market entry research, and compliance guidance.",
    tags: ["HS Code Advice", "Duty Optimise", "Market Research", "Compliance"],
    Icon: FileSearch,
    imgSrc: "/products/trade-consulting.png",
  },
];

function ServiceCard({ name, desc, tags, Icon, imgSrc }: ServiceCard) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="group relative cursor-pointer flex flex-col overflow-hidden"
      style={{
        borderRadius: "1.25rem",
        minHeight: "420px",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        background: "rgba(14,18,16,0.55)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Gold top border on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-[1.5px] z-20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        style={{ background: "linear-gradient(90deg, #c8a96e, rgba(200,169,110,0.3))", borderRadius: "1.25rem 1.25rem 0 0" }}
      />

      {/* Image — top portion */}
      <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: "220px" }}>
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient into dark card body */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,18,16,0) 35%, rgba(14,18,16,0.55) 70%, rgba(14,18,16,0.9) 100%)",
          }}
        />
        {/* Icon badge over image */}
        <div
          className="absolute bottom-3 left-4 w-10 h-10 flex items-center justify-center z-10"
          style={{
            borderRadius: "0.75rem",
            background: "rgba(200,169,110,0.15)",
            border: "1px solid rgba(200,169,110,0.3)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: "#c8a96e" }} />
        </div>
        {/* Tags — top-right over image */}
        <div className="absolute top-3 right-3 flex flex-wrap justify-end gap-1.5 max-w-[70%] z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[10px] font-body text-white/90 whitespace-nowrap"
              style={{
                background: "rgba(14,18,16,0.55)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Text content */}
      <div className="p-5 pt-4 flex flex-col flex-1">
        <h3
          className="font-display italic text-white"
          style={{ fontSize: "clamp(1.75rem,3vw,2.25rem)", letterSpacing: "-1px", lineHeight: 1 }}
        >
          {name}
        </h3>
        <p className="mt-3 text-sm font-body font-light leading-snug max-w-[32ch]" style={{ color: "rgba(255,255,255,0.75)" }}>
          {desc}
        </p>
        <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-body font-medium" style={{ color: "#c8a96e" }}>
          <span>Learn more</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen overflow-hidden" style={{ background: "#0e1210" }}>
      <FadingVideo
        src={SERVICES_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(14,18,16,0.35)" }} />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-auto"
        >
          <p className="text-sm font-body mb-6 tracking-widest uppercase" style={{ color: "rgba(200,169,110,0.9)" }}>
            Services
          </p>
          <h2
            className="font-display italic text-white leading-[0.9]"
            style={{ fontSize: "clamp(3.5rem,8vw,6rem)", letterSpacing: "-3px" }}
          >
            Trade,<br />evolved
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.15 }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.name} {...svc} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
