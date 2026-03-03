import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
// Import Timeline dan Preloader yang baru
import Timeline from "./components/sections/Timeline";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/animations/AnimatedBackground";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="relative text-white antialiased">
      {/* 1. Layar Loading Paling Depan */}
      <Preloader />

      {/* Background Animasi Global */}
      <AnimatedBackground />

      {/* Konten Website */}
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* 2. Taruh Timeline pas di bawah About */}
        <Timeline />
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
