"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Info,
  Package,
  Image,
  Briefcase,
  Mail,
  Box,
  Grid3X3,
  Layers,
  Truck,
  Building2,
  Factory,
  Shield,
  FolderOpen,
  HelpCircle,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

/* ──────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

/* ──────────────────────────────────────────────────────────────
   LINK DATA
   ────────────────────────────────────────────────────────────── */

const quickLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Products", href: "/products", icon: Package },
  { label: "Gallery", href: "/gallery", icon: Image },
  { label: "Career", href: "/career", icon: Briefcase },
  { label: "Contact Us", href: "/contact", icon: Mail },
];

const productLinks = [
  { label: "AAC Blocks", href: "/products/aac-blocks", icon: Box },
  { label: "Paver Blocks", href: "/products/paver-blocks", icon: Grid3X3 },
  { label: "Interlocking Tiles", href: "/products/interlocking-tiles", icon: Layers },
  { label: "Kerb Stones", href: "/products/kerb-stones", icon: Truck },
];

const companyLinks = [
  { label: "About Us", href: "/about", icon: Building2 },
  { label: "Manufacturing", href: "/manufacturing", icon: Factory },
  { label: "Quality Policy", href: "/quality", icon: Shield },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "FAQs", href: "/faq", icon: HelpCircle },
];

const contactInfo = [
  {
    label: "Office Address",
    value: "Plot No. 123, Industrial Area, Phase II, Haryana - 122001",
    icon: MapPin,
    href: "https://maps.google.com",
    isLink: true,
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    icon: Phone,
    href: "tel:+919876543210",
    isLink: true,
  },
  {
    label: "Email",
    value: "info@klavetek.com",
    icon: Mail,
    href: "mailto:info@klavetek.com",
    isLink: true,
  },
  {
    label: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    icon: Clock,
    href: "#",
    isLink: false,
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "WhatsApp", href: "#", icon: FaWhatsapp },
];

