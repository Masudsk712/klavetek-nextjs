"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export default function CTA() {
  return (
    <Section background="primary" spacing="lg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center text-white"
        >
          <Heading level="h2" align="center" className="text-white">
            Ready to Build Stronger?
          </Heading>
          <p className="mt-6 text-lg leading-8 text-emerald-50">
            Contact us today for premium quality AAC blocks and construction solutions.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-lg font-semibold text-emerald-700 shadow-lg transition-all hover:bg-emerald-50"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-white bg-transparent px-8 text-lg font-semibold text-white transition-all hover:bg-white/10"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
