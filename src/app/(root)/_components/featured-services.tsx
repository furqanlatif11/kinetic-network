'use client';

import { useState, useEffect, useRef } from 'react';
import { Camera, Lock, Bell, Monitor, Wifi, ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
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

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Determine how many cards to show based on screen size
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    if (window.innerWidth < 1280) return 3;
    return 4;
  };

  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section className="relative py-12 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Security <span className="text-blue-600">Solutions</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Comprehensive services tailored to protect your property and ensure seamless connectivity.
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
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 24 / cardsPerView}px)` }}
                >
                  <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg h-96 transition-all duration-300 hover:shadow-2xl">
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
                </div>
              ))}
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
                    ? 'w-8 h-2 bg-blue-600'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
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