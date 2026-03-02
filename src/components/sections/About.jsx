import React from "react";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder Image */}
          <div data-aos="fade-right">
            <img
              src="https://via.placeholder.com/500x600"
              alt="About Me"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* About Text */}
          <div data-aos="fade-left">
            <h6 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">
              Tentang Saya
            </h6>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Membangun Website yang Fungsional & Menarik
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {portfolioData.about}
            </p>

            {/* Tech Stack */}
            <h5 className="text-xl font-bold text-gray-900 mb-6 mt-8">
              Tech Stack & Tools
            </h5>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {portfolioData.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mb-3 object-contain"
                  />
                  <p className="font-bold text-sm text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-900 hover:text-white transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
