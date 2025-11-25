"use client";

import { useState } from "react";
import {
  Clock,
  BadgeCheck,
  HeadphonesIcon,
  Award,
  ThumbsUp,
  Wrench,
  Target,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon; // instead of `any`
  title: string;
  description: string;
  gradient: string;
  stat?: string;
}



const features: Feature[] = [
  {
    icon: Clock,
    title: "Fast Installation",
    description:
      "Quick and efficient installation with minimal disruption to operations.",
    gradient: "from-cyan-500 to-cyan-600",
    stat: "24-48hrs",
  },
  {
    icon: BadgeCheck,
    title: "Certified Professionals",
    description: "Licensed and certified technicians with years of experience.",
    gradient: "from-blue-500 to-blue-600",
    stat: "100%",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support whenever you need it.",
    gradient: "from-indigo-500 to-indigo-600",
    stat: "24/7",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description:
      "Latest technology from top manufacturers ensuring reliability.",
    gradient: "from-purple-500 to-purple-600",
    stat: "15+ Years",
  },
  {
    icon: ThumbsUp,
    title: "Free Consultation",
    description: "Complimentary site assessment with no-obligation quotes.",
    gradient: "from-pink-500 to-pink-600",
    stat: "Free",
  },
  {
    icon: Wrench,
    title: "Maintenance & Warranty",
    description: "Comprehensive warranty and maintenance plans.",
    gradient: "from-rose-500 to-rose-600",
    stat: "2-5 Years",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed", icon: Target },
  { value: "98%", label: "Client Satisfaction", icon: ThumbsUp },
  { value: "15+", label: "Years of Excellence", icon: Award },
  { value: "24/7", label: "Support Available", icon: HeadphonesIcon },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-white via-blue-200 to-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="sectionHeading font-bold text-gray-900">
        Your Trusted <span className="text-blue-600">Security Partner</span>
      </h2>
      <p className=" text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
        We deliver professional security solutions backed by exceptional
        service and support for over 15 years.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {features.map((feature, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`relative rounded-2xl border  bg-white shadow-md p-6 lg:p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
        >
          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 text-white`}
          >
            <feature.icon className="w-6 h-6" />
          </div>

          {/* Stat */}
          {feature.stat && (
            <div className="text-sm font-semibold text-gray-500 mb-2">
              {feature.stat}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>

    {/* Stats Section */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-500 hover:shadow-xl"
        >
          <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-xl bg-cyan-50 text-cyan-500 mx-auto">
            <stat.icon className="w-6 h-6" />
          </div>
          <div className="text-3xl font-extrabold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
