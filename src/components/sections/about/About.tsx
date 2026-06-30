import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export default function About() {
  return (
    <Section background="dark" spacing="lg">
      <Container>
        <Heading level="h2" align="center" className="text-white">
          About Us
        </Heading>
        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
          Klavetek Green Blocks & Tiles Pvt. Ltd. is a leading manufacturer of premium AAC blocks and construction solutions committed to sustainability and quality.
        </p>
      </Container>
    </Section>
  );
}
