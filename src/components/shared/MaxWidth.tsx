import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface MaxWidthProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidth({
  children,
  className,
  ...props
}: MaxWidthProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}