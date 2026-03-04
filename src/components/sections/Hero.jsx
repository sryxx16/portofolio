import React from "react";
import { portfolioData } from "../../data/portfolio";
import TiltCard from "../animations/TiltCard";
import AnimatedText from "../animations/AnimatedText";
import DecryptedText from "../animations/DecryptedText";
import { motion } from "framer-motion";

export default function Hero() {
  const roles = ["Web Developer", "Mobile Programming", "Network Engineer"];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-transparent pt-20 pb-10 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* BAGIAN KIRI: TEKS & TOMBOL */}
          <div className="w-full md:w-6/12" data-aos="fade-right">
            <div className="bg-[#020617]/80 backdrop-blur-lg border border-white/10 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-colors"></div>

              <div className="relative z-10">
                <h6 className="text-cyan-400 font-bold tracking-[0.2em] mb-4 flex items-center gap-2 text-xs md:text-sm">
                  <span className="w-8 h-[2px] bg-cyan-400"></span>
                  HELLO, I'M
                </h6>

                <AnimatedText
                  text={portfolioData.name.toUpperCase()}
                  className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight"
                />

                {/* ANIMASI DECRYPTED TEXT UNTUK ROLE */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
                  {roles.map((role, i) => (
                    <div key={i} className="flex items-center">
                      <DecryptedText
                        text={role}
                        speed={100}
                        maxIterations={20}
                        sequential={true}
                        revealDirection="start"
                        animateOn="view"
                        className="text-cyan-400 font-mono text-xs md:text-base font-medium"
                        parentClassName="inline-block"
                      />
                      {i !== roles.length - 1 && (
                        <span className="ml-4 h-4 border-r border-white/20 hidden md:block"></span>
                      )}
                    </div>
                  ))}
                </div>

                <AnimatedText
                  text={portfolioData.description}
                  className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                />

                {/* BAGIAN SOSMED */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <a
                    href={portfolioData.contacts?.github || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    <i className="bi bi-github text-lg md:text-xl"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] transition-all"
                  >
                    <i className="bi bi-linkedin text-lg md:text-xl"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888] transition-all"
                  >
                    <i className="bi bi-instagram text-lg md:text-xl"></i>
                  </a>
                </motion.div>

                {/* Tombol Utama */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 md:gap-5"
                >
                  <a
                    href="#projects"
                    className="px-6 md:px-8 py-3 md:py-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 rounded-xl md:rounded-2xl font-bold transition-all shadow-lg text-center flex items-center justify-center gap-2 group/btn"
                  >
                    Lihat Karya{" "}
                    <i className="bi bi-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
                  </a>
                  <a
                    href="#contact"
                    className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/10 text-white rounded-xl md:rounded-2xl font-bold hover:bg-white/5 transition-all text-center"
                  >
                    Kontak Saya
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: LANYARD (RESPONSIVE) */}
          <div
            className="w-full md:w-5/12 flex justify-center md:justify-end mt-8 md:mt-0"
            data-aos="fade-left"
          >
            <div className="relative group flex justify-center w-full max-w-sm">
              {/* Tali Lanyard - Sembunyi di HP kecil biar tidak berantakan */}
              <div className="hidden sm:block absolute -top-32 left-1/2 -translate-x-1/2 w-[3px] h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-cyan-500 z-0"></div>

              <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

              {/* Ukuran kartu menyesuaikan layar (w-64 di HP, w-80 di Laptop) */}
              <div className="relative w-64 md:w-80 h-[400px] md:h-[450px] perspective-1000 z-10 pt-2">
                <TiltCard>
                  <div className="w-full h-full bg-[#020617] rounded-2xl border border-white/20 p-4 md:p-5 flex flex-col items-center justify-between shadow-2xl relative overflow-hidden">
                    <div className="w-full flex justify-between items-start z-10 mb-4">
                      <span className="text-[8px] md:text-[10px] font-black text-white/50 tracking-[0.2em] uppercase">
                        ACCESS LEVEL:{" "}
                        <span className="text-cyan-400">ADMIN</span>
                      </span>
                      <i className="bi bi-qr-code text-white/40 text-xl md:text-2xl"></i>
                    </div>

                    {/* Foto Profil Menyesuaikan (w-36 di HP, w-48 di Laptop) */}
                    <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full z-10 border-4 border-[#0a0f1d] shadow-[0_0_30px_rgba(6,182,212,0.4)] mb-4">
                      <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1d] relative">
                        <img
                          src={portfolioData.profileImage}
                          alt={portfolioData.name}
                          className="w-full h-full object-cover object-top scale-105 group-hover:scale-115 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    <div className="w-full text-center z-10 flex-grow flex flex-col justify-end pb-2">
                      <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase mb-1">
                        SURYA
                      </h2>
                      <p className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.15em] mb-4">
                        FULLSTACK DEVELOPER
                      </p>

                      <div className="w-full h-6 bg-white/5 border-y border-white/10 flex items-center justify-center gap-1 overflow-hidden">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-full bg-white/20 ${Math.random() > 0.5 ? "w-1" : "w-2"}`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 w-full h-1 bg-cyan-400/30 shadow-[0_0_10px_#06b6d4] z-20 pointer-events-none"
                    ></motion.div>
                  </div>

                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-4 md:-right-6 bottom-16 bg-[#0a0f1d] border border-cyan-500/50 px-3 md:px-4 py-1.5 md:py-2 rounded-xl shadow-xl z-30"
                    style={{ transform: "translateZ(50px) rotate(5deg)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-green-500"></span>
                      </span>
                      <p className="text-[8px] md:text-[10px] font-black text-white uppercase tracking-widest">
                        Available
                      </p>
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
