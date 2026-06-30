import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "FAQ | Klavetek",
  description: "Find answers to frequently asked questions about Klavetek AAC blocks, products, and services.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Frequently Asked Questions
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-slate-300">
              Find answers to common questions about our products and services.
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200">
              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  What are AAC blocks?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Autoclaved Aerated Concrete (AAC) blocks are lightweight, precast, foam concrete building materials suitable for producing concrete masonry units. They are eco-friendly, provide excellent thermal and sound insulation, and are fire-resistant.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  What are the standard sizes of AAC blocks?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Standard AAC block sizes are 600mm x 200mm x 100/150/200/225/300mm. We also provide custom sizes based on project requirements. Contact our team for specific dimension requests.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  What is the compressive strength of your AAC blocks?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Our AAC blocks have a compressive strength ranging from 3.5 N/mm² to 7.5 N/mm² depending on the grade. We offer various grades suitable for different construction needs from residential to commercial projects.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  Are AAC blocks suitable for all types of construction?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Yes, AAC blocks are suitable for load-bearing and non-load-bearing walls in residential, commercial, and industrial constructions. They work well for partition walls, exterior walls, and multi-story buildings.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  What is the delivery lead time for orders?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Delivery lead time depends on order quantity and destination. Typically, local deliveries within 200km take 2-3 business days. For bulk orders or distant locations, please contact our logistics team for exact timelines.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  Do you provide installation guidance?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Yes, we provide detailed installation guidelines and technical support for all our products. Our team can also recommend certified contractors for large projects. We offer on-site support for major commercial projects.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  What are the benefits of using AAC blocks over traditional bricks?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  AAC blocks are 4-5 times lighter than traditional bricks, reducing structural load and transportation costs. They offer better thermal insulation, fire resistance, soundproofing, and faster construction. Additionally, they are eco-friendly and reduce mortar usage by nearly 50%.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  How do I request a quote or place an order?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  You can request a quote by filling out our contact form, calling our sales team, or sending an email to sales@klavetek.com. Please provide project details, quantity requirements, and delivery location for accurate pricing.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  What payment methods do you accept?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  We accept bank transfers, demand drafts, and cash payments for local orders. For bulk orders, we offer credit facilities for registered businesses. Payment terms are discussed during order confirmation.
                </p>
              </details>

              <details className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
                  Do you offer bulk or wholesale pricing?
                  <span className="transition group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600">
                  Yes, we offer competitive pricing for bulk and wholesale orders. The discount structure depends on order volume, frequency, and project scope. Contact our sales team to discuss your requirements and get the best pricing.
                </p>
              </details>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}