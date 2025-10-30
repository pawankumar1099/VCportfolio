import AnimatedSection from "./AnimatedSection";
import RevealText from "./RevealText";
import { Award, BookOpen, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function AcademicExcellenceSection() {
  const achievements = [
    {
      icon: Award,
      title: "NAAC A++ Accreditation",
      description: "Achieved the highest accreditation grade with a score of 3.65/4.0, recognizing our commitment to quality education.",
      metric: "Top 1%",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "Research Excellence",
      description: "Over 200 research papers published in peer-reviewed journals with a significant impact factor.",
      metric: "200+ Papers",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Rankings",
      description: "Ranked among the top 100 universities nationally and featured in QS World University Rankings.",
      metric: "Top 100",
      gradient: "from-green-400 to-emerald-500"
    },
  ];

  return (
    <section id="excellence" className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <RevealText
            text="Academic Excellence"
            className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16"
            data-testid="text-excellence-heading"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <motion.div 
                className="group relative p-8 bg-background rounded-lg shadow-sm hover-elevate h-full overflow-hidden"
                data-testid={`card-excellence-${index}`}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                
                <div className="relative flex items-start justify-between mb-4">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <achievement.icon className={`w-10 h-10 bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent`} data-testid={`icon-excellence-${index}`} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Badge variant="secondary" className="animate-pulse-glow" data-testid={`badge-metric-${index}`}>
                      {achievement.metric}
                    </Badge>
                  </motion.div>
                </div>
                <h3 className="relative font-serif text-2xl font-semibold mb-4 group-hover:text-primary transition-colors" data-testid={`text-excellence-title-${index}`}>
                  {achievement.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed" data-testid={`text-excellence-desc-${index}`}>
                  {achievement.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
