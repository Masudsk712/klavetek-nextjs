"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import Image from "next/image";

const products = [
  {
    name: "AAC Blocks",
    tagline: "Precision-Engineered Lightweight Blocks",
    description:
      "Our premium AAC blocks deliver exceptional strength-to-weight ratio, superior thermal insulation, and fire resistance. Manufactured using German technology and high-pressure autoclave curing.",
    applications: ["Residential buildings", "Commercial complexes", "Industrial structures"],
    strength: "3.5 – 8.0 N/mm²",
    dimensions: "600 × 200 × (75–300) mm",
    density: "550 – 750 kg/m³",
    image: "/images/product-aac.jpg",
    gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    borderColor: "border-emerald-500/30",
  },
  {
    name: "AAC Tiles",
    tagline: "Premium Wall & Floor Solutions",
    description:
      "High-precision AAC tiles designed for superior aesthetics and performance. Ideal for both interior and exterior applications with excellent thermal and acoustic properties.",
    applications: ["Wall cladding", "Flooring solutions", "Partition walls"],
    strength: "4.0 – 7.5 N/mm²",
    dimensions: "600 × 300 × (50–150) mm",
    density: "600 – 800 kg/m³",
    image: "/images/product-tiles.jpg",
    gradient: "from-teal-500/20 via-teal-600/10 to-transparent",
    borderColor: "border-teal-500/30",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function ProductShowcase() {
  return (
    <section id="products" className="relative overflow-hidden bg-white dark:bg-black py-28 md:py-36">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/50 via-transparent to-transparent dark:from-emerald-950/20 dark:via-transparent dark:to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-20">
            <Heading level="h2" align="center">
              Our Products
            </Heading>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              World-class AAC blocks and tiles engineered for strength, sustainability, 
              and superior construction performance.
            </p>
          </motion.div>

          {/* Product Cards */}
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className={`relative grid gap-10 lg:gap-16 items-center ${
                  index % 2 === 0
                    ? "lg:grid-cols-[1fr_1.2fr]"
                    : "lg:grid-cols-[1.2fr_1fr]"
                }`}
              >
                {/* Product Visual */}
                <div className={`relative ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl bg-gray-50 dark:bg-gray-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} z-10`} />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
                          <svg className="w-12 h-12 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                            <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{product.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Premium Construction Material</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative gradient blob */}
                  <div className={`absolute -top-6 -right-6 w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-600/5 blur-3xl pointer-events-none ${index % 2 !== 0 ? "-left-6 -right-auto" : ""}`} />
                </div>

                {/* Product Details */}
                <div className={`space-y-6 ${index % 2 !== 0 ? "lg:order-1 lg:text-right" : ""}`}>
                  {/* Category Badge */}
                  <div className={`flex ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-400">
                      <span className="h-px w-6 bg-emerald-500" />
                      {product.name === "AAC Blocks" ? "BLOCKS" : "TILES"}
                      <span className="h-px w-6 bg-emerald-500" />
                    </span>
                  </div>

                  <h3 className={`text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight ${index % 2 !== 0 ? "lg:text-right" : ""}`}>
                    {product.name}
                  </h3>

                  <p className={`text-lg text-emerald-600 dark:text-emerald-400 font-medium ${index % 2 !== 0 ? "lg:text-right" : ""}`}>
                    {product.tagline}
                  </p>

                  <p className={`text-base text-gray-600 dark:text-gray-300 leading-relaxed ${index % 2 !== 0 ? "lg:text-right" : ""}`}>
                    {product.description}
                  </p>

                  {/* Specs Grid */}
                  <div className={`grid grid-cols-3 gap-4 pt-4 ${index % 2 !== 0 ? "lg:justify-items-end" : ""}`}>
                    {[
                      { label: "Strength", value: product.strength },
                      { label: "Dimensions", value: product.dimensions },
                      { label: "Density", value: product.density },
                    ].map((spec) => (
                      <div key={spec.label} className={`${index % 2 !== 0 ? "text-right" : ""}`}>
                        <span className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                          {spec.label}
                        </span>
                        <span className="block text-sm font-bold text-gray-900 dark:text-white">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className={`flex flex-wrap gap-2 pt-2 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`pt-2 flex ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                    <a
                      href={`/products`}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300"
                    >
                      <span>View Full Details</span>
                      <svg className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}