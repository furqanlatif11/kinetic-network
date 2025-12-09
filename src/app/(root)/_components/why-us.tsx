'use client';

import { useState } from 'react';
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  Headphones, 
  Zap,
  ArrowRight,
  Check
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Military-grade encryption and 24/7 monitoring systems protect your assets with uncompromising reliability.',
  },
  {
    icon: Clock,
    title: 'Guaranteed Response Time',
    description: 'Industry-leading 2-hour response SLA with certified technicians available around the clock.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'ISO 9001 certified operations with a team of industry-certified security professionals.',
  },
  {
    icon: Zap,
    title: 'Smart Integration',
    description: 'Seamless connectivity with leading smart home and enterprise management platforms.',
  },
  {
    icon: Users,
    title: 'Trusted Partnership',
    description: 'Over 15 years serving 1,000+ clients across residential and commercial sectors.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personalized account management with proactive maintenance and system optimization.',
  },
];

const stats = [
  { value: '99.9%', label: 'System Uptime' },
  { value: '15+', label: 'Years Experience' },
  { value: '1000+', label: 'Active Installations' },
  { value: '<2hrs', label: 'Response Time' },
];

export default function WhyChooseKinetic() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-white py-12 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 mb-4">
            <div className="w-8 h-px bg-blue-600"></div>
            WHY KINETIC NETWORK
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Built on Trust, Driven by Excellence
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We deliver comprehensive security and connectivity solutions that meet the highest industry standards, backed by our commitment to your safety and satisfaction.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-20 border-b border-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Number */}
                <div className="absolute -left-4 top-0 text-7xl font-bold text-gray-100 -z-10 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-gray-50 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon className="w-7 h-7 text-gray-700 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Line */}
                <div className={`mt-6 h-0.5 bg-blue-600 transition-all duration-500 ${
                  hoveredIndex === index ? 'w-12' : 'w-0'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 p-12 lg:p-16">
            {/* Left Side */}
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Future?
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Schedule a complimentary consultation with our security experts. We&apos;ll assess your needs and design a customized solution that fits your requirements and budget.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Free on-site security assessment',
                  'Customized system design',
                  'Transparent pricing with no hidden fees',
                  'Professional installation included'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Shield className="w-24 h-24 mx-auto mb-4 opacity-20" />
                  <p className="text-sm">Professional Security Installation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 uppercase tracking-wider font-medium mb-8">
            Certified & Trusted
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            <div className="text-xl font-bold text-gray-400">ISO 9001</div>
            <div className="text-xl font-bold text-gray-400">CE CERTIFIED</div>
            <div className="text-xl font-bold text-gray-400">UL LISTED</div>
            <div className="text-xl font-bold text-gray-400">FCC COMPLIANT</div>
          </div>
        </div>
      </div>
    </section>
  );
}