'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  serviceName,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceName || '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)]">
              {/* Header */}
              <div className="flex items-start justify-between border-b px-6 py-5">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Request a Quote
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Fill in your details and we’ll get back shortly
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
               

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Input
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                </div>


                <Input
                  label="Service Required"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                {/* Footer */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------- */
/* Reusable Field Components */
/* ---------------------------------- */

function Input({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...props}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
      />
    </div>
  );
}

function Textarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
      />
    </div>
  );
}
