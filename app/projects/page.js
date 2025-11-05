"use client";

import { useState } from "react";
// We only need the one ProjectCard component
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  // === Section 1: Vertical Projects ===
  const [verticalProjects, setVerticalProjects] = useState([
    {
      id: 1,
      title: "Cinematic Demo Reel",
      description: "My best cinematic work.",
      url: "/sample-videos/my-cinematic-reel.mp4",
      thumbnail: "/images/placeholder-thumb-1.jpg",
      type: "vertical", // This uses the 4:5 card
    },
    {
      id: 2,
      title: "Social Media Reel",
      description: "Edits for Instagram & TikTok.",
      url: "/sample-videos/demo.mp4",
      thumbnail: "/images/placeholder-thumb-2.jpg",
      type: "vertical", // This uses the 4:5 card
    },
    {
      id: 3,
      title: "Festive Cinematics",
      description: "A corporate client ad.",
      url: "/sample-videos/Festive-video.mp4",
      thumbnail: "/images/placeholder-thumb-3.jpg",
      type: "vertical", // This uses the 4:5 card
    },
  ]);

  // === Section 2: Horizontal Projects (15 Placeholders) ===
  const [horizontalProjects, setHorizontalProjects] = useState([
    // Just copy/paste this block to add more
    {
      id: 4,
      title: "Couple Edits.",
      description: "Couple Videeo Sample (Edited Using Photos Only).",
      url: "/sample-videos/Couple.mp4",
      thumbnail: "/images/Couple.jpg",
      type: "horizontal", // This uses the 16:9 card
    },
    {
      id: 5,
      title: "Collegues Video.",
      description: "Make Memorise With Videos tooo.",
      url: "/sample-videos/College.mp4",
      thumbnail: "/images/College.jpg",
      type: "horizontal",
    },
    {
      id: 6,
      title: "Make Video For Yours Self",
      description: "Your description here.",
      url: "/sample-videos/Sorry.mp4",
      thumbnail: "/images/Sorry.jpg",
      type: "horizontal",
    },
    {
      id: 7,
      title: "Your Brand Logo Cinematc",
      description: "Make High Qualtiy Videos.",
      url: "/sample-videos/Ganpati.mp4",
      thumbnail: "/images/Ganpati.PNG",
      type: "horizontal",
    },
    {
      id: 8,
      title: "Make Festive Video",
      description: "Smile at each frame.",
      url: "/sample-videos/Dahi-Handi.mp4",
      thumbnail: "/images/Dahi-Handi.PNG",
      type: "horizontal",
    },
    {
      id: 9,
      title: "Appreciating Others",
      description: "Appreciate their beauty with edits to get more love.",
      url: "/sample-videos/Beauty.mp4",
      thumbnail: "/images/Beauty.png",
      type: "horizontal",
    },
    {
      id: 10,
      title: "Make Your own Video like this",
      description: "Speed Ram your video with smooth frames,get more like.",
      url: "/sample-videos/Sweetheart.mp4",
      thumbnail: "/images/bach.png",
      type: "horizontal",
    },
    {
      id: 11,
      title: "Do you also have dream girl?",
      description: "Dream Girl Video Edit Sample.",
      url: "/sample-videos/dream.mp4",
      thumbnail: "/images/surprise.png",
      type: "horizontal",
    },
    {
      id: 12,
      title: "Make look Dahi-Handi Video Crazyy",
      description: "Each frame has its own beauty.",
      url: "/sample-videos/5.mp4",
      thumbnail: "/images/IMG_9043.PNG",
      type: "horizontal",
    },
    {
      id: 13,
      title: "Have a crush on someone?",
      description: "Impress them with your video edits.",
      url: "/sample-videos/11.mp4",
      thumbnail: "/images/eye.png",
      type: "horizontal",
    },
    
  ]);

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        My <span className="text-gradient">Work</span>
      </h1>
      <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        Here are some of my projects. Each card shows a short preview of my
        work.
      </p>

      {/* === Vertical Reels Grid === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {verticalProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            videoUrl={project.url}
            thumbnailUrl={project.thumbnail}
            type={project.type}
          />
        ))}
      </div>

      {/* === NEW Horizontal Projects Section === */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          OTHER <span className="text-gradient">PROJECTS</span>
        </h2>
        {/* This grid will hold your 15 horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {horizontalProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              videoUrl={project.url}
              thumbnailUrl={project.thumbnail}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}