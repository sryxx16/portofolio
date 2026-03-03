import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  // Set loading bertahan selama 2.5 detik sebelum hilang
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          // Efek ngilang: perlahan transparan dan naik ke atas
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#060913] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center">
            {/* Teks Logo Berkedip */}
            <motion.h1
              animate={{
                opacity: [0.5, 1, 0.5],
                textShadow: [
                  "0px 0px 0px #06b6d4",
                  "0px 0px 20px #06b6d4",
                  "0px 0px 0px #06b6d4",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 tracking-tighter mb-4"
            >
              SURYA<span className="text-white">.</span>
            </motion.h1>

            {/* Progress Bar Loading */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-cyan-400/50 text-xs font-bold tracking-[0.3em] mt-4 uppercase"
            >
              Initiating...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
