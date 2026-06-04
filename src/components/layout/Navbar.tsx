"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = ["Home", "Products", "Services", "Why Us", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-4 left-0 right-0 z-[9999] flex items-center justify-center px-4"
    >
      {/* Single centered pill — logo + links + CTA (desktop) */}
      <div
        className={cn(
          "hidden md:flex items-center gap-1 rounded-full px-2 py-1.5",
          "border border-white/10 transition-all duration-300",
          scrolled
            ? "backdrop-blur-[24px] bg-black/50 shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            : "backdrop-blur-[14px] bg-white/6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
        )}
      >
        {/* Logo inside pill */}
        <a
          href="#home"
          className="flex items-center gap-2 px-2 py-1 mr-1 flex-shrink-0"
        >
          <Image
            src="/logo-golden.png"
            alt="Flourish High International"
            width={28}
            height={28}
            className="object-contain"
            style={{ filter: "drop-shadow(0 0 5px rgba(200,169,110,0.45))" }}
          />
          <span
            className="font-display italic text-sm leading-none select-none"
            style={{ color: "#c8a96e", letterSpacing: "0.01em" }}
          >
            Flourish High
          </span>
        </a>

        {/* Divider */}
        <span className="w-px h-4 bg-white/15 mx-1 flex-shrink-0" />

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="px-3 py-2 text-sm font-body font-medium text-white/85 hover:text-white rounded-full transition-colors duration-200 hover:bg-white/10"
          >
            {link}
          </a>
        ))}

        {/* CTA */}
        <a
          href="#contact"
          className="ml-1 flex items-center gap-1 bg-white rounded-full px-4 py-2 text-sm font-body font-semibold whitespace-nowrap hover:bg-white/90 transition-colors duration-200"
          style={{ color: "#0e1210" }}
        >
          Request a Quote <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile: logo left + hamburger right */}
      <div className="md:hidden w-full flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/logo-golden.png"
            alt="Flourish High International"
            width={28}
            height={28}
            className="object-contain"
            style={{ filter: "drop-shadow(0 0 5px rgba(200,169,110,0.45))" }}
          />
          <span className="font-display italic text-sm" style={{ color: "#c8a96e" }}>Flourish High</span>
        </a>
        <button
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-white transition-all",
            "border border-white/10 backdrop-blur-[12px] bg-white/5"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="absolute top-16 left-4 right-4 p-6 flex flex-col gap-4 md:hidden border border-white/10"
          style={{
            borderRadius: "1.25rem",
            backdropFilter: "blur(50px)",
            WebkitBackdropFilter: "blur(50px)",
            background: "rgba(14,18,16,0.75)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-white font-body text-lg hover:text-white/70 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white rounded-full px-4 py-2 text-sm font-semibold text-center font-body mt-2"
            style={{ color: "#0e1210" }}
            onClick={() => setOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
