'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Cpu, Zap } from 'lucide-react';

interface TrustPoint {
  icon: React.ElementType;
  title: string;
  description?: string;
}

const trustPoints: TrustPoint[] = [
  {
    icon: CheckCircle,
    title: 'OTDR & Power Meter Tested',
    description: 'Ensuring optimal performance and signal quality.',
  },
  {
    icon: Shield,
    title: 'Certified Fiber Technicians',
    description: 'Professional and trained engineers for all installations.',
  },
  {
    icon: Cpu,
    title: 'Industrial-Grade Materials',
    description: 'High-quality fiber, connectors & accessories.',
  },
  {
    icon: Zap,
    title: 'Structured Cabling Standards',
    description: 'Neat, labeled, and future-proof installations.',
  },
];

export default function TrustBar() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why Choose Our Fiber Optic Cabling Services
        </h2>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center text-center p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-4 bg-white/10 rounded-full mb-4 shadow-inner">
                  <Icon className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{point.title}</h3>
                {point.description && (
                  <p className="text-sm text-gray-700 opacity-80">{point.description}</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
