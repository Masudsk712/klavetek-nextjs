"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-full",
    "font-semibold",
    "transition-all duration-300",
    "outline-none",
    "select-none",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "active:scale-[0.98]",
    "focus-visible:ring-2",
    "focus-visible:ring-green-500/50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-r",
          "from-green-600",
          "to-emerald-500",
          "text-white",
          "shadow-lg",
          "shadow-green-500/25",
          "hover:shadow-green-500/40",
          "hover:scale-[1.03]",
          "hover:-translate-y-0.5",
        ],

        secondary: [
          "border",
          "border-green-500/30",
          "bg-white/10",
          "backdrop-blur-xl",
          "text-white",
          "hover:bg-white/20",
          "hover:border-green-400",
        ],

        outline: [
          "border-2",
          "border-green-600",
          "text-green-600",
          "bg-transparent",
          "hover:bg-green-600",
          "hover:text-white",
        ],

        ghost: [
          "text-foreground",
          "hover:bg-muted",
        ],

        white: [
          "bg-white",
          "text-green-700",
          "hover:bg-neutral-100",
          "shadow-lg",
        ],
      },

      size: {
        sm: "h-10 px-5 text-sm",

        md: "h-12 px-7 text-base",

        lg: "h-14 px-8 text-lg",

        xl: "h-16 px-10 text-xl",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2
            className="h-4 w-4 animate-spin"
          />
        )}

        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };