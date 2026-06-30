import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Industries | Klavetek",
  description: "Industries served by Klavetek AAC blocks.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Industries We Serve
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Supporting diverse sectors with premium building materials.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Residential Construction",
                  description: "Providing high-quality AAC blocks for apartment complexes, individual homes, and housing societies. Our products ensure faster construction, better thermal comfort, and reduced environmental impact for residential projects across India.",
                },
                {
                  title: "Commercial Development",
                  description: "Supplying AAC blocks for office buildings, shopping malls, hotels, and commercial complexes. Our materials meet the rigorous demands of commercial construction with consistent quality and timely delivery.",
                },
                {
                  title: "Industrial Infrastructure",
                  description: "Heavy-duty AAC blocks and panels for factories, warehouses, and industrial plants. Our products provide excellent fire resistance and structural integrity for industrial applications.",
                },
                {
                  title: "Government Projects",
                  description: "Supporting public infrastructure initiatives including government housing, educational institutions, and healthcare facilities. Compliance with all government specifications and standards.",
                },
              ].map((industry, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  <div className="text-3xl">🏗️</div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{industry.title}</h2>
                  <p className="mt-4 leading-8 text-slate-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h2" align="center" className="text-white">
              Why Choose Klavetek
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
              Trusted by industry leaders for consistent quality.
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400">500+</div>
                <p className="mt-2 text-slate-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400">50M+</div>
                <p className="mt-2 text-slate-300">Blocks Supplied</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-emerald-400">15+</div>
                <p className="mt-2 text-slate-300">Years Experience</p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
