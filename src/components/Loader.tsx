"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.h1
        initial={{ y: 0 }}
        animate={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl font-bold"
      >
        My Portfolio....
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
