import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const products = [
  {
    name: "Standard AAC Blocks",
    description:
      "Versatile AAC blocks suitable for all general construction needs, offering excellent thermal insulation.",
  },
  {
    name: "High-Strength AAC Blocks",
    description:
      "Reinforced AAC blocks for load-bearing walls and multi-story structures with superior compressive strength.",
  },
  {
    name: "AAC Block Panels",
    description:
      "Lightweight wall panels for faster construction and reduced on-site labor requirements.",
  },
  {
    name: "Mortar & Adhesives",
    description:
      "Compatible construction chemicals and mortars designed specifically for AAC block applications.",
  },
];

export default function Products() {
  return (
    <Section background="dark" spacing="lg">
      <Container>
        <Heading level="h2" align="center" className="text-white">
          Our Premium Products
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Engineered for strength, sustainability, and speed of construction.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
              <p className="mt-3 leading-7 text-slate-300">{product.description}</p>
              <div className="mt-6">
                <a href="/products">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}