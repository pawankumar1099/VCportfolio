import AnimatedSection from "./AnimatedSection";
import vcPortrait from "@assets/generated_images/Vice_Chancellor_formal_portrait_d28967dd.png";

export default function MessageSection() {
  return (
    <section id="message" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-message-heading">
            Message from the Vice Chancellor
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          <AnimatedSection delay={0.2} className="md:col-span-1">
            <img
              src={vcPortrait}
              alt="Dr. Anoop Gupta"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              data-testid="img-message-portrait"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="md:col-span-2">
            <div className="space-y-6">
              <div className="text-6xl text-primary/20 font-serif leading-none">"</div>
              <p className="text-lg leading-relaxed text-foreground -mt-8" data-testid="text-message-content">
                Dear Students, Faculty, and Friends of our University,
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                It is my profound privilege to serve as Vice Chancellor of this distinguished institution. Our university stands as a testament to the transformative power of education, where bright minds come together to challenge conventions, pursue knowledge, and shape a better future.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                As we navigate the complexities of the 21st century, our commitment remains unwavering: to provide world-class education, foster groundbreaking research, and nurture responsible global citizens. Together, we are building an academic community that values excellence, embraces diversity, and champions innovation.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I invite you to join us on this remarkable journey of discovery, growth, and impact. Together, we will continue to set new benchmarks of academic excellence and contribute meaningfully to society.
              </p>
              <div className="pt-6">
                <p className="font-serif text-2xl font-semibold" data-testid="text-message-signature">
                  Dr. Anoop Gupta
                </p>
                <p className="text-muted-foreground">Vice Chancellor</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
