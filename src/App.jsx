import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

// 1. IMPORT BACKGROUND ANIMASI
import AnimatedBackground from "./components/animations/AnimatedBackground";

function App() {
  return (
    <div className="relative text-white antialiased">
      {/* 2. PASANG BACKGROUND DI SINI (Paling Atas) */}
      <AnimatedBackground />

      {/* Konten Website Abang */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
