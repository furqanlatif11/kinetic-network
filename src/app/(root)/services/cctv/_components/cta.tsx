"use client";

import { motion } from "framer-motion";

interface CallToActionProps {
  preTitle?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function CallToAction({
  preTitle = "Get in Touch Now!",
  title = "Get a Free Quote within 24 Hours",
  description = "Fill out the form and our experts will get back to you with a customized solution tailored to your needs.",
  buttonText = "Submit Request",
}: CallToActionProps) {
  const services = [
    "CCTV",
    "Access Control",
    "Alarm System",
    "Intercom Systems",
    "Data Cabling",
    "WiFi Installation",
    "TV and Home Theatre",
  ];

  return (
    <section className="relative w-full py-24  overflow-hidden">
  

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wide text-sm">{preTitle}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{title}</h2>
          <p className="text-gray-700 text-lg max-w-md">{description}</p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white/70"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white/70"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                id="phone"
                className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white/70"
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Phone
              </label>
            </div>

            {/* Company */}
            <div className="relative">
              <input
                type="text"
                id="company"
                className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white/70"
                placeholder=" "
              />
              <label
                htmlFor="company"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Company
              </label>
            </div>

            {/* Services Dropdown */}
            <div className="relative md:col-span-2">
              <select
                id="service"
                className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 appearance-none"
                defaultValue=""
              >
                <option value="" disabled hidden></option>
                {services.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <label
                htmlFor="service"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-focus:top-3 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Select Service
              </label>
            </div>

            {/* Message */}
            <div className="relative md:col-span-2">
              <textarea
                id="message"
                rows={4}
                className="peer w-full border border-gray-300 rounded-lg p-4 pt-6 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition bg-white/70"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Message
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            {buttonText}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
