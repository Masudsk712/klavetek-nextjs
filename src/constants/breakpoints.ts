/**
 * ------------------------------------------------------------
 * KLAVETEK DESIGN SYSTEM
 * Responsive Breakpoints
 * ------------------------------------------------------------
 */

export const BREAKPOINTS = {
  // ==========================================================
  // Device Widths
  // ==========================================================

  mobile: 0,

  mobileLarge: 480,

  tablet: 768,

  laptop: 1024,

  desktop: 1280,

  wide: 1440,

  ultraWide: 1536,

  fourK: 1920,
} as const;

// ==========================================================
// Container Widths
// ==========================================================

export const CONTAINER = {
  sm: "640px",

  md: "768px",

  lg: "1024px",

  xl: "1280px",

  "2xl": "1400px",

  full: "100%",
} as const;

// ==========================================================
// Media Query Helpers
// ==========================================================

export const MEDIA = {
  mobile: `(max-width: ${BREAKPOINTS.tablet - 1}px)`,

  tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,

  laptop: `(min-width: ${BREAKPOINTS.laptop}px)`,

  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,

  wide: `(min-width: ${BREAKPOINTS.wide}px)`,

  ultraWide: `(min-width: ${BREAKPOINTS.ultraWide}px)`,

  fourK: `(min-width: ${BREAKPOINTS.fourK}px)`,
} as const;

export type BreakpointToken = keyof typeof BREAKPOINTS;