"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { NAVIGATION } from "@/config/navigation";
import { SITE } from "@/config/site";

const NAV_ITEMS = NAVIGATION.main;
const CTA = NAVIGATION.cta;
const SCROLL_THRESHOLD = 40;
const HIDE_THRESHOLD = 300;
const SHRINK_THRESHOLD = 200;

/* ------------------------------------------------------------------ */
/*  Shared easing                                                      */
/* ------------------------------------------------------------------ */
const easeOutExpo: Transition["ease"] = [0.25, 0.1, 0.25, 1];
const springTransition: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

/* ------------------------------------------------------------------ */
/*  Staggered fade variants for mobile links                           */
/* ------------------------------------------------------------------ */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.96,
    transition: { duration: 0.25, ease: easeOutExpo },
  },
};

/* ------------------------------------------------------------------ */
/*  NavbarInner – all the logic & markup                               */
/* ------------------------------------------------------------------ */
function NavbarInner() {
  const pathname = usePathname();

  /* ---------- state ---------- */
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  /* ---------- scroll handler ---------- */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      requestAnimationFrame(() => {
        const sy = window.scrollY;

        setScrolled(sy > SCROLL_THRESHOLD);
        setShrunk(sy > SHRINK_THRESHOLD);

        if (sy > HIDE_THRESHOLD) {
          setHidden(sy > lastScrollY.current);
        } else {
          setHidden(false);
        }

        lastScrollY.current = sy;
        ticking.current = false;
      });
      ticking.current = true;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- body scroll lock ---------- */
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      const prevPr = document.body.style.paddingRight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      return () => {
        document.body.style.overflow = prev;
        document.body.style.paddingRight = prevPr;
      };
    }
  }, [mobileOpen]);

  /* ---------- keyboard escape ---------- */
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  /* ---------- mouse tracking (subtle highlight) ---------- */
  const navRef = useRef<HTMLElement>(null);
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = navRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    },
    [],
  );

  /* ---------- helpers ---------- */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobile = () => setMobileOpen((p) => !p);
  const closeMobile = () => setMobileOpen(false);

  /* ---------- derived styles ---------- */
  const navHeight = shrunk ? 60 : 72;
  const sidePad = shrunk ? 24 : 32;
  const topPad = scrolled ? 16 : 20;

  /* ---------- render ---------- */
  return (
    <>
      <header
        ref={navRef}
        onMouseMove={onMouseMove}
        role="banner"
        className="fixed left-0 right-0 z-50"
        style={{
          top: hidden ? "-100px" : `${topPad}px`,
          padding: `0 ${sidePad}px`,
          transition: "top 500ms cubic-bezier(0.4,0,0.2,1)",
        }}
        aria-label="Site header"
      >
        <div
          className="mx-auto flex items-center justify-between relative"
          style={{
            maxWidth: 1450,
            height: `${navHeight}px`,
            borderRadius: "24px",
            padding: "0 24px",
            background: scrolled
              ? "var(--glass-bg)"
              : "transparent",
            backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            border: scrolled
              ? "1px solid var(--glass-border)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.05) inset"
              : "none",
            transition:
              "background 500ms cubic-bezier(0.4,0,0.2,1), backdrop-filter 500ms cubic-bezier(0.4,0,0.2,1), border 500ms cubic-bezier(0.4,0,0.2,1), box-shadow 500ms cubic-bezier(0.4,0,0.2,1), height 500ms cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* ---- Layered glass reflections ---- */}
          {scrolled && (
            <>
              <span
                className="absolute inset-x-0 top-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
                }}
              />
              <span
                className="absolute inset-x-0 bottom-0 h-px pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.2) 50%, transparent 100%)",
                }}
              />
              <span
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 320px at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(16,185,129,0.04) 0%, transparent 70%)`,
                  borderRadius: "inherit",
                }}
              />
            </>
          )}

          {/* ================================================================ */}
          {/*  LOGO                                                           */}
          {/* ================================================================ */}
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-3 transition-all duration-400 ease-out hover:scale-[1.02]"
            aria-label={`${SITE.shortName} – Home`}
          >
            <div className="relative flex h-[52px] w-[52px] items-center justify-center shrink-0 transition-transform duration-400 ease-out group-hover:rotate-[3deg] group-hover:scale-105">
              <div className="absolute inset-0 rounded-full bg-emerald-500/10 opacity-0 blur-xl transition-opacity duration-400 group-hover:opacity-100" />
              <Image
                src="/logos/LOGO.png"
                alt=""
                width={52}
                height={52}
                priority
                className="relative h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(16,185,129,0.15)]"
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-none transition-colors duration-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                {SITE.shortName}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-0.5 transition-colors duration-500">
                {SITE.legalName}
              </p>
            </div>
          </Link>

          {/* ================================================================ */}
          {/*  DESKTOP NAV LINKS – Premium Pill Style                          */}
          {/* ================================================================ */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative px-[14px] py-2 text-sm font-medium transition-all duration-500 ease-out"
                  aria-current={active ? "page" : undefined}
                >
                  {/* Glass pill background behind EVERY item */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
                      active
                        ? "bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-[0_2px_12px_rgba(16,185,129,0.2)]"
                        : "bg-white/30 dark:bg-black/30 backdrop-blur-sm border border-white/20 dark:border-white/8 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                    style={{
                      boxShadow: active
                        ? "0 0 20px rgba(16,185,129,0.15), inset 0 1px 0 rgba(255,255,255,0.4)"
                        : "none",
                    }}
                  />

                  {/* Active emerald overlay with layout animation */}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700"
                      style={{
                        boxShadow:
                          "0 2px 16px rgba(16,185,129,0.4), 0 0 30px rgba(16,185,129,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover emerald glow for inactive items */}
                  {!active && (
                    <span className="absolute inset-0 rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 opacity-0 scale-90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
                  )}

                  {/* Text content */}
                  <span
                    className={`relative z-10 flex items-center gap-1.5 transition-all duration-500 ease-out ${
                      active
                        ? "text-white font-semibold"
                        : "text-black dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Text lift on hover – duplicate for smooth 2px lift */}
                  <span className="absolute inset-0 z-10 flex items-center justify-center px-[14px] py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 translate-y-1 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none">
                    {item.title}
                  </span>

                  {/* Scaled pill hover effect */}
                  <span
                    className="absolute -inset-[3px] rounded-full opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 pointer-events-none"
                    style={{
                      boxShadow:
                        "0 0 20px rgba(16,185,129,0.1), 0 0 40px rgba(16,185,129,0.05)",
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* ================================================================ */}
          {/*  DESKTOP RIGHT – CTA Only                                        */}
          {/* ================================================================ */}
          <div className="hidden lg:flex items-center relative z-10">
            {/* Get Quote – Premium CTA */}
            <Link
              href={CTA.href}
              className="group relative inline-flex h-10 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-sm font-semibold text-white"
              aria-label={CTA.title}
              style={{
                background:
                  "linear-gradient(135deg, #059669 0%, #10B981 40%, #34D399 60%, #10B981 80%, #059669 100%)",
                backgroundSize: "200% 200%",
                boxShadow:
                  "0 4px 20px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Shimmer */}
              <span className="absolute inset-0 -translate-x-full skew-x-[20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

              {/* Glow */}
              <span className="absolute -inset-1 rounded-full bg-emerald-400/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="relative z-10 flex items-center gap-2">
                {CTA.title}
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </span>

              {/* Hover shadow & lift */}
              <span
                className="absolute inset-0 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:opacity-100"
                style={{
                  boxShadow: "0 8px 32px rgba(16,185,129,0.5)",
                  transform: "scale(1.03) translateY(-2px)",
                }}
              />
            </Link>
          </div>

          {/* ================================================================ */}
          {/*  MOBILE RIGHT – hamburger only                                   */}
          {/* ================================================================ */}
          <div className="flex items-center gap-2 lg:hidden relative z-10">
            <button
              onClick={toggleMobile}
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/8 dark:border-white/8 bg-white/70 dark:bg-black/70 backdrop-blur-md transition-all duration-300 ease-out hover:border-emerald-400/50 hover:bg-emerald-400/15 hover:scale-105"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-black dark:text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-black dark:text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ================================================================ */}
      {/*  MOBILE FULLSCREEN MENU                                          */}
      {/* ================================================================ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOutExpo }}
            className="fixed inset-0 z-[60] flex flex-col lg:hidden"
            style={{
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <button
              onClick={closeMobile}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-400/15 hover:scale-110"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.4, ease: easeOutExpo }}
              className="flex flex-col items-center gap-3 pt-20 pb-12"
            >
              <div className="relative flex h-[60px] w-[60px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl" />
                <Image
                  src="/logos/LOGO.png"
                  alt=""
                  width={60}
                  height={60}
                  priority
                  className="relative h-full w-full object-contain drop-shadow-[0_4px_16px_rgba(16,185,129,0.3)]"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white tracking-tight">
                  {SITE.shortName}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mt-1">
                  {SITE.legalName}
                </p>
              </div>
            </motion.div>

            {/* Nav links – staggered */}
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-2 px-6 flex-1 overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className={`relative block px-10 py-3 text-center text-2xl font-medium transition-all duration-300 rounded-2xl ${
                        active
                          ? "text-white scale-105"
                          : "text-gray-300 hover:text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {active && (
                        <motion.span
                          layoutId="mobile-active-pill"
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-700/20 border border-emerald-400/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{item.title}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Bottom CTA – Get a Quote only */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: easeOutExpo }}
              className="flex flex-col items-center px-6 pb-10 pt-6"
            >
              <Link
                href={CTA.href}
                onClick={closeMobile}
                className="group relative inline-flex w-full max-w-xs items-center justify-center gap-2 overflow-hidden rounded-full px-10 py-4 text-lg font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #059669 0%, #10B981 40%, #34D399 60%, #10B981 80%, #059669 100%)",
                  backgroundSize: "200% 200%",
                  boxShadow:
                    "0 4px 24px rgba(16,185,129,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                  transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full skew-x-[20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 flex items-center gap-2">
                  {CTA.title}
                  <ArrowRight size={18} strokeWidth={2.5} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Export wrapper                                                     */
/* ------------------------------------------------------------------ */
export default function PremiumNavbar() {
  return <NavbarInner />;
}