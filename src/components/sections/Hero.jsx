import React from "react";
import { portfolioData } from "../../data/portfolio";
import profileImg from "../../assets/images/Cuplikan layar 2026-03-02 172647.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Teks Perkenalan */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            <h5 className="text-cyan-400 uppercase tracking-[4px] font-semibold mb-2">
              Hello, I'm
            </h5>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {portfolioData.name}
            </h1>
            <p className="text-cyan-400 text-lg md:text-xl font-medium mb-6">
              {portfolioData.title}
            </p>
            <p className="text-gray-400 max-w-xl mb-8 leading-relaxed">
              {portfolioData.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6 justify-center lg:justify-start">
              <a
                href={portfolioData.contacts.github}
                className="text-white text-2xl hover:text-cyan-400 transition-colors"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href={portfolioData.contacts.linkedin}
                className="text-white text-2xl hover:text-cyan-400 transition-colors"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href={portfolioData.contacts.instagram}
                className="text-white text-2xl hover:text-cyan-400 transition-colors"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Lihat Karya
              </a>
              <a
                href="#contact"
                className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-bold transition-all"
              >
                Kontak Saya
              </a>
            </div>
          </div>

          {/* Foto Profil */}
          <div className="flex-1 flex justify-center" data-aos="fade-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={profileImg}
                alt="Surya Daffa"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-cyan-400 p-2 hover:rotate-3 transition-transform duration-500 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
