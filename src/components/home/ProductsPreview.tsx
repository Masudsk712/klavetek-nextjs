"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Ruler, Weight, ShieldCheck } from "lucide-react";

const products = [
  {
    title: "100 mm AAC Block",
    image: "/images/products/product-100.webp",
    size: "600 × 200 × 100 mm",
    use: "Partition Walls",
  },
  {
    title: "150 mm AAC Block",
    image: "/images/products/product-125.webp",
    size: "600 × 200 × 125 mm",
    use: "Internal Walls",
  },
  {
    title: "200 mm AAC Block",
    image: "/images/products/product-150.webp",
    size: "600 × 200 × 150 mm",
    use: "External Walls",
  },
  {
    title: "250 mm AAC Block",
    image: "/images/products/product-200.webp",
    size: "600 × 200 × 200 mm",
    use: "Industrial Buildings",
  },
];

export default function ProductsPreview() {
  return (
    <section className="relative bg-[#050505] py-28 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Our Products
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Premium
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              AAC Blocks
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Manufactured with advanced technology to deliver
            strength, durability and superior thermal insulation.
          </p>

        </motion.div>

        {/* Product Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">        {products.map((product, index) => (
          <motion.div
            key={product.title}
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
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              transition-all
              duration-300
              hover:border-emerald-500/30
              hover:bg-white/[0.06]
            "
          >
            {/* Product Image */}

            <div className="relative h-64 overflow-hidden bg-white">

              <Image
                src={product.image}
                alt={product.title}
                fill
                className="
                  object-contain
                  p-8
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

            {/* Content */}

            <div className="p-7">

              <h3 className="text-2xl font-bold text-white">
                {product.title}
              </h3>

              <div className="mt-6 space-y-4">

                <div className="flex items-center gap-3 text-white/70">

                  <Ruler
                    className="text-emerald-400"
                    size={18}
                  />

                  <span>{product.size}</span>

                </div>

                <div className="flex items-center gap-3 text-white/70">

                  <Weight
                    className="text-emerald-400"
                    size={18}
                  />

                  <span>Lightweight AAC Technology</span>

                </div>

                <div className="flex items-center gap-3 text-white/70">

                  <ShieldCheck
                    className="text-emerald-400"
                    size={18}
                  />

                  <span>{product.use}</span>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-8 flex gap-3">

                <Link
                  href="/products"
                  className="
                    flex-1
                    rounded-xl
                    bg-emerald-500
                    px-4
                    py-3
                    text-center
                    font-semibold
                    text-white
                    transition
                    hover:bg-emerald-600
                  "
                >
                  Get Quote
                </Link>

                <Link
                  href="/products"
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    px-4
                    text-white
                    transition
                    hover:border-emerald-400
                    hover:text-emerald-400
                  "
                >
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </motion.div>
        ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 text-center"
        >

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-emerald-500/30
              bg-emerald-500/10
              px-8
              py-4
              text-lg
              font-semibold
              text-emerald-400
              transition-all
              duration-300
              hover:bg-emerald-500
              hover:text-white
            "
          >
            Explore All Products

            <ArrowRight size={20} />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}