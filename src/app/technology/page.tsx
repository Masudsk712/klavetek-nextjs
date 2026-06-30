import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Technology | Klavetek",
  description: "Advanced manufacturing technology and quality control at Klavetek.",
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Our Technology
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Advanced manufacturing processes for superior AAC blocks.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">German Manufacturing Line</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Our production facility is equipped with state-of-the-art AAC block manufacturing machinery imported from Germany. This ensures precision, consistency, and adherence to international quality standards in every block we produce.
                </p>
                <ul className="mt-6 space-y-3 text-slate-600">
                  <li>• Automated batching and mixing system</li>
                  <li>• Precision cutting and molding equipment</li>
                  <li>• High-pressure steam curing autoclaves</li>
                  <li>• Automated handling and packaging</li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Quality Control Laboratory</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Our in-house testing facility ensures every batch meets stringent quality parameters. We conduct comprehensive tests on raw materials, in-process materials, and finished products.
                </p>
                <ul className="mt-6 space-y-3 text-slate-600">
                  <li>• Compressive strength testing</li>
                  <li>• Density and dimensional accuracy checks</li>
                  <li>• Thermal conductivity analysis</li>
                  <li>• Fire resistance certification</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h2" align="center" className="text-white">
              Sustainable Manufacturing
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
              Our eco-friendly approach minimizes environmental impact.
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center">
                <div className="text-4xl">♻️</div>
                <h3 className="mt-4 text-xl font-bold text-white">Fly Ash Utilization</h3>
                <p className="mt-3 text-slate-300">Uses industrial by-product fly ash, reducing waste and conserving natural resources.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center">
                <div className="text-4xl">⚡</div>
                <h3 className="mt-4 text-xl font-bold text-white">Energy Efficient</h3>
                <p className="mt-3 text-slate-300">Optimized curing process reduces energy consumption by 30% compared to traditional methods.</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-8 text-center">
                <div className="text-4xl">🌱</div>
                <h3 className="mt-4 text-xl font-bold text-white">Carbon Footprint</h3>
                <p className="mt-3 text-slate-300">AAC blocks have 80% lower carbon footprint compared to traditional clay bricks.</p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
