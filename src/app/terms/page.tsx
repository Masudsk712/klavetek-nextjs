import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Terms & Conditions | Klavetek",
  description: "Klavetek terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Terms & Conditions
            </Heading>
            <p className="mx-auto mt-6 max-w-3xl text-center text-slate-300">
              Last updated: June 30, 2026
            </p>
          </Container>
        </Section>

        <Section spacing="lg">
          <Container>
            <div className="mx-auto max-w-3xl space-y-12 text-slate-700">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  By accessing or using the Klavetek website, you agree to be
                  bound by these Terms & Conditions and all applicable laws
                  and regulations. If you do not agree with any of these terms,
                  you are prohibited from using this site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Products and Pricing
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  All product descriptions and prices are subject to change
                  without notice. We reserve the right to discontinue any product
                  at any time. Prices displayed are in INR and exclude applicable
                  taxes unless otherwise stated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. Orders and Payments
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                  <li>
                    Orders are subject to acceptance and availability of products.
                  </li>
                  <li>
                    Payment terms will be communicated at the time of order
                    confirmation.
                  </li>
                  <li>
                    We reserve the right to refuse any order placed through our
                    website.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Intellectual Property
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  All content on this website, including text, graphics, logos,
                  and images, is the property of Klavetek Green Blocks &
                  Tiles Pvt. Ltd. and is protected by intellectual property laws.
                  Unauthorized use is prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Limitation of Liability
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Klavetek shall not be liable for any direct, indirect,
                  incidental, or consequential damages resulting from the use or
                  inability to use our products or website, even if we have been
                  advised of the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Governing Law
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  These terms and conditions are governed by and construed in
                  accordance with the laws of India. Any disputes shall be
                  subject to the exclusive jurisdiction of courts in Malda, West
                  Bengal.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7. Contact Information
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  For questions regarding these terms, please contact us at
                  info@klavetek.com or visit our contact page.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}