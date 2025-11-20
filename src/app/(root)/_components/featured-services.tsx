'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Camera, Lock, Bell, Monitor, Wifi, ArrowRight, Check, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
}

const services: Service[] = [
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Advanced video surveillance systems with AI-powered analytics and 24/7 monitoring.',
    features: ['4K Ultra HD Cameras', 'AI Motion Detection', 'Cloud Storage', 'Mobile Access'],
    href: '/services/cctv',
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Smart access management systems with biometric authentication and remote monitoring.',
    features: ['Biometric Scanners', 'Card Access', 'Remote Management', 'Entry Logs'],
    href: '/services/access-control',
  },
  {
    icon: Bell,
    title: 'Alarm Systems',
    description: 'Intelligent intrusion detection with instant alerts and professional monitoring.',
    features: ['Motion Sensors', 'Glass Break Detection', 'Instant Alerts', '24/7 Monitoring'],
    href: '/services/alarms',
  },
  {
    icon: Monitor,
    title: 'Intercom Systems',
    description: 'Modern video intercom solutions with remote access and mobile integration.',
    features: ['Video Calling', 'Remote Door Control', 'Mobile App', 'Multi-Unit Support'],
    href: '/services/intercom',
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Professional network infrastructure with fiber optics and enterprise-grade WiFi.',
    features: ['Fiber Optic Cabling', 'WiFi Optimization', 'Network Security', 'High-Speed Setup'],
    href: '/services/network-solutions',
  },
];

export default function FeaturedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Security <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Comprehensive services tailored to protect your property and ensure seamless connectivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div
                className={`relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm transition-transform duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="relative mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                  <service.icon className="w-7 h-7 text-blue-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className="flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full">
                        <Check className="w-3 h-3 text-blue-500" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More */}
                <div className="text-sm font-medium text-gray-700 flex items-center gap-1 group-hover:text-gray-900 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition-all"
          >
            Contact Us for Custom Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
