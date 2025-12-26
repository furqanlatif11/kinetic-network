"use client";

import Image from "next/image";
import Slider from "react-slick";
import { Shield, Eye, Smartphone, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ServiceOverview() {
  const features = [
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "24/7 HD Surveillance",
      desc: "High-definition monitoring to protect your premises around the clock.",
      bg: "/assets/images/feature1.jpg",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Remote Monitoring",
      desc: "Securely view live camera feeds from any device, anywhere.",
      bg: "/assets/images/feature2.jpg",
    },
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Cloud Storage",
      desc: "Encrypted and reliable cloud backup for all recordings.",
      bg: "/assets/images/feature3.jpg",
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "AI Security Alerts",
      desc: "Intelligent notifications for motion, intrusion, or unusual activity.",
      bg: "/assets/images/feature4.jpg",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-full bg-white py-4 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            CCTV Security Solutions
          </p>

          <h2 className="sectionHeading font-bold leading-tight text-gray-900">
            Professional, Reliable & Elegant
            <span className="text-blue-600"> Surveillance Systems</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Deploy modern CCTV systems with AI-based detection, remote monitoring, and secure cloud backup. Designed for corporate, industrial, and residential environments, providing unmatched clarity and reliability.
          </p>
        </motion.div>

        {/* Right Carousel Features */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Slider {...sliderSettings}>
            {features.map((item, index) => (
              <div key={index} className="p-4">
                <div className="relative flex flex-col justify-end p-6 h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={item.bg}
                    alt={item.title}
                    fill
                    className="object-cover object-center absolute inset-0 z-0"
                  />
                  <div className="absolute inset-0 bg-black/40 z-10 rounded-xl"></div>
                  <div className="relative z-20 flex flex-col gap-3 text-white">
                    <div className="p-3 bg-blue-600/80 rounded-lg w-max">{item.icon}</div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
