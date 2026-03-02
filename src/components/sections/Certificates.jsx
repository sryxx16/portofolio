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
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h6 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">
              Achievement
            </h6>
            <h2 className="text-4xl font-bold text-gray-900">
              Sertifikasi & Penghargaan
            </h2>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            navigation
            pagination={{ clickable: true }}
            className="pb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {portfolioData.certificates.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div
                  className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Certificate Image - Fixed Height Thumbnail */}
                  <div className="relative overflow-hidden h-80 bg-gray-200 flex-shrink-0">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center">
                      <i className="bi bi-zoom-in text-white text-4xl opacity-0 hover:opacity-100 transition-opacity"></i>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-4 text-center flex-grow flex flex-col justify-center">
                    <h6 className="font-bold text-gray-900 mb-1 line-clamp-2">
                      {cert.title}
                    </h6>
                    <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-cyan-400 font-bold text-sm">{cert.year}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
}
