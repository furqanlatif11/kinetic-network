"use client";

import { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Wifi,
  Tv,
  Cable,
  Bell,
  Monitor,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Internet Technician",
    description:
      "Professional internet setup and troubleshooting for homes and offices.",
    features: [
      "High-Speed Setup",
      "Router Configuration",
      "Troubleshooting",
      "On-Site Support",
    ],
    href: "/services/internet-technician",
    image: "/assets/images/internetTechnician.webp",
    badge: "Popular",
  },
  {
    icon: Wifi,
    title: "WiFi & Home Theatre",
    description:
      "Seamless WiFi coverage and immersive home theatre installations.",
    features: [
      "Smart Router Setup",
      "Speaker System Integration",
      "Signal Optimization",
      "Mobile App Control",
    ],
    href: "/services/wifi-home-theatre",
    image: "/assets/images/homeTheatre.webp",
  },
  {
    icon: Cable,
    title: "Fiber Optic Cabling",
    description:
      "Enterprise-grade fiber optic cabling for high-speed and stable connectivity.",
    features: [
      "Structured Cabling",
      "Network Design",
      "High-Speed Transmission",
      "Future Proof Infrastructure",
    ],
    href: "/services/fiber-optic-cabling",
    image: "/assets/images/datacabling.webp",
  },
  {
    icon: Tv,
    title: "TV Installation",
    description:
      "Professional TV mounting and setup services for perfect viewing experience.",
    features: [
      "Wall Mounting",
      "Cable Management",
      "Smart TV Setup",
      "Multiple Room Installation",
    ],
    href: "/services/tv-installation",
    image: "/assets/images/tvInstallation.png",
    badge: "New",
  },
  {
    icon: Bell,
    title: "Alarm Systems",
    description:
      "Advanced alarm systems with intelligent monitoring and instant alerts.",
    features: [
      "Motion Detection",
      "Smart Sensors",
      "Mobile Alerts",
      "24/7 Monitoring",
    ],
    href: "/services/alarm-systems",
    image: "/assets/images/alarmSystems.png",
  },
  {
    icon: Monitor,
    title: "Smart Home Integration",
    description:
      "Complete smart home automation for modern living convenience.",
    features: [
      "Voice Control",
      "App Integration",
      "Energy Management",
      "Scene Automation",
    ],
    href: "/services/smart-home",
    image: "/assets/images/networkSolutions.png",
    badge: "Trending",
  },
];

export default function FeaturedServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Determine how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      autoScrollRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [currentIndex, isHovered, cardsPerView]);

  const maxIndex = Math.max(0, services.length - cardsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span className="text-blue-600">Featured Services</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Specialized solutions to keep your home and office connected and
            entertainment-ready.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex gap-10 transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / cardsPerView}% - ${
                        ((cardsPerView - 1) * 40) / cardsPerView
                      }px)`,
                    }}
                  >
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl bg-white h-96 flex flex-col justify-end transition-all duration-300 hover:shadow-2xl">
                      {/* Background Image */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
                      />

                      {/* Optional Badge */}
                      {service.badge && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-lg">
                          {service.badge}
                        </div>
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-all duration-500"></div>

                      {/* Content */}
                      <div className="relative z-10 p-6 flex flex-col gap-3 transition-all duration-500 group-hover:translate-y-[-30px]">
                        <div className="flex items-center gap-2 text-white">
                          <Icon className="w-6 h-6" />
                          <h3 className="text-xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-sm text-white opacity-80">
                          {service.description}
                        </p>
                        <ul className="space-y-1 text-xs text-white opacity-80">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={service.href}
                          className="
    group relative mt-3 inline-flex items-center gap-2 self-start
    rounded-full px-5 py-2
    text-sm font-semibold text-white
    backdrop-blur-md
    bg-white/10
    border border-white/20
    shadow-[0_6px_20px_rgba(0,0,0,0.35)]
    transition-all duration-300 ease-out
    hover:bg-white/20
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.45)]
    active:scale-[0.96]
  "
                        >
                          {/* Glass highlight */}
                          <span
                            className="
      pointer-events-none absolute inset-0
      rounded-full
      bg-gradient-to-b from-white/40 via-white/10 to-transparent
      opacity-50
    "
                          />

                          {/* Text */}
                          <span className="relative z-10 tracking-wide">
                            Know More
                          </span>

                          {/* Arrow */}
                          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                            <ArrowUpRight size={16} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          {currentIndex > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 p-3 bg-white rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-110 group"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors" />
            </button>
          )}

          {currentIndex < maxIndex && (
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 p-3 bg-white rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 hover:scale-110 group"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-blue-600 transition-colors" />
            </button>
          )}

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
