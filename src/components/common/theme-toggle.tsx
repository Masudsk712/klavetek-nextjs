"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="rounded-full border p-2"
        aria-label="Toggle Theme"
      >
        <div className="h-[18px] w-[18px]" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-full border p-2 transition-all"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}