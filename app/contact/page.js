import ContactForm from "@/components/ContactForm";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Contact | Raj Halwai",
  description: "Get in touch with Raj Halwai for your video editing needs.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h1>
        <p className="text-center text-lg text-gray-300 mb-12">
          Have a project in mind or just want to say hi? Fill out the form below
          or reach out via social media.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-6 md:mt-12">
            <h3 className="text-2xl font-semibold">Other Ways to Reach Me</h3>
            <a
              href="mailto:editwith.rajs@gmail.com"
              className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6 text-accent-blue" />
              <div>
                <span className="font-semibold">Email</span>
                <p className="text-gray-400">editwith.rajs@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/@_raj_.011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              <FaInstagram className="w-6 h-6 text-accent-purple" />
              <div>
                <span className="font-semibold">Instagram</span>
                <p className="text-gray-400">@_raj_.011</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}