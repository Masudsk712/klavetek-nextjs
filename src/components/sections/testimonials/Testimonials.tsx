import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

const testimonials = [
  {
    quote:
      "Klavetek's AAC blocks have transformed our construction process. The quality is consistently excellent and delivery is always on time.",
    author: "Rajesh Kumar",
    role: "Project Director, Sharma Builders",
  },
  {
    quote:
      "We switched to Klavetek blocks for our residential projects and have seen a 30% reduction in construction time. Highly recommended.",
    author: "Priya Sharma",
    role: "Chief Architect, Urban Spaces",
  },
  {
    quote:
      "The technical support and product knowledge from the Klavetek team is outstanding. They're more than suppliers - they're partners.",
    author: "Amit Patel",
    role: "CEO, Patel Infrastructure",
  },
];

export default function Testimonials() {
  return (
    <Section background="default" spacing="lg">
      <Container>
        <Heading level="h2" align="center">
          What Our Clients Say
        </Heading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Trusted by leading builders and contractors across India.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="text-4xl text-emerald-500">"</div>
              <p className="mt-4 leading-7 text-slate-700">{testimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{testimonial.author}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}