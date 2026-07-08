"use client";

import { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "px-4 py-1.5",
    "text-xs md:text-sm",
    "font-semibold",
    "tracking-wider",
    "uppercase",
    "transition-all duration-300",
    "border",
    "backdrop-blur-xl",
  ],
  {
    variants: {
      variant: {
        primary: [
          "border-green-500/20",
          "bg-green-500/10",
          "text-green-600",
          "dark:text-green-400",
        ],

        secondary: [
          "border-white/20",
          "bg-white/10",
          "text-white",
        ],

        outline: [
          "border-green-600",
          "text-green-600",
          "bg-transparent",
        ],

        success: [
          "border-emerald-500/20",
          "bg-emerald-500/10",
          "text-emerald-500",
        ],
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);

interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}