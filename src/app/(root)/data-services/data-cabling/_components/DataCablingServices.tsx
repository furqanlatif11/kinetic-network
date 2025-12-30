import React from "react";

const services = [
  {
    title: "Structured Cabling Systems",
    description:
      "Design and installation of structured cabling frameworks that provide a clean, organized, and scalable network infrastructure for voice, data, and multimedia systems.",
  },
  {
    title: "Network Data Points Installation",
    description:
      "Professional installation of data points for workstations, access points, IP phones, CCTV systems, and other network devices, ensuring optimal placement and performance.",
  },
  {
    title: "Patch Panels & Rack Cabling",
    description:
      "Installation, termination, and labeling of patch panels and server racks to maintain a well-managed, easily serviceable network environment.",
  },
  {
    title: "Cable Management & Rack Dressing",
    description:
      "Neat cable routing, bundling, and dressing to improve airflow, reduce signal interference, and simplify future maintenance.",
  },
  {
    title: "Testing, Certification & Troubleshooting",
    description:
      "Comprehensive cable testing and certification to verify performance, identify faults, and ensure compliance with industry standards.",
  },
  {
    title: "Network Upgrades & Re-Cabling",
    description:
      "Assessment and upgrade of existing cabling infrastructure to support higher speeds, new technologies, and increased network demand.",
  },
];

const DataCablingServices = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Comprehensive Data Cabling Services
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            We provide end-to-end data cabling solutions designed to ensure
            reliable connectivity, efficient network management, and long-term
            performance for modern business environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-gray-300 hover:bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataCablingServices;
