"use client";

const steps = [
  {
    title: "Assessment & Planning",
    desc: "We inspect your site layout, entry points, and security requirements.",
  },
  {
    title: "System Design",
    desc: "A customized access blueprint tailored around your environment.",
  },
  {
    title: "Installation",
    desc: "Neat hardware installation with proper wiring and professional execution.",
  },
  {
    title: "Configuration",
    desc: "Setting up users, permissions, schedules and integrations.",
  },
  {
    title: "Training & Testing",
    desc: "We train your team and thoroughly test system reliability.",
  },
  {
    title: "Ongoing Support",
    desc: "24/7 support, system monitoring, and scheduled maintenance.",
  },
];

export default function AccessProcessNumberTunnel() {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="sectionHeading font-bold text-gray-900 text-center mb-20 relative z-10">
          Our Implementation <span className="text-blue-600">Process</span>
        </h2>

        {/* Steps */}
        <div className="relative space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
              
              {/* Big Background Number */}
              <span className="absolute -top-4 -right-4 text-gray-200 text-[100px] font-extrabold select-none pointer-events-none">
                {index + 1}
              </span>

              {/* Step Content */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
