"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Paintbrush, Layers, Grid3x3, BookOpen, Search, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Artisan / weaving / textile footage from Pexels
const PRODUCTS_VIDEO =
  "https://videos.pexels.com/video-files/6804099/6804099-uhd_2560_1440_25fps.mp4";

interface CategoryCard {
  name: string;
  desc: string;
  tags: string[];
  Icon: LucideIcon;
  imgSrc: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    name: "Indian Handicrafts & Home Décor",
    desc: "Curated handcrafted and functional décor sourced from India's artisan clusters — blending traditional craftsmanship with contemporary designs for modern retail and lifestyle markets.",
    tags: ["Artisan Made", "Contemporary Design", "Retail Ready"],
    Icon: Paintbrush,
    imgSrc: "/products/handicrafts.png",
  },
  {
    name: "Textiles & Hospitality Linen",
    desc: "Export-quality towels, bed linen, pillow covers, floor mats, and kitchen textiles for hospitality, retail, and institutional buyers — consistent specifications at scale.",
    tags: ["Export Grade", "Bulk Supply", "Hospitality Spec"],
    Icon: Layers,
    imgSrc: "/products/textiles.png",
  },
  {
    name: "Carpets & Rugs",
    desc: "Hand-knotted and machine-woven carpets from India's established rug hubs — a rich tradition of weaving that spans centuries, now available for global retail buyers.",
    tags: ["Hand Knotted", "Rug Hubs", "Custom Sizes"],
    Icon: Grid3x3,
    imgSrc: "/products/carpets.png",
  },
  {
    name: "Paper & Stationery",
    desc: "Premium paper products, handmade journals, and stationery sourced from specialised Indian production facilities — ideal for gifting, retail, and corporate buyers.",
    tags: ["Handmade Paper", "Eco Friendly", "Gifting Range"],
    Icon: BookOpen,
    imgSrc: "/products/paper-stationery.jpeg",
  },
  {
    name: "Woodcraft & Artisan Gifts",
    desc: "Finely finished wooden décor, carved gifts, and artisan craft pieces from India's skilled woodcraft regions — unique products that carry cultural heritage.",
    tags: ["Hand Carved", "Heritage Craft", "Gifting"],
    Icon: Sparkles,
    imgSrc: "/products/woodcraft.jpeg",
  },
  {
    name: "Custom Sourcing",
    desc: "Need something specific? Our verified supplier network across India covers spices, specialty textiles, select machinery, and emerging trade categories tailored to your requirements.",
    tags: ["Any Category", "Verified Suppliers", "Free Quote"],
    Icon: Search,
    imgSrc: "/products/custom-sourcing-2.png",
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
        minHeight: "420px",
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

      {/* Image — fills top portion of card */}
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
          style={{ fontSize: "clamp(1.35rem,2.2vw,1.8rem)", letterSpacing: "-0.5px", lineHeight: 1.1 }}
        >
          {name}
        </h3>
        <p className="mt-3 text-sm font-body font-light text-white/70 leading-snug">
          {desc}
        </p>
        <div className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-body font-medium" style={{ color: "#c8a96e" }}>
          <span>Enquire now</span>
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
    <section id="products" className="relative overflow-hidden" style={{ background: "#0e1210" }}>
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,110,0.3), transparent)" }} />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-20 flex flex-col">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-body mb-4 tracking-widest uppercase" style={{ color: "#c8a96e" }}>
            Our Trade Focus
          </p>
          <h2 className="font-display italic text-white text-display-lg leading-[0.9]">
            Craftsmanship,<br />Traded Globally
          </h2>
          <p className="mt-6 font-body font-light text-white/60 text-sm leading-relaxed max-w-lg">
            We connect global buyers with India&apos;s manufacturing excellence — from handcrafted artisan products to standardised export-quality textiles and home décor.
          </p>
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
            Looking for something specific?{" "}
            <a href="#contact" className="text-white underline underline-offset-2 hover:text-white/80 transition-colors">
              Contact us for custom sourcing →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
