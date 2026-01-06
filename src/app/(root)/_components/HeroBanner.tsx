"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import QuoteModal from "./quote-modal";

interface HeroBannerProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  image: string;
  height?: string;
  serviceLabel?: string; // pass service name for modal
}

export default function HeroBanner({
  label,
  title,
  highlight,
  description,
  image,
  height = "h-[70vh]",
  serviceLabel,
}: HeroBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center px-6 py-20">
        <div
          className={`relative w-full max-w-8xl rounded-3xl overflow-hidden ${height}`}
        >
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
              {/* Label */}
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
                className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6"
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
                  className="text-gray-200 text-base md:text-lg leading-relaxed mb-8"
                >
                  {description}
                </motion.p>
              )}

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="
    relative inline-flex items-center gap-2
    rounded-full px-8 py-3
    text-sm md:text-base font-semibold text-white
    backdrop-blur-md
    bg-white/10
    border border-white/20
    shadow-[0_8px_30px_rgba(0,0,0,0.25)]
    transition-all duration-300 ease-out
    hover:bg-white/20
    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
    active:scale-[0.97]
  "
                >
                  {/* Glass shine */}
                  <span
                    className="
      pointer-events-none absolute inset-0
      rounded-full
      bg-gradient-to-b from-white/40 via-white/10 to-transparent
      opacity-50
    "
                  />

                  {/* Text */}
                  <span className="relative z-10 tracking-wide">
                    Get a Quote
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <QuoteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceName={serviceLabel || title}
          />
        )}
      </AnimatePresence>
    </>
  );
}
