"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0 0 0 0)" }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white"
    >
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hi, I’m Your Name.
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          A passionate full-stack developer crafting beautiful and functional web experiences.
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;
