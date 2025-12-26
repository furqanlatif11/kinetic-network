"use client";

import { useState } from "react";
import {
  Shield,
  Clock,
  Award,
  Users,
  Headphones,
  Zap,
  ArrowRight,
  Check,
} from "lucide-react";
import CountUp from "react-countup";

const features = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Military-grade encryption and 24/7 monitoring systems protect your assets with uncompromising reliability.",
  },
  {
    icon: Clock,
    title: "Guaranteed Response Time",
    description:
      "Industry-leading 2-hour response SLA with certified technicians available around the clock.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    description:
      "ISO 9001 certified operations with a team of industry-certified security professionals.",
  },
  {
    icon: Zap,
    title: "Smart Integration",
    description:
      "Seamless connectivity with leading smart home and enterprise management platforms.",
  },
  {
    icon: Users,
    title: "Trusted Partnership",
    description:
      "Over 15 years serving 1,000+ clients across residential and commercial sectors.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Personalized account management with proactive maintenance and system optimization.",
  },
];

const stats = [
  { value: 99.9, suffix: "%", label: "System Uptime", icon: Shield },
  { value: 15, suffix: "+", label: "Years Experience", icon: Award },
  { value: 1000, suffix: "+", label: "Active Installations", icon: Users },
  { value: 2, suffix: "hrs", label: "Response Time", icon: Clock },
];

export default function WhyChooseKinetic() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-4">
            <div className="w-8 h-px bg-blue-600"></div>
            WHY KINETIC NETWORK
          </div>
          <h2 className="sectionHeading font-bold text-gray-900 mb-6 leading-tight">
            Built on Trust, Driven by Excellence
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            We deliver comprehensive security and connectivity solutions that
            meet the highest industry standards, backed by our commitment to
            your safety and satisfaction.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-20 border-b border-gray-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center lg:items-center text-center lg:text-left"
              >
                <Icon className="w-8 h-8 text-blue-500 mb-2" />
                <div className="text-4xl lg:text-5xl font-semibold text-gray-900">
                  <CountUp
                    end={stat.value}
                    decimals={stat.suffix === "%" ? 1 : 0}
                    duration={2}
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-6 transition-colors duration-300 group-hover:bg-blue-600">
                  <Icon
                    className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover line */}
                <div
                  className={`mt-6 h-0.5 bg-blue-600 transition-all duration-500 ${
                    hoveredIndex === index ? "w-12" : "w-0"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
