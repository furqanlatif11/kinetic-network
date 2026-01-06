"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Lock,
  Bell,
  Monitor,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuoteModal from "./quote-modal";

const services = [
  {
    icon: Camera,
    label: "CCTV Systems",
    color: "from-cyan-500 to-cyan-600",
    title: "Advanced Surveillance Solutions",
    description:
      "State-of-the-art CCTV systems with AI-powered analytics, 4K resolution, and secure cloud storage.",
    href: "/services/cctv",
    image: "/assets/images/survillienceSystem.webp",
  },
  {
    icon: Lock,
    label: "Access Control",
    color: "from-blue-500 to-blue-600",
    title: "Smart Access Management Systems",
    description:
      "Biometric, RFID, and mobile-ready access control solutions with full audit tracking.",
    href: "/services/access-control",
    image: "/assets/images/AccessControlSystem.webp",
  },
  {
    icon: Bell,
    label: "Alarm Systems",
    color: "from-indigo-500 to-indigo-600",
    title: "Intelligent Intrusion Detection",
    description:
      "Motion detection, glass-break sensors, and instant alerts with advanced monitoring.",
    href: "/services/alarms",
    image: "/assets/images/AlarmsSystem.webp",
  },
  {
    icon: Monitor,
    label: "Intercom Systems",
    color: "from-purple-500 to-purple-600",
    title: "Seamless Communication",
    description:
      "Video intercom, remote door unlock, and mobile integration for homes and businesses.",
    href: "/services/intercom",
    image: "/assets/images/IntercomSystems.webp",
  },
];

export default function HeroServicesCard() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  // Auto-slide with pause control
  useEffect(() => {
    if (!isModalOpen && !isHovered) {
      intervalRef.current = setInterval(next, 5000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isModalOpen, isHovered]);

  const service = services[index];

  return (
    <div
      className="w-full flex justify-center px-6 py-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dashboard-style hero card */}
      <div className="relative w-full max-w-8xl h-[70vh] rounded-3xl overflow-hidden">
        {/* Background Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={service.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={service.image}
              alt={service.label}
              className="w-full h-full object-cover"
              height={1000}
              width={1000}
            />
            {/* Black overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl px-8 md:px-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl leading-tight mb-6 drop-shadow-lg border-l-4 border-blue-500 pl-4">
              {service.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-6 drop-shadow-lg">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-4">
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
                <span className="relative z-10 tracking-wide">Get a Quote</span>
              </button>

              <Link
                href={service.href}
                className="
    relative inline-flex items-center justify-center
    rounded-full p-4
    backdrop-blur-md
    bg-white/10
    border border-white/20
    text-white
    shadow-[0_6px_20px_rgba(0,0,0,0.25)]
    transition-all duration-300 ease-out
    hover:bg-white/20
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
    active:scale-[0.95]
  "
              >
                {/* Glass highlight */}
                <span
                  className="
      pointer-events-none absolute inset-0
      rounded-full
      bg-gradient-to-b from-white/40 via-white/10 to-transparent
      opacity-50
    "
                />

                {/* Icon */}
                <ArrowUpRight
                  size={20}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-20">
          {/* Prev */}
          <button
            onClick={prev}
            className="
      group relative inline-flex items-center justify-center
      rounded-full p-4
      backdrop-blur-md
      bg-white/10
      border border-white/20
      text-white
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      transition-all duration-300 ease-out
      hover:bg-white/20
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
      active:scale-[0.95]
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

            <ChevronLeft
              size={24}
              className="relative z-10 transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="
      group relative inline-flex items-center justify-center
      rounded-full p-4
      backdrop-blur-md
      bg-white/10
      border border-white/20
      text-white
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]
      transition-all duration-300 ease-out
      hover:bg-white/20
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
      active:scale-[0.95]
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

            <ChevronRight
              size={24}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <QuoteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            serviceName={service.label}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
