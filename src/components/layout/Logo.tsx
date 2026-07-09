"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Klavetek Home"
      className="group flex items-center gap-3"
    >
      <motion.div
        whileHover={{
          rotate: -5,
          scale: 1.05,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative"
      >
        <div
          className="
            absolute
            -inset-2
            rounded-full
            bg-green-500/20
            blur-xl
            opacity-0
            transition-all
            duration-500
            group-hover:opacity-100
          "
        />

        <Image
          src="/logos/logo.png"
          alt="Klavetek Logo"
          width={52}
          height={52}
          priority
          className="
            relative
            h-12
            w-auto
            object-contain
            drop-shadow-xl
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </motion.div>

      <div className="hidden sm:block">
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-xl
            font-extrabold
            tracking-tight
            text-foreground
          "
        >
          Klavetek
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
          }}
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-green-600
            dark:text-green-400
          "
        >
          Green Blocks
        </motion.p>
      </div>
    </Link>
  );
}