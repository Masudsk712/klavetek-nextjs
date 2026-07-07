import { ReactNode, ElementType } from "react";
import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  as?: ElementType;
  background?: "default" | "muted" | "dark" | "primary";
  spacing?: "sm" | "md" | "lg" | "xl";
}

const spacingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-28 md:py-36",
};

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-gray-50 dark:bg-black/5",
  dark: "bg-black text-white",
  primary: "bg-primary text-white",
};

export default function Section({
  children,
  className,
  containerClassName,
  id,
  as: Component = "section",
  background = "default",
  spacing = "lg",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        "relative overflow-hidden",
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </Component>
  );
}