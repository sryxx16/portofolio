import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = project.images || [project.image];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-[#0a0f1d]/90 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-10"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-[#0d1326]/90 border border-white/10 rounded-[2rem] w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.15)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl hover:text-cyan-400 transition-colors z-50 bg-[#0a0f1d]/50 hover:bg-white/10 border border-white/10 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md"
          >
            ✕
          </button>

          {/* Area Carousel Gambar (Atas) */}
          <div className="relative w-full h-[45vh] md:h-[60vh] bg-[#060913] flex items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#06b6d4_1px,transparent_1px),linear-gradient(90deg,#06b6d4_1px,transparent_1px)] [background-size:40px_40px]"></div>

            <img
              src={images[currentImageIdx]}
              alt={`${project.title} ${currentImageIdx + 1}`}
              className="w-full h-full object-cover opacity-90 relative z-10"
            />
            {/* Gradient bayangan di bawah gambar biar teks bawahnya nyatu */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d1326]/90 to-transparent z-10"></div>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-cyan-500 text-white hover:text-gray-900 border border-white/20 text-2xl w-12 h-12 flex items-center justify-center rounded-full transition-all z-20 backdrop-blur-md"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-cyan-500 text-white hover:text-gray-900 border border-white/20 text-2xl w-12 h-12 flex items-center justify-center rounded-full transition-all z-20 backdrop-blur-md"
                >
                  ›
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-2 rounded-full transition-all ${idx === currentImageIdx ? "bg-cyan-400 w-8" : "bg-white/30 w-2 hover:bg-white/60"}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Area Info Project (Bawah) */}
          <div className="p-8 md:p-10 bg-gradient-to-b from-transparent to-[#0a0f1d] overflow-y-auto relative z-20">
            {project.type && (
              <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-max mb-4">
                {project.type}
              </span>
            )}

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-4xl">
              {project.description}
            </p>

            {/* Tombol Aksi */}
            <div className="flex gap-4 flex-wrap">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-8 py-3.5 rounded-xl font-black transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1"
                >
                  <i className="bi bi-arrow-up-right"></i> Kunjungi Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center gap-2 hover:-translate-y-1"
                >
                  <i className="bi bi-github"></i> Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
