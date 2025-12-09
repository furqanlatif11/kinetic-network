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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="sectionHeading font-bold text-gray-900 tracking-tight">
            Industries We <span className="text-blue-600">Secure</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Our access control systems are trusted across a wide range of 
            commercial, industrial, and residential environments.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 bg-white 
                           hover:border-blue-500 hover:shadow-lg transition-all duration-300 
                           flex flex-col items-center text-center"
              >
                {/* Simple Clean Icon Wrapper */}
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
