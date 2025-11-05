import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaInstagram size={24} />,
    href: "https://instagram.com/_raj_.011",
  },
  { icon: <FaYoutube size={24} />, href: "https://youtube.com/@twisted-talks-15?si=PhSMTu8sw7K-nSz7" },
  { icon: <FaEnvelope size={24} />, href: "mailto:editwith.rajs@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-gray-700/50">
      {/* Gradient border effect */}
      <div className="h-1 bg-gradient-accent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">Raj Halwai</h3>
            <p className="text-gray-400">Creative Video Editor</p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-110 hover:text-gradient transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8 pt-4 border-t border-gray-700/50">
          © {new Date().getFullYear()} Raj Halwai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}