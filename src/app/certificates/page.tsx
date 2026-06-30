import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Certificates | Klavetek",
  description: "Certifications and quality standards at Klavetek.",
};

export default function CertificatesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Certifications & Quality
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Committed to the highest standards of quality and compliance.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "ISO 9001:2015",
                  description: "Quality Management System certification ensuring consistent product quality and continuous improvement in all processes.",
                  details: "Certified for design, manufacturing, and supply of AAC blocks and related construction materials.",
                },
                {
                  title: "BIS Certification",
                  description: "Bureau of Indian Standards certification confirming compliance with IS 2185:2005 specifications for AAC blocks.",
                  details: "Mandatory certification for all AAC blocks supplied in India, ensuring safety and reliability.",
                },
                {
                  title: "GreenPro Certification",
                  description: "Eco-friendly product certification recognizing our commitment to sustainable construction materials.",
                  details: "Certified for low environmental impact, recycled content usage, and energy-efficient manufacturing.",
                },
                {
                  title: "GRIHA Compliance",
                  description: "Compliant with Green Rating for Integrated Habitat Assessment standards for sustainable buildings.",
                  details: "Our products contribute to green building ratings and sustainable development goals.",
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  <div className="text-4xl">🏅</div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{cert.title}</h2>
                  <p className="mt-4 leading-8 text-slate-600">{cert.description}</p>
                  <p className="mt-4 text-sm text-slate-500">{cert.details}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h2" align="center" className="text-white">
              Quality Assurance Process
            </Heading>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
              Every block undergoes rigorous testing before delivery.
            </p>
            <div className="mt-16 grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl">1</div>
                <h3 className="mt-2 font-bold text-white">Raw Material Testing</h3>
                <p className="mt-2 text-sm text-slate-300">Every batch of raw materials is tested for quality and composition.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl">2</div>
                <h3 className="mt-2 font-bold text-white">In-Process Monitoring</h3>
                <p className="mt-2 text-sm text-slate-300">Continuous monitoring during production to maintain consistency.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl">3</div>
                <h3 className="mt-2 font-bold text-white">Finished Product Testing</h3>
                <p className="mt-2 text-sm text-slate-300">Comprehensive tests on finished blocks for strength and dimensions.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl">4</div>
                <h3 className="mt-2 font-bold text-white">Final Certification</h3>
                <p className="mt-2 text-sm text-slate-300">Quality certificate issued with every shipment for traceability.</p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
