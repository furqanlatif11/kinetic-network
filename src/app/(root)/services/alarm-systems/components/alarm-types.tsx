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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Types of Alarm Systems
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Choose the right alarm system for your security needs.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="p-3 rounded-full bg-gray-100 hover:bg-green-50 transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="p-3 rounded-full bg-gray-100 hover:bg-green-50 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider Wrapper */}
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {alarmTypes.map((item, idx) => (
              <div key={idx}>
                <div className="mx-2 bg-white border rounded-xl shadow-sm hover:shadow-md transition">

                  <div className="relative h-52">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
