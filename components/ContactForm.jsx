"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiLoader } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", number: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="relative bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-glow-purple">
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-dark-bg/90 z-20 flex flex-col items-center justify-center rounded-2xl"
          >
            <FiCheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p className="text-gray-300 mb-4">
              Thanks, Raj will get back to you soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="px-6 py-2 bg-gradient-accent text-white font-semibold rounded-lg"
            >
              Send Another
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Number */}
        <div>
          <label htmlFor="number" className="block text-sm font-medium mb-1">
            Number (Optional)
          </label>
          <input
            type="text"
            id="number"
            value={formData.number}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-purple"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Error Message */}
        {status === "error" && (
          <p className="text-red-500 text-center mt-2">
            ⚠️ Something went wrong. Please try again later.
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-8 py-3 bg-gradient-accent text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {status === "loading" ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <FiLoader className="w-5 h-5" />
            </motion.div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
