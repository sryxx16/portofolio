import React from "react";
import { portfolioData } from "../../data/portfolio";
import TiltCard from "../animations/TiltCard";
import AnimatedText from "../animations/AnimatedText";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24  relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Foto dengan Efek Tilt 3D */}
          <div data-aos="fade-right" className="relative group">
            <div className="absolute inset-0 bg-cyan-500 rounded-3xl blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="h-[400px] md:h-[500px] w-full perspective-1000">
              <TiltCard>
                <div className="w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 overflow-hidden">
                  <img
                    src="https://via.placeholder.com/500x600" // Nanti ganti dengan foto Abang yg lain
                    alt="About Me"
                    className="rounded-2xl w-full h-full object-cover shadow-2xl filter brightness-90 group-hover:brightness-100 transition-all duration-500"
                  />
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Bagian Teks About yang Sudah Bersih */}
          <div data-aos="fade-left">
            <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              TENTANG SAYA
            </h6>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Membangun Website yang{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Fungsional & Menarik
              </span>
            </h2>

            <div className="mb-12">
              <AnimatedText
                text={portfolioData.about}
                className="text-gray-400 text-lg leading-relaxed"
              />
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-3 border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-500 hover:text-gray-900 transition-colors duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
            >
              <i className="bi bi-cloud-arrow-down-fill text-xl"></i> Download
              CV
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
