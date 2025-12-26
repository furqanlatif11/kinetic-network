import { Mic, Video, Wifi, Network } from "lucide-react";

const intercomTypes = [
  {
    icon: Mic,
    title: "Audio Intercom Systems",
    desc: "Reliable voice-only communication for controlled entry points, ideal for residential buildings and internal office access.",
    use: "Homes, apartments, offices",
  },
  {
    icon: Video,
    title: "Video Intercom Systems",
    desc: "See and communicate with visitors in real time, enhancing identity verification and access security.",
    use: "Commercial buildings, villas, gated entries",
  },
  {
    icon: Network,
    title: "IP-Based Intercom Systems",
    desc: "Network-powered intercoms enabling centralized control, scalability, and remote access management.",
    use: "Corporate campuses, industrial facilities",
  },
  {
    icon: Wifi,
    title: "Wireless Intercom Systems",
    desc: "Flexible and quick-to-deploy systems with minimal cabling and seamless wireless connectivity.",
    use: "Retrofit projects, temporary setups",
  },
];

export default function IntercomTypesSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            System Variants
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Intercom Solutions for Every Environment
          </h2>

          <p className="text-lg text-gray-600">
            We offer a wide range of intercom systems designed to meet different
            security, communication, and infrastructure requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {intercomTypes.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-blue-100 p-7 transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>

                <div className="pt-4 border-t border-blue-100">
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    Best For
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    {item.use}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
