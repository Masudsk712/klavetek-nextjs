"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const technologies = [
  {
    title: "German Technology",
    description:
      "State-of-the-art AAC block production line imported from Germany ensuring precision, consistency, and international quality standards.",
  },
  {
    title: "Autoclave Curing",
    description:
      "High-pressure steam curing process that delivers superior strength, dimensional stability, and long-term durability.",
  },
  {
    title: "Quality Laboratory",
    description:
      "Dedicated in-house testing lab for compressive strength, density, dimensional accuracy, and thermal conductivity verification.",
  },
  {
    title: "Sustainable Process",
    description:
      "Eco-friendly manufacturing with fly ash utilization, low energy consumption, and minimal environmental footprint.",
  },
];

export default function Technology() {
  return (
    <Section background="default" spacing="lg">
      <Container>
        <Heading level="h2" align="center">
          Our Technology
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Advanced manufacturing processes and quality control systems.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:border-emerald-500/40"
            >
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
