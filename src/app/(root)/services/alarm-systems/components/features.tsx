import { Shield, Bell, Wifi, Camera, Lock, AlertTriangle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "24/7 Protection",
    desc: "Round-the-clock monitoring to safeguard your property with instant alerts.",
  },
  {
    icon: <Bell className="w-8 h-8 text-blue-500" />,
    title: "Smart Alarm Triggers",
    desc: "Advanced sensors detect unauthorized access, smoke, or movement.",
  },
  {
    icon: <Wifi className="w-8 h-8 text-blue-500" />,
    title: "Wireless Systems",
    desc: "No messy wiring — easy installation with seamless connectivity.",
  },
  {
    icon: <Camera className="w-8 h-8 text-blue-500" />,
    title: "CCTV Integration",
    desc: "Connect your alarm with CCTV for enhanced real-time surveillance.",
  },
  {
    icon: <Lock className="w-8 h-8 text-blue-500" />,
    title: "Smart Locks Compatible",
    desc: "Integrates with smart door locks and access control systems.",
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-blue-500" />,
    title: "Emergency Notifications",
    desc: "Instant mobile alerts in case of intrusion, fire, or system breach.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 my-20 bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">
            Key Features of Our Alarm Systems
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to secure your home, office, or industrial infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-7 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>

              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {feature.desc}
              </p>

              {/* Subtle Card CTA */}
              <Link href="/contact" className="text-sm font-medium text-blue-500 opacity-0 group-hover:opacity-100 transition">
                Get Quote →
              </Link>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Want a customized alarm system for your property?
          </p>

          <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition shadow-lg">
            Request a Free Security Assessment
          </Link>
        </div>

      </div>
    </section>
  );
}
