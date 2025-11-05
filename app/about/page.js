import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About Me | Raj Halwai",
  description: "Learn about Raj Halwai's journey as a video editor.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AboutSection />
    </div>
  );
}