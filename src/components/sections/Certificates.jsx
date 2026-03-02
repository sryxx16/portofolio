import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Kita buang EffectCoverflow, balik ke gaya bersih tapi interaktif
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolioData } from "../../data/portfolio";
import CertificateModal from "../CertificateModal";
import { motion } from "framer-motion";
import AnimatedText from "../animations/AnimatedText";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Duplikasi data agar infinite loop Swiper tetap mulus tanpa bug blank space
  const displayCerts =
    portfolioData.certificates.length <= 5
      ? [
          ...portfolioData.certificates,
          ...portfolioData.certificates,
          ...portfolioData.certificates,
        ]
      : portfolioData.certificates;

  return (
    <>
      <section id="certificates" className="py-24  relative overflow-hidden">
        {/* Dekorasi Cahaya Modern */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              ACHIEVEMENT
              <span className="w-8 h-[2px] bg-cyan-400"></span>
            </h6>
            <div className="flex justify-center">
              <AnimatedText
                text="Sertifikasi & Penghargaan"
                className="text-4xl md:text-5xl font-black text-white"
              />
            </div>
            <p className="text-gray-400 mt-5 max-w-xl mx-auto">
              Kumpulan sertifikasi dan penghargaan sebagai bukti dedikasi dalam
              mengembangkan skill secara profesional.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group/swiper" /* <-- Ini kunci efek Spotlight-nya */
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              speed={800} /* Transisi geser lebih mulus (0.8 detik) */
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: {
                  slidesPerView: 4,
                } /* Di layar besar tampil 4 biar gak bantet */,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }} /* Titik bawahnya bisa ngecil-ngecil rapi */
              className="pb-20 pt-4 px-2"
            >
              {displayCerts.map((cert, index) => (
                <SwiperSlide key={`${cert.id}-${index}`} className="h-auto">
                  <div
                    // Trik Spotlight: Saat group/swiper di hover, semua opacity-40. Kecuali yang lagi di hover langsung (!opacity-100)
                    className="bg-[#111827] border border-white/5 rounded-[1.5rem] overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)] hover:border-cyan-500/30 group/card relative group-hover/swiper:opacity-40 hover:!opacity-100 hover:scale-[1.02]"
                    onClick={() => setSelectedCert(cert)}
                  >
                    {/* Image Container: Dikasih padding biar kayak dibingkai (Gak nempel ujung) */}
                    <div className="p-4 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-xl h-56 w-full bg-[#0a0f1d] flex items-center justify-center group-hover/card:ring-1 group-hover/card:ring-cyan-500/20 transition-all">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain p-2 group-hover/card:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay Kaca pas di hover */}
                        <div className="absolute inset-0 bg-[#0a0f1d]/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-cyan-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center transform translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                            <i className="bi bi-eye-fill text-xl"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section yang lebih minimalis */}
                    <div className="px-6 pb-6 pt-2 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-[1px] bg-cyan-500/50"></div>
                        <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
                          {cert.year}
                        </span>
                      </div>
                      <h6 className="font-bold text-white mb-2 text-lg leading-snug group-hover/card:text-cyan-400 transition-colors line-clamp-2">
                        {cert.title}
                      </h6>
                      <p className="text-gray-500 text-sm mt-auto font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Efek Glow bawah kartu */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}
