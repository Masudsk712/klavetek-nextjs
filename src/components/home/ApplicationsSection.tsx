"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Hospital,
  School,
  Warehouse,
} from "lucide-react";

const applications = [
  {
    title: "Residential Buildings",
    description:
      "Ideal for villas, apartments and modern housing projects.",
    image: "/images/applications/residential.webp",
    icon: Home,
  },
  {
    title: "Commercial Buildings",
    description:
      "Perfect for offices, shopping complexes and business spaces.",
    image: "/images/applications/commercial.webp",
    icon: Building2,
  },
  {
    title: "Industrial Projects",
    description:
      "Designed for factories, manufacturing units and warehouses.",
    image: "/images/applications/industrial.webp",
    icon: Factory,
  },
  {
    title: "Hospitals",
    description:
      "Excellent thermal insulation and fire resistance.",
    image: "/images/applications/hospital.webp",
    icon: Hospital,
  },
  {
    title: "Educational Institutions",
    description:
      "Comfortable, energy-efficient classrooms and campuses.",
    image: "/images/applications/school.webp",
    icon: School,
  },
  {
    title: "Warehouses",
    description:
      "Durable walls with superior strength and insulation.",
    image: "/images/applications/warehouse.webp",
    icon: Warehouse,
  },
];

export default function ApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Applications
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Built For
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              Every Construction Need
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Klavetek AAC Blocks are suitable for residential,
            commercial, industrial and institutional projects,
            delivering superior performance across every application.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">        {applications.map((application, index) => {
          const Icon = application.icon;

          return (
            <motion.div
              key={application.title}
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
              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={application.image}
                  alt={application.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Icon */}

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-emerald-500
                    shadow-lg
                    shadow-emerald-500/30
                  "
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <h3 className="text-2xl font-bold text-white">
                  {application.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {application.description}
                </p>

              </div>

            </motion.div>
          );
        })}

        </div>

        {/* Bottom Info */}

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
          className="mt-24 text-center"
        >

          <h3 className="text-3xl font-bold text-white">
            Engineered For Every Project
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/60">
            From residential homes to industrial infrastructure,
            Klavetek AAC Blocks provide superior strength,
            lightweight construction and long-term durability for
            every type of building.
          </p>

        </motion.div>

      </div>

    </section>
  );
}