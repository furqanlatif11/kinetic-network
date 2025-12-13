"use client";

import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-6 text-sm font-medium text-blue-600">
              Contact Kinetic Network
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Let’s Build a <br className="hidden sm:block" />
              Smarter & Secure Network
            </h1>

            <p className="text-gray-600 max-w-xl text-lg mb-10">
              Speak with our experts for CCTV, Alarm Systems, Access Control,
              Networking, and smart security solutions designed for reliability
              and long-term performance.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+92XXXXXXXXX"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>

              <a
                href="https://wa.me/92XXXXXXXXX"
                target="_blank"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600 transition font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* TRUST STRIP */}
            <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-500">
              <span>ISO-Standard Installations</span>
              <span>Certified Engineers</span>
              <span>Commercial & Industrial</span>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="hidden lg:block">
            <div className="border border-gray-200 rounded-3xl p-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Our Core Services
              </h3>

              <div className="space-y-4">
                {[
                  "CCTV Surveillance Systems",
                  "Alarm & Intrusion Detection",
                  "Access Control Systems",
                  "Structured Data Cabling",
                  "Wi-Fi & Network Setup",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-100 hover:border-blue-500 transition"
                  >
                    <span className="text-gray-700">{item}</span>
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
