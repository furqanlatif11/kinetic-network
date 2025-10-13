"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Shield, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string; description: string }[];
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      {
        name: "CCTV Systems",
        href: "/services/cctv",
        description: "Advanced surveillance solutions",
      },
      {
        name: "Access Control",
        href: "/services/access-control",
        description: "Secure entry management",
      },
      {
        name: "Alarm Systems",
        href: "/services/alarms",
        description: "Intrusion detection systems",
      },
      {
        name: "Intercom Systems",
        href: "/services/intercom",
        description: "Communication solutions",
      },
      {
        name: "Data Cabling",
        href: "/services/data-cabling",
        description: "Network infrastructure",
      },
      {
        name: "WiFi Installation",
        href: "/services/wifi",
        description: "Wireless connectivity",
      },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#070f23]  backdrop-blur-xs shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="relative">
              <div
                className={`absolute inset-0 rounded-lg blur-md transition-all duration-300 ${
                  isScrolled
                    ? 'bg-cyan-500/20 group-hover:bg-cyan-500/30'
                    : 'bg-cyan-500/30 group-hover:bg-cyan-500/40'
                }`}
              />
              <div
                className={`relative p-2 rounded-lg border transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400'
                    : 'bg-slate-900/50 border-cyan-500/50'
                }`}
              >
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div
                className={`font-orbitron font-bold text-xl transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                KINETIC
              </div>
              <div
                className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-cyan-600' : 'text-cyan-400'
                }`}
              >
                Network Solutions
              </div>
            </div> */}
            <Image
              src="/assets/logos/kn_logo_copy.webp"
              width={80}
              height={80}
              alt="Kinetic Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.name)
                  }
                  onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${
                    isScrolled
                      ? activeLink === link.href
                        ? "text-blue-600"
                        : "text-white hover:text-blue-500"
                      : activeLink === link.href
                      ? "text-blue-400"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Bottom border on hover/active */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 ${
                      activeLink === link.href
                        ? "scale-x-100 bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-cyan-500 to-blue-500"
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-72 transition-all duration-300 ${
                      openDropdown === link.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div
                      className={`rounded-xl shadow-2xl overflow-hidden border ${
                        isScrolled
                          ? "bg-white border-slate-200"
                          : "bg-slate-900/95 backdrop-blur-xl border-slate-800"
                      }`}
                    >
                      <div className="p-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-3 rounded-lg transition-all duration-200 group/item ${
                              isScrolled
                                ? "hover:bg-cyan-50"
                                : "hover:bg-slate-800/50"
                            }`}
                          >
                            <div
                              className={`font-medium mb-0.5 ${
                                isScrolled
                                  ? "text-slate-900 group-hover/item:text-cyan-600"
                                  : "text-white group-hover/item:text-cyan-400"
                              }`}
                            >
                              {item.name}
                            </div>
                            <div
                              className={`text-sm ${
                                isScrolled ? "text-slate-600" : "text-slate-400"
                              }`}
                            >
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Desktop */}
            <a
              href="tel:8703930067"
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:text-cyan-600 hover:bg-cyan-50"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">870-393-0067</span>
            </a>

            {/* CTA Button - Desktop */}
            <Link
              href="/contact"
              className={`hidden lg:block px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              }`}
            >
              Get Free Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-slate-700 hover:bg-cyan-50"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div
          className={`px-4 py-6 space-y-3 border-t ${
            isScrolled
              ? "bg-white border-slate-200"
              : "bg-slate-900/95 backdrop-blur-xl border-slate-800"
          }`}
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  if (!link.dropdown) setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled
                    ? activeLink === link.href
                      ? "bg-cyan-50 text-cyan-600"
                      : "text-slate-700 hover:bg-slate-50"
                    : activeLink === link.href
                    ? "bg-slate-800/50 text-cyan-400"
                    : "text-slate-200 hover:bg-slate-800/30"
                }`}
              >
                {link.name}
              </Link>

              {/* Mobile Dropdown */}
              {link.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        isScrolled
                          ? "text-slate-600 hover:bg-cyan-50 hover:text-cyan-600"
                          : "text-slate-400 hover:bg-slate-800/30 hover:text-cyan-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
