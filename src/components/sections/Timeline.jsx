import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

export default function Timeline() {
  // Data Riwayat Abang (Bisa diedit nanti)
  const experiences = [
    {
      year: "2023 - Sekarang",
      title: "Mahasiswa IT",
      company: "Universitas Bina Sarana Informatika (UBSI)",
      description:
        "Fokus mendalami pengembangan perangkat lunak, algoritma, dan rekayasa web.",
      icon: "bi-mortarboard-fill",
    },
    {
      year: "2023",
      title: "Sertifikasi Cybersecurity",
      company: "Cisco Networking Academy",
      description:
        "Memahami dasar keamanan jaringan, ancaman siber, dan cara mitigasi yang efektif.",
      icon: "bi-shield-lock-fill",
    },
    {
      year: "2022 - 2023",
      title: "IT Bootcamp Participant",
      company: "Coding Studio & Pelatihan Lainnya",
      description:
        "Mengasah skill praktikal dalam Web Development menggunakan stack modern.",
      icon: "bi-laptop",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[#0a0f1d] border-t border-white/5 relative z-10"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            JOURNEY
            <span className="w-8 h-[2px] bg-cyan-400"></span>
          </h6>
          <div className="flex justify-center">
            <AnimatedText
              text="Jejak Langkah"
              className="text-4xl md:text-5xl font-black text-white"
            />
          </div>
        </div>

        {/* Garis Tengah Vertikal */}
        <div className="relative max-w-4xl mx-auto">
          {/* Garis neon di tengah */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-blue-500/20 to-transparent -translate-x-1/2 md:translate-x-0 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start justify-between mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } flex-row`}
            >
              {/* Ruang Kosong biar selang-seling di desktop */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Icon di Tengah Garis */}
              <div className="absolute left-[15px] md:left-1/2 top-0 w-10 h-10 bg-[#0a0f1d] border-4 border-cyan-500 rounded-full flex items-center justify-center -translate-x-1/2 md:translate-x-[-50%] z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                <i className={`bi ${exp.icon} text-white text-sm`}></i>
              </div>

              {/* Kartu Konten */}
              <div className="w-[85%] md:w-[45%] ml-auto md:ml-0 group">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl hover:border-cyan-500/50 hover:bg-white/10 transition-colors duration-300 shadow-xl">
                  <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {exp.year}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h4>
                  <h6 className="text-sm text-gray-400 font-semibold mb-4 flex items-center gap-2">
                    <i className="bi bi-building"></i> {exp.company}
                  </h6>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
