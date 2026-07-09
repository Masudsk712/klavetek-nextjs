"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import { SITE } from "@/config/site";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="bg-slate-900 py-20">
          <Container>
            <h1 className="text-center text-4xl font-bold text-white">Contact Us</h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-300">
              We're here to help with your construction needs. Reach out today.
            </p>
          </Container>
        </div>

        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
                <p className="mt-2 text-slate-600">
                  Fill out the form and our team will get back to you shortly.
                </p>
                <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-slate-700">First Name</label>
                      <input
                        type="text"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Last Name</label>
                      <input
                        type="text"
                        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Phone</label>
                    <input
                      type="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Company</label>
                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      className="mt-2 h-32 w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-emerald-500 focus:outline-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">Contact Information</h3>
                  <ul className="mt-4 space-y-4 text-slate-600">
                    <li>{SITE.office.address}, {SITE.office.city}, {SITE.office.state}</li>
                    <li>
                      <a className="hover:text-emerald-600" href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>
                    </li>
                    <li>
                      <a className="hover:text-emerald-600" href={`tel:${SITE.contact.phone}`}>{SITE.contact.phone}</a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">Business Hours</h3>
                  <ul className="mt-4 space-y-2 text-slate-600">
                    <li>Monday - Saturday: 9:00 AM - 6:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900">Why Choose Us</h3>
                  <p className="mt-2 text-slate-600">
                    With ISO 9001 certification and years of expertise, we deliver consistent quality, reliable supply, and dedicated support for every project.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}