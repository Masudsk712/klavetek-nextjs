"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Full-screen video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Soft dark overlay 25-30% */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.28)" }}
      />
    </div>
  );
}