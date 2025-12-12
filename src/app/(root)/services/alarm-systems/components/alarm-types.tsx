"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const alarmTypes = [
  {
    title: "Wired Alarm Systems",
    img: "/assets/images/wired-alarm.jpg",
    desc: "Stable, interference-free alarm systems ideal for high-security installations.",
  },
  {
    title: "Wireless Alarm Systems",
    img: "/assets/images/wireless-alarm.jpg",
    desc: "Cable-free, easy-to-install solutions with smart connectivity.",
  },
  {
    title: "Smart Alarms",
    img: "/assets/images/smart-alarm.jpg",
    desc: "Control, monitor and receive alerts directly on your smartphone.",
  },
  {
    title: "Fire Alarm Systems",
    img: "/assets/images/fire-alarm.jpg",
    desc: "Advanced heat and smoke detection for life & property protection.",
  },
  {
    title: "Hybrid Systems",
    img: "/assets/images/hybrid-alarm.jpg",
    desc: "A perfect combination of wired reliability and wireless flexibility.",
  },
  {
    title: "Industrial Alarms",
    img: "/assets/images/industrial-alarm.jpg",
    desc: "Heavy-duty alarms built for factories and commercial environments.",
  },
];

export default function AlarmTypes() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false },
      },
    ],
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Types of Alarm Systems
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Choose the right alarm system for your security needs.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-3 bg-gray-100 rounded-full shadow hover:bg-green-50 transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-900" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-3 bg-gray-100 rounded-full shadow hover:bg-green-50 transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <Slider ref={sliderRef} {...settings}>
          {alarmTypes.map((item, idx) => (
            <div key={idx} className="px-2">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">

                {/* Image */}
                <div className="h-52 w-full relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
