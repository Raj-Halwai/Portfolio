"use client"; // IMPORTANT: Add this to the very top

import { useState } from "react"; // Add this import
import { motion, AnimatePresence } from "framer-motion"; // Add this import
import ServiceCard from "@/components/ServiceCard";
import {
  FiFilm,
  FiYoutube,
  FiSmartphone,
  FiZap,
  FiMic,
  FiDroplet,
} from "react-icons/fi";
import { FaStar, FaShippingFast } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";

// --- Metadata Note ---
// Since this is a "use client" component, you can't export `metadata`.
// You should move the `export const metadata = { ... }` object from your
// old file into a parent `layout.js` file if you have one.
// For now, it's just removed.

const services = [
  {
    icon: <FiSmartphone size={40} />,
    title: "Reels & Short-Form Edits",
    description:
      "Engaging, fast-paced edits for Instagram Reels, TikTok, and YouTube Shorts.",
    price: "Starting from ₹899",
  },
  {
    icon: <FiYoutube size={40} />,
    title: "YouTube Video Editing",
    description:
      "Full-service editing for vlogs, tutorials, and general content.",
    price: "Custom Range",
  },
  {
    icon: <FiFilm size={40} />,
    title: "Cinematic & Transition Edits",
    description:
      "High-end cinematic sequences with seamless, creative transitions.",
    price: "Starting from ₹1,299",
  },
  {
    icon: <FiZap size={40} />,
    title: "Ads & Brands Product Shoot + Editing",
    description:
      "Polished promotional videos designed to convert and impress.",
    price: "Starting from ₹1,299",
  },
  {
    icon: <FiMic size={40} />,
    title: "Podcast Video Editing",
    description:
      "Multi-cam syncing, audio enhancement, and highlight clips for your podcast.",
    price: "Custom Quote",
  },
  {
    icon: <FiDroplet size={40} />,
    title: "Color Grading & Correction",
    description:
      "Professional color correction and cinematic grading for a stunning look.",
    price: "Starting from ₹1,499",
  },
];

// The features are now in a specific order for your layout:
// 0 = Left, 1 = Right, 2 = Middle
const features = [
  {
    icon: <FaShippingFast size={30} />,
    title: "Fast Delivery", // REASON 1 (Left)
    description:
      "Efficient workflow ensures you get your final product on time, every time.",
  },
  {
    icon: <FaStar size={30} />,
    title: "Creative Transitions", // REASON 2 (Right)
    description:
      "Unique and fluid transitions that make your video stand out.",
  },
  {
    icon: <MdHighQuality size={30} />,
    title: "High Quality Renders", // REASON 3 (Middle)
    description:
      "Exported in 4K or your desired resolution for crystal-clear quality.",
  },
];

// Reusable component for the animated feature card
const AnimatedFeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.4 }}
    className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700 text-center"
  >
    <div className="flex justify-center text-accent-blue mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default function ServicesPage() {
  // NEW: State to track the reveal step
  const [revealStep, setRevealStep] = useState(0);

  // Button labels
  const buttonLabels = ["Reason 1", "Reason 2", "Reason 3"];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Title (Unchanged) */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        What I <span className="text-gradient">Offer</span>
      </h1>
      <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        I provide a range of video editing services tailored to your needs. From
        short-form content to long-form cinematic pieces, I've got you covered.
        You can Mail for more Info and price negotiation
      </p>

      {/* Services Grid (Unchanged) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>

      {/* --- WHY CHOOSE ME SECTION (UPDATED) --- */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why <span className="text-gradient">Choose Me?</span>
        </h2>

        {/* NEW: Button Area - MOVED HERE */}
        {/* I've changed margin-top (mt-12) to margin-bottom (mb-12) */}
        <div className="text-center mb-12">
          <AnimatePresence>
            {/* Show button only if revealStep < 3 */}
            {revealStep < 3 && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                onClick={() => setRevealStep(revealStep + 1)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:scale-105 transition-transform"
              >
                {buttonLabels[revealStep]}
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* NEW: Grid for staged reveal */}
        {/* I added a min-height so the layout doesn't jump when empty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[200px]">
          <AnimatePresence>
            {/* Slot 1: LEFT */}
            {revealStep >= 1 && (
              <AnimatedFeatureCard
                icon={features[0].icon}
                title={features[0].title}
                description={features[0].description}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {/* Slot 2: MIDDLE */}
            {revealStep >= 3 && (
              <AnimatedFeatureCard
                icon={features[2].icon}
                title={features[2].title}
                description={features[2].description}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {/* Slot 3: RIGHT */}
            {revealStep >= 2 && (
              <AnimatedFeatureCard
                icon={features[1].icon}
                title={features[1].title}
                description={features[1].description}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* --- END OF UPDATED SECTION --- */}
    </div>
  );
}