'use client';

import { useState, useEffect } from 'react';
import { X, User, Phone, Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export default function InquiryModal({ isOpen, onClose, service }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Pre-fill service if provided
      if (service) {
        setFormData(prev => ({
          ...prev,
          message: `I'm interested in ${service}. Please contact me with more information.`
        }));
      }
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when closed
      if (!isSuccess) {
        setFormData({ fullName: '', phone: '', email: '', message: '' });
        setErrors({});
      }
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, service, isSuccess]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ fullName: '', phone: '', email: '', message: '' });
        onClose();
      }, 3000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl animate-slide-up">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl opacity-20 blur-2xl animate-pulse" />
        
        {/* Modal Content */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative px-6 sm:px-8 py-6 border-b border-slate-700/50">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl  font-bold text-white">
                  Get Free Quote
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Fill out the form and we&apos;ll get back to you within 24 hours
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-slate-400 group-hover:text-red-400 transition-colors" />
              </button>
            </div>
          </div>

          {/* Success State */}
          {isSuccess ? (
            <div className="px-6 sm:px-8 py-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/50 mb-6 animate-scale-in">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Quote Request Received!
              </h3>
              <p className="text-slate-300 max-w-md mx-auto">
                Thank you for your interest. Our team will review your request and contact you shortly.
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-8">
              <div className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <User className="w-4 h-4 text-cyan-400" />
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.fullName ? 'border-red-500/50' : 'border-slate-700/50'
                      } rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-400" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Email Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 bg-slate-800/50 border ${
                          errors.phone ? 'border-red-500/50' : 'border-slate-700/50'
                        } rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-red-400" />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 bg-slate-800/50 border ${
                          errors.email ? 'border-red-500/50' : 'border-slate-700/50'
                        } rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-red-400" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-300">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your security needs..."
                      rows={5}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.message ? 'border-red-500/50' : 'border-slate-700/50'
                      } rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-red-400" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-75 group-hover:opacity-100 blur-sm transition-all duration-500" />
                  
                  <div className="relative w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Quote Request
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-slate-500 text-center">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}