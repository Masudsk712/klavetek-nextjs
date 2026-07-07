"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "@/config/navigation";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/common/theme-toggle";

const NAV_ITEMS = NAVIGATION.main;
const CTA = NAVIGATION.cta;
const SCROLL_THRESHOLD = 80;
const NAVBAR_HEIGHT = "72px";

function NavbarInner() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    let rafId = 0;
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/75 dark:bg-black/75 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent border-none backdrop-blur-none shadow-none"
        }`}
        style={{
          height: NAVBAR_HEIGHT,
        }}
        role="banner"
      >
        <div className="mx-auto flex h-full w-full max-w-[1536px] items-center justify-between px-6 lg:px-10 xl:px-12 2xl:px-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
            aria-label="Klavetek home"
          >
            <div className="relative flex h-[52px] w-[52px] items-center justify-center shrink-0">
              <Image
                src="/logos/LOGO.png"
                alt="Klavetek Logo"
                width={52}
                height={52}
                priority
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-none">
                KLAVETEK
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-0.5">
                Green Blocks & Tiles Pvt. Ltd.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="relative">
                    {item.title}
                    <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-emerald-500 transition-all duration-300 rounded-full ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </span>
                  {active && (
                    <motion.span
                      className="absolute -bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                      layoutId="nav-indicator"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                  <motion.span
                    className="absolute inset-0 rounded-lg bg-emerald-500/5 dark:bg-emerald-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href={CTA.href}
              className="group relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 px-7 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all duration-500 ease-out hover:shadow-[0_8px_32px_rgba(16,185,129,0.5)] hover:scale-[1.02] hover:-translate-y-0.5"
              aria-label={CTA.title}
            >
              <span className="relative z-10 flex items-center gap-2">
                {CTA.title}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          </div>

          {/* Mobile Right Section */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMobile}
              type="button"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-400/15"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              <Menu size={22} className="text-black dark:text-white" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[45] bg-black/80 backdrop-blur-xl lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />
            <motion.aside
              key="mobile-drawer"
              id="mobile-drawer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-8 flex flex-col items-center gap-4"
                >
                  <ThemeToggle />
                  <div className="relative flex h-[48px] w-[48px] items-center justify-center">
                    <Image
                      src="/logos/LOGO.png"
                      alt="Klavetek Logo"
                      width={48}
                      height={48}
                      priority
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white tracking-tight">KLAVETEK</p>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                      Green Blocks & Tiles Pvt. Ltd.
                    </p>
                  </div>
                </motion.div>

              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="flex flex-col items-center gap-1"
              >
                {NAV_ITEMS.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobile}
                      className={`relative px-6 py-4 text-2xl font-medium transition-all duration-200 ${
                        active
                          ? "text-emerald-400 scale-105"
                          : "text-gray-300 hover:text-emerald-400"
                      }`}
                      style={{
                        animationDelay: `${index * 0.05}s`,
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.title}
                      {active && (
                        <span className="absolute -bottom-1 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500 shadow-[0_0_12px_rgba(132,204,22,0.6)]" />
                      )}
                    </Link>
                  );
                })}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-12"
              >
                <Link
                  href={CTA.href}
                  onClick={closeMobile}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 px-10 py-4 text-lg font-semibold text-white shadow-[0_4px_24px_rgba(16,185,129,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(16,185,129,0.45)] hover:scale-[1.03]"
                  aria-label={CTA.title}
                >
                  {CTA.title}
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              <button
                onClick={closeMobile}
                className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-200 hover:border-emerald-400/60 hover:text-white hover:bg-emerald-400/15"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  return <NavbarInner />;
}