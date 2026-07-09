"use client";

import { cn } from "@/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  children,
  id,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[1400px] px-6 lg:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}