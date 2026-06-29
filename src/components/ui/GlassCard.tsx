import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({
  children,
  className,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        // Base
        "relative overflow-hidden rounded-3xl",

        // Glass Effect
        "bg-white/70 dark:bg-white/5",

        "backdrop-blur-2xl",

        // Border
        "border border-white/30 dark:border-white/10",

        // Shadow
        "shadow-xl shadow-black/5 dark:shadow-black/40",

        // Transition
        "transition-all duration-500",

        // Hover
        "hover:-translate-y-2",
        "hover:shadow-2xl",
        "hover:border-primary/30",

        className
      )}
      {...props}
    >
      {/* Light Reflection */}
      <div
        className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-br
        from-white/30
        via-transparent
        to-transparent
        dark:from-white/5
      "
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}