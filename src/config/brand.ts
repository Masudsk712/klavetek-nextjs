export const BRAND = {
  name: "Klavetek",
  legalName: "Klavetek Private Limited",

  tagline: "Engineering Excellence. Future Ready.",

  description:
    "Klavetek is a leading engineering and infrastructure company delivering innovative, reliable, and sustainable industrial solutions.",

  mission:
    "To provide world-class engineering solutions through innovation, quality, and customer satisfaction.",

  vision:
    "To become one of the most trusted engineering companies in India and globally.",

  founded: "2026",

  industry: "Engineering & Infrastructure",

  headquarters: "West Bengal, India",

  website: "https://www.klavetek.com",

  email: "info@klavetek.com",

  phone: "+91 XXXXX XXXXX",

  supportEmail: "support@klavetek.com",

  logo: {
    light: "/logos/logo-light.svg",
    dark: "/logos/logo-dark.svg",
    icon: "/logos/logo-icon.svg",
    favicon: "/favicon/favicon.ico",
  },

  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
    x: "",
  },
} as const;

export type BrandConfig = typeof BRAND;