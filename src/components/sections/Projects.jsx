import React, { useState } from "react";
import { portfolioData } from "../../data/portfolio";
import ProjectModal from "../ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h6 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">
              Portfolio
            </h6>
            <h2 className="text-4xl font-bold text-gray-900">Karya Terbaru</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onClick={() =>
                  project.images
                    ? setSelectedProject(project)
                    : window.open(project.link)
                }
              >
                {/* Project Image */}
                <div className="overflow-hidden h-48 bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h5 className="font-bold text-gray-900 mb-3 text-lg">
                    {project.title}
                  </h5>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        Live Demo <i className="bi bi-arrow-up-right-circle"></i>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <i className="bi bi-github"></i> Code
                      </a>
                    )}
                    {project.images && (
                      <button className="text-cyan-400 text-sm font-bold">
                        <i className="bi bi-arrows-fullscreen"></i> Lihat Galeri
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
