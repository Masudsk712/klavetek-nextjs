"use client";

import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary";

interface HeroButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
}

export default function HeroCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <HeroButton label="Explore Products" variant="primary" href="#products" />
      <HeroButton label="Get a Quote" variant="secondary" href="#contact" />
    </div>
  );
}

export function HeroButton({ label, href = "#", variant = "primary" }: HeroButtonProps) {
  const baseClasses =
    "relative inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-base transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-gradient-to-r from-emerald-600 to-green-700 text-white hover:from-emerald-500 hover:to-green-600"
      : "bg-white/5 text-white border border-white/20 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-400/40";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      <span>{label}</span>
      <ArrowRight size={18} />
    </a>
  );
}