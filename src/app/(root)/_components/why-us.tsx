'use client';

import { useState } from 'react';
import { Shield, Zap, Clock, Award, HeadphonesIcon, ThumbsUp, Users, BadgeCheck, Wrench, TrendingUp, Sparkles, Target, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  stat?: string;
}

const features: Feature[] = [
  {
    icon: Clock,
    title: 'Fast Installation',
    description: 'Quick and efficient installation with minimal disruption to your daily operations. Most projects completed within 24-48 hours.',
    gradient: 'from-cyan-500 to-cyan-600',
    stat: '24-48hrs',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Professionals',
    description: 'Our technicians are fully licensed, insured, and certified with years of hands-on experience in security systems.',
    gradient: 'from-blue-500 to-blue-600',
    stat: '100%',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring. We\'re here whenever you need us, day or night.',
    gradient: 'from-indigo-500 to-indigo-600',
    stat: '24/7',
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'We use only the latest technology from top manufacturers, ensuring reliability and cutting-edge performance.',
    gradient: 'from-purple-500 to-purple-600',
    stat: '15+ Years',
  },
  {
    icon: ThumbsUp,
    title: 'Free Consultation',
    description: 'Complimentary site assessment and custom security design. No obligation quotes with detailed project breakdown.',
    gradient: 'from-pink-500 to-pink-600',
    stat: 'Free',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Warranty',
    description: 'Comprehensive warranty coverage and ongoing maintenance plans to keep your systems running at peak performance.',
    gradient: 'from-rose-500 to-rose-600',
    stat: '2-5 Years',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed', icon: Target },
  { value: '98%', label: 'Client Satisfaction', icon: ThumbsUp },
  { value: '15+', label: 'Years of Excellence', icon: Award },
  { value: '24/7', label: 'Support Available', icon: HeadphonesIcon },
];

export default function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:72px_72px] animate-grid" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-black text-white">
            Your Trusted Security
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Partner
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            With over 15 years of experience, we deliver professional security solutions backed by exceptional service and support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm transition-all duration-500 ${
                hoveredIndex === index ? 'border-cyan-500/50 transform -translate-y-1' : ''
              }`}
              style={{
                boxShadow: hoveredIndex === index 
                  ? `0 20px 60px -15px rgba(6, 182, 212, 0.3), 0 10px 30px -10px rgba(59, 130, 246, 0.2)` 
                  : 'none'
              }}>
                {/* Icon and Stat */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-20 blur-lg`} />
                    <div className={`relative p-3 rounded-xl bg-gradient-to-br ${feature.gradient} transition-transform duration-500 ${
                      hoveredIndex === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Stat Badge */}
                  {feature.stat && (
                    <div className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50">
                      <span className={`text-sm font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-cyan-400' : 'text-white'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent group-hover:via-cyan-500/50 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 rounded-3xl blur-xl" />
          
          <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 lg:p-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:scale-110">
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  {/* Value */}
                  <div className="relative mb-2">
                    <div className="text-4xl lg:text-5xl font-orbitron font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Label */}
                  <div className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-12 pt-8 border-t border-slate-700/50 text-center">
              <p className="text-slate-400 text-lg mb-6">
                Join hundreds of satisfied clients who trust us with their security
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-300">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-300">Industry Certified</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-slate-300">Local Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(72px);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-grid {
          animation: grid 20s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}