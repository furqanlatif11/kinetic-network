"use client";

import { Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Get in Touch With Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Tell us about your requirements and our experts will get back to you
            with the right solution.
          </p>
        </div>

        {/* FORM WRAPPER */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* FORM */}
          <form className="space-y-6">

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+92 XXX XXXXXXX"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Interested In
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 focus:border-blue-600 focus:outline-none">
                <option>Select a service</option>
                <option>CCTV Surveillance</option>
                <option>Alarm Systems</option>
                <option>Access Control</option>
                <option>Networking & Wi-Fi</option>
                <option>Data Cabling</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Briefly describe your requirements..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-600 focus:outline-none resize-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </form>

          {/* SIDE INFO */}
          <div className="border border-gray-200 rounded-3xl p-10 h-fit">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Why Contact Kinetic Network?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Certified security & network professionals</li>
              <li>• Commercial & industrial experience</li>
              <li>• Reliable after-sales support</li>
              <li>• Custom-designed solutions</li>
              <li>• Fast response time</li>
            </ul>

            <div className="mt-10 text-sm text-gray-500">
              Office Hours: <br />
              <span className="font-medium text-gray-800">
                Mon – Sat, 10:00 AM – 7:00 PM
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
