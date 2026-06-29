import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "font-bold tracking-tight text-slate-900 dark:text-white",
  {
    variants: {
      level: {
        h1: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight",
        h2: "text-3xl md:text-4xl lg:text-5xl leading-tight",
        h3: "text-2xl md:text-3xl lg:text-4xl leading-snug",
        h4: "text-xl md:text-2xl lg:text-3xl",
      },

      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },

      gradient: {
        true: "bg-gradient-to-r from-primary via-green-500 to-lime-500 bg-clip-text text-transparent",
        false: "",
      },
    },

    defaultVariants: {
      level: "h2",
      align: "left",
      gradient: false,
    },
  }
);

interface HeadingProps
  extends VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Heading({
  children,
  level,
  align,
  gradient,
  className,
}: HeadingProps) {

  const Tag = (level || "h2") as React.ElementType;

  return (
    <Tag
      className={cn(
        headingVariants({
          level,
          align,
          gradient,
        }),
        className
      )}
    >
      {children}
    </Tag>
  );
}