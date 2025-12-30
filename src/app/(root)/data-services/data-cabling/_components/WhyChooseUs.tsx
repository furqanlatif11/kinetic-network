import React from "react";

const reasons = [
  {
    title: "Industry Experience",
    description:
      "Our team brings extensive experience in designing and deploying structured data cabling solutions across commercial, industrial, and enterprise environments.",
  },
  {
    title: "Standards-Compliant Installations",
    description:
      "All cabling installations follow international standards and best practices to ensure performance, safety, and long-term reliability.",
  },
  {
    title: "Scalable & Future-Ready Design",
    description:
      "We build cabling infrastructure that supports future expansion, higher bandwidth requirements, and evolving network technologies.",
  },
  {
    title: "Clean & Organized Execution",
    description:
      "From rack dressing to labeling, we prioritize clean and organized installations that simplify maintenance and troubleshooting.",
  },
  {
    title: "End-to-End Service Delivery",
    description:
      "From site survey and planning to testing and certification, we manage the complete cabling lifecycle with precision.",
  },
  {
    title: "Reliable Support & Maintenance",
    description:
      "Our support team ensures quick response and dependable assistance to keep your network running smoothly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Choose Kinetic Network
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            We combine technical expertise, structured execution, and industry
            best practices to deliver reliable data cabling solutions that
            businesses can depend on.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
