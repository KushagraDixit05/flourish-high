import Image from "next/image";

const NAV_LINKS    = ["Products", "Services", "Why Us", "About", "Contact"];
const PRODUCT_CATS = ["Spices & Herbs", "Rice Varieties", "Pulses & Lentils", "Edible Oils", "FMCG Goods"];

// Premium LinkedIn SVG icon
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// Premium Instagram SVG icon
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 px-8 md:px-16 lg:px-20 py-16"
      style={{ background: "#0e1210" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Col 1: Brand */}
        <div className="md:col-span-1">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo-golden.png"
              alt="Flourish High International"
              width={48}
              height={48}
              className="object-contain"
              style={{ filter: "drop-shadow(0 0 8px rgba(200,169,110,0.35))" }}
            />
            <div>
              <p className="font-display italic text-white text-lg leading-none">Flourish High</p>
              <p className="font-body text-[10px] uppercase tracking-widest mt-0.5" style={{ color: "#c8a96e" }}>International</p>
            </div>
          </div>

          <p className="font-body text-sm text-white/60 leading-relaxed max-w-[240px] mt-4">
            India-based International Trading Company. Quality commodities, globally traded.
          </p>

          {/* Social links */}
          <div className="mt-5">
            <p className="font-body text-xs font-medium uppercase tracking-widest mb-3" style={{ color: "#c8a96e" }}>
              Connect with us
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/flourish-high-international"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex items-center gap-2 px-3 py-2 rounded-full border text-white/60 hover:text-white transition-all duration-200 hover:border-white/30"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <LinkedInIcon />
                <span className="text-[11px] font-body">LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/flourishhighinternational"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex items-center gap-2 px-3 py-2 rounded-full border text-white/60 hover:text-white transition-all duration-200 hover:border-white/30"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <InstagramIcon />
                <span className="text-[11px] font-body">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Navigate */}
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#c8a96e" }}>
            Navigate
          </p>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              className="block font-body text-sm text-white/60 hover:text-white mb-2 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Col 3: Products */}
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#c8a96e" }}>
            Products
          </p>
          {PRODUCT_CATS.map((l) => (
            <a
              key={l}
              href="#products"
              className="block font-body text-sm text-white/60 hover:text-white mb-2 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Col 4: Contact */}
        <div>
          <p className="font-body text-xs font-medium uppercase tracking-widest mb-4" style={{ color: "#c8a96e" }}>
            Contact
          </p>
          <a
            href="mailto:contact@flourishhigh.com"
            className="block font-body text-sm text-white/60 hover:text-white mb-3 transition-colors"
          >
            contact@flourishhigh.com
          </a>
          <div className="flex flex-col gap-2 mb-3">
            <a
              href="tel:+919131230076"
              className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="text-[10px] px-1.5 py-0.5 rounded font-body font-medium" style={{ background: "rgba(200,169,110,0.15)", color: "#c8a96e" }}>IN</span>
              +91 9131230076
            </a>
            <a
              href="tel:+64220856514"
              className="flex items-center gap-2 font-body text-sm text-white/60 hover:text-white transition-colors"
            >
              <span className="text-[10px] px-1.5 py-0.5 rounded font-body font-medium" style={{ background: "rgba(200,169,110,0.15)", color: "#c8a96e" }}>NZ</span>
              +64 220856514
            </a>
          </div>
          <p className="font-body text-sm text-white/50 leading-relaxed">
            Bhopal (MP), India — 462024
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-white/40">
          © 2025 Flourish High International. All rights reserved.
        </p>
        <p className="font-body text-xs text-white/30">
          IEC: XXXXXXXXXX · GST: XXXXXXXXXX
        </p>
      </div>
    </footer>
  );
}
