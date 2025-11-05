import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <SkillsSection />
      </div>
      {/* You can add more sections here, e.g., featured projects */}
    </div>
  );
}