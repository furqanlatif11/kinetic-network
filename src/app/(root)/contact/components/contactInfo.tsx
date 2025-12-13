"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg">
            Reach us through any of the channels below. Our team is always ready
            to assist you.
          </p>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* PHONE */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 transition">
            <Phone className="w-7 h-7 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Phone
            </h3>
            <p className="text-gray-600">+92 XXX XXXXXXX</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 transition">
            <Mail className="w-7 h-7 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Email
            </h3>
            <p className="text-gray-600">info@kineticnetwork.com</p>
          </div>

          {/* LOCATION */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 transition">
            <MapPin className="w-7 h-7 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Office
            </h3>
            <p className="text-gray-600">
              Lahore, Pakistan
            </p>
          </div>

          {/* HOURS */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 transition">
            <Clock className="w-7 h-7 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Working Hours
            </h3>
            <p className="text-gray-600">
              Mon – Sat<br />
              10:00 AM – 7:00 PM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
