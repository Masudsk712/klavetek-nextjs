"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}

      <button
        onClick={() => setOpen(true)}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          text-white
          backdrop-blur-xl
          transition
          hover:bg-white/10
          lg:hidden
        "
      >
        <Menu size={24} />
      </button>

      {/* Drawer */}

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-[9998]
                bg-black/70
                backdrop-blur-sm
              "
            />

            {/* Menu */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed
                right-0
                top-0
                z-[9999]
                flex
                h-screen
                w-[320px]
                flex-col
                bg-[#050505]
                border-l
                border-white/10
                p-8
              "
            >
              {/* Top */}

              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  Menu
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg
                    p-2
                    text-white
                    hover:bg-white/10
                  "
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}

              <div className="mt-10 flex flex-col gap-3">
                {navItems.map((item) => {
                  const active =
                    pathname === item.href ||
                    (item.href !== "/" &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`
                        rounded-xl
                        px-5
                        py-4
                        text-lg
                        font-semibold
                        transition
                        ${
                          active
                            ? "bg-emerald-500 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom */}

              <div className="mt-auto">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-emerald-500
                    px-6
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    shadow-lg
                    transition
                    hover:bg-emerald-600
                  "
                >
                  Get Quote

                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}