/* ──────────────────────────────────────────────────────────────
   ULTRA-PREMIUM ENTERPRISE FOOTER
   ────────────────────────────────────────────────────────────── */

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-80px" });

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#000000] text-white"
      style={{
        paddingTop: "120px",
        paddingBottom: "40px",
      }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* ─── Animated Emerald Gradient Separator ─── */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-30">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #10B981 30%, #34D399 50%, #10B981 70%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "emerald-shimmer 4s ease-in-out infinite",
          }}
          aria-hidden="true"
        />
      </div>

      {/* ─── Subtle Emerald Radial Glow ─── */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.03) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      {/* ─── Very Soft Grid Texture ─── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* ─── Almost Invisible Noise Texture ─── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      {/* ─── Floating Soft Particles ─── */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-400/20"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${12 + Math.random() * 15}s ease-in-out infinite ${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-16 lg:grid-cols-12"
        >
          {/* ─── LEFT SIDE: Brand Info ─── */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">K</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Klavetek
                </h3>
                <p className="text-xs text-emerald-400/80 font-medium">
                  Green Blocks & Tiles
                </p>
              </div>
            </div>

            {/* Company Name */}
            <h4 className="text-sm font-semibold text-emerald-400/90 mb-4 tracking-wide">
              Klavetek Green Blocks & Tiles Pvt. Ltd.
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-[1.85] mb-8 max-w-sm">
              Premium AAC Blocks Manufacturer delivering eco-friendly construction materials 
              with uncompromising quality, innovative solutions, and reliable delivery. 
              Building India's infrastructure with sustainable strength.
            </p>

            {/* Glass Chips */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: "ISO Certified", icon: ShieldCheck },
                { label: "Eco-Friendly", icon: Leaf },
                { label: "Premium Quality", icon: CheckCircle2 },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="glass-chip inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-emerald-50/90 cursor-default"
                >
                  <chip.icon size={14} className="text-emerald-400" />
                  {chip.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ─── MIDDLE COLUMNS ─── */}
          <motion.div variants={fadeUp} className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">
                Quick Links
              </h5>
              <ul className="space-y-3" role="list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <link.icon
                        size={14}
                        className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors duration-300"
                      />
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Products */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">
                Products
              </h5>
              <ul className="space-y-3" role="list">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <link.icon
                        size={14}
                        className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors duration-300"
                      />
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">
                Company
              </h5>
              <ul className="space-y-3" role="list">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <link.icon
                        size={14}
                        className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors duration-300"
                      />
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5">
                Contact
              </h5>
              <ul className="space-y-3.5" role="list">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    {item.isLink ? (
                      <Link
                        href={item.href}
                        className="group flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        <item.icon
                          size={14}
                          className="text-emerald-500/60 group-hover:text-emerald-400 transition-colors duration-300 mt-0.5 flex-shrink-0"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 mb-0.5">{item.label}</span>
                          <span className="relative group-hover:text-white transition-colors duration-300 leading-tight">
                            {item.value}
                          </span>
                        </div>
                      </Link>
                    ) : (
                      <div className="flex items-start gap-2.5 text-sm text-gray-400">
                        <item.icon
                          size={14}
                          className="text-emerald-500/60 mt-0.5 flex-shrink-0"
                        />
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-500 mb-0.5">{item.label}</span>
                          <span className="leading-tight">{item.value}</span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ─── RIGHT SIDE: Newsletter Card ─── */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div
              className="relative rounded-2xl overflow-hidden p-8"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Glass reflection */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* Light reflection sweep on hover */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Heading */}
                <h5 className="text-lg font-bold text-white mb-2 tracking-tight">
                  Stay Updated
                </h5>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Receive product updates and company news directly in your inbox.
                </p>

                {/* Input */}
                <form
                  className="space-y-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const input = e.currentTarget.querySelector("input") as HTMLInputElement;
                    if (input?.value) {
                      alert("Thanks for subscribing!");
                      input.value = "";
                    }
                  }}
                >
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      aria-label="Email address for newsletter"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all duration-300"
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  </div>

                  {/* Subscribe Button */}
                  <button
                    type="submit"
                    className="group relative w-full inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(135deg, #059669 0%, #10B981 25%, #34D399 50%, #10B981 75%, #059669 100%)",
                      backgroundSize: "200% 200%",
                      animation: "emerald-shimmer 4s ease-in-out infinite",
                      boxShadow: "0 4px 14px 0 rgba(34, 197, 94, 0.35)",
                    }}
                  >
                    {/* Glossy reflection */}
                    <span
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 100%)",
                        borderRadius: "inherit",
                      }}
                      aria-hidden="true"
                    />

                    <span className="relative z-10">Subscribe</span>
                    <ArrowRight
                      size={16}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                    />
                  </button>
                </form>

                {/* Privacy note */}
                <p className="text-xs text-gray-500 mt-4 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Social Media ─── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-10 border-t border-white/5"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-1"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                aria-label={social.label}
              >
                {/* Hover glow */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: "0 0 20px rgba(16,185,129,0.3), 0 0 40px rgba(16,185,129,0.1)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <social.icon
                  size={20}
                  className="text-gray-400 group-hover:text-emerald-400 transition-colors duration-300 relative z-10 group-hover:rotate-6"
                />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ─── Bottom Strip ─── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="grid gap-6 sm:grid-cols-3 items-center text-center sm:text-left">
            {/* Left: Copyright */}
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} Klavetek Green Blocks & Tiles Pvt. Ltd.
              <br />
              All Rights Reserved.
            </div>

            {/* Center: Made with ❤️ */}
            <div className="text-xs text-gray-500">
              Made with <span className="text-emerald-400">❤️</span> for Sustainable Construction
            </div>

            {/* Right: Links */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Sitemap", href: "/sitemap" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-xs text-gray-500 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}