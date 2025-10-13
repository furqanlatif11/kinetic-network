"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Cpu,
  Radio,
  Lock,
  Camera,
  Wifi,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Zap,
  Bell,
  Monitor,
  Building2,
  Home,
  Factory,
  School,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import InquiryModal from "./inquiry-modal";

interface Service {
  icon: LucideIcon;
  label: string;
  color: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Camera,
    label: "CCTV Systems",
    color: "from-cyan-500 to-cyan-600",
    title: "Advanced Surveillance Solutions",
    description:
      "State-of-the-art CCTV systems with AI-powered analytics, 4K resolution cameras, and cloud storage. Monitor your property 24/7 with real-time alerts.",
    href: "/services/cctv",
  },
  {
    icon: Lock,
    label: "Access Control",
    color: "from-blue-500 to-blue-600",
    title: "Smart Access Management",
    description:
      "Biometric and card-based access control systems. Grant and revoke access remotely, track entry logs, and integrate with existing infrastructure.",
    href: "/services/access-control",
  },
  {
    icon: Bell,
    label: "Alarm Systems",
    color: "from-indigo-500 to-indigo-600",
    title: "Intelligent Intrusion Detection",
    description:
      "Advanced alarm systems with motion sensors, glass break detectors, and instant notifications. 24/7 monitoring with rapid response capabilities.",
    href: "/services/alarms",
  },
  {
    icon: Monitor,
    label: "Intercom Systems",
    color: "from-purple-500 to-purple-600",
    title: "Seamless Communication",
    description:
      "Modern intercom systems with video calling, remote door control, and mobile integration. Perfect for residential and commercial buildings.",
    href: "/services/intercom",
  },
  {
    icon: Wifi,
    label: "Network Solutions",
    color: "from-pink-500 to-pink-600",
    title: "Enterprise-Grade Connectivity",
    description:
      "Professional network installation with fiber optics, structured cabling, and WiFi optimization. High-speed, reliable connectivity.",
    href: "/services/network-solutions",
  },
];

