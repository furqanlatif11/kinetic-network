'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

interface WhoWeAreProps {
  title?: string;
  subtitle?: string;
  description: string;
  image?: string; // optional illustrative image
}

const WhoWeAre: FC<WhoWeAreProps> = ({
  title = 'Who We Are',
  subtitle = 'Kinetic Network Overview',
  description,
  image,
}) => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <h3 className="text-lg text-blue-600 font-medium mb-6">{subtitle}</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Right: Optional Image */}
        {image && (
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
