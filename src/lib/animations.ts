import { Variants } from "framer-motion";

/**
 * Default transition
 */
export const defaultTransition = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1] as const,
};

/**
 * Fade Up
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Fade Down
 */
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Fade Left
 */
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/**
 * Fade Right
 */
export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/**
 * Zoom In
 */
export const zoomIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

/**
 * Hero Title Animation
 */
export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...defaultTransition,
      duration: 0.9,
    },
  },
};

/**
 * Hero Subtitle
 */
export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...defaultTransition,
      delay: 0.2,
    },
  },
};

/**
 * CTA Buttons
 */
export const heroButtons: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...defaultTransition,
      delay: 0.4,
    },
  },
};

/**
 * Parent stagger
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/**
 * Card animation
 */
export const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/**
 * Floating animation
 */
export const floatingAnimation = {
  y: [0, -12, 0],
  transition: {
    repeat: Infinity,
    duration: 5,
    ease: "easeInOut",
  },
};

/**
 * Infinite rotation
 */
export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    repeat: Infinity,
    duration: 25,
    ease: "linear",
  },
};

/**
 * Pulse Glow
 */
export const pulseGlow = {
  scale: [1, 1.04, 1],
  transition: {
    repeat: Infinity,
    duration: 2.5,
    ease: "easeInOut",
  },
};

/**
 * Hover Scale
 */
export const hoverScale = {
  whileHover: {
    scale: 1.04,
    transition: {
      duration: 0.25,
    },
  },
};

/**
 * Button Hover
 */
export const buttonHover = {
  whileHover: {
    y: -2,
    scale: 1.03,
  },
  whileTap: {
    scale: 0.98,
  },
};