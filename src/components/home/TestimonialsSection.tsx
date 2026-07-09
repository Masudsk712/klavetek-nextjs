"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Builder",
    image: "/images/testimonials/client-1.webp",
    review:
      "Klavetek AAC Blocks helped us complete our residential project faster while maintaining excellent quality.",
  },
  {
    name: "Amit Verma",
    role: "Contractor",
    image: "/images/testimonials/client-2.webp",
    review:
      "Excellent product quality, timely delivery and professional support throughout the project.",
  },
  {
    name: "S. Mukherjee",
    role: "Architect",
    image: "/images/testimonials/client-3.webp",
    review:
      "The lightweight AAC Blocks provide better insulation and are perfect for modern sustainable construction.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[180px]" />

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
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            What Our
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Trusted by builders, contractors and architects for
            delivering premium AAC Blocks with reliable quality and
            timely service.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
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
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              p-8
              transition-all
              duration-300
              hover:border-emerald-500/30
              hover:bg-white/[0.06]
            "
          >
            {/* Quote Icon */}

            <div
              className="
                absolute
                right-8
                top-8
                opacity-10
              "
            >
              <Quote
                size={52}
                className="text-emerald-400"
              />
            </div>

            {/* Stars */}

            <div className="flex gap-1">

              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                  className="text-yellow-400"
                />
              ))}

            </div>

            {/* Review */}

            <p
              className="
                mt-6
                leading-8
                text-white/70
              "
            >
              "{testimonial.review}"
            </p>

            {/* Client */}

            <div
              className="
                mt-8
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  relative
                  h-16
                  w-16
                  overflow-hidden
                  rounded-full
                  border
                  border-emerald-500/20
                "
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>

                <h3
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {testimonial.name}
                </h3>

                <p className="text-white/60">
                  {testimonial.role}
                </p>

              </div>

            </div>

          </motion.div>
        ))}

        </div>

        {/* Bottom Statistics */}

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
          className="
            mt-24
            grid
            gap-8
            border-t
            border-white/10
            pt-16
            text-center
            md:grid-cols-3
          "
        >

          <div>

            <h3 className="text-5xl font-black text-emerald-400">
              1200+
            </h3>

            <p className="mt-3 text-white/60">
              Happy Customers
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-emerald-400">
              500+
            </h3>

            <p className="mt-3 text-white/60">
              Projects Delivered
            </p>

          </div>

          <div>

            <h3 className="text-5xl font-black text-emerald-400">
              25+
            </h3>

            <p className="mt-3 text-white/60">
              Years of Experience
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}