import AnimatedSection from "./AnimatedSection";
import RevealText from "./RevealText";
import { GraduationCap, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  const missions = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Fostering a culture of rigorous scholarship, critical thinking, and lifelong learning that prepares students for global leadership.",
      color: "from-primary to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Driving cutting-edge research and innovation that addresses society's most pressing challenges and advances human knowledge.",
      color: "from-secondary to-yellow-600"
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Building a diverse, equitable, and inclusive academic community where every individual can thrive and reach their full potential.",
      color: "from-accent to-cyan-600"
    },
  ];

  return (
    <section id="vision" className="relative py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-morph" style={{ animationDelay: '3s' }} />
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <RevealText
            text="Vision & Mission"
            className="font-serif text-4xl md:text-5xl font-semibold text-center mb-8"
            data-testid="text-vision-heading"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl blur-xl" />
              <blockquote className="relative font-serif text-2xl md:text-3xl leading-relaxed text-foreground italic" data-testid="text-vision-statement">
                "To establish our institution as a beacon of academic excellence, innovation, and social responsibility, shaping future leaders who will transform society through knowledge, ethics, and compassion."
              </blockquote>
            </div>
          </motion.div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <motion.div 
                className="group relative p-8 bg-background rounded-lg shadow-sm hover-elevate overflow-hidden h-full"
                data-testid={`card-mission-${index}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${mission.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                />
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${mission.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <mission.icon className={`relative w-12 h-12 mb-4 bg-gradient-to-br ${mission.color} bg-clip-text text-transparent`} data-testid={`icon-mission-${index}`} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }} />
                </motion.div>
                <h3 className="relative font-serif text-2xl font-semibold mb-4" data-testid={`text-mission-title-${index}`}>
                  {mission.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed" data-testid={`text-mission-desc-${index}`}>
                  {mission.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
