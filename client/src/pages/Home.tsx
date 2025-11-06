import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AchievementsSection from "@/components/AchievementsSection";
import AcademicExcellenceSection from "@/components/AcademicExcellenceSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import MessageSection from "@/components/MessageSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgressIndicator />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <AchievementsSection />
      <AcademicExcellenceSection />
      <ExperienceSection />
      <EducationSection />
      <MessageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
