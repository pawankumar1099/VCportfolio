import AnimatedSection from "./AnimatedSection";
import { Award, BookOpen, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AcademicExcellenceSection() {
  const achievements = [
    {
      icon: Award,
      title: "NAAC A++ Accreditation",
      description: "Achieved the highest accreditation grade with a score of 3.65/4.0, recognizing our commitment to quality education.",
      metric: "Top 1%",
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Over 200 research papers published in peer-reviewed journals with a significant impact factor.",
      metric: "200+ Papers",
    },
    {
      icon: Globe,
      title: "Global Rankings",
      description: "Ranked among the top 100 universities nationally and featured in QS World University Rankings.",
      metric: "Top 100",
    },
  ];

  return (
    <section id="excellence" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-excellence-heading">
            Academic Excellence
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <div className="p-8 bg-background rounded-lg shadow-sm hover-elevate h-full" data-testid={`card-excellence-${index}`}>
                <div className="flex items-start justify-between mb-4">
                  <achievement.icon className="w-10 h-10 text-primary" data-testid={`icon-excellence-${index}`} />
                  <Badge variant="secondary" data-testid={`badge-metric-${index}`}>{achievement.metric}</Badge>
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4" data-testid={`text-excellence-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-excellence-desc-${index}`}>
                  {achievement.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
