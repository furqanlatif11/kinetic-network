"use client";

const features = [
  {
    title: "Biometric Authentication",
    desc: "Fingerprint, face, and iris scanning for ultra-secure validation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.7"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 1C7.03 1 3 5.03 3 10v2a9 9 0 009 9h0a9 9 0 009-9v-2c0-4.97-4.03-9-9-9z"
        />
      </svg>
    ),
  },
  {
    title: "RFID & Smart Card Access",
    desc: "Fast and secure proximity card systems for employees & visitors.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 10h2M7 14h6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cloud-Based Access",
    desc: "Control and monitor access from anywhere in real-time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M7 18h10a4 4 0 000-8 5 5 0 10-9.9 1A4 4 0 007 18z"/>
      </svg>
    ),
  },
  {
    title: "Mobile Credentials",
    desc: "Unlock doors using secure smartphone-based credentials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor">
        <rect x="7" y="2" width="10" height="20" rx="3" />
        <circle cx="12" cy="18" r="1" />
      </svg>
    ),
  },
  {
    title: "Audit Logs & Reports",
    desc: "Track every access attempt with detailed reporting.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M5 4h14M5 8h14M5 12h7M5 16h7" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    desc: "Compatible with CCTV, alarms, fire systems & HRMS.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-blue-600"
        fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="currentColor">
        <circle cx="12" cy="12" r="3" />
        <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
];

export default function AccessFeatures() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Key Capabilities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered for precision, security, and seamless integration across all environments.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                group relative p-8 bg-white border rounded-3xl
                shadow-sm hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 border-gray-200
                before:absolute before:inset-0 before:rounded-3xl
                before:bg-gradient-to-br before:from-blue-50/60 before:to-white
                before:opacity-0 group-hover:before:opacity-100
                before:blur-xl before:transition-all
              "
            >
              <div className="mb-6">
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {f.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-[15.5px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
