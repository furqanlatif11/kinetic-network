"use client";
import { CheckCircle, Wifi, ShieldCheck, ToolCase } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: ToolCase,
    title: "Request Service",
    description: "Submit a request online or call to schedule a technician visit.",
  },
  {
    icon: Wifi,
    title: "On-Site/Remote Diagnosis",
    description: "Our technician identifies the root cause of your network issues.",
  },
  {
    icon: CheckCircle,
    title: "Fix & Optimize",
    description: "We repair, configure, and optimize your internet setup efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Support",
    description: "We ensure stable, secure connectivity and provide ongoing support.",
  },
];

export default function ServiceProcess() {
  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How Our Internet Technician Service Works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We follow a clear, structured process to diagnose, fix, and optimize
          your internet network — ensuring reliable, high-speed connectivity.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-neutral-100 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="p-4 mb-4 rounded-full bg-blue-600/10 text-blue-500">
                <Icon className="w-6 h-6"/>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
