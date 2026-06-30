import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { SITE } from "@/config/site";

export const metadata = {
  title: "About Us | Klavetek",
  description: "Learn about Klavetek Green Blocks & Tiles Pvt. Ltd. - leading AAC block manufacturer in India.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              About Klavetek Green Blocks & Tiles Pvt. Ltd.
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              We specialize in manufacturing premium quality Autoclaved Aerated Concrete (AAC) blocks, 
              delivering sustainable and innovative building solutions for a greener tomorrow.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  To provide world-class construction solutions through innovation, quality, and customer satisfaction. We are committed to transforming the construction industry with sustainable building materials that don't compromise on performance.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  To become one of the most trusted construction material manufacturers in India and globally. We envision a future where every construction project prioritizes sustainability without sacrificing strength or durability.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h2" align="center" className="text-white">
              Our Journey
            </Heading>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-slate-300">
              From humble beginnings to industry leadership.
            </p>
            <div className="mx-auto mt-16 max-w-4xl">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-emerald-400">2010</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Company Founded</h3>
                    <p className="mt-2 text-slate-300">Established with a vision to revolutionize the construction material industry in Eastern India.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-emerald-400">2013</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">First Major Expansion</h3>
                    <p className="mt-2 text-slate-300">Doubled production capacity and expanded distribution network across West Bengal and Bihar.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-emerald-400">2016</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">ISO Certification</h3>
                    <p className="mt-2 text-slate-300">Achieved ISO 9001:2015 certification, validating our commitment to quality management systems.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-emerald-400">2020</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">German Technology Integration</h3>
                    <p className="mt-2 text-slate-300">Upgraded to state-of-the-art German manufacturing technology for superior product quality.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-4xl font-bold text-emerald-400">2026</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Pan-India Presence</h3>
                    <p className="mt-2 text-slate-300">Expanded operations to serve clients across multiple states with dedicated logistics network.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <Heading level="h2" align="center">
              Why Choose Klavetek
            </Heading>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                <div className="text-5xl">🏆</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">15+ Years Experience</h3>
                <p className="mt-3 text-slate-600">Decades of expertise in manufacturing and supplying premium AAC blocks across India.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                <div className="text-5xl">⭐</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">ISO 9001 Certified</h3>
                <p className="mt-3 text-slate-600">Internationally recognized quality management system ensuring consistent product excellence.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                <div className="text-5xl">🌍</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">Pan-India Reach</h3>
                <p className="mt-3 text-slate-600">Serving clients across multiple states with reliable logistics and supply chain management.</p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
