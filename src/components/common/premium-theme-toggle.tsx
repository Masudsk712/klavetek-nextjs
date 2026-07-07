"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative h-9 w-[68px] rounded-full bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/8 dark:border-white/8"
        aria-label="Toggle theme"
      >
        <div className="h-7 w-7" />
      </button>
    );
  }

  const isDark = theme === "dark";

  const toggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative flex h-9 w-[68px] items-center rounded-full border border-black/8 dark:border-white/8 bg-white/60 dark:bg-black/60 backdrop-blur-md px-[3px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      whileTap={{ scale: 0.94 }}
      style={{
        transition: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Sliding pill */}
      <motion.span
        className="absolute h-7 w-7 rounded-full bg-white dark:bg-black shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
        animate={{
          x: isDark ? 0 : 34,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
        }}
      />

      {/* Light label */}
      <span
        className="relative z-10 flex h-7 w-7 items-center justify-center"
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          {!isDark ? (
            <motion.span
              key="light-active"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] font-bold uppercase tracking-[0.05em] text-black"
            >
              A
            </motion.span>
          ) : (
            <motion.span
              key="light-inactive"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] font-medium uppercase tracking-[0.05em] text-white/40"
            >
              A
            </motion.span>
          )}
        </AnimatePresence>
      </span>

      {/* Dark label */}
      <span
        className="relative z-10 flex h-7 w-7 items-center justify-center"
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.span
              key="dark-active"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] font-bold uppercase tracking-[0.05em] text-white"
            >
              A
            </motion.span>
          ) : (
            <motion.span
              key="dark-inactive"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[10px] font-medium uppercase tracking-[0.05em] text-black/40"
            >
              A
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </motion.button>
  );
}