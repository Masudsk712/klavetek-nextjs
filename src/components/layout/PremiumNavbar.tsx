"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import NavbarCTA from "./NavbarCTA";

export default function PremiumNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -70,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        fixed
        top-0
        left-0
        right-0
        z-[999]
      "
    >
      {/* OUTER WRAPPER */}

      <div
        className={`
          transition-all
          duration-500

          ${
            scrolled
              ? "px-0 pt-0"
              : "px-0 pt-0"
          }
        `}
      >

        {/* MAIN NAVBAR */}

        <div
          className={`
            flex
            items-center
            justify-between

            transition-all
            duration-500

            ${
              scrolled
                ? `
                    h-20

                    bg-black/35

                    backdrop-blur-3xl

                    border-b

                    border-white/10

                    shadow-[0_10px_40px_rgba(0,0,0,.30)]

                    px-10
                  `
                : `
                    h-24

                    bg-transparent

                    border-transparent

                    px-12
                  `
            }
          `}
        >

          {/* LEFT */}

          <Logo />

          {/* CENTER */}

          <DesktopNav />

          {/* RIGHT */}

          <div
            className="
              hidden
              items-center
              gap-4
              lg:flex
            "
          >
            <ThemeToggle />

            <NavbarCTA />
          </div>

          {/* MOBILE */}

          <MobileNav />        </div>

      </div>
    </motion.header>
  );
}