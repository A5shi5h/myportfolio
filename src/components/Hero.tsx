"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: "inset(0 0 0 0)" }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white"
    >
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-7xl w-full relative">

          {/* Left Content */}
          <motion.div
            className="z-20 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            
            {/* Overlapping Text Effect */}
          <div className="absolute left-0 bottom-20 md:bottom-32 z-10 md:w-screen px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.3, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-[10vw] md:text-[7vw] font-extrabold text-gray-100 opacity-10 leading-none pointer-events-none select-none"
            >
              Web Developer
            </motion.div>
          </div>

            <p className="text-lg text-gray-600 max-w-1xl">
              I specialize in building dynamic, responsive websites using modern frameworks like React and Next.js. My focus is on crafting seamless user experiences with clean, maintainable code.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative w-full h-[400px] md:h-[500px] z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/image.jpeg" // replace with your image path
                alt="Profile"
                fill
                className="object-cover rounded-3xl shadow-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
    </section>
    </motion.section>
  );
};

export default Hero;
