"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2 } from "lucide-react";

const projects = [
  {
    title: "Residential Township",
    location: "Malda, West Bengal",
    category: "Residential",
    image: "/images/projects/project-1.webp",
  },
  {
    title: "Commercial Complex",
    location: "Siliguri, West Bengal",
    category: "Commercial",
    image: "/images/projects/project-2.webp",
  },
  {
    title: "Industrial Facility",
    location: "Durgapur, West Bengal",
    category: "Industrial",
    image: "/images/projects/project-3.webp",
  },
  {
    title: "Educational Campus",
    location: "Kolkata, West Bengal",
    category: "Institutional",
    image: "/images/projects/project-4.webp",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      {/* Background Glow */}

      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[180px]" />

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
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Trusted Across
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Every Sector
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Our AAC Blocks are used in residential, commercial,
            industrial and institutional projects across India,
            delivering long-lasting quality and performance.
          </p>

        </motion.div>

        {/* Project Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">        {projects.map((project, index) => (
          <motion.div
            key={project.title}
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
            "
          >
            {/* Project Image */}

            <div className="relative h-80 overflow-hidden">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Gradient Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Category */}

              <div
                className="
                  absolute
                  left-6
                  top-6
                  rounded-full
                  bg-emerald-500
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-white
                "
              >
                {project.category}
              </div>

            </div>

            {/* Content */}

            <div className="p-8">

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-5 text-white/60">

                <div className="flex items-center gap-2">

                  <MapPin
                    size={18}
                    className="text-emerald-400"
                  />

                  <span>{project.location}</span>

                </div>

                <div className="flex items-center gap-2">

                  <Building2
                    size={18}
                    className="text-emerald-400"
                  />

                  <span>{project.category}</span>

                </div>

              </div>

              <Link
                href="/projects"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-lg
                  font-semibold
                  text-emerald-400
                  transition-all
                  duration-300
                  hover:gap-3
                "
              >
                View Project

                <ArrowRight size={20} />

              </Link>

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
            href="/projects"
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
            View All Projects

            <ArrowRight size={20} />

          </Link>

        </motion.div>

      </div>

    </section>
  );
}