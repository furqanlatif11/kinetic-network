'use client';

import { motion } from 'framer-motion';
import { Server, Wifi, Plug, Monitor } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Server,
    title: 'Structured Cabling Design',
    description: 'Plan and implement high-performance fiber optic networks with proper labeling and organization.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Connectivity',
    description: 'Ensure ultra-fast, reliable connections for data centers, offices, and industrial setups.',
  },
  {
    icon: Plug,
    title: 'Certified Installations',
    description: 'Professional installation using industrial-grade materials and standards.',
  },
  {
    icon: Monitor,
    title: 'Testing & Documentation',
    description: 'Full OTDR & power meter testing with detailed documentation for maintenance and future upgrades.',
  },
];

export default function ServiceOverview() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 via-white/70 to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          What Our Fiber Optic Cabling Service Offers
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, type: 'spring' }}
                className="relative group cursor-pointer p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 
                           bg-gradient-to-t from-white/20 via-white/10 to-white/5 backdrop-blur-lg border border-white/30 overflow-hidden"
              >
                {/* Floating Highlight Shape */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-blue-200/10 blur-3xl opacity-70 transition-all duration-500 group-hover:scale-110"></div>

                {/* Icon Circle */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-md shadow-inner mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-semibold text-gray-900 text-center mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-gray-700 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {feature.description}
                </p>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none animate-pulse opacity-20"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
