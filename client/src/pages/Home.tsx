import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AchievementsSection from "@/components/AchievementsSection";
import AcademicExcellenceSection from "@/components/AcademicExcellenceSection";
import LeadershipInitiativesSection from "@/components/LeadershipInitiativesSection";
import GallerySection from "@/components/GallerySection";
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
      <LeadershipInitiativesSection />
      <GallerySection />
      <MessageSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
