import React from "react";
import { portfolioData } from "../../data/portfolio";
import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

export default function TechStack() {
  // Kita gandakan datanya biar efek berjalannya (scroll) nggak pernah putus
  const duplicatedSkills = [
    ...portfolioData.skills,
    ...portfolioData.skills,
    ...portfolioData.skills,
  ];

  return (
    <section
      id="skills"
      className="py-16  border-y border-white/5 relative overflow-hidden"
    >
      {/* Ornamen Cahaya */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-cyan-500/5 rounded-[100%] blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 mb-10 relative z-10">
        <div className="text-center">
          <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            TECH STACK & TOOLS
            <span className="w-8 h-[2px] bg-cyan-400"></span>
          </h6>
          <div className="flex justify-center">
            <AnimatedText
              text="Senjata Andalan"
              className="text-3xl md:text-4xl font-black text-white"
            />
          </div>
        </div>
      </div>

      {/* Area Marquee Berjalan */}
      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Kiri Kanan biar logonya seolah muncul dan hilang dari kegelapan */}
        <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#0a0f1d] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#0a0f1d] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-6 w-max px-4"
          // Animasi geser dari 0% ke -33.33% (karena array kita kali 3)
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }} // Kecepatan jalannya
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-4 px-6 flex items-center gap-4 min-w-[200px] md:min-w-[250px] hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 bg-[#060913] rounded-xl flex items-center justify-center p-2.5 shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                />
              </div>
              <div>
                <p className="font-bold text-white text-md group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </p>
                <p className="text-xs text-gray-500">Experienced</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
