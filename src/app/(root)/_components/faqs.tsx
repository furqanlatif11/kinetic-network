"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="sectionHeading font-bold tracking-tight text-gray-900">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Everything you need to know about our security and installation services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`
                  rounded-lg border transition-all duration-300
                  ${isOpen
                    ? "bg-blue-50 border-blue-500 shadow-md"
                    : "bg-white border-gray-200 hover:shadow-sm"}
                `}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      h-5 w-5 text-gray-500
                      transition-transform duration-300
                      ${isOpen ? "rotate-180 text-blue-600" : ""}
                    `}
                  />
                </button>

                {/* Separator */}
                {isOpen && (
                  <div className="mx-6 h-px bg-blue-200 transition-opacity duration-300" />
                )}

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] px-6 py-4" : "grid-rows-[0fr] px-6"}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
