"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className="
        hidden
        lg:flex
        items-center
        gap-2
      "
    >
      {navItems.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className="relative"
          >
            <motion.div
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className={`
                relative
                px-6
                py-3
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  active
                    ? "bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,.45)]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {item.label}

              {active && (
                <motion.div
                  layoutId="navbar-active"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="
                    absolute
                    inset-0
                    -z-10
                    rounded-full
                    bg-emerald-500
                  "
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </nav>
  );
}