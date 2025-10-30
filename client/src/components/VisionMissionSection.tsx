import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Lightbulb, Users } from "lucide-react";

export default function VisionMissionSection() {
  const missions = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Fostering a culture of rigorous scholarship, critical thinking, and lifelong learning that prepares students for global leadership.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Driving cutting-edge research and innovation that addresses society's most pressing challenges and advances human knowledge.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Building a diverse, equitable, and inclusive academic community where every individual can thrive and reach their full potential.",
    },
  ];

  return (
    <section id="vision" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-8" data-testid="text-vision-heading">
            Vision & Mission
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-foreground italic" data-testid="text-vision-statement">
              "To establish our institution as a beacon of academic excellence, innovation, and social responsibility, shaping future leaders who will transform society through knowledge, ethics, and compassion."
            </blockquote>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <div className="p-8 bg-background rounded-lg shadow-sm hover-elevate" data-testid={`card-mission-${index}`}>
                <mission.icon className="w-12 h-12 text-primary mb-4" data-testid={`icon-mission-${index}`} />
                <h3 className="font-serif text-2xl font-semibold mb-4" data-testid={`text-mission-title-${index}`}>
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-mission-desc-${index}`}>
                  {mission.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
