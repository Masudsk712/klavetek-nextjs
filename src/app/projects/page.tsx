import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Projects | Klavetek",
  description: "Projects delivered by Klavetek AAC blocks.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Our Projects
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              Showcasing our successful deliveries across India.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "Delhi Metro Project",
                  category: "Infrastructure",
                  location: "New Delhi",
                  description: "Supplied 500,000 specialized AAC blocks for metro station construction across the Delhi NCR region. The blocks met strict fire safety and load-bearing requirements.",
                  quantity: "500,000 blocks",
                },
                {
                  title: "Green Residential Complex",
                  category: "Residential",
                  location: "Bangalore, Karnataka",
                  description: "Complete AAC block supply for a 200-unit eco-friendly apartment complex. The project achieved GRIHA 5-star rating with our sustainable building materials.",
                  quantity: "1.2M blocks",
                },
                {
                  title: "IT Park Construction",
                  category: "Commercial",
                  location: "Hyderabad, Telangana",
                  description: "Provided lightweight AAC blocks for a 15-floor IT office building, reducing structural load and enabling faster construction timelines.",
                  quantity: "750,000 blocks",
                },
                {
                  title: "Hospital Wing Expansion",
                  category: "Institutional",
                  location: "Mumbai, Maharashtra",
                  description: "Fire-rated AAC blocks for a major hospital wing expansion project, ensuring compliance with healthcare facility safety standards.",
                  quantity: "300,000 blocks",
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
                      {project.category}
                    </span>
                    <span className="text-sm text-slate-500">{project.location}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold text-slate-900">{project.title}</h2>
                  <p className="mt-4 leading-8 text-slate-600">{project.description}</p>
                  <div className="mt-4 text-sm font-semibold text-slate-700">
                    Quantity: {project.quantity}
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
