'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const services = [
    { label: 'CCTV Systems', href: '/services/cctv' },
    { label: 'Access Control', href: '/services/access-control' },
    { label: 'Alarm Systems', href: '/services/alarms' },
    { label: 'Intercom Systems', href: '/services/intercom' },
    { label: 'Network Solutions', href: '/services/network-solutions' },
  ];

  const socials = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-200 pt-16 pb-8 px-6 md:px-12 overflow-hidden">
      {/* Decorative gradient shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Logo & tagline */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">SecureTech</span>
          </div>
          <p className="text-gray-400 max-w-sm">
            Providing reliable security and network solutions for your home and business. Trust our expertise to protect what matters most.
          </p>

          {/* Optional newsletter / CTA */}
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-full w-full text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-r-full text-white font-semibold transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Right: Links & Socials */}
        <div className="grid grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
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

          {/* Services & Socials */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 mb-4">
              {services.map((service) => (
                <motion.li key={service.label} whileHover={{ x: 4, scale: 1.02 }}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex gap-3 mt-2">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 transition-all text-white"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SecureTech. All rights reserved.
      </div>
    </footer>
  );
}
