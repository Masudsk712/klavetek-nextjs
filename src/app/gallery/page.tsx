import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Gallery | Klavetek",
  description: "Gallery showcasing Klavetek AAC blocks and projects.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Project Gallery
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Visual documentation of our work across India.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Production Facility", category: "Infrastructure", description: "State-of-the-art manufacturing plant in West Bengal" },
                { title: "Warehouse Storage", category: "Infrastructure", description: "Modern storage facility with capacity for 1M+ blocks" },
                { title: "Quality Testing Lab", category: "Technology", description: "Comprehensive testing laboratory for quality assurance" },
                { title: "Raw Materials", category: "Process", description: "High-quality raw materials including fly ash and cement" },
                { title: "Finished Products", category: "Products", description: "Premium AAC blocks ready for dispatch" },
                { title: "Delivery Fleet", category: "Logistics", description: "Dedicated fleet for Pan-India delivery" },
                { title: "Team at Work", category: "People", description: "Our experienced workforce ensuring quality production" },
                { title: "Project Site - Delhi", category: "Projects", description: "Ongoing supply at metro rail construction site" },
                { title: "Project Site - Bangalore", category: "Projects", description: "Residential complex construction in progress" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-video overflow-hidden rounded-2xl bg-slate-200"
                >
                  <div className="flex h-full items-center justify-center">
                    <span className="text-6xl">📸</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-xs font-semibold text-emerald-400">{item.category}</div>
                      <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-200">{item.description}</p>
                    </div>
                  </div>
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
