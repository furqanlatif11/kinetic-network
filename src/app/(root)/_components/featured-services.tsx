'use client';

import Link from 'next/link';
import { Camera, Lock, Bell, Monitor, Wifi, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
  image: string;
}

const services: Service[] = [
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Advanced video surveillance systems with AI-powered analytics and 24/7 monitoring.',
    features: ['4K Ultra HD Cameras', 'AI Motion Detection', 'Cloud Storage', 'Mobile Access'],
    href: '/services/cctv',
    image: '/assets/images/CCTVSystems.png',
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Smart access management systems with biometric authentication and remote monitoring.',
    features: ['Biometric Scanners', 'Card Access', 'Remote Management', 'Entry Logs'],
    href: '/services/access-control',
    image: '/assets/images/AccessControl.png',
  },
  {
    icon: Bell,
    title: 'Alarm Systems',
    description: 'Intelligent intrusion detection with instant alerts and professional monitoring.',
    features: ['Motion Sensors', 'Glass Break Detection', 'Instant Alerts', '24/7 Monitoring'],
    href: '/services/alarms',
    image: '/assets/images/alarmSystems.png',
  },
  {
    icon: Monitor,
    title: 'Intercom Systems',
    description: 'Modern video intercom solutions with remote access and mobile integration.',
    features: ['Video Calling', 'Remote Door Control', 'Mobile App', 'Multi-Unit Support'],
    href: '/services/intercom',
    image: '/assets/images/intercomSystems.png',
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Professional network infrastructure with fiber optics and enterprise-grade WiFi.',
    features: ['Fiber Optic Cabling', 'WiFi Optimization', 'Network Security', 'High-Speed Setup'],
    href: '/services/network-solutions',
    image: '/assets/images/networkSolutions.png',
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="sectionHeading font-bold text-gray-900">
            Our Security <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Comprehensive services tailored to protect your property and ensure seamless connectivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-96">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 transition-all duration-500 group-hover:bg-black/50"></div>

                {/* Service Title */}
                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-bold transition-all duration-500 group-hover:bottom-60">
                  {service.title}
                </h3>

                {/* Hidden Details on Hover */}
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <p className="text-sm mb-3">{service.description}</p>
                  <ul className="mb-4 space-y-1 text-xs">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block px-4 py-2 bg-blue-600 rounded-full font-semibold text-sm hover:bg-blue-700 transition">
                    Know More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
