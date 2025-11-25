"use client";

import { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  Shield,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
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
    name: "Security Systems",
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
      
    ],
  },
  {
    name: "Data Services",
    href: "/data-services",
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
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        setMobileOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Click outside to close dropdown on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (linkName: string) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  const handleMobileDropdownClick = (linkName: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === linkName ? null : linkName);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#070f23] backdrop-blur-lg shadow-lg shadow-slate-900/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group relative z-50"
            >
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
                <div
                  key={link.name}
                  className="relative"
                  ref={link.dropdown ? dropdownRef : null}
                >
                  {link.dropdown ? (
                    <button
                      onClick={() => handleDropdownClick(link.name)}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${
                        isScrolled
                          ? activeLink === link.href
                            ? "text-blue-600"
                            : "text-white hover:text-blue-500"
                          : activeLink === link.href
                          ? "text-blue-400"
                          : "text-slate-800 hover:text-blue-400"
                      }`}
                    >
                      {link.name}
                      {openDropdown === link.name ? (
                        <ChevronUp className="w-4 h-4 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                      )}

                      {/* Bottom border on active */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 ${
                          activeLink === link.href
                            ? "scale-x-100 bg-gradient-to-r from-cyan-500 to-blue-500"
                            : "scale-x-0"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setActiveLink(link.href)}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${
                        isScrolled
                          ? activeLink === link.href
                            ? "text-blue-600"
                            : "text-white hover:text-blue-500"
                          : activeLink === link.href
                          ? "text-blue-400"
                          : "text-slate-800 hover:text-blue-400 "
                      }`}
                    >
                      {link.name}

                      {/* Bottom border on hover/active */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 transform origin-left transition-all duration-300 ${
                          activeLink === link.href
                            ? "scale-x-100 bg-gradient-to-r from-cyan-500 to-blue-500"
                            : "scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-cyan-500 to-blue-500"
                        }`}
                      />
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-72 transition-all duration-300 ${
                        openDropdown === link.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
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
                              onClick={() => setOpenDropdown(null)}
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
                                  isScrolled
                                    ? "text-slate-600"
                                    : "text-slate-400"
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
                    ? "text-slate-200 hover:text-cyan-400 hover:bg-cyan-500/10"
                    : "text-slate-800 hover:text-white hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">870-393-0067</span>
              </a>

              {/* CTA Button - Desktop */}
              <Link
                href="/contact"
                className="hidden lg:block px-6 py-2.5 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500/90 to-blue-500/90 hover:from-cyan-500 hover:to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
              >
                Get Free Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 relative z-50 ${
                  isScrolled
                    ? "text-white hover:bg-cyan-500/10"
                    : "text-slate-800 hover:bg-white/10"
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 z-40 lg:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Drawer Header */}
          <div className="sticky top-0 bg-slate-900 border-b border-slate-800 p-6 z-10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-orbitron font-bold text-white">
                  Menu
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Navigate to sections
                </p>
              </div>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleMobileDropdownClick(link.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        activeLink === link.href
                          ? "bg-cyan-500/10 text-cyan-400"
                          : "text-slate-200 hover:bg-slate-800/50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {mobileOpenDropdown === link.name ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileOpenDropdown === link.name
                          ? "max-h-96 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileOpenDropdown(null);
                            }}
                            className="block px-4 py-2.5 rounded-lg text-sm transition-all duration-200 text-slate-400 hover:bg-slate-800/30 hover:text-cyan-400"
                          >
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {item.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      activeLink === link.href
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-200 hover:bg-slate-800/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Drawer Footer */}
          <div className="sticky bottom-0 bg-slate-900 border-t border-slate-800 p-6 space-y-4">
            {/* Contact Info */}
            <a
              href="tel:8703930067"
              className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <div className="p-2 rounded-lg bg-slate-800">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Call Us</div>
                <div className="font-mono text-sm font-semibold">
                  870-393-0067
                </div>
              </div>
            </a>

            {/* CTA Button */}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
