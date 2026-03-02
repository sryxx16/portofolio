import React, { useState, useEffect } from "react";

export default function CertificateModal({ cert, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images =
    cert.images && cert.images.length > 0 ? cert.images : [cert.image];

  // Fungsi Navigasi
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-2 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close Lebih Jelas */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-3xl hover:text-red-500 transition z-[1000] bg-white/10 w-12 h-12 rounded-full flex items-center justify-center"
        >
          ✕
        </button>

        {/* Container Utama Gambar */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Gambar: Menggunakan max-h-[85vh] agar lebih besar dari sebelumnya */}
          <div className="relative flex items-center justify-center w-full h-full max-h-[85vh]">
            <img
              src={images[currentImageIdx]}
              alt={cert.title}
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            />

            {/* Navigasi Panah (Kiri & Kanan) */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-5 bg-black/40 hover:bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all text-2xl"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-5 bg-black/40 hover:bg-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all text-2xl"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Info Sertifikat di Bawah Gambar */}
          <div className="w-full max-w-3xl text-center mt-4 px-4">
            <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-lg mt-1">
              {cert.issuer} |{" "}
              <span className="text-cyan-400 font-bold">{cert.year}</span>
            </p>
          </div>

          {/* Indikator Titik */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`h-1.5 transition-all rounded-full ${
                    idx === currentImageIdx
                      ? "bg-cyan-400 w-8"
                      : "bg-white/30 w-3"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
