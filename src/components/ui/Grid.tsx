import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridProps {
  children: ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

const gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
};

export default function Grid({
  children,
  className,
  cols = 3,
  gap = "lg",
}: GridProps) {
  return (
    <div
      className={cn(
        "grid",
        columnClasses[cols],
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  );
}