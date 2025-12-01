"use client";

import { Building, Factory, School, Hospital, Home } from "lucide-react";

const industries = [
  { name: "Corporate Offices", icon: Building },
  { name: "Factories & Warehouses", icon: Factory },
  { name: "Schools & Universities", icon: School },
  { name: "Hospitals & Clinics", icon: Hospital },
  { name: "Residential Buildings", icon: Home },
];

export default function AccessIndustries() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Industries We <span className="text-blue-600">Secure</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
            We provide advanced access control solutions tailored to a variety of industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((i, idx) => {
            const Icon = i.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-transparent shadow-md hover:shadow-xl transition-all duration-500 p-8 flex flex-col items-center text-center group"
              >
                {/* Gradient Ring */}
                <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {i.name}
                </h3>

                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
