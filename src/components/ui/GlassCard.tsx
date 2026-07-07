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
        "relative overflow-hidden rounded-[20px]",

        // Glass Effect - Premium
        "bg-card dark:bg-card",

        "backdrop-blur-2xl",

        // Border - Subtle premium
        "border border-black/5 dark:border-white/10",

        // Shadow - Soft realistic
        "shadow-[0_1px_3px_0_rgba(0,0,0,0.04),0_1px_2px_-1px_rgba(0,0,0,0.04)] dark:shadow-[0_1px_3px_0_rgba(0,0,0,0.3),0_1px_2px_-1px_rgba(0,0,0,0.3)]",

        // Transition - Premium smooth
        "transition-all duration-500 ease-out",

        // Hover - Luxury feel
        "hover:-translate-y-[6px]",
        "hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.2)]",
        "hover:border-[#22C55E]/20 dark:hover:border-[#22C55E]/30",

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
        from-white/40
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
