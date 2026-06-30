import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export const metadata = {
  title: "Privacy Policy | Klavetek",
  description: "Klavetek privacy policy detailing how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section background="dark" spacing="lg">
          <Container>
            <Heading level="h1" align="center" className="text-white">
              Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Klavetek Green Blocks & Tiles Pvt. Ltd. ("Klavetek",
                  "we", "our", or "us") respects your
                  privacy and is committed to protecting your personal data. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  2. Information We Collect
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                  <li>
                    Personal identification information such as name, email
                    address, phone number, and company name.
                  </li>
                  <li>
                    Technical data including IP address, browser type, device
                    information, and usage patterns.
                  </li>
                  <li>
                    Communication data when you contact us through forms,
                    email, or phone.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  3. How We Use Your Information
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                  <li>
                    To process inquiries, quotes, and orders for our products and
                    services.
                  </li>
                  <li>
                    To improve our website, products, and customer service.
                  </li>
                  <li>
                    To send periodic emails regarding your inquiries or updates
                    about our services.
                  </li>
                  <li>
                    To comply with legal obligations and protect our rights and
                    property.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  4. Data Protection
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  We implement appropriate technical and organizational measures
                  to protect your personal data against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of
                  transmission over the Internet or electronic storage is 100%
                  secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  5. Cookies Policy
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Our website uses cookies to enhance user experience. You can
                  set your browser to refuse all or some browser cookies, or to
                  alert you when websites set or access cookies. If you disable
                  or refuse cookies, some parts of the site may become
                  inaccessible or not function properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  6. Your Rights
                </h2>
                <ul className="mt-4 list-disc space-y-3 pl-6 text-slate-600">
                  <li>Right to access your personal data.</li>
                  <li>Right to request correction of inaccurate data.</li>
                  <li>Right to request deletion of your personal data.</li>
                  <li>
                    Right to withdraw consent at any time where we rely on
                    consent to process your personal data.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  7. Contact Us
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  If you have any questions about this Privacy Policy, please
                  contact us at info@klavetek.com or visit our contact page.
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