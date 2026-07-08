import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";
import Container from "./Container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28 lg:py-32",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}