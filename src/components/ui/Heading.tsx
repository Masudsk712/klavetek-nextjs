import { cn } from "@/lib/cn";

interface HeadingProps {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
  className?: string;
  children: React.ReactNode;
}

export default function Heading({
  level = "h2",
  align = "left",
  className,
  children,
}: HeadingProps) {
  const Tag = level;
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag className={cn("font-bold", alignClasses[align], className)}>
      {children}
    </Tag>
  );
}