import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { portfolioData } from "../../data/portfolio";
import CertificateModal from "../CertificateModal";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section id="certificates" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12" data-aos="fade-up">
            <h6 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">
              Achievement
            </h6>
            <h2 className="text-4xl font-bold text-gray-900">
              Sertifikasi & Penghargaan
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            // Tambahkan properti ini untuk efek 1-2-3 -> 2-3-4 -> 3-4-1
            loop={true}
            centeredSlides={false}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 1, // Geser 1 slide saja
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 1, // Geser 1 slide saja
              },
            }}
            navigation
            pagination={{ clickable: true }}
            className="pb-12 certificate-swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {portfolioData.certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div
                  className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer h-full flex flex-col border border-gray-100"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden h-64 md:h-80 bg-gray-200 flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <i className="bi bi-zoom-in text-white text-4xl"></i>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 text-center flex-grow flex flex-col justify-center">
                    <h6 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg">
                      {cert.title}
                    </h6>
                    <p className="text-gray-500 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-cyan-500 font-extrabold text-sm tracking-wider">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
