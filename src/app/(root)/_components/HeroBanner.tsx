'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroBannerProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  image: string;
  height?: string; // optional custom height
}

export default function HeroBanner({
  label,
  title,
  highlight,
  description,
  image,
  height = "h-[70vh]",
}: HeroBannerProps) {
  return (
    <div className="w-full flex justify-center px-6 py-20">
      <div className={`relative w-full max-w-8xl rounded-3xl overflow-hidden ${height}`}>

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            width={2000}
            height={1200}
            priority
          />
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
            {/* Small Label */}
            {label && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-blue-400 text-sm font-semibold tracking-wide mb-4"
              >
                {label}
              </motion.span>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight mb-6"
            >
              {title}{" "}
              {highlight && (
                <span className="text-blue-400">{highlight}</span>
              )}
            </motion.h1>

            {/* Description */}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-gray-200 text-base md:text-lg leading-relaxed drop-shadow"
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
