/**
 * ------------------------------------------------------------
 * KLAVETEK DESIGN SYSTEM
 * Theme Configuration
 * ------------------------------------------------------------
 */

import { COLORS } from "@/constants/colors";

export const THEME = {
  // ==========================================================
  // Light Theme
  // ==========================================================

  light: {
    mode: "light",

    background: COLORS.background,

    surface: COLORS.surface,

    card: COLORS.card,

    text: COLORS.textPrimary,

    textSecondary: COLORS.textSecondary,

    border: COLORS.border,

    primary: COLORS.primary,

    secondary: COLORS.secondary,

    accent: COLORS.accent,

    shadow: "card",
  },

  // ==========================================================
  // Dark Theme
  // ==========================================================

  dark: {
    mode: "dark",

    background: COLORS.backgroundDark,

    surface: COLORS.surfaceDark,

    card: COLORS.cardDark,

    text: COLORS.textPrimaryDark,

    textSecondary: COLORS.textSecondaryDark,

    border: COLORS.borderDark,

    primary: COLORS.primary,

    secondary: COLORS.secondary,

    accent: COLORS.accent,

    shadow: "cardDark",
  },
} as const;

export type ThemeType = keyof typeof THEME;