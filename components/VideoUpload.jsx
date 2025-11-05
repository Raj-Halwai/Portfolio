"use client";

import { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";

export default function VideoUpload({ setVideos }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFile = (file) => {
    if (file && (file.type === "video/mp4" || file.type === "video/quicktime")) {
      const videoUrl = URL.createObjectURL(file);
      const newVideo = {
        id: Date.now(),
        title: file.name,
        description: "Locally uploaded video.",
        url: videoUrl,
        thumbnail: "", // Thumbnails are harder to generate client-side
      };
      setVideos((prevVideos) => [newVideo, ...prevVideos]);
    } else {
      alert("Please upload a valid MP4 or MOV file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
        isDragging
          ? "border-accent-blue bg-blue-900/20"
          : "border-gray-600 hover:border-gray-500"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={openFileDialog}
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="video/mp4,video/quicktime"
        onChange={handleFileChange}
      />
      <div className="flex flex-col items-center pointer-events-none">
        <FiUpload className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-lg font-semibold">
          Drag & Drop your video here (MP4, MOV)
        </p>
        <p className="text-gray-400">or click to browse</p>
      </div>
    </div>
  );
}