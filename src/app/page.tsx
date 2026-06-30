import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Industries from "@/components/sections/industries/Industries";
import Services from "@/components/sections/services/Services";
import Technology from "@/components/sections/technology/Technology";
import Projects from "@/components/sections/projects/Projects";
import Certificates from "@/components/sections/certificates/Certificates";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import FAQ from "@/components/sections/faq/FAQ";
import CTA from "@/components/sections/cta/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Industries />

      <Services />

      <Technology />

      <Projects />

      <Certificates />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}