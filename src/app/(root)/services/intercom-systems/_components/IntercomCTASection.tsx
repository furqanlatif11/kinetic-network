import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function IntercomCTASection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-black uppercase">
          Ready to Upgrade Your Security?
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 leading-tight mb-6">
          Schedule Your Free Intercom Consultation Today
        </h2>

        <p className="text-lg text-black mb-10">
          Discover how Kinetic Network’s intercom systems can enhance communication, control access, 
          and improve overall security at your facility. Our experts will design a solution tailored to your needs.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition shadow-lg"
        >
          Request Consultation
          <Smartphone className="w-5 h-5" />
        </Link>

        <p className="mt-6 text-blue-500 text-sm">
          No obligations — just expert guidance.
        </p>
      </div>
    </section>
  );
}
