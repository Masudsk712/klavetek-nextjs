import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-primary/10 text-primary border border-primary/20",

        secondary:
          "bg-secondary text-primary",

        success:
          "bg-green-100 text-green-700 border border-green-300",

        warning:
          "bg-yellow-100 text-yellow-700 border border-yellow-300",

        danger:
          "bg-red-100 text-red-700 border border-red-300",

        dark:
          "bg-slate-900 text-white",

        outline:
          "border border-primary text-primary bg-transparent",

        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white",
      },

      size: {
        sm: "px-3 py-1 text-xs",

        md: "px-4 py-1.5 text-sm",

        lg: "px-5 py-2 text-base",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}