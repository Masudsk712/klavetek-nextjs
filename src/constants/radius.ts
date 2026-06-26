/**
 * ------------------------------------------------------------
 * KLAVETEK DESIGN SYSTEM
 * Border Radius Tokens
 * ------------------------------------------------------------
 */

export const RADIUS = {
  // ==========================================================
  // Basic Radius Scale
  // ==========================================================

  none: "0px",

  xs: "4px",

  sm: "8px",

  md: "12px",

  lg: "16px",

  xl: "20px",

  "2xl": "24px",

  "3xl": "32px",

  full: "9999px",

  // ==========================================================
  // Components
  // ==========================================================

  button: "12px",

  card: "20px",

  input: "12px",

  textarea: "12px",

  badge: "9999px",

  avatar: "9999px",

  image: "24px",

  modal: "28px",

  drawer: "24px",

  tooltip: "10px",

  dropdown: "16px",

  navbar: "0px",

  section: "32px",

  video: "24px",

  gallery: "24px",

  certificate: "20px",

  projectCard: "24px",

  serviceCard: "24px",

  statsCard: "20px",
} as const;

export type RadiusToken = keyof typeof RADIUS;