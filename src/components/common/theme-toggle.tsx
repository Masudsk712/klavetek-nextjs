"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative h-10 w-10 rounded-full border border-black/10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-all duration-300"
        aria-label="Toggle Theme"
      >
        <div className="h-[18px] w-[18px]" />
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
      className="relative flex h-11 w-20 items-center justify-between rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md px-1 shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(34,197,94,0.25)] dark:hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:scale-[1.08]"
      aria-label="Toggle Theme"
      whileTap={{ scale: 0.95 }}
    >
      <span className="sr-only">Toggle theme</span>

      <motion.span
        className="flex h-8 w-8 items-center justify-center rounded-full"
        animate={{
          backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.06)",
          scale: isDark ? 0.9 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <Moon
                size={16}
                className="text-white"
                strokeWidth={2}
              />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex items-center justify-center"
            >
              <Sun
                size={16}
                className="text-black"
                strokeWidth={2}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.span>

      <motion.div
        className="absolute h-8 w-8 rounded-full bg-gradient-to-br from-[#22C55E] to-[#16A34A] shadow-[0_2px_10px_rgba(34,197,94,0.45)]"
        animate={{
          x: isDark ? 0 : 32,
          scale: isDark ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          boxShadow: isDark
            ? "0 0 18px rgba(34, 197, 94, 0.35)"
            : "0 0 18px rgba(22, 163, 74, 0.45)",
        }}
      />
    </motion.button>
  );
}