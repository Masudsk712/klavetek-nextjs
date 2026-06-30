"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const faqs = [
  {
    question: "What are AAC blocks?",
    answer:
      "Autoclaved Aerated Concrete (AAC) blocks are lightweight, precast, foam concrete building materials suitable for producing concrete masonry units. They are eco-friendly, provide excellent thermal and sound insulation, and are fire-resistant.",
  },
  {
    question: "What is the compressive strength of your AAC blocks?",
    answer:
      "Our AAC blocks have a compressive strength ranging from 3.5 N/mm² to 7.5 N/mm² depending on the grade. We offer various grades suitable for different construction needs from residential to commercial projects.",
  },
  {
    question: "Are AAC blocks suitable for all types of construction?",
    answer:
      "Yes, AAC blocks are suitable for load-bearing and non-load-bearing walls in residential, commercial, and industrial constructions. They work well for partition walls, exterior walls, and multi-story buildings.",
  },
  {
    question: "What is the delivery lead time for orders?",
    answer:
      "Delivery lead time depends on order quantity and destination. Typically, local deliveries within 200km take 2-3 business days. For bulk orders or distant locations, please contact our logistics team for exact timelines.",
  },
  {
    question: "Do you provide installation guidance?",
    answer:
      "Yes, we provide detailed installation guidelines and technical support for all our products. Our team can also recommend certified contractors for large projects. We offer on-site support for major commercial projects.",
  },
  {
    question: "What are the benefits of using AAC blocks over traditional bricks?",
    answer:
      "AAC blocks are 4-5 times lighter than traditional bricks, reducing structural load and transportation costs. They offer better thermal insulation, fire resistance, soundproofing, and faster construction. Additionally, they are eco-friendly and reduce mortar usage by nearly 50%.",
  },
];

export default function FAQ() {
  return (
    <Section background="dark" spacing="lg">
      <Container>
        <Heading level="h2" align="center" className="text-white">
          Frequently Asked Questions
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Find answers to common questions about our products and services.
        </p>
        <div className="mx-auto mt-16 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10">
          {faqs.map((faq, index) => (
            <details key={index} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                {faq.question}
                <span className="transition group-open:rotate-180">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}