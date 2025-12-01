"use client";

const steps = [
  {
    title: "Assessment & Planning",
    desc: "We evaluate your location, entry points, and security requirements.",
  },
  {
    title: "System Design",
    desc: "Custom-designed access framework based on your environment.",
  },
  {
    title: "Installation",
    desc: "Professional installation with neat wiring & clean execution.",
  },
  {
    title: "Configuration",
    desc: "Users, groups, schedules & access permissions setup.",
  },
  {
    title: "Training & Testing",
    desc: "Ensuring smooth operations & training your staff.",
  },
  {
    title: "Ongoing Support",
    desc: "24/7 support, remote diagnostics, and maintenance.",
  },
];

export default function AccessProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          Our Implementation Process
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-50 border hover:bg-gray-100 transition"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{i + 1}</div>
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
