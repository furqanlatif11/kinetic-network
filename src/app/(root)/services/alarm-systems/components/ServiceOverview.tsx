import Image from "next/image";

export default function ServiceOverview() {
  return (
    <section className="py-20 bg-white text-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Complete Alarm System Solutions</h2>
          <p className="text-lg opacity-80 mb-4">
            Our alarm systems provide reliable intrusion detection using motion
            sensors, door and window contacts, outdoor beams, and high-volume
            sirens. Whether it’s for your home or your business, we ensure a
            strong, responsive, and modern layer of protection.
          </p>
          <p className="text-lg opacity-80 mb-4">
            With real-time alerts on your phone and seamless integration with
            CCTV and access control systems, you stay informed and in control 24/7.
          </p>

          <ul className="space-y-3 mt-4">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              High‑sensitivity motion detection
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              Instant notifications & mobile monitoring
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              Supports wired, wireless & hybrid setups
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
              Professional installation & ongoing support
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/assets/images/alarmOverview.webp"
            alt="Alarm System Overview"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
