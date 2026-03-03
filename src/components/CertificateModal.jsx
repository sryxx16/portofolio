import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificateModal({ cert, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = cert.images || [cert.image];

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
        className="fixed inset-0 bg-[#0a0f1d]/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-10"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-[#0d1326]/90 border border-white/10 rounded-[2rem] shadow-[0_0_50px_rgba(6,182,212,0.15)] w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tombol Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-2xl hover:text-cyan-400 transition-colors z-50 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-md"
          >
            ✕
          </button>

          {/* KIRI: Area Gambar */}
          <div className="relative w-full md:w-3/5 h-[40vh] md:h-auto bg-[#060913] flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-white/5">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <img
              src={images[currentImageIdx]}
              alt={`${cert.title} ${currentImageIdx + 1}`}
              className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl rounded-xl"
            />

            {/* Navigasi Carousel jika gambar > 1 */}
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
                {/* Indikator Titik */}
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

          {/* KANAN: Info & Penjelasan */}
          <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col overflow-y-auto bg-gradient-to-br from-white/5 to-transparent">
            <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest w-max mb-6">
              Tahun: {cert.year}
            </span>

            <h3 className="text-3xl font-black text-white mb-4 leading-tight">
              {cert.title}
            </h3>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                <i className="bi bi-award-fill text-xl"></i>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">
                  Diterbitkan Oleh
                </p>
                <p className="text-white font-medium">{cert.issuer}</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-8"></div>

            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <i className="bi bi-info-circle text-cyan-400"></i> Detail
              Pencapaian
            </h4>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {cert.description
                ? cert.description
                : "Deskripsi sertifikat belum tersedia. Penghargaan ini merupakan bukti dedikasi dan pengembangan keahlian di bidang teknologi."}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
