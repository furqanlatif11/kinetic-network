'use client';

import { CheckCircle, Calendar, Wrench, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    icon: Calendar,
    title: 'Consultation',
    description: 'We discuss your security needs and assess your premises for a tailored solution.',
  },
  {
    icon: Wrench,
    title: 'Planning & Design',
    description: 'Our team creates a detailed plan including hardware selection and layout design.',
  },
  {
    icon: CheckCircle,
    title: 'Installation & Setup',
    description: 'Fast and professional installation with minimal disruption to your operations.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Support & Maintenance',
    description: 'Ongoing monitoring, support, and maintenance to ensure your system works flawlessly.',
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-200 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="sectionHeading text-gray-900 font-bold text-4xl sm:text-5xl">
            Our <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-2">
            A simple, transparent process from consultation to full support. Here’s how we deliver excellence.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 text-white">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
