/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        "dark-bg": "#0f0f0f",
        "light-bg": "#f9fafb",
        "accent-purple": "#9333ea", // purple-600
        "accent-blue": "#3b82f6", // blue-500
      },
      boxShadow: {
        "glow-purple": "0 0 15px rgba(147, 51, 234, 0.4)",
        "glow-blue": "0 0 15px rgba(59, 130, 246, 0.4)",
        "glow-accent":
          "0 0 15px rgba(147, 51, 234, 0.4), 0 0 15px rgba(59, 130, 246, 0.3)",
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(to right, #9333ea, #3b82f6)",
      },
    },
  },
  plugins: [],
};