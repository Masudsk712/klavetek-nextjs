"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are AAC Blocks?",
    answer:
      "AAC (Autoclaved Aerated Concrete) Blocks are lightweight, eco-friendly building materials known for their strength, thermal insulation and fire resistance.",
  },
  {
    question: "Why should I choose Klavetek AAC Blocks?",
    answer:
      "Klavetek AAC Blocks are manufactured using advanced automation and strict quality standards, ensuring durability, dimensional accuracy and superior performance.",
  },
  {
    question: "Are AAC Blocks stronger than traditional bricks?",
    answer:
      "AAC Blocks provide excellent compressive strength while being much lighter than conventional clay bricks, reducing structural load and improving construction efficiency.",
  },
  {
    question: "Do AAC Blocks provide thermal insulation?",
    answer:
      "Yes. AAC Blocks have excellent thermal insulation properties, helping maintain indoor comfort while reducing energy consumption.",
  },
  {
    question: "Can AAC Blocks be used for commercial projects?",
    answer:
      "Absolutely. They are suitable for residential, commercial, industrial, hospitals, schools and warehouse projects.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply visit our Contact page or click the Get Quote button to speak with our sales team.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#050505] py-28">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-4xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Got Questions?
            <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">
              {" "}
              We Have Answers
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Find answers to the most common questions about
            Klavetek AAC Blocks and our manufacturing process.
          </p>

        </motion.div>

        {/* FAQ */}

        <div className="mt-20 space-y-5">          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                "
              >
                {/* Question */}

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-7
                    py-6
                    text-left
                    transition-colors
                    duration-300
                    hover:bg-white/[0.03]
                  "
                >
                  <h3
                    className="
                      pr-6
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500/10
                    "
                  >
                    {isOpen ? (
                      <Minus
                        className="text-emerald-400"
                        size={20}
                      />
                    ) : (
                      <Plus
                        className="text-emerald-400"
                        size={20}
                      />
                    )}
                  </div>
                </button>

                {/* Answer */}

                <AnimatePresence initial={false}>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="
                          border-t
                          border-white/10
                          px-7
                          py-6
                        "
                      >
                        <p
                          className="
                            leading-8
                            text-white/65
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-20 text-center"
        >

          <h3 className="text-3xl font-bold text-white">
            Still Have Questions?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/60">
            Our technical and sales team is ready to help you choose
            the right AAC Block solution for your project.
          </p>

          <a
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-emerald-500
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-emerald-600
              hover:scale-105
            "
          >
            Contact Our Team
          </a>

        </motion.div>

      </div>

    </section>
  );
}