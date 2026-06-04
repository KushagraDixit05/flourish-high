"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import FadingVideo from "@/components/ui/FadingVideo";

// Pexels: cargo ship aerial golden hour
const CONTACT_VIDEO =
  "https://videos.pexels.com/video-files/3753372/3753372-uhd_2560_1440_25fps.mp4";

const CONTACT = {
  email:    "info@flourishhigh.com",
  phone:    "+91 XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  address:  "India",
};

const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=Hello%2C%20I%27m%20interested%20in%20trading%20with%20Flourish%20High.`;

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen overflow-hidden" style={{ background: "#0e1210" }}>
      {/* Video BG */}
      <FadingVideo
        src={CONTACT_VIDEO}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: "rgba(14,18,16,0.6)" }} />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-16 min-h-screen flex flex-col">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <p
            className="text-sm font-body mb-4 tracking-widest uppercase"
            style={{ color: "#c8a96e" }}
          >
            // Get in Touch
          </p>
          <h2
            className="font-display italic text-white leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem,5vw,5rem)", letterSpacing: "-2px" }}
          >
            Start your<br />trade journey.
          </h2>
        </motion.div>

        {/* Two-col layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="font-body font-light text-white/70 text-sm leading-relaxed max-w-sm">
              Whether you&apos;re looking to source agricultural commodities, establish an
              import channel, or explore trade consulting — we&apos;re ready to talk.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-body text-sm"
              >
                <div className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors font-body text-sm"
              >
                <div className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                {CONTACT.phone}
              </a>
              <div className="flex items-center gap-3 text-white/80 font-body text-sm">
                <div className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                {CONTACT.address}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-body font-medium text-white transition-colors mt-2"
              style={{ background: "#2d6a4f" }}
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: RFQ Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="liquid-glass-strong p-8"
            style={{ borderRadius: "1.25rem" }}
          >
            <h3
              className="font-display italic text-white mb-6"
              style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", letterSpacing: "-0.5px" }}
            >
              Request a Free Quote
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  id="rfq-name"
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors"
                />
                <input
                  id="rfq-email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors"
                />
                <input
                  id="rfq-company"
                  type="text"
                  placeholder="Company Name"
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors"
                />
                <input
                  id="rfq-country"
                  type="text"
                  placeholder="Country *"
                  required
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors"
                />
                <input
                  id="rfq-product"
                  type="text"
                  placeholder="Product of Interest *"
                  required
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors"
                />
                <input
                  id="rfq-quantity"
                  type="text"
                  placeholder="Estimated Quantity / MOQ"
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors"
                />
              </div>
              <textarea
                id="rfq-message"
                placeholder="Tell us about your requirements..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-body text-white placeholder:text-white/40 focus:border-fh-green transition-colors resize-none"
                style={{ borderRadius: "1rem" }}
              />
              <button
                type="submit"
                className="w-full rounded-full px-6 py-3 text-sm font-body font-semibold text-white flex items-center justify-center gap-2 transition-colors duration-200 mt-2"
                style={{ background: "#2d6a4f" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#52b788")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2d6a4f")}
              >
                Send Inquiry <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
