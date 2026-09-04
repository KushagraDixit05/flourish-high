"use client";

import { motion } from "framer-motion";
import WorldMap from "@/components/ui/world-map";

// ── Geographic coordinates ──────────────────────────────────────────────────
const LOCATIONS = {
  india:      { lat: 20.5937,  lng: 78.9629,  label: "India" },
  australia:  { lat: -25.2744, lng: 133.7751, label: "Australia" },
  newZealand: { lat: -40.9006, lng: 174.886,  label: "New Zealand" },
  japan:      { lat: 36.2048,  lng: 138.2529, label: "Japan" },
  uk:         { lat: 55.3781,  lng: -3.436,   label: "United Kingdom" },
  middleEast: { lat: 25.2048,  lng: 55.2708,  label: "Middle East" },
} as const;

// ── Primary arcs: India → each destination (prominent, bright gold) ─────────
const PRIMARY_CONNECTIONS = [
  { start: LOCATIONS.india,     end: LOCATIONS.australia },
  { start: LOCATIONS.india,     end: LOCATIONS.newZealand },
  { start: LOCATIONS.india,     end: LOCATIONS.japan },
  { start: LOCATIONS.india,     end: LOCATIONS.uk },
  { start: LOCATIONS.india,     end: LOCATIONS.middleEast },
];

// ── Secondary arcs: inter-regional (subtle, muted) ───────────────────────────
const SECONDARY_CONNECTIONS = [
  { start: LOCATIONS.australia,  end: LOCATIONS.newZealand },
  { start: LOCATIONS.japan,      end: LOCATIONS.australia },
  { start: LOCATIONS.middleEast, end: LOCATIONS.uk },
  { start: LOCATIONS.uk,         end: LOCATIONS.australia },
];

// ── Destination labels rendered over the map ─────────────────────────────────
const DESTINATIONS = [
  { label: "Japan",          flag: "🇯🇵" },
  { label: "United Kingdom", flag: "🇬🇧" },
  { label: "Middle East",    flag: "🇦🇪" },
  { label: "Australia",      flag: "🇦🇺" },
  { label: "New Zealand",    flag: "🇳🇿" },
];

export default function GlobalReach() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col h-full"
    >
      {/* Section label + heading */}
      <div className="mb-6">
        <p
          className="text-sm font-body mb-2 tracking-widest uppercase"
          style={{ color: "#c8a96e" }}
        >
          Global Reach
        </p>
        <p
          className="font-display italic text-white/80 leading-snug"
          style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
            letterSpacing: "-0.5px",
          }}
        >
          India at the centre of our<br />international network.
        </p>
      </div>

      {/* Map — dual-layer: secondary (subtle) below, primary (prominent) above */}
      <div className="relative flex-1" style={{ minHeight: "320px" }}>
        {/* Secondary connections — muted dim gold */}
        <div className="absolute inset-0 opacity-40">
          <WorldMap dots={SECONDARY_CONNECTIONS} lineColor="#7a5c2a" />
        </div>

        {/* Primary connections — bright brand gold */}
        <div className="relative z-10">
          <WorldMap dots={PRIMARY_CONNECTIONS} lineColor="#c8a96e" />
        </div>
      </div>

      {/* Destination badges */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mt-4"
      >
        <span
          className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-body font-semibold"
          style={{
            background: "rgba(200,169,110,0.15)",
            border: "1px solid rgba(200,169,110,0.35)",
            color: "#c8a96e",
          }}
        >
          🇮🇳 India — Hub
        </span>
        {DESTINATIONS.map((dest) => (
          <span
            key={dest.label}
            className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-body"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            {dest.flag} {dest.label}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
