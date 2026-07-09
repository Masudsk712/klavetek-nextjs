"use client";

export default function HeroBackground() {
  return (
    <>
      {/* VIDEO */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* GREEN CINEMATIC GRADIENT */}
      <div
  className="
    absolute
    inset-0
    z-20
    bg-gradient-to-r
    from-emerald-950/65
    via-emerald-900/20
    to-black/55
  "
/>

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-[-180px]
          top-1/2
          -translate-y-1/2
          -z-30
          h-[520px]
          w-[520px]
          rounded-full
          bg-emerald-500/20
          blur-[140px]
        "
      />

      {/* TOP SHADOW */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          -z-30
          bg-gradient-to-b
          from-black/70
          to-transparent
        "
      />

      {/* BOTTOM FADE */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-56
          -z-30
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
        "
      />
    </>
  );
}