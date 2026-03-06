import React, { useState } from "react";
import { portfolioData } from "../../data/portfolio";
import ProjectModal from "../ProjectModal";
import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Variasi animasi untuk memunculkan container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Variasi animasi untuk kartu (muncul pelan dari bawah)
  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        {/* Ornamen Background */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              FEATURED WORK
              <span className="w-8 h-[2px] bg-cyan-400"></span>
            </h6>
            <div className="flex justify-center">
              <AnimatedText
                text="Karya Pilihan"
                className="text-4xl md:text-5xl font-black text-white"
              />
            </div>
          </div>

          {/* Wrapper Motion untuk Grid Kartu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-16 md:gap-0 relative"
          >
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`relative w-full md:w-[60%] flex group ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end md:ml-auto"
                } ${index !== 0 ? "md:-mt-20" : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Kartu Project */}
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    zIndex: 20,
                    y: -10,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer flex flex-col md:flex-row ring-1 ring-cyan-500/10 hover:ring-cyan-500/50 hover:shadow-cyan-500/10 transition-all duration-500 w-full"
                >
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-60 md:h-auto md:w-2/5 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0f1d] to-transparent opacity-60"></div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                    {project.type && (
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 self-start">
                        {project.type}
                      </span>
                    )}
                    <h5 className="font-extrabold text-white mb-2 text-2xl md:text-3xl group-hover:text-cyan-400 transition-colors leading-tight">
                      {project.title}
                    </h5>

                    {/* Deskripsi Singkat (Dibatasi 2 Baris) */}
                    <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Badge Teknologi Kecil */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] font-semibold bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md uppercase tracking-wider group-hover:text-cyan-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Tombol Detail */}
                    <div className="flex gap-4 flex-wrap mt-auto">
                      <button className="bg-cyan-500 text-gray-900 px-6 py-3 rounded-xl text-sm font-bold hover:bg-cyan-400 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
                        Detail Project <i className="bi bi-eye"></i>
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Angka Project Transparan */}
                <span className="absolute -bottom-10 -left-10 text-[10rem] font-black text-white/5 pointer-events-none group-hover:text-cyan-500/10 transition-colors hidden md:block z-0">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
