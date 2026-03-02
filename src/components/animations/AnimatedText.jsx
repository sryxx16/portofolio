import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className }) {
  // Memecah kalimat menjadi array kata-kata
  const words = text.split(" ");

  // Konfigurasi animasi container (mengatur jeda antar kata)
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Konfigurasi animasi per kata (muncul dari bawah ke atas)
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible" // Animasi jalan saat elemen masuk ke layar
      viewport={{ once: true }} // Jalan sekali saja saat di-scroll
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
