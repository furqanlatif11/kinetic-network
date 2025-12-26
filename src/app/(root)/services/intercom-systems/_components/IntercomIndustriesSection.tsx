import { Building2, Home, Factory, School, Hospital, Warehouse } from "lucide-react";

const industries = [
  {
    icon: Home,
    title: "Residential Communities",
    desc: "Secure communication for apartments, villas, and gated communities with controlled visitor access.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    desc: "Professional intercom solutions for offices, business centers, and corporate facilities.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    desc: "Rugged intercom systems designed for factories, plants, and high-security industrial zones.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    desc: "Streamlined entry communication for loading docks, storage facilities, and logistics hubs.",
  },
  {
    icon: School,
    title: "Educational Institutions",
    desc: "Improved campus safety with controlled access communication for schools and universities.",
  },
  {
    icon: Hospital,
    title: "Healthcare Facilities",
    desc: "Reliable intercom systems supporting patient safety, staff coordination, and access control.",
  },
];

export default function IntercomIndustriesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Industries We Serve
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Intercom Solutions Across Diverse Environments
          </h2>

          <p className="text-lg text-gray-600">
            Our intercom systems are deployed across multiple industries,
            tailored to meet unique security and operational needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl border border-blue-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
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
