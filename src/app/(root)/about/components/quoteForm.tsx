'use client';

import { useState, FC } from 'react';

interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  otherService?: string;
  message: string;
}

const services = [
  "CCTV Systems",
  "Access Control",
  "Alarm Systems",
  "Intercom Systems",
  "Any Other",
];

const QuoteForm: FC = () => {
  const [form, setForm] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    otherService: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalService =
      form.service === 'Any Other' ? form.otherService : form.service;

    if (!form.name || !form.phone || !form.email || !finalService) {
      alert('Please fill all required fields.');
      return;
    }

    console.log('Quote Submitted:', { ...form, finalService });
    alert('Quote submitted successfully!');
    setForm({
      name: '',
      phone: '',
      email: '',
      service: '',
      otherService: '',
      message: '',
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-10 my-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Quote</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Full Name*</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Phone Number*</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Email*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Services Required */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-800 font-medium">Service Required*</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Other Service */}
        {form.service === 'Any Other' && (
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-gray-800 font-medium">Please Specify Service*</label>
            <input
              type="text"
              name="otherService"
              value={form.otherService}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
            />
          </div>
        )}

        {/* Message */}
        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-gray-800 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 w-full bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
          >
            Submit Quote
          </button>
        </div>
      </form>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-gray-800 mb-4">
          Prefer direct contact?{' '}
          <a href="tel:+1234567890" className="text-blue-600 font-semibold hover:underline">
            Call Us
          </a>{' '}
          or{' '}
          <a href="/contact" className="text-blue-600 font-semibold hover:underline">
            Contact Page
          </a>
        </p>
      </div>
    </div>
  );
};

export default QuoteForm;
