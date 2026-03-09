import React, { useState, useEffect } from "react";
// Pastikan path ini benar sesuai lokasi file Navbar.jsx kamu
import { portfolioData } from "../data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" }, // Penambahan Certificates
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center pt-6">
      <div
        className={`
          transition-all duration-500 px-6 py-3 rounded-full flex items-center gap-8
          ${
            isScrolled
              ? "bg-[#020617]/70 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] w-[90%] md:w-auto"
              : "bg-transparent w-[95%] md:w-auto"
          }
        `}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center font-black text-gray-900 transition-transform group-hover:rotate-12">
            S
          </div>
          <span className="text-white font-bold tracking-tighter hidden sm:block">
            SURYA<span className="text-cyan-400">.DEV</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-cyan-400 text-sm font-medium transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={portfolioData.resumeUrl || "#"}
            className="px-5 py-2 bg-white/5 hover:bg-cyan-500 hover:text-gray-900 border border-white/10 hover:border-cyan-500 rounded-full text-xs font-bold text-white transition-all duration-300"
          >
            LET'S TALK
          </a>
        </div>

        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i
            className={`bi ${isMobileMenuOpen ? "bi-x-lg" : "bi-grid-3x3-gap-fill"} text-xl`}
          ></i>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-[#020617]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:hidden z-[99]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 text-lg font-semibold py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-4 bg-cyan-500 text-gray-900 rounded-2xl font-bold text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
