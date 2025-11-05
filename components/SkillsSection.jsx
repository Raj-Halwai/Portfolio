"use client";

import { motion } from "framer-motion";
// Import the real icons
import { SiAdobeaftereffects } from "react-icons/si";
import { FaMagic } from "react-icons/fa";
import { FiVideo } from "react-icons/fi"; // Use FiVideo as a placeholder for CapCut

const skills = [
  {
    icon: <SiAdobeaftereffects className="w-12 h-12" />,
    name: "After Effects",
  },
  {
    icon: <FiVideo className="w-12 h-12" />, // Use the correct icon here
    name: "CapCut",
  },
  {
    icon: <FaMagic className="w-12 h-12" />,
    name: "Alight Motion",
  },
];

export default function SkillsSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Favorite <span className="text-gradient">Tools</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-8 bg-gray-900/50 rounded-2xl border border-gray-700"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(147, 51, 234, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-accent-purple mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}