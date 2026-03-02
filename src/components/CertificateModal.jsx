import React, { useState, useEffect } from "react";

export default function CertificateModal({ cert, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = cert.images || [cert.image];

  // Disable body scroll ketika modal terbuka
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex flex-col items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-red-500 transition z-10 bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image and Info - scrollable if needed */}
        <div className="w-full h-full flex flex-col items-center justify-center overflow-auto pt-16 pb-8">
          <div className="flex flex-col items-center w-full max-w-5xl mx-auto">
            {/* Image: fit to width, allow vertical scroll for tall images */}
            <div className="w-full flex justify-center items-center">
              <img
                src={images[currentImageIdx]}
                alt={`${cert.title} ${currentImageIdx + 1}`}
                className="max-w-full max-h-[90vh] object-contain object-top shadow-2xl rounded-xl border border-gray-700 bg-black"
                style={{ display: 'block' }}
              />
            </div>
            {/* Navigation Buttons */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  className="bg-white/20 hover:bg-white/40 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full transition"
                >
                  ‹
                </button>
                <div className="flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      className={`h-2 rounded-full transition ${
                        idx === currentImageIdx ? "bg-cyan-400 w-8" : "bg-white/50 w-2"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="bg-white/20 hover:bg-white/40 text-white text-3xl w-12 h-12 flex items-center justify-center rounded-full transition"
                >
                  ›
                </button>
              </div>
            )}
            {/* Certificate Info */}
            <div className="w-full max-w-2xl mx-auto mt-6 text-center bg-black/70 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-cyan-400 font-bold text-lg mt-2">{cert.year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
