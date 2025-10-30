import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import convocationImage from "@assets/generated_images/Convocation_ceremony_graduation_hall_d5b31cd2.png";
import sportsImage from "@assets/generated_images/College_sports_stadium_event_60215304.png";
import culturalImage from "@assets/generated_images/Cultural_event_student_performance_df2198fe.png";
import conferenceImage from "@assets/generated_images/Academic_conference_keynote_speech_b6c23ce6.png";
import campusImage from "@assets/generated_images/Campus_aerial_view_overview_d9c2141f.png";
import libraryImage from "@assets/generated_images/Modern_library_building_campus_7e88c64a.png";

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    { image: convocationImage, caption: "Annual Convocation Ceremony" },
    { image: sportsImage, caption: "Inter-University Sports Championship" },
    { image: culturalImage, caption: "Cultural Festival Celebrations" },
    { image: conferenceImage, caption: "International Academic Conference" },
    { image: campusImage, caption: "Campus Aerial View" },
    { image: libraryImage, caption: "Modern Library Facility" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-center mb-16" data-testid="text-gallery-heading">
            Gallery
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.05}>
              <div
                className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-testid={`gallery-item-${index}`}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-testid={`img-gallery-${index}`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0 md:opacity-100"
                  }`}
                >
                  <p className="text-white font-medium text-lg" data-testid={`text-gallery-caption-${index}`}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
