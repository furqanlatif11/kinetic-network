"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "CCTV Systems", href: "/services/cctv" },
    { label: "Access Control", href: "/services/access-control" },
    { label: "Alarm Systems", href: "/services/alarms" },
    { label: "Intercom Systems", href: "/services/intercom" },
    { label: "Network Solutions", href: "/services/network-solutions" },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com" },
    { icon: Twitter, href: "https://twitter.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="relative bg-slate-900 text-gray-300 pt-20 pb-8 px-6 md:px-12 overflow-hidden">
      {/* Decorative subtle overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/assets/grid.svg')] opacity-5"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left: Logo & tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logos/kn_logo_copy.webp"
              alt="Logo"
              width={56}
              height={56}
              className="rounded-full w-28"
            />
          </div>
          <span className="text-3xl font-bold text-white">Kinetic Network</span>
          <p className="text-gray-400 max-w-sm">
            Providing reliable security and data solutions for homes and
            businesses. Trust our expertise to protect what matters most.
          </p>

          {/* Newsletter */}
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-full border-1 border-blue-500 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-full text-white font-semibold transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Center: Quick Links & Services */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4, scale: 1.02 }}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <motion.li
                  key={service.label}
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    className="p-3 rounded-full bg-slate-800 hover:bg-blue-500 transition-all text-white"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Contact & CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">
            Reach out to discuss your security needs or get a custom solution.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition-all text-center"
          >
            Get in Touch
          </Link>
          <a
            href="tel:+1234567890"
            className="mt-2 text-blue-400 hover:text-blue-500 transition-all"
          >
            Call Us: + 870 393 0067
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kinetic Network. All rights reserved.
      </div>
    </footer>
  );
}
