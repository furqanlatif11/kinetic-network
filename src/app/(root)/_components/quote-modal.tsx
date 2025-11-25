'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  staticImage?: string; // Static image on the right
}

export default function QuoteModal({ isOpen, onClose, serviceName, staticImage }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceName || '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote Submitted:', formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row"
          >
            {/* Left Column - Form */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">Request a Quote</h2>
              {serviceName && (
                <p className="text-gray-600 mb-6 text-sm md:text-base">
                  Service: <span className="font-semibold">{serviceName}</span>
                </p>
              )}

              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder=""
                      className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                      Phone
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    placeholder=""
                    className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Service Required
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder=""
                    className="peer w-full border border-gray-300 rounded-lg px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:from-blue-600 hover:to-cyan-600 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Right Column - Static Image */}
            {staticImage && (
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src={staticImage}
                  alt="Quote Illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
