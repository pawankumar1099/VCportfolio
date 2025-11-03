import AnimatedSection from "./AnimatedSection";
import RevealText from "./RevealText";
import vcPortrait from "@assets/generated_images/Vice_Chancellor_formal_portrait_d28967dd.png";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <RevealText
            text="About the Vice Chancellor"
            className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16"
            data-testid="text-about-heading"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-2xl" />
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(0, 123, 255, 0.2)",
                    "0 10px 40px rgba(0, 193, 217, 0.3)",
                    "0 10px 30px rgba(0, 123, 255, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <img
                  src={vcPortrait}
                  alt="Dr. Anoop Gupta"
                  className="relative w-full max-w-md mx-auto rounded-lg"
                  data-testid="img-about-portrait"
                />
              </motion.div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground" data-testid="text-about-bio">
                Dr. Anoop Gupta brings over 25 years of distinguished experience in higher education administration and academic leadership. With a Ph.D. in Educational Leadership from Cambridge University, his career has been marked by transformative initiatives that have elevated institutions to new heights of excellence.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Prior to assuming the role of Vice Chancellor, Dr. Anderson served as Dean of Academic Affairs at several prestigious institutions, where he pioneered innovative programs in curriculum development, research excellence, and student success initiatives.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="font-serif text-2xl font-semibold" data-testid="text-about-expertise">Key Expertise</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3" data-testid="expertise-leadership">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Strategic Academic Leadership & Institutional Development</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="expertise-research">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Research Excellence & Innovation Management</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="expertise-global">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Global Partnerships & International Collaboration</span>
                  </li>
                  <li className="flex items-start gap-3" data-testid="expertise-quality">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">Quality Assurance & Accreditation</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
