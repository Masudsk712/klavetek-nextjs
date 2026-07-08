"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;

  blur?: "sm" | "md" | "lg" | "xl";

  hover?: boolean;

  glow?: boolean;

  borderGradient?: boolean;
}

export default function GlassCard({
  children,
  className,
  blur = "lg",
  hover = true,
  glow = true,
  borderGradient = true,
  ...props
}: GlassCardProps) {
  const blurClass = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-xl",
    xl: "backdrop-blur-2xl",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl",

        borderGradient &&
          "bg-gradient-to-br from-white/20 via-white/5 to-green-500/20 p-[1px]",

        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-[22px]",

          blurClass[blur],

          "border border-white/10",

          "bg-white/10 dark:bg-white/[0.04]",

          "transition-all duration-500",

          hover &&
            "hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20",

          glow &&
            "before:absolute before:inset-0 before:rounded-[22px] before:bg-gradient-to-br before:from-green-400/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100"
        )}
      >
        {/* Top Light */}
        <div
          className="
            absolute
            left-0
            top-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/60
            to-transparent
            opacity-60
          "
        />

        {/* Side Glow */}
        <div
          className="
            absolute
            -right-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-green-500/10
            blur-3xl
            transition-all
            duration-700
            group-hover:scale-150
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            -bottom-20
            left-1/2
            h-40
            w-40
            -translate-x-1/2
            rounded-full
            bg-emerald-500/10
            blur-3xl
          "
        />

        {/* Content */}
        <div className="relative z-10 h-full w-full p-6">
          {children}
        </div>
      </div>
    </div>
  );
}