"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white px-6 py-4 flex justify-between items-center">
      {/* Brand */}
      <div className="text-xl font-bold">YourName</div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black/40 text-white px-6 py-10 flex flex-col gap-6 font-medium md:hidden z-40"
          >
            <button title="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4"
            >
            </button>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
