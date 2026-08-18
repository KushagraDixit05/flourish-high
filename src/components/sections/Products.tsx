"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Wheat, Droplets, Package, Search, Circle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadingVideo from "@/components/ui/FadingVideo";

// Pexels: overhead drone of colorful spice market
const PRODUCTS_VIDEO =
  "https://videos.pexels.com/video-files/7667722/7667722-uhd_2560_1440_25fps.mp4";

interface CategoryCard {
  name: string;
  desc: string;
  tags: string[];
  Icon: LucideIcon;
  imgSrc: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    name: "Spices & Herbs",
    desc: "Turmeric, red chilli, cardamom, pepper, coriander — direct from Andhra Pradesh & Kerala.",
    tags: ["FSSAI Cert", "Phytosanitary", "Export Grade"],
    Icon: Leaf,
    imgSrc: "/products/spices-herbs.png",
  },
  {
    name: "Rice Varieties",
    desc: "Basmati, Sona Masoori, Idly Rice, Ponni — sourced from Punjab, Telangana & Tamil Nadu.",
    tags: ["Non-GMO", "APEDA Cert", "Custom Milling"],
    Icon: Wheat,
    imgSrc: "/products/rice-varieties.png",
  },
  {
    name: "Pulses & Lentils",
    desc: "Chana dal, toor dal, moong, urad — cleaned, sorted and export-packed.",
    tags: ["Machine Cleaned", "Low Moisture", "Bulk & Retail"],
    Icon: Circle,
    imgSrc: "/products/pulses-lentils.png",
  },
  {
    name: "Edible Oils",
    desc: "Cold-pressed coconut oil, groundnut oil, sesame oil — food-grade certified.",
    tags: ["Cold Press", "Food Grade", "BRC Aligned"],
    Icon: Droplets,
    imgSrc: "/products/edible-oils.png",
  },
  {
    name: "FMCG Goods",
    desc: "Packaged foods, personal care, household goods — bulk wholesale for distributors.",
    tags: ["Multi-SKU", "Private Label", "MOQ Flexible"],
    Icon: Package,
    imgSrc: "/products/fmcg-goods.png",
  },
  {
    name: "Custom Sourcing",
    desc: "Don't see your product? We'll source it from our 200+ verified Indian suppliers.",
    tags: ["Any Commodity", "24hr Response", "Free Quote"],
    Icon: Search,
    imgSrc: "/products/custom-sourcing.png",
  },
];

function ProductCard({ name, desc, tags, Icon, imgSrc }: CategoryCard) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative cursor-pointer overflow-hidden flex flex-col"
      style={{
        borderRadius: "1.25rem",
        minHeight: "400px",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        background: "rgba(14,18,16,0.55)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Gold hover border top */}
      <span
        className="absolute top-0 left-0 right-0 h-[1.5px] z-20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
        style={{ background: "#c8a96e", borderRadius: "1.25rem 1.25rem 0 0" }}
      />

      {/* Image — fills top 55% of card */}
      <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* gradient fade into card bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(14,18,16,0) 40%, rgba(14,18,16,0.6) 75%, rgba(14,18,16,0.95) 100%)",
          }}
        />
        {/* Icon badge over image, bottom-left */}
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

      {/* Text content — bottom portion */}
      <div className="p-5 pt-4 flex flex-col flex-1">
        <h3
          className="font-display italic text-white"
          style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", letterSpacing: "-1px", lineHeight: 1 }}
        >
          {name}
        </h3>
        <p className="mt-3 text-sm font-body font-light text-white/70 leading-snug">
          {desc}
        </p>
        <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-body font-medium" style={{ color: "#c8a96e" }}>
          <span>View details</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative min-h-screen overflow-hidden" style={{ background: "#0e1210" }}>
      {/* Video BG */}
      <FadingVideo
        src={PRODUCTS_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(14,18,16,0.6)" }} />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
            Our Products
          </p>
          <h2 className="font-display italic text-white text-display-lg leading-[0.9]">
            Quality Goods,<br />Globally Traded
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {CATEGORIES.map((cat) => (
            <ProductCard key={cat.name} {...cat} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-body text-sm text-white/60">
            Can&apos;t find your product?{" "}
            <a href="#contact" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
              Request custom sourcing →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
