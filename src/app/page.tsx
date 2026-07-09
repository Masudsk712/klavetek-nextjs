import HeroSection from "@/components/home/HeroSection/HeroSection";
import TrustedSection from "@/components/home/TrustedSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProductsPreview from "@/components/home/ProductsPreview";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import ProjectsSection from "@/components/home/ProjectsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">

      <HeroSection />

      <TrustedSection />

      <AboutPreview />

      <WhyChooseSection />

      <ProductsPreview />

      <ManufacturingProcess />

      <ApplicationsSection />

      <ProjectsSection />

      <TestimonialsSection />

      <FAQSection />

      <CTASection />

    </main>
  );
}