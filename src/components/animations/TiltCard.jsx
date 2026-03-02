import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({ children }) {
  const ref = useRef(null);

  // Nilai pergerakan mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Bikin pergerakannya memantul halus (spring)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Mengubah posisi mouse menjadi rotasi derajat (maksimal 15 derajat)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Kalkulasi posisi mouse relatif terhadap tengah elemen
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Kembalikan ke posisi awal saat mouse pergi
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full flex items-center justify-center cursor-pointer"
    >
      {/* translateZ(50px) ini yang bikin isinya seolah-olah melayang keluar dari background */}
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
