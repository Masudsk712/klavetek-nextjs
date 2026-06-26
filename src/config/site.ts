/**
 * ------------------------------------------------------------
 * KLAVETEK DESIGN SYSTEM
 * Site Configuration
 * ------------------------------------------------------------
 */

export const SITE = {
  // ==========================================================
  // Basic Information
  // ==========================================================

  name: "Klavetek",

  shortName: "Klavetek",

  legalName: "Klavetek Private Limited",

  tagline: "Building Stronger Tomorrow.",

  description:
    "Klavetek is a leading manufacturer and supplier of premium AAC Blocks, construction materials, and engineering solutions across India.",

  keywords: [
    "AAC Blocks",
    "Construction Company",
    "Building Materials",
    "Engineering",
    "Infrastructure",
    "Green Building",
    "Lightweight Blocks",
    "Klavetek",
  ],

  // ==========================================================
  // Website
  // ==========================================================

  url: "https://www.klavetek.com",

  domain: "klavetek.com",

  locale: "en-IN",

  language: "en",

  timezone: "Asia/Kolkata",

  // ==========================================================
  // Contact
  // ==========================================================

  contact: {
    email: "info@klavetek.com",

    support: "support@klavetek.com",

    sales: "sales@klavetek.com",

    phone: "+91 XXXXX XXXXX",

    whatsapp: "+91 XXXXX XXXXX",
  },

  // ==========================================================
  // Office
  // ==========================================================

  office: {
    address: "Malda, West Bengal",

    city: "Malda",

    state: "West Bengal",

    country: "India",

    pincode: "732101",
  },

  // ==========================================================
  // Social Media
  // ==========================================================

  social: {
    facebook: "",

    instagram: "",

    linkedin: "",

    youtube: "",

    x: "",
  },

  // ==========================================================
  // SEO Images
  // ==========================================================

  images: {
    logo: "/logos/logo.svg",

    logoDark: "/logos/logo-dark.svg",

    favicon: "/favicon/favicon.ico",

    og: "/og/og-image.jpg",

    twitter: "/og/twitter-card.jpg",
  },

  // ==========================================================
  // Copyright
  // ==========================================================

  copyright: `© ${new Date().getFullYear()} Klavetek. All rights reserved.`,

  // ==========================================================
  // Company
  // ==========================================================

  founded: 2026,

  industry: "Construction & Engineering",

  employees: "50+",

  serving: "Pan India",
} as const;

export type SiteConfig = typeof SITE;