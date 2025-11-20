'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This company transformed our security system completely. Highly professional and reliable.",
    name: "John Doe",
    title: "CTO, SecureTech",
  },
  {
    quote: "Exceptional service and support throughout the entire project. Truly a trusted partner.",
    name: "Sarah Lee",
    title: "Operations Manager, BlueWave Industries",
  },
  {
    quote: "Their team delivered on time and exceeded expectations. Highly recommended.",
    name: "Michael Smith",
    title: "CEO, Prime Solutions",
  },
  {
    quote: "From consultation to implementation, everything was smooth and efficient.",
    name: "Emily Johnson",
    title: "Project Lead, Apex Security",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-white py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="sectionHeading font-bold text-gray-900 mb-8">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl text-gray-800 italic relative before:absolute before:-left-6 before:top-0 before:text-6xl before:text-blue-100 before:content-['“'] after:absolute after:-right-6 after:bottom-0 after:text-6xl after:text-blue-100 after:content-['”']">
                {testimonials[index].quote}
              </p>
              <div className="text-gray-500 font-medium">
                — {testimonials[index].name}, {testimonials[index].title}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
