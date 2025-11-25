'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="w-full flex justify-center px-6 py-20">
      <div className="relative w-full max-w-8xl h-[70vh] rounded-3xl overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/heroAboutBg.png" 
            alt="About Kinetic Network"
            className="w-full h-full object-cover"
            width={2000}
            height={1200}
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-20 flex items-center h-full">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl px-8 md:px-16"
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-blue-400 text-sm font-semibold tracking-wide mb-4"
            >
              ABOUT KINETIC NETWORK
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight mb-6"
            >
              Powering Secure Environments Through
              <span className="text-blue-400"> Intelligence & Innovation</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-gray-200 text-base md:text-lg leading-relaxed drop-shadow"
            >
              At Kinetic Network, we engineer security and digital infrastructure
              that protects homes, businesses, and entire organizations.
              From advanced surveillance to intelligent access control,
              our solutions are built for reliability, scale, and future-proofing.
            </motion.p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
