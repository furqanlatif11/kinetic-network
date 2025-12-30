"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const industries = [
  { name: "Corporate Offices", bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
  { name: "Data Centers", bgImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" },
  { name: "Industrial Facilities", bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80" },
  { name: "Educational Institutes", bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" },
  { name: "Healthcare Facilities", bgImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80" },
  { name: "Hospitality & Hotels", bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" },
];

const IndustriesWeServe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    customPaging: () => <span className="block w-2.5 h-2.5 rounded-full" />,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8 flex justify-center gap-2">{dots}</div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Our Expertise
            </span>
          </div>
          <h2 className="sectionHeading font-bold text-gray-900 mb-4">
            Industries We{" "}
            <span className="text-blue-600">
              Serve
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Kinetic Network delivers reliable data cabling solutions tailored to
            a wide range of industries, ensuring performance, scalability, and
            compliance.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {industries.map((industry, index) => (
              <div key={index} className="px-3">
                <div
                  className="relative h-72 rounded-3xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500"
                  style={{
                    backgroundImage: `url(${industry.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/30"></div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent"></div>

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-6 text-center">
                    <div className="w-16 h-1 bg-blue-600 rounded-full mb-4 transform transition-all duration-500 group-hover:w-24"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white z-10 transform transition-all duration-500 group-hover:scale-105">
                      {industry.name}
                    </h3>
                    <a 
                      href="/contact" 
                      className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-blue-700"
                    >
                      Contact Us
                    </a>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Stats or trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600 mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">98%</div>
            <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600 mt-1">Support Available</div>
          </div>
        </div>
      </div>

      {/* Enhanced custom dots styling with pill animation */}
      <style jsx global>{`
        .slick-dots {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .slick-dots li {
          margin: 0;
          width: auto;
          height: auto;
        }
        
        .slick-dots li button {
          width: 0.625rem;
          height: 0.625rem;
          padding: 0;
          border-radius: 9999px;
          background: #d1d5db;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
        }
        
        .slick-dots li button:hover {
          background: #9ca3af;
          transform: scale(1.2);
        }
        
        .slick-dots li.slick-active button {
          width: 2rem;
          height: 0.625rem;
          background: #2563eb;
          box-shadow: 0 0 12px rgba(37, 99, 235, 0.4);
        }
        
        .slick-dots li button:before {
          display: none;
        }
        
        .slick-slide {
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }
        
        .slick-slide.slick-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default IndustriesWeServe;