import React, { useState, useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Disable body scroll ketika modal terbuka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handlePrev = () => {
    setCurrentImageIdx((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIdx((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-black rounded-2xl w-full h-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition z-10 bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Carousel */}
        <div className="relative flex-1 overflow-hidden flex items-center justify-center">
          <img
            src={project.images[currentImageIdx]}
            alt={`${project.title} ${currentImageIdx + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full transition z-20"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full transition z-20"
              >
                ›
              </button>

              {/* Pagination */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`h-2 rounded-full transition ${
                      idx === currentImageIdx ? "bg-cyan-400 w-8" : "bg-white/50 w-2"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Info */}
        <div className="bg-gradient-to-t from-black via-black/80 to-transparent p-6 border-t border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.description}</p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full font-bold transition flex items-center gap-2"
              >
                <i className="bi bi-github"></i> Lihat Code Repository
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-6 py-2 rounded-full font-bold transition flex items-center gap-2"
              >
                <i className="bi bi-arrow-up-right"></i> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
