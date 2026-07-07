import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero/Hero";
import AboutPreview from "@/components/sections/about-preview/AboutPreview";
import ProductsPreview from "@/components/sections/products-preview/ProductsPreview";
import WhyChooseKlavetek from "@/components/sections/why-choose-klavetek/WhyChooseKlavetek";
import TrustBar from "@/components/sections/trust-bar/TrustBar";
import About from "@/components/sections/about/About";
import Industries from "@/components/sections/industries/Industries";
import Services from "@/components/sections/services/Services";
import Technology from "@/components/sections/technology/Technology";
import Projects from "@/components/sections/projects/Projects";
import Certificates from "@/components/sections/certificates/Certificates";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import FAQ from "@/components/sections/faq/FAQ";
import CTA from "@/components/sections/cta/PremiumCTA";
import ProductShowcase from "@/components/sections/products/ProductShowcase";
import ManufacturingProcess from "@/components/sections/manufacturing/ManufacturingProcess";
import GalleryPreview from "@/components/sections/gallery-preview/GalleryPreview";
import WhyAACComparison from "@/components/sections/why-aac-comparison/WhyAACComparison";

export default function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <ProductsPreview />

      <WhyChooseKlavetek />

      <TrustBar />

      <About />

      <Industries />

      <Services />

      <Technology />

      <ProductShowcase />

      <Projects />

      <ManufacturingProcess />

      <GalleryPreview />

      <WhyAACComparison />

      <Certificates />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}