import Image from "next/image";
import { CheckCircle } from "lucide-react";

const points = [
  "Verify visitors before granting access",
  "Clear audio and video communication at entry points",
  "Remote access control via mobile or control room",
  "Seamless integration with CCTV, alarms & access control",
  "Suitable for residential, commercial & industrial sites",
];

export default function IntercomIntroSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* Soft background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Content */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Why Intercom Systems Matter
            </span>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Secure Communication at Every Entry Point
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Intercom systems are the first line of defense for controlled access. 
              They allow you to communicate, verify, and manage visitors before entry — 
              enhancing security without compromising convenience.
            </p>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <span className="text-gray-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-700 font-medium max-w-xl">
              At <span className="text-blue-600 font-semibold">Kinetic Network</span>, 
              we design and deploy intercom solutions that integrate seamlessly with 
              your existing security infrastructure — built for reliability and scalability.
            </p>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-blue-100 shadow-sm">
              <Image
                src="/assets/images/intercomIntro.webp"
                alt="Intercom system access communication"
                width={600}
                height={480}
                className="object-cover"
                priority
              />
            </div>

            {/* Decorative card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl border border-blue-100 p-4 shadow-md">
              <p className="text-sm font-medium text-gray-900">
                Smart Access • Clear Communication
              </p>
              <p className="text-xs text-gray-500">
                Integrated security ecosystem
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
