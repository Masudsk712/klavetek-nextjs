"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function HeroBackground() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let playTimeout: ReturnType<typeof setTimeout> | null = null;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setVideoLoaded(true);
          })
          .catch((err: DOMException) => {
            // Autoplay blocked or other error — log and show fallback
            console.warn("[HeroBackground] Video play failed:", err.message);
            setVideoError(true);
          });
      }
    };

    // Use IntersectionObserver for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start loading the video
          video.preload = "auto";
          video.load(); // Forces the browser to start fetching

          // Give it a moment to buffer, then attempt play
          playTimeout = setTimeout(playVideo, 600);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);

    // Also attempt play immediately if video already has enough data buffered
    if (video.readyState >= 3) {
      observer.disconnect();
      playVideo();
    }

    return () => {
      observer.disconnect();
      if (playTimeout) clearTimeout(playTimeout);
      video.pause();
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Film Grain / Noise Texture - 3-5% opacity */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Full-screen video with cinematic Ken Burns zoom (1.0 → 1.08 over 28s) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover hero-ken-burns transition-opacity duration-1000 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/videos/hero1.mp4" type="video/mp4" />
      </video>

      {/* Video loading placeholder gradient */}
      {!videoLoaded && (
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-emerald-950 via-black to-emerald-900" />
      )}

      {/* Premium cinematic dark overlay - black + emerald gradient at 40% opacity */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(
            105deg,
            ${isDark ? 'rgba(0, 0, 0, 0.78)' : 'rgba(0, 0, 0, 0.68)'} 0%,
            ${isDark ? 'rgba(5, 30, 15, 0.58)' : 'rgba(5, 30, 15, 0.48)'} 25%,
            ${isDark ? 'rgba(0, 20, 10, 0.38)' : 'rgba(0, 20, 10, 0.28)'} 50%,
            ${isDark ? 'rgba(0, 0, 0, 0.32)' : 'rgba(0, 0, 0, 0.22)'} 75%,
            ${isDark ? 'rgba(0, 0, 0, 0.42)' : 'rgba(0, 0, 0, 0.32)'} 100%
          )`,
        }}
      />

      {/* Soft emerald ambient light from left */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `linear-gradient(
            90deg,
            ${isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.08)'} 0%,
            transparent 50%
          )`,
        }}
      />

      {/* Cinematic color grading overlay - subtle emerald shift */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none mix-blend-color"
        style={{
          backgroundColor: isDark ? "rgba(16, 185, 129, 0.06)" : "rgba(16, 185, 129, 0.04)",
        }}
      />

      {/* Soft depth blur near edges */}
      <div className="hero-depth-blur z-[2]" />

      {/* Subtle moving light sweep every 15-20 seconds */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none overflow-hidden"
        style={{ willChange: "transform" }}
      >
        <div
          className="absolute inset-0 animate-light-sweep"
          style={{
            background:
              "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.06) 45%, rgba(16,185,129,0.04) 50%, rgba(255,255,255,0.06) 55%, transparent 70%)",
            filter: "blur(60px)",
            width: "200%",
            height: "200%",
            top: "-50%",
            left: "-50%",
          }}
        />
      </div>

      {/* Slow animated light rays */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none animate-light-ray"
        style={{
          background: `linear-gradient(
            45deg,
            transparent 0%,
            ${isDark ? 'rgba(16, 185, 129, 0.03)' : 'rgba(16, 185, 129, 0.02)'} 30%,
            transparent 60%
          )`,
          filter: "blur(80px)",
        }}
      />

      {/* Bottom gradient fade into next section - enhanced cinematic fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-72 z-[3] pointer-events-none"
        style={{
          background: `linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.15) 25%,
            rgba(0, 0, 0, 0.45) 50%,
            rgba(0, 0, 0, 0.75) 75%,
            rgba(0, 0, 0, 0.95) 100%
          )`,
        }}
      />

      {/* Soft vignette around edges */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `radial-gradient(
            ellipse 75% 65% at 50% 50%,
            transparent 30%,
            ${isDark ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'} 100%
          )`,
        }}
      />
    </div>
  );
}