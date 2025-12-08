"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We deliver full-stack security solutions including CCTV installation, maintenance, monitoring, and system upgrades for residential and commercial spaces.",
  },
  {
    question: "How quickly can installation be completed?",
    answer:
      "Most standard installations are completed within 24–48 hours, depending on project scope and equipment availability.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Yes. All installations include after-sales support, remote guidance, and optional annual maintenance contracts.",
  },
  {
    question: "Can I request a custom quotation?",
    answer:
      "Absolutely. Every site has unique requirements, and we prepare tailored quotations after a quick assessment.",
  },
  {
    question: "Do you offer warranty?",
    answer:
      "All products and installations come with warranty coverage depending on the equipment model and selected plan.",
  },
];

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-12 ">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="sectionHeading font-bold tracking-tight text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Everything you need to know about our security and installation services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;

            return (
              <div key={idx} className="py-6 border border-blue-500 rounded-lg px-6 mb-4 hover:shadow-lg transition-shadow duration-300">

                {/* Question */}
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group "
                >
                  <span className="text-lg font-medium text-gray-900 group-hover:text-black transition">
                    {faq.question}
                  </span>

                  <div className="transition-transform duration-300">
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
