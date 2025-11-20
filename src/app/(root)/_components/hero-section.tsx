"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Lock, Bell, Monitor, Wifi, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    title: "Smart Access Management",
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

export default function HeroServicesSlider() {
  const [index, setIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % services.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  const service = services[index];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black text-white font-inter">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/60 to-black/20 " />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-6">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-4"
        >
          {/* <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-black font-semibold mb-4`}>
            <service.icon size={18} />
            {service.label}
          </div> */}

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-[1.05] drop-shadow-2xl mb-4 drop-shadow-xl border-l-4 border-blue-600 ps-2">
            {service.title}
          </h1>
          <p className=" text-base md:text-xl text-gray-200/90 leading-relaxed max-w-xl mb-6 drop-shadow-xl leading-relaxed">
            {service.description}
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setOpenModal(true)}
              className="px-7 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300"
            >
              Get a Quote
            </button>

            <Link
              href={service.href}
              className="px-7 py-2 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prev}
        className="absolute bottom-10 right-24 bg-white/40 backdrop-blur-xl p-4 rounded-full hover:bg-blue-600/70 transition-all shadow-xl"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute bottom-10 right-10 bg-white/40 backdrop-blur-xl p-4 rounded-full hover:bg-blue-600/70 transition-all shadow-xl"
      >
        <ChevronRight size={20} />
      </button>

      {/* Quote Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[200] px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 relative text-black shadow-[0_12px_50px_rgba(0,0,0,0.35)]"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-black/80 outline-none transition"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-black/80 outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-black/80 outline-none transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-black/80 outline-none transition"
                />
                <button className="bg-black text-white py-3.5 rounded-xl font-semibold hover:bg-gray-900 transition-all">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
