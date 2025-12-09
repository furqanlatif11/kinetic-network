"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import QuoteModal from "@/app/(root)/_components/quote-modal";

export default function AccessCTA({ serviceName }: { serviceName?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-28 bg-gray-900 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/images/access-control-bg.jpg')", // replace with your image
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
          Ready to Enhance Your Access Security?
        </h2>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Our experts can help you choose the right biometric, RFID, or cloud-based access
          system tailored to your facility’s needs.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
        >
          Request a Quote
        </button>
      </div>

      {/* Existing Modal with AnimatePresence */}
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
