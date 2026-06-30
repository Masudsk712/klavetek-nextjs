"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const industries = [
  {
    title: "Residential Construction",
    description: "High-quality AAC blocks for homes, apartments, and residential complexes ensuring durability and thermal comfort.",
    icon: "🏠",
  },
  {
    title: "Commercial Projects",
    description: "Reliable building materials for offices, retail spaces, hotels, and institutional buildings.",
    icon: "🏢",
  },
  {
    title: "Industrial Infrastructure",
    description: "Heavy-duty construction solutions for factories, warehouses, and industrial facilities.",
    icon: "🏭",
  },
  {
    title: "Infrastructure Development",
    description: "Supporting government infrastructure projects including roads, bridges, and public utilities.",
    icon: "🌉",
  },
];

export default function Industries() {
  return (
    <Section background="dark" spacing="lg">
      <Container>
        <Heading level="h2" align="center" className="text-white">
          Industries We Serve
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Supporting diverse sectors with high-quality AAC blocks and building materials.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10 hover:shadow-xl hover:scale-105"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
