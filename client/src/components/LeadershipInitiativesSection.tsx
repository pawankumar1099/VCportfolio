import AnimatedSection from "./AnimatedSection";
import libraryImage from "@assets/generated_images/Modern_library_building_campus_7e88c64a.png";
import researchImage from "@assets/generated_images/Research_laboratory_with_students_34b13f13.png";
import conferenceImage from "@assets/generated_images/Academic_conference_keynote_speech_b6c23ce6.png";

export default function LeadershipInitiativesSection() {
  const initiatives = [
    {
      title: "Digital Library Transformation",
      description: "Spearheaded the development of a state-of-the-art digital library with over 1 million e-resources, providing 24/7 access to students and faculty worldwide.",
      impact: "Enhanced research capabilities and accessibility for 15,000+ users",
      image: libraryImage,
    },
    {
      title: "Research & Innovation Hub",
      description: "Established cutting-edge research facilities and innovation centers, fostering interdisciplinary collaboration and attracting over $10 million in research grants.",
      impact: "200+ ongoing research projects across multiple disciplines",
      image: researchImage,
    },
    {
      title: "Global Academic Partnerships",
      description: "Forged strategic partnerships with 50+ international universities, enabling student exchange programs and collaborative research initiatives.",
      impact: "500+ students participated in international exchange programs",
      image: conferenceImage,
    },
  ];

  return (
    <section id="initiatives" className="py-20 md:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-initiatives-heading">
            Leadership Initiatives
          </h2>
        </AnimatedSection>

        <div className="space-y-24">
          {initiatives.map((initiative, index) => (
            <AnimatedSection key={index} delay={0.2}>
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`initiative-${index}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full rounded-lg shadow-lg"
                    data-testid={`img-initiative-${index}`}
                  />
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="font-serif text-3xl font-semibold mb-4" data-testid={`text-initiative-title-${index}`}>
                    {initiative.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`text-initiative-desc-${index}`}>
                    {initiative.description}
                  </p>
                  <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                    <p className="text-sm font-medium text-foreground" data-testid={`text-initiative-impact-${index}`}>
                      Impact: {initiative.impact}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
