/**
 * ------------------------------------------------------------
 * KLAVETEK WEBSITE
 * Route Constants
 * ------------------------------------------------------------
 */

export const ROUTES = {
  // ==========================================================
  // Main Pages
  // ==========================================================

  home: "/",

  about: "/about",

  products: "/products",

  technology: "/technology",

  industries: "/industries",

  projects: "/projects",

  certificates: "/certificates",

  gallery: "/gallery",

  blog: "/blog",

  careers: "/careers",

  contact: "/contact",

  faq: "/faq",

  // ==========================================================
  // Legal Pages
  // ==========================================================

  privacyPolicy: "/privacy-policy",

  terms: "/terms",

  cookiePolicy: "/cookie-policy",

  // ==========================================================
  // Utility Pages
  // ==========================================================

  notFound: "/404",

  sitemap: "/sitemap.xml",

  robots: "/robots.txt",

  // ==========================================================
  // API Routes (Future)
  // ==========================================================

  api: {
    contact: "/api/contact",

    newsletter: "/api/newsletter",

    quote: "/api/quote",

    career: "/api/career",
  },

  // ==========================================================
  // Dashboard (Future)
  // ==========================================================

  dashboard: {
    home: "/dashboard",

    login: "/login",

    profile: "/dashboard/profile",

    settings: "/dashboard/settings",
  },
} as const;

export type RouteKey = keyof typeof ROUTES;