"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="sectionHeading font-bold text-gray-900 tracking-tight">
            Mission & Vision
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            What drives Kinetic Network toward innovation, excellence, and trusted security.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="bg-blue-100 text-blue-600 p-4 rounded-xl w-fit mb-6">
              <Target size={30} />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To empower individuals, businesses, and enterprises with secure,
              intelligent, and modern surveillance & access systems.
              We aim to deliver uncompromised safety, high-performance
              infrastructure, and long-term reliability through innovation
              and customer-centric engineering.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
          >
            <div className="bg-blue-100 text-blue-600 p-4 rounded-xl w-fit mb-6">
              <Eye size={30} />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To become the region’s most trusted provider of integrated security
              and digital infrastructure—shaping a safer, smarter, and
              more connected future powered by intelligent automation,
              data-driven insights, and resilient technology.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
