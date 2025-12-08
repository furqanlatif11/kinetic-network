"use client";

import Image from "next/image";

const types = [
  {
    title: "Biometric Access Control",
    desc: "Fingerprint, facial recognition & iris-based authentication.",
    image: "/assets/images/accessBiometric.webp",
  },
  {
    title: "RFID Card Readers",
    desc: "Proximity & smart card access for employees and visitors.",
    image: "/assets/images/accessRFID.webp",
  },
 
  {
    title: "Door Controllers",
    desc: "Single & multi-door access panels with remote control.",
    image: "/assets/images/accessDoorControllers.webp",
  },
  
];

export default function AccessTypes() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Types of Access Control Systems
          </h2>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
            Advanced access control solutions tailored for modern security environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div
              key={idx}
              className="
                group relative h-96 rounded-3xl overflow-hidden shadow-sm
                hover:shadow-xl transition-all duration-500
              "
            >
              {/* Background Image */}
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-all duration-700"
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 bg-black/40
                  group-hover:bg-black/60
                  transition-all duration-500
                "
              />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Title - Always Visible */}
                <h3
                  className="
                    text-white text-xl font-semibold
                    transition-all duration-500
                    group-hover:translate-y-[-8px]
                  "
                >
                  {t.title}
                </h3>

                {/* Description & Button - Only on Hover */}
                <div
                  className="
                    opacity-0 group-hover:opacity-100
                    translate-y-4 group-hover:translate-y-0
                    transition-all duration-500
                  "
                >
                  <p className="text-gray-200 text-sm mt-3">
                    {t.desc}
                  </p>

                  {/* Quote Button */}
                  <button
                    className="
                      mt-4 px-4 py-2 text-sm font-medium rounded-full
                      bg-white text-gray-900
                      hover:bg-gray-100
                      transition
                    "
                    onClick={() => {
                      // open quote modal 
                      const event = new CustomEvent("openQuoteModal", {
                        detail: { product: t.title },
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
