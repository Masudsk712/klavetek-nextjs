/**
 * ------------------------------------------------------------
 * KLAVETEK WEBSITE
 * Navigation Configuration
 * ------------------------------------------------------------
 */

export const NAVIGATION = {
  // ==========================================================
  // Main Navbar
  // ==========================================================

  main: [
    {
      title: "Home",
      href: "/",
    },

    {
      title: "About",
      href: "/about",
    },

    {
      title: "Products",
      href: "/products",
    },

    {
      title: "Projects",
      href: "/projects",
    },

    {
      title: "Gallery",
      href: "/gallery",
    },

    {
      title: "Career",
      href: "/career",
    },

    {
      title: "Contact Us",
      href: "/contact",
    },
  ],

  // ==========================================================
  // Footer Quick Links
  // ==========================================================

  footer: [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },

    {
      title: "Terms & Conditions",
      href: "/terms",
    },

    {
      title: "FAQ",
      href: "/faq",
    },

    {
      title: "Contact",
      href: "/contact",
    },
  ],

  // ==========================================================
  // CTA Button
  // ==========================================================

  cta: {
    title: "Get a Quote",

    href: "/contact",
  },
} as const;

export type NavigationConfig = typeof NAVIGATION;