import AnimatedSection from "./AnimatedSection";
import StatCounter from "./StatCounter";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-achievements-heading">
            Achievements & Impact
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedSection delay={0.1}>
            <StatCounter end={25} suffix="+" label="Years of Service" />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <StatCounter end={150} suffix="+" label="Research Publications" />
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <StatCounter end={50} suffix="+" label="Awards Received" />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <StatCounter end={5000} suffix="+" label="Students Mentored" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
