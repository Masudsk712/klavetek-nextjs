import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Products | Klavetek",
  description: "Premium AAC blocks and construction solutions from Klavetek.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Our Products
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Premium AAC blocks engineered for strength and sustainability.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Standard AAC Blocks",
                  grade: "3.5 N/mm²",
                  density: "600 kg/m³",
                  size: "600x200x200mm",
                  description: "Ideal for non-load bearing walls and partition walls. Excellent thermal and sound insulation properties.",
                },
                {
                  title: "High-Strength AAC Blocks",
                  grade: "5.0 N/mm²",
                  density: "700 kg/m³",
                  size: "600x200x225mm",
                  description: "Perfect for load-bearing structures and multi-story buildings. Superior compressive strength.",
                },
                {
                  title: "Premium AAC Blocks",
                  grade: "7.5 N/mm²",
                  density: "750 kg/m³",
                  size: "600x200x300mm",
                  description: "Heavy-duty blocks for industrial and commercial structures. Maximum strength and durability.",
                },
              ].map((product, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🧱</span>
                    <h2 className="text-2xl font-bold text-slate-900">{product.title}</h2>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p><strong>Grade:</strong> {product.grade}</p>
                    <p><strong>Density:</strong> {product.density}</p>
                    <p><strong>Standard Size:</strong> {product.size}</p>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{product.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
