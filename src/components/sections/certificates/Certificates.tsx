"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const certificates = [
  { title: "ISO 9001:2015", description: "Quality Management System certification ensuring consistent product quality." },
  { title: "BIS Certification", description: "Bureau of Indian Standards certification for AAC blocks (IS 2185:2005)." },
  { title: "GreenPro Certified", description: "Eco-friendly product certification recognizing sustainable construction materials." },
  { title: "GRIHA Compliant", description: "Compliant with Green Rating for Integrated Habitat Assessment standards." },
];

export default function Certificates() {
  return (
    <Section background="default" spacing="lg">
      <Container>
        <Heading level="h2" align="center">
          Certifications & Quality
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Committed to the highest standards of quality and compliance.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certificates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:border-emerald-500/40"
            >
              <div className="text-4xl">🏅</div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
