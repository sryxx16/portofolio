import React from "react";
import { portfolioData } from "../../data/portfolio";
import AnimatedText from "../animations/AnimatedText";
import { motion } from "framer-motion";

export default function About() {
  // Array untuk poin-poin keunggulan
  const highlights = [
    "Interactive UI/UX",
    "Responsive Design",
    "Clean & Modern Code",
    "RESTful API Integration",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* BAGIAN KIRI: FOTO & FLOATING CARDS */}
          <div
            data-aos="fade-right"
            className="relative w-full flex justify-center items-center h-[400px] md:h-[500px]"
          >
            <div className="absolute bg-cyan-500/20 w-64 h-64 md:w-80 md:h-80 rounded-full blur-[60px] animate-pulse"></div>

            <div className="relative w-56 h-72 md:w-64 md:h-80 z-10 rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
              <img
                src={portfolioData.profileImage}
                alt="About Me"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 md:top-16 left-0 md:-left-4 z-20 bg-[#0a0f1d]/80 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 md:gap-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <i className="bi bi-briefcase-fill text-lg md:text-xl"></i>
              </div>
              <div>
                <h4 className="text-white font-black text-lg md:text-xl">
                  10+
                </h4>
                <p className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-wider">
                  PROJECTS
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 md:bottom-16 right-0 md:-right-8 z-20 bg-[#0a0f1d]/80 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3"
            >
              <div className="flex -space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1e293b] border-2 border-[#0a0f1d] flex items-center justify-center text-cyan-400">
                  <i className="bi bi-code-slash"></i>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1e293b] border-2 border-[#0a0f1d] flex items-center justify-center text-blue-400">
                  <i className="bi bi-phone"></i>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1e293b] border-2 border-[#0a0f1d] flex items-center justify-center text-purple-400">
                  <i className="bi bi-router"></i>
                </div>
              </div>
              <div className="ml-2">
                <p className="text-white text-[10px] md:text-xs font-bold leading-tight">
                  FULLSTACK
                  <br />
                  DEV
                </p>
              </div>
            </motion.div>
          </div>

          {/* BAGIAN KANAN: TEKS & TOMBOL (DIMODIFIKASI) */}
          <div data-aos="fade-left">
            <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              TENTANG SAYA
            </h6>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Web Development &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Software Engineering
              </span>
            </h2>

            {/* Teks Paragraf */}
            <div className="mb-8">
              <AnimatedText
                text={portfolioData.about}
                className="text-gray-400 text-lg leading-relaxed"
              />
            </div>

            {/* Poin Keunggulan (Checkmarks) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-gray-900 transition-colors duration-300">
                    <i className="bi bi-check2 text-sm font-bold"></i>
                  </div>
                  <span className="text-gray-300 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Grup Tombol Aksi */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/New CV Surya Daffa.pdf"
                className="inline-flex items-center gap-3 bg-cyan-500 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                <i className="bi bi-cloud-arrow-down-fill text-xl"></i> Download
                CV
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="inline-flex items-center gap-3 border-2 border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/5 hover:border-white/20 transition-colors duration-300"
              >
                Lihat Portfolio <i className="bi bi-arrow-right"></i>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
