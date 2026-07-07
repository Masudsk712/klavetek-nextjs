"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Leaf,
  Shield,
  Zap,
  Thermometer,
  Droplets,
  Grip,
  Flame,
  RotateCcw,
  Wrench,
  Ruler,
  Layers,
  Building2,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

/* ──────────────────────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ──────────────────────────────────────────────────────────────
   Data - AAC Block Size Variants
   ────────────────────────────────────────────────────────────── */

interface ProductFeature {
  icon: React.ReactNode;
  label: string;
}

interface Product {
  name: string;
  dimensions: string;
  description: string;
  image: string;
  features: ProductFeature[];
}

const products: Product[] = [
  {
    name: "AAC Block",
    dimensions: "600 × 200 × 100 mm",
    description:
      "Lightweight AAC Block suitable for internal partition walls and low-load applications. Provides excellent thermal insulation, sound insulation and faster construction.",
    image: "/images/PRODUCT1.png",
    features: [
      { icon: <Leaf className="w-3 h-3" />, label: "Lightweight" },
      { icon: <Leaf className="w-3 h-3" />, label: "Eco Friendly" },
      { icon: <Flame className="w-3 h-3" />, label: "Fire Resistant" },
      { icon: <Thermometer className="w-3 h-3" />, label: "Thermal Insulation" },
    ],
  },
  {
    name: "AAC Block",
    dimensions: "600 × 200 × 125 mm",
    description:
      "High-quality AAC Block designed for durable wall construction with improved strength while maintaining lightweight performance.",
    image: "/images/PRODUCT2.png",
    features: [
      { icon: <Shield className="w-3 h-3" />, label: "High Strength" },
      { icon: <Leaf className="w-3 h-3" />, label: "Eco Friendly" },
      { icon: <Layers className="w-3 h-3" />, label: "Sound Insulation" },
      { icon: <Wrench className="w-3 h-3" />, label: "Easy Installation" },
    ],
  },
  {
    name: "AAC Block",
    dimensions: "600 × 200 × 150 mm",
    description:
      "Premium AAC Block offering an excellent balance between strength, insulation and construction efficiency.",
    image: "/images/PRODUCT3.png",
    features: [
      { icon: <Shield className="w-3 h-3" />, label: "Durable" },
      { icon: <Zap className="w-3 h-3" />, label: "Lightweight" },
      { icon: <Thermometer className="w-3 h-3" />, label: "Thermal Efficient" },
      { icon: <Ruler className="w-3 h-3" />, label: "Precision Finished" },
    ],
  },
  {
    name: "AAC Block",
    dimensions: "600 × 200 × 200 mm",
    description:
      "Heavy-duty AAC Block ideal for load-bearing and external wall applications with superior structural performance.",
    image: "/images/PRODUCT4.png",
    features: [
      { icon: <Building2 className="w-3 h-3" />, label: "High Load Capacity" },
      { icon: <Flame className="w-3 h-3" />, label: "Fire Resistant" },
      { icon: <Droplets className="w-3 h-3" />, label: "Moisture Resistant" },
      { icon: <Zap className="w-3 h-3" />, label: "Energy Efficient" },
    ],
  },
  {
    name: "AAC Block",
    dimensions: "600 × 200 × 250 mm",
    description:
      "Large-size premium AAC Block engineered for faster construction, reduced mortar usage and enhanced project efficiency.",
    image: "/images/PRODUCT5.png",
    features: [
      { icon: <Clock className="w-3 h-3" />, label: "Faster Construction" },
      { icon: <Zap className="w-3 h-3" />, label: "Lightweight" },
      { icon: <Shield className="w-3 h-3" />, label: "Superior Strength" },
      { icon: <Leaf className="w-3 h-3" />, label: "Eco Friendly" },
    ],
  },
];

