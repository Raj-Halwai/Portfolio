import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Font setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500"],
  variable: "--font-montserrat",
});

// SEO Metadata
export const metadata = {
  title: "Raj Halwai | Creative Video Editor",
  description:
    "Welcome to the professional portfolio of Raj Halwai, a creative video editor specializing in cinematic edits, shorts, and brand videos using After Effects, CapCut, and Alight Motion.",
  keywords:
    "Raj Halwai, Video Editor, After Effects, CapCut, Alight Motion, Portfolio, Cinematic Editing, Reels, YouTube Editor, Gaming Montage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} font-sans bg-dark-bg text-light-bg`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}