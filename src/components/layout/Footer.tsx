"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

const products = [
  "100 mm AAC Block",
  "125 mm AAC Block",
  "150 mm AAC Block",
  "200 mm AAC Block",
  "250 mm AAC Block",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* ================================= */}
          {/* Company */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
            }}
          >

            <Image
              src="/logos/LOGO.png"
              alt="Klavetek"
              width={180}
              height={70}
              className="h-auto w-auto"
            />

            <p
              className="
                mt-6
                leading-8
                text-white/60
              "
            >
              Klavetek Green Blocks & Tiles Pvt. Ltd.
              manufactures premium AAC Blocks using
              advanced technology to deliver sustainable,
              lightweight and high-strength building
              solutions.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <Link
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white
                  transition
                  hover:border-emerald-500
                  hover:bg-emerald-500
                "
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white
                  transition
                  hover:border-emerald-500
                  hover:bg-emerald-500
                "
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="#"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white
                  transition
                  hover:border-emerald-500
                  hover:bg-emerald-500
                "
              >
                <FaLinkedinIn size={18} />
              </Link>

            </div>

          </motion.div>

          {/* ================================= */}
          {/* Quick Links */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: .1,
            }}
          >

            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-8 flex flex-col gap-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    flex
                    items-center
                    justify-between
                    text-white/60
                    transition
                    hover:text-emerald-400
                  "
                >
                  {item.label}

                  <ArrowUpRight size={16} />

                </Link>

              ))}

            </div>

          </motion.div>

          {/* ================================= */}
          {/* Products */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: .2,
            }}
          >

            <h3 className="text-xl font-bold text-white">
              Our Products
            </h3>

            <div className="mt-8 flex flex-col gap-4">

              {products.map((product) => (

                <span
                  key={product}
                  className="text-white/60"
                >
                  {product}
                </span>

              ))}

            </div>

          </motion.div>          {/* ================================= */}
          {/* Contact */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <h3 className="text-xl font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-8 space-y-6">

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-xl bg-emerald-500/10 p-3">
                  <MapPin
                    size={18}
                    className="text-emerald-400"
                  />
                </div>

                <div>
                  <p className="font-medium text-white">
                    Factory Address
                  </p>

                  <p className="mt-2 leading-7 text-white/60">
                    Malda,
                    <br />
                    West Bengal,
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <Phone
                    size={18}
                    className="text-emerald-400"
                  />
                </div>

                <Link
                  href="tel:+919999999999"
                  className="text-white/60 transition hover:text-emerald-400"
                >
                  +91 99999 99999
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-500/10 p-3">
                  <Mail
                    size={18}
                    className="text-emerald-400"
                  />
                </div>

                <Link
                  href="mailto:info@klavetek.com"
                  className="text-white/60 transition hover:text-emerald-400"
                >
                  info@klavetek.com
                </Link>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Divider */}

        <div className="my-14 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-center text-sm text-white/50 md:text-left">
            © {new Date().getFullYear()} Klavetek Green Blocks &
            Tiles Pvt. Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">

            <Link
              href="/privacy-policy"
              className="text-sm text-white/50 transition hover:text-emerald-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-sm text-white/50 transition hover:text-emerald-400"
            >
              Terms & Conditions
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:border-emerald-500
                hover:bg-emerald-500
              "
              aria-label="Back to top"
            >
              ↑
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}