import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-lg hover:bg-[#4F8F1E] hover:shadow-xl",

        secondary:
          "bg-secondary text-primary hover:bg-secondary/80",

        outline:
          "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",

        ghost:
          "bg-transparent text-primary hover:bg-primary/10",

        dark:
          "bg-slate-900 text-white hover:bg-slate-800",

        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-6 text-base",

        lg: "h-14 px-8 text-lg",

        xl: "h-16 px-10 text-xl",
      },

      rounded: {
        true: "rounded-full",

        false: "rounded-xl",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      rounded: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            rounded,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };