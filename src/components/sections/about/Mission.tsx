"use client";

import Container from "@/components/ui/Container";

export default function Mission() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Our Mission
          </h2>
          <p className="mt-8 text-lg leading-8 text-slate-300">
            Deliver world-class construction solutions through innovation, quality, and customer satisfaction.
          </p>
        </div>
      </Container>
    </section>
  );
}