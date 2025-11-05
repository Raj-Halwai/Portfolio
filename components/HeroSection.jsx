"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Note: You must add a demo.mp4 video to /public/sample-videos/
const backgroundVideoURL = "/sample-videos/demo.mp4";
// Fallback if the video fails
const fallbackImageURL = "/images/hero-fallback.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={fallbackImageURL}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          variants={itemVariants}
        >
          Raj <span className="text-gradient">Halwai</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-body text-gray-200 mb-8"
          variants={itemVariants}
        >
          Creative Video Editor
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-gradient-accent text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-700/50 border border-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600/50 transition-colors duration-300"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}