import AnimatedSection from "./AnimatedSection";
import vcPortrait from "@assets/generated_images/Vice_Chancellor_formal_portrait_d28967dd.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-about-heading">
            About the Vice Chancellor
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <img
                src={vcPortrait}
                alt="Dr. John Anderson"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                data-testid="img-about-portrait"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground" data-testid="text-about-bio">
                Dr. John Anderson brings over 25 years of distinguished experience in higher education administration and academic leadership. With a Ph.D. in Educational Leadership from Cambridge University, his career has been marked by transformative initiatives that have elevated institutions to new heights of excellence.
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
