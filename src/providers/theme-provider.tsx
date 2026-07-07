"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function ThemeProvider({
  children,
  className,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="klavetek-theme"
      {...props}
    >
      <div className={className}>{children}</div>
    </NextThemesProvider>
  );
}

// Prevent theme flash by adding data-theme attribute before hydration
export function ThemeFlashPrevention() {
  React.useEffect(() => {
    const stored = localStorage.getItem("klavetek-theme");
    if (stored) {
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  return null;
}
