"use client";

import { ArrowRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";

type ButtonVariant = "primary" | "secondary";

interface HeroButtonProps {
  label: string;
  href?: string;
  variant?: ButtonVariant;
}

export default function HeroCTA() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <HeroButton label="Get Free Quote" variant="primary" href="#contact" />
      <HeroButton label="Explore Products" variant="secondary" href="#products" />
    </div>
  );
}

export function HeroButton({ label, href = "#", variant = "primary" }: HeroButtonProps) {
  const [rippleActive, setRippleActive] = useState(false);
  const [rippleX, setRippleX] = useState(50);
  const [rippleY, setRippleY] = useState(50);
  const [clickRipple, setClickRipple] = useState<{ x: number; y: number; id: number } | null>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const clickIdRef = useRef(0);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setRippleX(x);
    setRippleY(y);
    setRippleActive(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setRippleActive(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty("--mouse-x", `${x}%`);
    btn.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const id = ++clickIdRef.current;
    setClickRipple({ x, y, id });
    setTimeout(() => setClickRipple(null), 600);
  }, []);

  return (
    <a
      ref={btnRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-base transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1 ${
        variant === "primary"
          ? "btn-emerald-premium text-white shadow-[0_4px_24px_rgba(16,185,129,0.35)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.55)] hover:shadow-[0_0_60px_rgba(16,185,129,0.15)] animate-cta-pulse"
          : "border border-white/25 dark:border-white/20 bg-white/[0.04] backdrop-blur-xl text-white hover:bg-white/[0.1] hover:border-emerald-400/50 shadow-lg hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)] hover:scale-[1.03] hover:-translate-y-0.5"
      }`}
    >
      {/* Animated glossy reflection overlay on primary button */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="absolute inset-0 animate-glossy-sweep"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 70%, transparent 100%)",
              width: "60%",
              left: "-20%",
              top: 0,
              bottom: 0,
            }}
          />
        </span>
      )}

      {/* Ripple effect background on hover */}
      <span
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          rippleActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(circle at ${rippleX}% ${rippleY}%, 
            ${variant === "primary" ? "rgba(255,255,255,0.12)" : "rgba(34,197,94,0.2)"} 0%, 
            transparent 60%)`,
        }}
      />

      {/* Click ripple effect */}
      {clickRipple && (
        <span
          key={clickRipple.id}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${clickRipple.x}% ${clickRipple.y}%, 
              ${variant === "primary" ? "rgba(255,255,255,0.25)" : "rgba(34,197,94,0.3)"} 0%, 
              transparent 50%)`,
            animation: "ripple 0.6s ease-out forwards",
          }}
        />
      )}

      <span className="relative z-10">{label}</span>
      <ArrowRight
        size={18}
        className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110"
      />
    </a>
  );
}