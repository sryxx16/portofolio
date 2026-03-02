import React from "react";
import { portfolioData } from "../../data/portfolio";
import TiltCard from "../animations/TiltCard";
import AnimatedText from "../animations/AnimatedText"; // 1. Import komponen teks kita
import { motion } from "framer-motion"; // 2. Import motion untuk elemen mengambang

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center  pt-20 overflow-hidden relative"
    >
      {/* BACKGROUND FLOATING ORBS (Bergerak naik turun terus menerus) */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-6/12" data-aos="fade-right">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-colors"></div>

              <div className="relative z-10">
                <h6 className="text-cyan-400 font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-cyan-400"></span>
                  HELLO, I'M
                </h6>

                {/* 3. Gunakan AnimatedText untuk Nama */}
                <AnimatedText
                  text={portfolioData.name.toUpperCase()}
                  className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
                />

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Web Developer",
                    "Mobile Programming",
                    "Network Engineer",
                  ].map((role, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.2 }} // Muncul bergantian dari kiri
                      className="text-cyan-400 font-medium text-sm md:text-base border-r border-white/20 last:border-0 pr-4 mr-2"
                    >
                      {role}
                    </motion.span>
                  ))}
                </div>

                {/* 4. Gunakan AnimatedText untuk Deskripsi */}
                <AnimatedText
                  text={portfolioData.description}
                  className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
                />

                <div className="flex flex-wrap gap-5">
                  <a
                    href="#projects"
                    className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 rounded-2xl font-bold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2 group/btn"
                  >
                    Lihat Karya
                    <i className="bi bi-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 border-2 border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all"
                  >
                    Kontak Saya
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-5/12 flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            {/* Foto tetap menggunakan efek TiltCard 3D kita */}
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity scale-110"></div>
              <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] perspective-1000">
                <TiltCard>
                  <div className="w-full h-full rounded-full border-[8px] border-cyan-500/50 p-3 overflow-hidden shadow-[0_0_70px_rgba(6,182,212,0.4)] bg-[#0a0f1d] transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-cyan-500/60">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-cyan-900 to-cyan-700">
                      <img
                        src="/assets/images/fotoprojects/foto sendiiri.png"
                        alt={portfolioData.name}
                        className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Efek Floating untuk Badge "READY TO WORK" */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl hidden md:block"
                    style={{ transform: "translateZ(80px)" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-cyan-500 rounded-xl">
                        <i className="bi bi-patch-check-fill text-gray-900"></i>
                      </div>
                      <div>
                        <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                          Status
                        </p>
                        <p className="text-sm font-black text-white">
                          READY TO WORK
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
