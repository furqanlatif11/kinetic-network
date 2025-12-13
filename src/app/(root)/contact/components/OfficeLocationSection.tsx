"use client";

export default function OfficeLocationSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-lg">
            Find us easily at our central office. Drop by or get directions for a consultation.
          </p>
        </div>

        {/* MAP */}
        <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0000000000005!2d74.00000000000001!3d31.000000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b123456789%3A0xabcdef1234567890!2sYour%20Office%20Name!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kinetic Network Office Location"
          ></iframe>
        </div>

        {/* ADDRESS DETAILS */}
        <div className="mt-8 text-center text-gray-700">
          <p className="text-lg font-medium">Kinetic Network Office</p>
          <p>Lahore, Pakistan</p>
          <p>Mon – Sat, 10:00 AM – 7:00 PM</p>
        </div>

      </div>
    </section>
  );
}
