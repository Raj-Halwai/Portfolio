"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

// 1. Add "type" to the props
export default function ProjectCard({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  type = "vertical", // Default to vertical just in case
}) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // 2. Set the aspect ratio based on the "type"
  const aspectRatio = type === "vertical" ? "aspect-[4/5]" : "aspect-[16/9]";

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const currentMuted = videoRef.current.muted;
    videoRef.current.muted = !currentMuted;
    setIsMuted(!currentMuted);
  };

  return (
    <motion.div
      // 3. Use the dynamic aspect ratio
      className={`relative ${aspectRatio} rounded-2xl overflow-hidden group border border-gray-800`}
      // 4. Tell vertical cards to span 1 column, horizontal to span more
      // On large screens (lg), horizontal cards will take 2 columns
      style={{
        gridColumn:
          type === "horizontal" ? "span 1 / span 1" : "span 1 / span 1",
      }}
      // On mobile and tablet, they will all be 1 column anyway.
      // Let's adjust for larger screens to make horizontals wider.
      // We'll use a CSS class for simplicity.
      //
      // REVERTING: The logic above is too complex.
      // We'll keep it simple: the grid is 3 columns.
      // Vertical cards will be 4:5. Horizontal cards will be 16:9.
      // They will all fit into a single grid cell.
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        // object-cover will fill both 4:5 and 16:9 containers
        className="w-full h-full bg-black object-cover"
        poster={thumbnailUrl}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* MNote/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 z-20 p-2 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Toggle sound"
      >
        {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
      </button>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-4 z-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
}