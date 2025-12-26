import { Camera, Lock, Smartphone, AlertTriangle } from "lucide-react";

const integrations = [
  {
    icon: Camera,
    title: "CCTV Integration",
    desc: "Combine intercoms with CCTV for live monitoring and visual verification of visitors at every entry point.",
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    desc: "Seamlessly manage door locks, gates, and restricted areas directly through the intercom interface.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Remote Access",
    desc: "Receive calls, grant access, or monitor entry points remotely using our mobile app or web dashboard.",
  },
  {
    icon: AlertTriangle,
    title: "Alarm & Notification Systems",
    desc: "Trigger automated alerts for unauthorized access attempts, emergencies, or system anomalies.",
  },
];

export default function IntercomIntegrationSection() {
  return (
    <section className="py-28 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Integration Capabilities
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Intercom Systems that Work Together
          </h2>

          <p className="text-lg text-gray-600">
            Our intercom systems are designed to integrate with a full security ecosystem,
            enhancing safety, convenience, and operational efficiency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group bg-white p-7 rounded-2xl border border-blue-100 transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
