"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaVideo, FaRocket } from "react-icons/fa";

// Note: Add a profile picture to /public/images/
const profilePic = "/images/raj-halwai-profile.jpg";

const skills = [
  { name: "Adobe After Effects", level: 95 },
  { name: "CapCut", level: 90 },
  { name: "Alight Motion", level: 85 },
];

const timeline = [
  {
    year: "2020",
    title: "Started My Journey",
    desc: "Began editing with mobile apps, discovering a passion for visual storytelling.",
  },
  {
    year: "2023",
    title: "Begin With PC Software",
    desc: "Transitioned to professional desktop software like After Effects.",
  },
  {
    year: "2024",
    title: "First Pro Projects",
    desc: "Started taking on freelance projects, delivering high-quality edits for clients.",
  },
  {
    year: "Today",
    title: "Creative Expert",
    desc: "Continuously pushing boundaries with cinematic transitions and effects.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          className="w-64 h-64 lg:w-96 lg:h-96 relative rounded-full overflow-hidden shadow-glow-accent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={profilePic}
            alt="Raj Halwai Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed font-body">
            Hello! I'm Raj Halwai, a passionate and creative video editor with 5+
            years of experience. My journey started with simple mobile edits and
            has grown into a full-blown career using industry-standard tools like
            After Effects, CapCut, and Alight Motion.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed font-body">
            I specialize in creating dynamic, eye-catching content, from cinematic
            sequences and fast-paced reels to professional brand videos and
            engaging gaming montages. My goal is to bring your vision to life
            with seamless transitions, stunning effects, and a unique creative
            touch.
          </p>
        </motion.div>
      </div>

      {/* Skill Bars */}
      <div className="my-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-gradient">Toolkit</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <span className="text-lg font-semibold">{skill.name}</span>
              <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
                <motion.div
                  className="bg-gradient-accent h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="my-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Editing <span className="text-gradient">Journey</span>
        </h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Left Side */}
              <div className="w-5/12">
                {index % 2 === 0 && (
                  <div className="text-right pr-8">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                )}
              </div>

              {/* Center Dot */}
              <div className="z-10">
                <div className="bg-dark-bg border-2 border-accent-purple rounded-full w-24 h-12 flex items-center justify-center shadow-glow-purple">
                  <span className="font-bold text-lg">{item.year}</span>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-5/12">
                {index % 2 !== 0 && (
                  <div className="text-left pl-8">
                    <h3 className="font-bold text-xl">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}