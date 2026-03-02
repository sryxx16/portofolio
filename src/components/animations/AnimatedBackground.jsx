import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  // Kurangi jumlah partikel dari 30 jadi 15 aja biar iGPU nafas
  const particles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#060913] pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1d]/50 via-[#0d1326]/50 to-[#0a0f1d]/50"></div>

      {/* BOLA CAHAYA 1: Animasikan opacity aja, gak usah gerak/scale. Jauh lebih enteng! */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[100px]"
        style={{ willChange: "opacity" }} // Hint buat browser biar lebih ngebut
      ></motion.div>

      {/* BOLA CAHAYA 2 */}
      <motion.div
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-600/10 blur-[120px]"
        style={{ willChange: "opacity" }}
      ></motion.div>

      {/* Partikel Kosmik (Tanpa Shadow & Diperlambat dikit) */}
      {particles.map((_, i) => {
        const size = Math.random() * 2 + 1; // Ukuran max 3px
        const duration = Math.random() * 20 + 20; // Diperlambat biar lebih natural & enteng
        const startY = Math.random() * 100;
        const startX = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{ y: `${startY}vh`, x: `${startX}vw`, opacity: 0 }}
            animate={{
              y: [`${startY}vh`, `${startY - 20}vh`], // Cuma naik ke atas
              opacity: [0, Math.random() * 0.4 + 0.1, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            // Buang shadow, cukup pakai warna cerah biasa
            className="absolute rounded-full bg-cyan-300"
            style={{
              width: size,
              height: size,
              willChange: "transform, opacity", // Kunci optimasi GPU
            }}
          />
        );
      })}
    </div>
  );
}