/* ──────────────────────────────────────────────────────────────
   Product Card Component
   ────────────────────────────────────────────────────────────── */

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.setProperty("--mouse-x", `${x * 8}deg`);
    cardRef.current.style.setProperty("--mouse-y", `${y * 8}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--mouse-x", "0deg");
    cardRef.current.style.setProperty("--mouse-y", "0deg");
  };

  return (
    <div className="embla__slide pl-5 md:pl-6 min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 xl:basis-1/3">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="products-preview-card group relative rounded-[28px] overflow-hidden cursor-pointer products-preview-float h-full"
        style={{
          animationDelay: `${index * 0.6}s`,
          transform:
            "perspective(1200px) rotateX(var(--mouse-y, 0deg)) rotateY(var(--mouse-x, 0deg))",
          transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {/* ─── Glass border glow ─── */}
        <div
          className="absolute -inset-[1px] rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(16,185,129,0.4), rgba(5,150,105,0.2), rgba(16,185,129,0.3))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        {/* ─── Card Inner ─── */}
        <div className="relative rounded-[28px] overflow-hidden bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.12)] dark:group-hover:shadow-[0_20px_60px_rgba(16,185,129,0.08)] group-hover:border-emerald-300/40 dark:group-hover:border-emerald-500/20 group-hover:-translate-y-1.5 h-full flex flex-col">
          {/* ─── Glass top reflection ─── */}
          <div className="products-preview-glass-reflection absolute inset-0 z-10 pointer-events-none rounded-[28px]" />

          {/* ─── Image Container ─── */}
          <div className="relative overflow-hidden h-[260px] sm:h-[280px] lg:h-[300px] flex-shrink-0">
            {/* Light reflection sweep */}
            <div className="products-preview-light-sweep absolute inset-0 z-20 pointer-events-none" />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-[5]" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent z-[5]" />

            {/* Image */}
            <div className="overflow-hidden h-full relative">
              <Image
                src={product.image}
                alt={`${product.name} - ${product.dimensions} - Klavetek AAC Block`}
                fill
                className="products-preview-zoom-img object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 25vw"
                priority={index < 2}
              />
            </div>

            {/* Product name overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-xl font-bold text-white drop-shadow-lg">
                {product.name}
              </h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 mt-1.5 rounded-full text-[11px] font-bold tracking-wide bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
                <Ruler className="w-3 h-3 text-emerald-300" />
                <span>{product.dimensions}</span>
              </div>
            </div>
          </div>

          {/* ─── Content ─── */}
          <div className="p-5 pt-4 flex flex-col flex-1">
            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
              {product.description}
            </p>

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-2 mb-5">
              {product.features.map((feature, i) => (
                <span
                  key={i}
                  className="products-preview-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium cursor-default"
                >
                  <span className="text-emerald-500/80">{feature.icon}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {feature.label}
                  </span>
                </span>
              ))}
            </div>

            {/* Spacer to push arrow to bottom */}
            <div className="flex-1" />

            {/* View Details Arrow */}
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm group/link">
              <span>View Details</span>
              <ArrowRight
                size={16}
                className="transition-all duration-300 ease-out group-hover/link:translate-x-1.5 group-hover/link:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Carousel Navigation Arrows
   ────────────────────────────────────────────────────────────── */

function CarouselArrows({
  onPrev,
  onNext,
  canScrollPrev,
  canScrollNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mt-8 lg:mt-10">
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        className="carousel-arrow group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-white/40 dark:border-white/[0.08] shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-400 ease-out hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/30 hover:border-emerald-300/40 dark:hover:border-emerald-500/30 hover:scale-105 active:scale-95"
        aria-label="Previous products"
      >
        {/* Emerald glow on hover */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />
        <ArrowLeft
          size={20}
          className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
        />
      </button>

      <button
        onClick={onNext}
        disabled={!canScrollNext}
        className="carousel-arrow group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl border border-white/40 dark:border-white/[0.08] shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-400 ease-out hover:shadow-emerald-200/50 dark:hover:shadow-emerald-900/30 hover:border-emerald-300/40 dark:hover:border-emerald-500/30 hover:scale-105 active:scale-95"
        aria-label="Next products"
      >
        {/* Emerald glow on hover */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.15) 0%, transparent 70%)",
          }}
        />
        <ArrowRight
          size={20}
          className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300"
        />
      </button>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Progress Indicators
   ────────────────────────────────────────────────────────────── */

function ProgressIndicators({
  total,
  current,
  onDotClick,
}: {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2.5 mt-5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="relative h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer"
          style={{
            width: current === i ? "32px" : "8px",
            background:
              current === i
                ? "linear-gradient(90deg, #10B981, #34D399)"
                : "rgba(16, 185, 129, 0.2)",
            transition: "width 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), background 0.4s ease",
          }}
          aria-label={`Go to product ${i + 1}`}
        />
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   Main Section Component
   ────────────────────────────────────────────────────────────── */

export default function ProductsPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isHovering, setIsHovering] = useState(false);

  // Autoplay plugin: pause on hover and while dragging
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      dragFree: false,
      containScroll: "trimSnaps",
      skipSnaps: false,
      duration: 35,
    },
    [autoplayPlugin.current]
  );

  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    onScroll();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("resize", onSelect);
  }, [emblaApi, onSelect, onScroll]);

  // Mouse wheel support
  useEffect(() => {
    const emblaRoot = emblaApi?.rootNode();
    if (!emblaRoot) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (e.deltaY > 0) emblaApi?.scrollNext();
      else emblaApi?.scrollPrev();
    };

    emblaRoot.addEventListener("wheel", onWheel, { passive: false });
    return () => emblaRoot.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        emblaApi.scrollNext();
      }
    };

    const container = emblaApi?.containerNode();
    if (!container) return;
    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  // Pause/resume autoplay on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    autoplayPlugin.current?.stop();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    autoplayPlugin.current?.play();
  };

  return (
    <section
      ref={sectionRef}
      id="products-preview"
      className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-black dark:via-emerald-950/20 dark:to-black transition-colors duration-500"
    >
      {/* ─── Subtle background noise texture ─── */}
      <div className="noise-bg absolute inset-0 pointer-events-none z-0" aria-hidden="true" />

      {/* ─── Soft emerald radial glow ─── */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.07) 0%, rgba(16, 185, 129, 0.02) 30%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* ─── Subtle floating particles ─── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[5%] w-[2px] h-[2px] rounded-full bg-emerald-400/20 animate-particle" />
        <div className="absolute top-[25%] right-[10%] w-[2px] h-[2px] rounded-full bg-emerald-300/15 animate-particle-2" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[55%] left-[15%] w-[2px] h-[2px] rounded-full bg-emerald-400/20 animate-particle-3" style={{ animationDelay: "4.5s" }} />
        <div className="absolute top-[75%] right-[20%] w-[2px] h-[2px] rounded-full bg-emerald-300/15 animate-particle-2" style={{ animationDelay: "6.5s" }} />
        <div className="absolute top-[40%] left-[85%] w-[2px] h-[2px] rounded-full bg-emerald-400/15 animate-particle" style={{ animationDelay: "3.5s" }} />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 py-[140px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* ================================================================
              SECTION HEADER
              ================================================================ */}
          <div className="text-center max-w-[800px] mx-auto mb-12 lg:mb-14">
            {/* ─── Premium Glass Badge ─── */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-300 bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Our Products
              </span>
            </motion.div>

            {/* ─── Large Heading ─── */}
            <motion.h2
              variants={fadeUp}
              className="mb-6 text-4xl font-bold leading-[1.12] tracking-[-0.025em] text-gray-900 dark:text-white sm:text-[42px] md:text-[48px] lg:text-[52px] xl:text-[56px]"
            >
              <span className="block">AAC Block Size Variants</span>
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                  Precision Engineered for Every Project
                </span>
                <span className="text-gray-800 dark:text-gray-200">.</span>
              </span>
            </motion.h2>

            {/* ─── Subtitle ─── */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-[1.85] tracking-[0.01em] max-w-[680px] mx-auto"
            >
              Klavetek offers a comprehensive range of premium AAC block sizes 
              engineered for excellence. From 100 mm partition blocks to 250 mm 
              heavy-duty variants, every product is manufactured with cutting-edge 
              technology and rigorous quality standards to deliver unmatched 
              durability, sustainability, and performance across all your 
              building projects.
            </motion.p>
          </div>

          {/* ================================================================
              PRODUCT CARDS CAROUSEL
              ================================================================ */}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* ─── Embla Carousel Viewport ─── */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -ml-5 md:-ml-6">
                {products.map((product, index) => (
                  <ProductCard
                    key={`${product.name}-${index}`}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* ─── Navigation Arrows ─── */}
            <CarouselArrows
              onPrev={scrollPrev}
              onNext={scrollNext}
              canScrollPrev={canScrollPrev}
              canScrollNext={canScrollNext}
            />

            {/* ─── Progress Indicators ─── */}
            <ProgressIndicators
              total={products.length}
              current={selectedIndex}
              onDotClick={scrollTo}
            />
          </div>

          {/* ================================================================
              BOTTOM CTA
              ================================================================ */}
          <motion.div
            variants={fadeUp}
            className="mt-12 lg:mt-14 text-center"
          >
            <Link
              href="/products"
              className="products-preview-cta group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-10 py-4.5 font-semibold text-base text-white transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1"
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
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.12) 70%, transparent 100%)",
                    width: "60%",
                    left: "-20%",
                    top: 0,
                    bottom: 0,
                  }}
                />
              </span>

              <span className="relative z-10">View All Products</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:scale-110"
              />
            </Link>
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