import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientBorderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GradientBorder({
  children,
  className,
  ...props
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl p-[1px]",
        "bg-gradient-to-br",
        "from-primary",
        "via-green-500",
        "to-lime-400",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "rounded-[calc(1.5rem-1px)]",
          "bg-white dark:bg-slate-950",
          "h-full w-full"
        )}
      >
        {children}
      </div>
    </div>
  );
}