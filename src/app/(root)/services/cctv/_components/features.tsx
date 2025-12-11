"use client";

import { Eye, Smartphone, Cloud, Shield, Wifi, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "24/7 HD Surveillance",
      desc: "High-definition monitoring ensures complete protection.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Remote Access",
      desc: "View your CCTV feeds securely from any device, anywhere.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      title: "Cloud Backup",
      desc: "Reliable cloud storage to safeguard all video footage.",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "AI Security Alerts",
      desc: "Intelligent notifications for unusual motion or intrusion.",
    },
    {
      icon: <Wifi className="w-6 h-6 text-blue-600" />,
      title: "Wireless Connectivity",
      desc: "Flexible installation with robust wireless network support.",
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      title: "Secure Data",
      desc: "End-to-end encryption ensures complete privacy and safety.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-3 bg-white rounded-lg border flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
