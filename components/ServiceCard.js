"use client";

import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description, price }) {
  return (
    <motion.div
      className="relative p-6 bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden"
      whileHover="hover"
    >
      {/* Gradient glow effect on hover */}
      <motion.div
        className="absolute inset-[-2px] rounded-2xl z-0"
        variants={{
          hover: {
            background: "linear-gradient(to right, #9333ea, #3b82f6)",
            scale: 1.02,
          },
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Content */}
      <div className="relative z-10 bg-gray-900/0 rounded-xl p-4">
        <div className="text-accent-blue mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {price && (
          <span className="font-semibold text-lg text-gradient">{price}</span>
        )}
      </div>
    </motion.div>
  );
}