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
      className={cn(
        "fixed top-4 left-0 right-0 z-50 px-8 lg:px-16",
        "flex items-center justify-between"
      )}
    >
      {/* Logo — golden FHI mark in a frosted pill */}
      <a
        href="#home"
        className={cn(
          "flex items-center gap-2.5 rounded-full px-3 py-2 transition-all duration-300 flex-shrink-0",
          "border border-white/10",
          scrolled
            ? "backdrop-blur-[18px] bg-black/40 shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            : "backdrop-blur-[12px] bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
        )}
      >
        <Image
          src="/logo-golden.png"
          alt="Flourish High International"
          width={32}
          height={32}
          className="object-contain"
          style={{ filter: "drop-shadow(0 0 6px rgba(200,169,110,0.4))" }}
        />
        <span
          className="hidden sm:block font-display italic text-sm leading-none select-none"
          style={{ color: "#c8a96e", letterSpacing: "0.01em" }}
        >
          Flourish High
        </span>
      </a>

      {/* Center nav pill (desktop) — always frosted */}
      <div
        className={cn(
          "hidden md:flex items-center gap-1 rounded-full px-1.5 py-1.5",
          "border border-white/10 transition-all duration-300",
          scrolled
            ? "backdrop-blur-[24px] bg-black/45 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "backdrop-blur-[14px] bg-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]"
        )}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className="px-3 py-2 text-sm font-body font-medium text-white/85 hover:text-white rounded-full transition-colors duration-200 hover:bg-white/10"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 flex items-center gap-1 bg-white rounded-full px-4 py-2 text-sm font-body font-semibold whitespace-nowrap hover:bg-white/90 transition-colors duration-200"
          style={{ color: "#0e1210" }}
        >
          Request a Quote <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Hamburger (mobile) */}
      <div className="w-10 h-10 flex items-center justify-end md:hidden">
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
