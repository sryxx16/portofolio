import React from "react";
import { portfolioData } from "../../data/portfolio";
import TiltCard from "../animations/TiltCard";
import AnimatedText from "../animations/AnimatedText";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-transparent pt-20 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* BAGIAN KIRI: TEKS & TOMBOL (Sama Seperti Sebelumnya) */}
          <div className="w-full md:w-6/12" data-aos="fade-right">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-colors"></div>

              <div className="relative z-10">
                <h6 className="text-cyan-400 font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-cyan-400"></span>
                  HELLO, I'M
                </h6>

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
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="text-cyan-400 font-medium text-sm md:text-base border-r border-white/20 last:border-0 pr-4 mr-2"
                    >
                      {role}
                    </motion.span>
                  ))}
                </div>

                <AnimatedText
                  text={portfolioData.description}
                  className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
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
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <i className="bi bi-github text-xl"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <i className="bi bi-linkedin text-xl"></i>
                  </a>
                  <a
                    href={portfolioData.contacts?.instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:-translate-y-1 transition-all duration-300 shadow-lg"
                  >
                    <i className="bi bi-instagram text-xl"></i>
                  </a>
                </motion.div>

                {/* Tombol Utama */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex flex-wrap gap-5"
                >
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
                </motion.div>
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: THE DIGITAL ID LANYARD */}
          <div
            className="w-full md:w-5/12 flex justify-center md:justify-end mt-12 md:mt-0"
            data-aos="fade-left"
          >
            <div className="relative group flex justify-center w-full max-w-sm">
              {/* Tali Lanyard (Efek Tali Serat Optik) */}
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[3px] h-32 bg-gradient-to-b from-transparent via-cyan-500/50 to-cyan-500 z-0"></div>
              {/* Klip Lanyard (Besi pengait) */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 border-2 border-gray-400/50 rounded-t-lg bg-gray-300/10 z-20 backdrop-blur-sm"></div>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-400/80 rounded-full z-20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

              {/* Background Glow Kartu */}
              <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

              {/* Kartu Identitas 3D dengan TiltCard */}
              <div className="relative w-72 md:w-80 h-[450px] perspective-1000 z-10 pt-2">
                <TiltCard>
                  {/* Container Kartu Utama */}
                  <div className="w-full h-full bg-[#0a0f1d]/80 backdrop-blur-xl rounded-2xl border border-white/20 p-5 flex flex-col items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-cyan-500/30 group-hover:ring-cyan-400 transition-all duration-500 overflow-hidden relative">
                    {/* Pattern Hologram Tipis (Background ID Card) */}
                    <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(45deg,#06b6d4_25%,transparent_25%,transparent_75%,#06b6d4_75%,#06b6d4),linear-gradient(45deg,#06b6d4_25%,transparent_25%,transparent_75%,#06b6d4_75%,#06b6d4)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>

                    {/* Header Kartu: Logo UBSI & Label */}
                    <div className="w-full flex justify-between items-start z-10 mb-4">
                      <span className="text-[10px] font-black text-white/50 tracking-[0.2em] uppercase">
                        ACCESS LEVEL:{" "}
                        <span className="text-cyan-400">ADMIN</span>
                      </span>
                      <i className="bi bi-qr-code text-white/40 text-2xl"></i>
                    </div>

                    {/* Foto Profil Pop-up (Sticker Style) */}
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full z-10 border-4 border-[#0a0f1d] shadow-[0_0_30px_rgba(6,182,212,0.6)] mb-4">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-tr from-cyan-900 via-blue-800 to-cyan-500 relative">
                        {/* Gambar Pas Foto (Harus PNG transparan kalau mau pop-out, atau foto biasa nggak masalah) */}
                        <img
                          src="/assets/images/fotoprojects/foto sendiiri.png"
                          alt={portfolioData.name}
                          className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Informasi Identitas */}
                    <div className="w-full text-center z-10 flex-grow flex flex-col justify-end pb-2">
                      <h2 className="text-2xl font-black text-white tracking-widest uppercase mb-1 drop-shadow-lg">
                        SURYA
                      </h2>
                      <p className="text-cyan-400 text-xs font-bold tracking-[0.15em] mb-4">
                        FULLSTACK DEVELOPER
                      </p>

                      {/* Barcode/Garis bawah kartu */}
                      <div className="w-full h-6 bg-white/5 border-y border-white/10 flex items-center justify-center gap-1 overflow-hidden">
                        {/* Barcode Palsu */}
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-full bg-white/30 ${Math.random() > 0.5 ? "w-1" : "w-2"}`}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Efek Garis Scan Hologram yang naik turun */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute left-0 w-full h-1 bg-cyan-400/50 shadow-[0_0_10px_#06b6d4] z-20 pointer-events-none"
                    ></motion.div>
                  </div>

                  {/* Badge "READY TO WORK" (Dipindah jadi stiker nempel di kartu) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-6 bottom-16 bg-[#0a0f1d]/90 backdrop-blur-md border border-cyan-500/50 px-4 py-2 rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-30"
                    style={{ transform: "translateZ(50px) rotate(5deg)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <p className="text-[10px] font-black text-white uppercase tracking-widest">
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
