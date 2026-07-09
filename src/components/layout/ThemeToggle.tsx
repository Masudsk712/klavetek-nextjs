"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-20 rounded-full border border-border bg-muted/50" />
    );
  }

  const isDark = (theme === "system"
    ? resolvedTheme
    : theme) === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      className="
        group
        relative
        flex
        h-11
        w-20
        items-center
        rounded-full
        border
        border-white/10
        bg-white/10
        px-1
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-green-500/40
        hover:bg-white/15
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          rounded-full
          bg-gradient-to-r
          from-green-500/10
          via-transparent
          to-green-500/10
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Slider */}

      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="
          absolute
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-green-500
          to-emerald-600
          shadow-lg
          shadow-green-500/30
        "
        animate={{
          x: isDark ? 36 : 0,
        }}
      >
        {isDark ? (
          <Moon
            className="h-4 w-4 text-white"
            strokeWidth={2.2}
          />
        ) : (
          <Sun
            className="h-4 w-4 text-white"
            strokeWidth={2.2}
          />
        )}
      </motion.div>

      {/* Left Icon */}

      <div className="flex w-full items-center justify-between px-2">
        <Sun
          className={`h-4 w-4 transition-all duration-300 ${
            isDark
              ? "text-white/40"
              : "text-yellow-400"
          }`}
        />

        <Moon
          className={`h-4 w-4 transition-all duration-300 ${
            isDark
              ? "text-sky-300"
              : "text-white/40"
          }`}
        />
      </div>
    </button>
  );
}