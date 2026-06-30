"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const services = [
  {
    title: "Custom Block Manufacturing",
    description: "Tailored AAC block production in various sizes, strengths, and densities to match your project requirements.",
  },
  {
    title: "Technical Consultation",
    description: "Expert guidance on material selection, structural design, and construction best practices for optimal results.",
  },
  {
    title: "Bulk Supply & Logistics",
    description: "Pan-India delivery network ensuring timely supply of construction materials to your site, regardless of location.",
  },
  {
    title: "After-Sales Support",
    description: "Dedicated customer support for product queries, technical assistance, and feedback integration.",
  },
];

export default function Services() {
  return (
    <Section background="dark" spacing="lg">
      <Container>
        <Heading level="h2" align="center" className="text-white">
          Our Services
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Comprehensive construction solutions tailored to your project needs.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-emerald-400/30 hover:bg-white/10 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
