/**
 * ------------------------------------------------------------
 * KLAVETEK DESIGN SYSTEM
 * Motion & Animation Tokens
 * ------------------------------------------------------------
 */

export const ANIMATION = {
  // ==========================================================
  // Duration
  // ==========================================================

  duration: {
    instant: 0.15,
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    slower: 1.2,
    hero: 1.5,
  },

  // ==========================================================
  // Delay
  // ==========================================================

  delay: {
    none: 0,
    xs: 0.1,
    sm: 0.2,
    md: 0.3,
    lg: 0.5,
    xl: 0.8,
  },

  // ==========================================================
  // Ease
  // ==========================================================

  ease: {
    linear: "linear",

    easeIn: "easeIn",

    easeOut: "easeOut",

    easeInOut: "easeInOut",

    spring: [0.16, 1, 0.3, 1] as const,

    smooth: [0.25, 1, 0.5, 1] as const,
  },

  // ==========================================================
  // Distance
  // ==========================================================

  distance: {
    xs: 10,
    sm: 20,
    md: 40,
    lg: 80,
    xl: 120,
  },

  // ==========================================================
  // Scale
  // ==========================================================

  scale: {
    small: 0.95,
    normal: 1,
    hover: 1.03,
    active: 0.98,
    large: 1.08,
  },

  // ==========================================================
  // Rotation
  // ==========================================================

  rotate: {
    small: 5,
    medium: 10,
    large: 20,
  },

  // ==========================================================
  // Opacity
  // ==========================================================

  opacity: {
    hidden: 0,
    visible: 1,
  },
} as const;

// ==========================================================
// Framer Motion Variants
// ==========================================================

export const MOTION = {
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeDown: {
    hidden: {
      opacity: 0,
      y: -40,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  },

  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -40,
    },

    visible: {
      opacity: 1,
      x: 0,
    },
  },

  fadeRight: {
    hidden: {
      opacity: 0,
      x: 40,
    },

    visible: {
      opacity: 1,
      x: 0,
    },
  },

  zoomIn: {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },

    visible: {
      opacity: 1,
      scale: 1,
    },
  },

  zoomOut: {
    hidden: {
      opacity: 0,
      scale: 1.1,
    },

    visible: {
      opacity: 1,
      scale: 1,
    },
  },
} as const;

// ==========================================================
// Hover Effects
// ==========================================================

export const HOVER = {
  button: {
    scale: 1.04,
  },

  card: {
    scale: 1.03,
  },

  image: {
    scale: 1.05,
  },

  icon: {
    rotate: 5,
  },
} as const;

export type AnimationToken = typeof ANIMATION;