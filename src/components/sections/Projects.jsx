import React, { useState } from "react";
import { portfolioData } from "../../data/portfolio";
import ProjectModal from "../ProjectModal";
import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <section id="projects" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
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

          {/* Grid Layout Baru: 1 kolom di mobile, 2 di tablet, 3 di desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioData.projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 cursor-pointer flex flex-col shadow-xl hover:shadow-cyan-500/10">
                  {/* Image Container */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent opacity-80"></div>

                    {/* Type Badge di atas gambar */}
                    {project.type && (
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-[#0a0f1d]/80 backdrop-blur-md border border-cyan-500/20 px-3 py-1 rounded-full">
                          {project.type}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h5 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h5>

                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies
                        ?.slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-[9px] font-medium bg-cyan-500/5 border border-cyan-500/10 text-cyan-300/80 px-2 py-0.5 rounded uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies?.length > 3 && (
                        <span className="text-[9px] text-gray-500">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="w-full py-3 bg-white/5 border border-white/10 hover:bg-cyan-500 hover:text-gray-900 hover:border-cyan-500 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      DETAIL PROJECT
                      <i className="bi bi-arrow-up-right group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"></i>
                    </button>
                  </div>
                </div>
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
