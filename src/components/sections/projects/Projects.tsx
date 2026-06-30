import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const projects = [
  {
    title: "Delhi Metro Project",
    category: "Infrastructure",
    description: "Supplied 500,000 AAC blocks for metro station construction across Delhi NCR region.",
    location: "New Delhi",
  },
  {
    title: "Green Residential Complex",
    category: "Residential",
    description: "Complete AAC block supply for a 200-unit eco-friendly apartment complex in Bangalore.",
    location: "Bangalore, Karnataka",
  },
  {
    title: "IT Park Construction",
    category: "Commercial",
    description: "Provided specialized lightweight blocks for a 15-floor IT office building in Hyderabad.",
    location: "Hyderabad, Telangana",
  },
  {
    title: "Hospital Expansion",
    category: "Institutional",
    description: "Fire-rated AAC blocks for a major hospital wing expansion project in Mumbai.",
    location: "Mumbai, Maharashtra",
  },
];

export default function Projects() {
  return (
    <Section background="dark" spacing="lg">
      <Container>
        <Heading level="h2" align="center" className="text-white">
          Our Projects
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          Showcasing our successful deliveries across India.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-semibold text-emerald-300">
                  {project.category}
                </span>
                <span className="text-sm text-slate-400">{project.location}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}