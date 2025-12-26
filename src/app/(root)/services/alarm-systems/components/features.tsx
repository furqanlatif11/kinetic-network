import { Shield, Bell, Wifi, Camera, Lock, AlertTriangle } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "24/7 Protection",
    desc: "Continuous system monitoring with instant response alerts to ensure uninterrupted security.",
  },
  {
    icon: Bell,
    title: "Smart Alarm Triggers",
    desc: "Advanced detection for unauthorized access, fire, smoke, and abnormal movement.",
  },
  {
    icon: Wifi,
    title: "Wireless Architecture",
    desc: "Clean installations with reliable wireless connectivity and minimal infrastructure impact.",
  },
  {
    icon: Camera,
    title: "CCTV Integration",
    desc: "Seamless alarm and camera integration for live monitoring and evidence recording.",
  },
  {
    icon: Lock,
    title: "Smart Access Control",
    desc: "Compatible with smart locks, access panels, and role-based entry systems.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Notifications",
    desc: "Real-time alerts delivered instantly to mobile and control centers.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-12">
      {/* Decorative structure layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-blue-200/30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Alarm System Capabilities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Designed for Reliable & Scalable Security
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A professional-grade alarm ecosystem engineered to protect
            residential, commercial, and industrial environments.
          </p>
        </header>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => {
            const Icon = feature.icon;

            return (
              <article
                key={i}
                className="group relative p-8 bg-white rounded-2xl border border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon container */}
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />

                {/* CTA */}
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition"
                >
                  Request quote →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
