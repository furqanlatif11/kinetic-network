"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  ScanSearch,
  LockKeyhole,
  Target,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Unmatched Security Standards",
    description:
      "We deliver enterprise-grade, tamper-proof solutions ensuring complete protection, reliability, and peace of mind.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description:
      "From AI-powered analysis to real-time monitoring, our systems are built using the most advanced technology available.",
  },
  {
    icon: Users,
    title: "Customer-First Approach",
    description:
      "Every solution is tailored to your needs with transparent communication, long-term support, and fast response.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy & Compliance",
    description:
      "We ensure data confidentiality through secure architecture, encrypted communication, and industry certifications.",
  },
  {
    icon: Target,
    title: "Precision & Reliability",
    description:
      "Our products are engineered to perform flawlessly, providing accuracy, uptime, and long-term operational strength.",
  },
  {
    icon: ScanSearch,
    title: "Innovation & Improvement",
    description:
      "We continuously enhance our solutions using analytics, R&D, and customer feedback to stay ahead of emerging threats.",
  },
];

export default function OurValues() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            The principles that define how Kinetic Network delivers security,
            trust, and excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 120 },
                }}
                className="p-8 rounded-2xl border border-gray-200 shadow-sm 
                           hover:shadow-xl hover:border-blue-500/50 
                           transition-all duration-300 bg-white"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 mb-6">
                  <Icon size={28} className="text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
