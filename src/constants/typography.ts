/**
 * ------------------------------------------------------------
 * KLAVETEK DESIGN SYSTEM
 * Typography Tokens
 * ------------------------------------------------------------
 */

export const TYPOGRAPHY = {
  // ==========================================================
  // Font Family
  // ==========================================================

  fontFamily: {
    heading: "var(--font-poppins)",
    body: "var(--font-inter)",
    mono: "monospace",
  },

  // ==========================================================
  // Font Size
  // ==========================================================

  fontSize: {
    display: "5.5rem",  // 88px - Extra large premium heading
    hero: "5rem",      // 80px
    h1: "4rem",        // 64px
    h2: "3rem",        // 48px
    h3: "2.25rem",     // 36px
    h4: "1.875rem",    // 30px
    h5: "1.5rem",      // 24px
    h6: "1.25rem",     // 20px

    xl: "1.25rem",
    lg: "1.125rem",
    base: "1rem",
    sm: "0.875rem",
    xs: "0.75rem",
  },

  // ==========================================================
  // Font Weight
  // ==========================================================

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // ==========================================================
  // Line Height
  // ==========================================================

  lineHeight: {
    hero: 1.05,
    heading: 1.1,
    body: 1.6,
    compact: 1.4,
  },

  // ==========================================================
  // Letter Spacing
  // ==========================================================

  letterSpacing: {
    tighter: "-0.025em",
    tight: "-0.01em",
    normal: "0",
    wide: "0.01em",
    wider: "0.02em",
    widest: "0.1em",
  },
} as const;

export type TypographyToken = typeof TYPOGRAPHY;