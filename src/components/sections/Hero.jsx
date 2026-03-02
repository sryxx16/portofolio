import React from "react";
import { portfolioData } from "../../data/portfolio";
// 1. IMPORT TILTCARD DI SINI
import TiltCard from "../animations/TiltCard";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#0a0f1d] pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* ... BAGIAN TEKS INTRODUCTION (TIDAK ADA YANG DIUBAH) ... */}
          <div className="w-full md:w-6/12" data-aos="fade-right">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-colors"></div>
              <div className="relative z-10">
                <h6 className="text-cyan-400 font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-cyan-400"></span>
                  HELLO, I'M
                </h6>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  {portfolioData.name.toUpperCase()}
                </h1>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Web Developer",
                    "Mobile Programming",
                    "Network Engineer",
                  ].map((role, i) => (
                    <span
                      key={i}
                      className="text-cyan-400 font-medium text-sm md:text-base border-r border-white/20 last:border-0 pr-4 mr-2"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                  {portfolioData.description}
                </p>
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

          {/* BAGIAN FOTO - KITA BUNGKUS DENGAN TILTCARD */}
          <div
            className="w-full md:w-5/12 flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            <div className="relative group w-full flex justify-center md:justify-end">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity scale-110"></div>

              {/* 2. BUNGKUS CONTAINER FOTO DENGAN TILTCARD */}
              <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] perspective-1000">
                <TiltCard>
                  <div className="w-full h-full rounded-full border-[8px] border-cyan-500/50 p-3 overflow-hidden shadow-[0_0_70px_rgba(6,182,212,0.4)] bg-[#0a0f1d] transition-all duration-500 group-hover:border-cyan-400 group-hover:shadow-cyan-500/60">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-cyan-900 to-cyan-700">
                      <img
                        src="/assets/images/fotoprojects/foto sendiiri.png"
                        alt={portfolioData.name}
                        className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                        style={{
                          filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))",
                        }}
                      />
                    </div>
                  </div>

                  {/* Label Badge Ikut Melayang karena di dalam TiltCard */}
                  <div
                    className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl hidden md:block"
                    style={{
                      transform: "translateZ(80px)",
                    }} /* Badge ini melayang lebih tinggi dari foto */
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
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
