"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-32">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
          }}
          className="
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-gradient-to-br
            from-emerald-600
            via-emerald-700
            to-green-900
            px-10
            py-20
            text-center
            shadow-[0_30px_80px_rgba(0,0,0,.35)]
            lg:px-24
          "
        >

          <span
            className="
              inline-flex
              rounded-full
              bg-white/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-white
            "
          >
            Let's Build Together
          </span>

          <h2
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-6xl
            "
          >
            Ready To Build Your
            <br />
            Next Project With Klavetek?
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-8
              text-white/80
            "
          >
            Contact our team today to receive product information,
            pricing, technical support and a customised quotation
            for your construction project.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-white
              px-8
              py-4
              text-lg
              font-semibold
              text-emerald-700
              transition-all
              duration-300
              hover:scale-105
              hover:bg-gray-100
            "
          >
            Get Free Quote

            <ArrowRight size={20} />
          </Link>

          <Link
            href="tel:+919999999999"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            <Phone size={20} />

            Call Now
          </Link>

          <Link
            href="https://wa.me/919999999999"
            target="_blank"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/20
            "
          >
            <MessageCircle size={20} />

            WhatsApp
          </Link>

        </div>

        {/* Bottom Trust */}

        <div
          className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-8
            text-sm
            text-white/80
          "
        >
          <span>✓ ISO Certified Manufacturing</span>

          <span>✓ Premium Quality AAC Blocks</span>

          <span>✓ Pan India Delivery</span>

          <span>✓ Technical Support</span>
        </div>

        </motion.div>

      </div>

    </section>
  );
}