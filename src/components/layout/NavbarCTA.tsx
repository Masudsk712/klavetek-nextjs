"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NavbarCTA() {
  return (
    <div className="hidden items-center gap-3 xl:flex">

      {/* Get Quote */}

      <motion.div
        whileHover={{
          y: -2,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
      >
        <Link href="/contact">
          <Button
            variant="primary"
            size="md"
            className="
              rounded-full
              px-7
            "
          >
            Get Quote

            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>

    </div>
  );
}