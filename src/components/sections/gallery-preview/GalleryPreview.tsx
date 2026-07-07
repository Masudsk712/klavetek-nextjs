"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Eye, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

/* ──────────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────────── */

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  span?: string;
}

const categories = ["All", "Factory", "Products", "Projects", "Construction"];

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/FACTORY.jpg",
    alt: "Klavetek Manufacturing Facility",
    category: "Factory",
    title: "State-of-the-Art Manufacturing",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/images/PRODUCT1.png",
    alt: "Premium AAC Blocks",
    category: "Products",
    title: "Premium AAC Blocks",
  },
  {
    id: 3,
    src: "/images/PROJECT.jpg",
    alt: "Completed Construction Project",
    category: "Projects",
    title: "Completed Projects",
  },
  {
    id: 4,
    src: "/images/photo1.webp",
    alt: "AAC Block Production Line",
    category: "Factory",
    title: "Automated Production",
  },
  {
    id: 5,
    src: "/images/PRODUCT2.png",
    alt: "AAC Blocks Close-up",
    category: "Products",
    title: "Quality Close-up",
  },
  {
    id: 6,
    src: "/images/photo2.webp",
    alt: "Warehouse Storage",
    category: "Factory",
    title: "Warehouse",
  },
  {
    id: 7,
    src: "/images/photo3.webp",
    alt: "Loading and Dispatch",
    category: "Factory",
    title: "Loading & Dispatch",
  },
  {
    id: 8,
    src: "/images/photo4.webp",
    alt: "Construction Site",
    category: "Construction",
    title: "Active Construction",
  },
  {
    id: 9,
    src: "/images/PRODUCT3.png",
    alt: "Product Quality Check",
    category: "Products",
    title: "Quality Assurance",
  },
];

/* ──────────────────────────────────────────────────────────────
   Gallery Card Component
   ────────────────────────────────────────────────────────────── */

function GalleryCard({
  item,
  index,
  activeCategory,
}: {
  item: GalleryItem;
  index: number;
  activeCategory: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  if (activeCategory !== "All" && item.category !== activeCategory) {
    return null;
  }

  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={`group relative ${item.span || ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="gallery-card relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer">
        {/* Glass border glow - appears on hover */}
        <div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.5), rgba(5,150,105,0.2), rgba(16,185,129,0.4))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            padding: "1.5px",
          }}
        />

        {/* Card inner */}
        <div className="relative h-full rounded-2xl overflow-hidden bg-white dark:bg-black/40 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] dark:group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]">
          {/* Glass reflection */}
          <div className="glass-reflection absolute inset-0 z-10 pointer-events-none rounded-2xl" />

          {/* Image */}
          <div className="relative h-full overflow-hidden">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover gallery-image-zoom transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? "scale(1.08)" : "scale(1)",
              }}
              loading="lazy"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-[5]" />

            {/* Light reflection sweep on hover */}
            <div
              className="absolute inset-0 z-[6] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)",
                transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
                transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            />
          </div>

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
            {/* Category badge */}
            <div className="gallery-category inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/20 mb-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">
              {item.category}
            </div>

            {/* Title */}
            <h3 className="gallery-title text-base md:text-lg font-bold text-white leading-tight opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
              {item.title}
            </h3>
          </div>

          {/* View icon - appears on hover */}
          <div className="gallery-view-icon absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 ease-out delay-100">
            <Eye className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main Section Component
   ────────────────────────────────────────────────────────────── */

export default function GalleryPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section
      ref={sectionRef}
      id="gallery-preview"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white dark:from-black dark:via-emerald-950/10 dark:to-black transition-colors duration-500"
    >
      {/* Background noise texture */}
      <div className="noise-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 30%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 py-[140px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ================================================================
              SECTION HEADER
              ================================================================ */}
          <div className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16">
            {/* Premium Glass Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Our Projects & Gallery
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-gray-900 dark:text-white sm:text-[42px] md:text-[48px] lg:text-[52px]"
            >
              <span className="block">Real Projects.</span>
              <span className="block mt-2">
                Real{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Quality
                </span>
                . Real{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Results
                </span>
                .
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-[1.85] tracking-[0.01em]"
            >
              Showcase Klavetek's manufacturing facility, AAC Block production, completed construction projects and product quality through high-resolution visuals.
            </motion.p>
          </div>

          {/* ================================================================
              FILTERS
              ================================================================ */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-10 lg:mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`gallery-filter-chip px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-out ${
                  activeCategory === category
                    ? "bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-400/50 dark:border-emerald-500/40 backdrop-blur-xl scale-105 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                    : "bg-white/50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-white/30 dark:border-white/10 backdrop-blur-xl hover:border-emerald-300/40 dark:hover:border-emerald-500/30"
                } border`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* ================================================================
              MASONRY GALLERY GRID
              ================================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-16 lg:mb-20">
            {galleryItems.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                activeCategory={activeCategory}
              />
            ))}
          </div>

          {/* ================================================================
              BOTTOM CTA
              ================================================================ */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-[-0.025em]">
              See More of Our Work
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our complete portfolio of manufacturing excellence and completed projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/gallery"
                className="gallery-cta-primary group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-white transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1"
              >
                {/* Glossy reflection sweep */}
                <span
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  aria-hidden="true"
                >
                  <span
                    className="absolute inset-0 animate-glossy-sweep"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 70%, transparent 100%)",
                      width: "60%",
                      left: "-20%",
                      top: 0,
                      bottom: 0,
                    }}
                  />
                </span>

                {/* Emerald shimmer background */}
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 bg-size-200 animate-emerald-shimmer" />

                <span className="relative z-10">View Full Gallery</span>
                <Maximize2
                  size={18}
                  className="relative z-10 transition-all duration-300 ease-out group-hover:scale-110"
                />
              </Link>

              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4 font-semibold text-base text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-gray-200 dark:border-white/[0.08] shadow-lg transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1 hover:border-emerald-300/50 dark:hover:border-emerald-500/30 hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/30"
              >
                <span>Explore Projects</span>
                <ArrowRight
                  size={18}
                  className="transition-all duration-300 ease-out group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none dark:opacity-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,1) 100%)",
        }}
      />
    </section>
  );
}