import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const images = project.images || [project.image];

  // Mengunci scroll body saat modal terbuka
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
          className="relative bg-[#0d1326]/90 border border-white/10 rounded-[2rem] w-full max-w-5xl max-h-[95vh] overflow-hidden flex flex-col shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close Modal Utama */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl hover:text-cyan-400 transition-colors z-[60] bg-[#0a0f1d]/50 rounded-full w-12 h-12 flex items-center justify-center border border-white/10"
          >
            ✕
          </button>

          {/* Area Gambar (Bisa Diklik untuk Zoom) */}
          <div className="relative w-full h-[40vh] md:h-[50vh] bg-black overflow-hidden flex-shrink-0 group">
            <img
              src={images[currentImageIdx]}
              className="w-full h-full object-cover cursor-zoom-in transition-transform duration-500 group-hover:scale-105"
              alt={project.title}
              onClick={() => setIsZoomed(true)}
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="bg-black/60 text-white px-4 py-2 rounded-full text-xs backdrop-blur-md border border-white/20">
                <i className="bi bi-search"></i> Klik untuk lihat detail
              </span>
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-cyan-500 transition-colors z-20"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-cyan-500 transition-colors z-20"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Area Info Project */}
          <div className="p-8 md:p-10 overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-grow">
                <h3 className="text-3xl font-black text-white mb-4">
                  {project.title}
                </h3>

                {project.detailedDescription?.achievement && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6 flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="text-yellow-500 font-bold text-sm uppercase tracking-wider">
                        Achievement
                      </p>
                      <p className="text-white text-sm">
                        {project.detailedDescription.achievement}
                      </p>
                    </div>
                  </div>
                )}

                {project.detailedDescription ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
                        Project Overview
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {project.detailedDescription.overview}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-bold text-xs uppercase tracking-widest mb-2">
                        My Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {project.detailedDescription.responsibilities.map(
                          (r, i) => (
                            <li
                              key={i}
                              className="text-gray-400 text-sm flex gap-2"
                            >
                              <span className="text-cyan-500">▹</span> {r}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {project.detailedDescription && (
                <div className="w-full md:w-72 space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 h-fit">
                  <h4 className="text-white font-bold text-xs uppercase mb-4 border-b border-white/10 pb-2">
                    Tech Stack
                  </h4>
                  <div className="space-y-4">
                    {Object.entries(project.detailedDescription.techStack).map(
                      ([key, techs]) => (
                        <div key={key}>
                          <p className="text-[10px] text-gray-500 uppercase font-bold mb-2">
                            {key.replace("_", " ")}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded border border-cyan-500/20"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-4 mt-10">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-all"
                >
                  Kunjungi Website
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 text-white px-8 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition-all"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* OVERLAY ZOOM (Lightbox) - DITAMBAHKAN NAVIGASI */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex flex-col items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            {/* Tombol Close Zoom */}
            <motion.button
              className="absolute top-6 right-6 text-white text-3xl hover:text-cyan-400 z-[1010] bg-white/10 rounded-full w-14 h-14 flex items-center justify-center border border-white/20"
              onClick={() => setIsZoomed(false)}
            >
              ✕
            </motion.button>

            {/* Navigasi Tombol (Kiri) */}
            {images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-cyan-400 text-5xl transition-colors z-[1010] p-4"
              >
                ‹
              </button>
            )}

            {/* Container Gambar dengan Fitur Drag/Geser */}
            <motion.div
              className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentImageIdx} // Supaya ada animasi saat ganti gambar
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                drag="x" // Mengaktifkan fitur geser horizontal
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -100) handleNext(e);
                  else if (swipe > 100) handlePrev(e);
                }}
                src={images[currentImageIdx]}
                alt="Zoomed Detail"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
              />
            </motion.div>

            {/* Navigasi Tombol (Kanan) */}
            {images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-cyan-400 text-5xl transition-colors z-[1010] p-4"
              >
                ›
              </button>
            )}

            {/* Indikator Angka */}
            <div className="mt-4 text-gray-500 font-medium tracking-widest bg-white/5 px-4 py-1 rounded-full border border-white/10">
              {currentImageIdx + 1} / {images.length}
            </div>

            <p className="mt-4 text-gray-500 text-xs tracking-widest uppercase">
              Geser gambar atau gunakan tombol untuk navigasi
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
