'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import QuoteModal from './quote-modal';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string; // optional fallback if modal not used
  backgroundImage?: string;
  serviceName?: string; // optional, can prefill modal
}

export default function CTA({
  title = 'Ready to Secure Your Property?',
  subtitle = 'Get in touch with our experts and find the perfect solution for your needs.',
  buttonText = 'Get a Free Quote',
  buttonHref = '/contact',
  backgroundImage,
  serviceName,
}: CTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative py-20 px-6 md:px-12 rounded-3xl overflow-hidden bg-gradient-to-b from-white via-blue-200 to-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for optional background image */}
      {backgroundImage && <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>}

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 drop-shadow">
          {subtitle}
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            {buttonText}
          </button>
        </motion.div>
      </div>

     
      {/* Quote Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <QuoteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceName={serviceName}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
