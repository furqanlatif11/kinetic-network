'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Camera, Lock, Bell, Monitor, Wifi, ArrowRight, Check, Zap, LucideIcon  } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  href: string;
  iconBg: string;
}

const services: Service[] = [
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Advanced video surveillance systems with AI-powered analytics and 24/7 monitoring capabilities.',
    features: ['4K Ultra HD Cameras', 'AI Motion Detection', 'Cloud Storage', 'Mobile Access'],
    gradient: 'from-cyan-500 to-cyan-600',
    iconBg: 'from-cyan-500/20 to-cyan-600/20',
    href: '/services/cctv',
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Smart access management systems with biometric authentication and remote monitoring.',
    features: ['Biometric Scanners', 'Card Access', 'Remote Management', 'Entry Logs'],
    gradient: 'from-blue-500 to-blue-600',
    iconBg: 'from-blue-500/20 to-blue-600/20',
    href: '/services/access-control',
  },
  {
    icon: Bell,
    title: 'Alarm Systems',
    description: 'Intelligent intrusion detection with instant alerts and 24/7 professional monitoring.',
    features: ['Motion Sensors', 'Glass Break Detection', 'Instant Alerts', '24/7 Monitoring'],
    gradient: 'from-indigo-500 to-indigo-600',
    iconBg: 'from-indigo-500/20 to-indigo-600/20',
    href: '/services/alarms',
  },
  {
    icon: Monitor,
    title: 'Intercom Systems',
    description: 'Modern video intercom solutions with remote access and mobile integration.',
    features: ['Video Calling', 'Remote Door Control', 'Mobile App', 'Multi-Unit Support'],
    gradient: 'from-purple-500 to-purple-600',
    iconBg: 'from-purple-500/20 to-purple-600/20',
    href: '/services/intercom',
  },
  {
    icon: Wifi,
    title: 'Network Solutions',
    description: 'Professional network infrastructure with fiber optics and enterprise-grade WiFi.',
    features: ['Fiber Optic Cabling', 'WiFi Optimization', 'Network Security', 'High-Speed Setup'],
    gradient: 'from-pink-500 to-pink-600',
    iconBg: 'from-pink-500/20 to-pink-600/20',
    href: '/services/network-solutions',
  },
];

export default function FeaturedServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Our Services</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black text-white">
            Complete Security
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From surveillance to connectivity, we provide comprehensive security and technical solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-slate-700/50 rounded-2xl p-6 lg:p-8 backdrop-blur-xl transition-all duration-500 ${
                hoveredIndex === index ? 'transform -translate-y-2 border-cyan-500/50' : 'hover:border-slate-600/50'
              }`}
              style={{
                boxShadow: hoveredIndex === index 
                  ? `0 25px 70px -15px rgba(6, 182, 212, 0.4), 0 15px 35px -10px rgba(59, 130, 246, 0.3)` 
                  : 'none'
              }}>
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.iconBg} rounded-2xl blur-xl opacity-50`} />
                  <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} transform transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className={`flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <div className="pt-4">
                    <div className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                      hoveredIndex === index ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'
                    }`}>
                      Learn More
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                        hoveredIndex === index ? 'translate-x-1' : ''
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500" />
            
            <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 hover:from-cyan-500 hover:to-blue-500 rounded-full font-bold text-white transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/30">
              <span className="flex items-center gap-2">
                Contact Us for Custom Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}