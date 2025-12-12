import { Shield, Bell, Wifi, Camera, Lock, AlertTriangle } from "lucide-react";

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
    <section className="py-16 bg-[#222222] text-white">
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
              className="p-7 bg-zinc-900 rounded-2xl shadow-md border border-zinc-800 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