const AUTO_CYCLE_INTERVAL = 5000;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        handleServiceChange((activeService + 1) % services.length, true);
      }, AUTO_CYCLE_INTERVAL);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeService, isPaused]);

  const handleServiceChange = (index: number, isAuto: boolean = false) => {
    if (index !== activeService) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveService(index);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const handleServiceClick = (index: number) => {
    setIsPaused(true);
    handleServiceChange(index);
  };

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Animated Scan Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-scan" />
        </div>

        {/* Floating Icons Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[Shield, Camera, Lock, Wifi, Cpu, Radio].map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-cyan-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${40 + Math.random() * 40}px`,
                height: `${40 + Math.random() * 40}px`,
                animation: `float ${
                  8 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* Badge */}
              <div className="max-lg:flex max-md:justify-center">
                <div className="inline-flex items-center gap-3 pl-1 pr-5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent border border-cyan-500/20 backdrop-blur-md group hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-semibold bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
                    Advanced Security Solutions
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-5">
                <div className="space-y-2 max-sm:flex max-sm:justify-center">
                  <h1 className="font-orbitron text-6xl md:text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                    <span className="block bg-gradient-to-br from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
                      KINETIC
                    </span>
                    <span className="block max-sm:text-center text-4xl md:text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mt-1">
                      NETWORK
                    </span>
                  </h1>
                </div>

                {/* Dynamic Content Area */}
                <div className="space-y-3 max-w-xl">
                  <h2 className="text-xl sm:text-2xl font-thin max-sm:text-center text-white leading-tight">
                    Securing Your Digital Future
                  </h2>

                  {/* Animated Service Title */}
                  <div className="relative min-h-[28px] max-sm:text-center">
                    <h3
                      className={`text-lg font-bold bg-gradient-to-r ${
                        services[activeService].color
                      } bg-clip-text text-transparent transition-all duration-300 ${
                        isTransitioning
                          ? "opacity-0 translate-y-2"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      {services[activeService].title}
                    </h3>
                  </div>

                  {/* Animated Service Description */}
                  <div className="relative min-h-[80px] max-sm:text-center">
                    <p
                      className={`text-sm sm:text-base text-slate-300 leading-relaxed transition-all duration-300 ${
                        isTransitioning
                          ? "opacity-0 translate-y-2"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      {services[activeService].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Service Tabs */}
              <div
                className="space-y-3"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="flex flex-wrap max-md:justify-center gap-2.5">
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      onClick={() => handleServiceClick(i)}
                      className={`group relative overflow-hidden transition-all duration-300 ${
                        activeService === i ? "scale-105" : "hover:scale-105"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${
                          service.color
                        } blur-xl transition-all duration-500 ${
                          activeService === i
                            ? "opacity-40"
                            : "opacity-0 group-hover:opacity-20"
                        }`}
                      />

                      {activeService === i && (
                        <div
                          className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-xl opacity-75 animate-pulse`}
                        />
                      )}

                      <div
                        className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                          activeService === i
                            ? "bg-slate-800/90 border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20"
                            : "bg-slate-900/60 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/80"
                        }`}
                      >
                        <div
                          className={`p-1.5 rounded-lg bg-gradient-to-br ${
                            service.color
                          } transition-transform duration-300 ${
                            activeService === i
                              ? "scale-110"
                              : "group-hover:scale-110"
                          }`}
                        >
                          <service.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span
                          className={`text-sm font-semibold transition-colors ${
                            activeService === i
                              ? "text-white"
                              : "text-slate-200 group-hover:text-white"
                          }`}
                        >
                          {service.label}
                        </span>

                        <ChevronRight
                          className={`w-4 h-4 transition-all duration-300 ${
                            activeService === i
                              ? "text-cyan-400 opacity-100"
                              : "text-slate-400 opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

           

              {/* Quick Contact */}
              <div className="flex flex-wrap items-center gap-5 pt-1">
                <div className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent" />

                <div className="flex flex-wrap gap-5">
                  <a
                    href="tel:8703930067"
                    className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <div className="relative p-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-mono text-xs sm:text-sm">
                      870-393-0067
                    </span>
                  </a>

                  <a
                    href="mailto:info@kinetic-network.com"
                    className="group flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-all duration-300"
                  >
                    <div className="relative p-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm">Get in Touch</span>
                  </a>
                </div>

                <div className="h-px flex-1 bg-gradient-to-l from-slate-800 to-transparent" />
              </div>
            </div>

            {/* Right Visual */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                mounted
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-2xl" />

                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-6 lg:p-8 space-y-6 shadow-2xl">
                 

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {[
                      
                      {
                        value: "98%",
                        label: "Client Satisfaction",
                        icon: Camera,
                        gradient: "from-indigo-500 to-indigo-600",
                      },
                      {
                        value: "15+",
                        label: "Years Experience",
                        icon: Lock,
                        gradient: "from-purple-500 to-purple-600",
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="group relative bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer overflow-hidden"
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                        />

                        <div className="relative">
                          <div
                            className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${stat.gradient} mb-2 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <stat.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="font-orbitron text-2xl font-black text-white mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Service Areas */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500 font-mono font-semibold tracking-wider uppercase">
                        Our Clients
                      </div>
                      <div className="text-xs text-cyan-400 font-semibold">
                        500+ Active
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          name: "Residential",
                          icon: Home,
                          clients: "250+",
                          desc: "Homes & Apartments",
                        },
                        {
                          name: "Commercial",
                          icon: Building2,
                          clients: "180+",
                          desc: "Offices & Retail",
                        },
                        {
                          name: "Industrial",
                          icon: Factory,
                          clients: "45+",
                          desc: "Factories & Warehouses",
                        },
                        {
                          name: "Educational",
                          icon: School,
                          clients: "25+",
                          desc: "Schools & Institutions",
                        },
                      ].map((area, i) => (
                        <div
                          key={i}
                          className="relative flex flex-col gap-2 p-3 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300" />

                          <div className="relative flex items-center gap-2.5">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:scale-110">
                              <area.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-bold text-white">
                                {area.name}
                              </div>
                              <div className="text-xs text-cyan-400 font-mono">
                                {area.clients}
                              </div>
                            </div>
                          </div>
                          <div className="relative text-xs text-slate-400 leading-tight">
                            {area.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex max-sm:flex-col  gap-3 pt-2">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group relative w-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full opacity-60 group-hover:opacity-100 blur-sm transition-all duration-500" />

                      <div className="relative w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 hover:from-cyan-500 hover:to-blue-500 rounded-full font-bold text-white overflow-hidden transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/30">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Get Free Quote
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>

                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </div>
                    </button>

                    <Link href="/contact" className="group relative w-full">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

                      <div className="relative w-full px-6 py-3.5 bg-slate-800/80 hover:bg-slate-800 backdrop-blur-sm border-2 border-slate-700/60 hover:border-slate-600 rounded-full font-bold text-white transition-all duration-300 shadow-lg">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <div className="relative">
                            <div className="p-1 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                              <Phone className="w-4 h-4 text-cyan-400" />
                            </div>
                          </div>
                          Contact Us
                        </span>

                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-full transition-all duration-500" />
                      </div>
                    </Link>
                  </div>

                 
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl backdrop-blur-md flex items-center justify-center animate-float shadow-2xl shadow-cyan-500/20">
                <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl backdrop-blur-md flex items-center justify-center animate-float-delayed shadow-2xl shadow-blue-500/20">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                  <Lock className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(3deg);
            }
          }
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-12px) rotate(-3deg);
            }
          }
          @keyframes scan {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(100%);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 8s ease-in-out infinite;
          }
          .animate-scan {
            animation: scan 8s linear infinite;
          }
        `}</style>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={services[activeService].label}
      />
    </>
  );
}
