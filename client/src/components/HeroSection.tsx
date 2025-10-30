import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBackground from "@assets/generated_images/University_campus_main_building_327dc270.png";
import vcPortrait from "@assets/generated_images/Vice_Chancellor_formal_portrait_d28967dd.png";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={vcPortrait}
            alt="Vice Chancellor"
            className="w-40 h-40 rounded-full object-cover border-4 border-white/20 mb-8 shadow-2xl"
            data-testid="img-hero-portrait"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-4"
            data-testid="text-hero-name"
          >
            Dr. John Anderson
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl font-medium mb-2 text-white/90"
            data-testid="text-hero-title"
          >
            Vice Chancellor
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-white/80 mb-12"
            data-testid="text-hero-institution"
          >
            Prestigious University
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 gap-8 md:gap-16"
          >
            <div className="text-center" data-testid="stat-years">
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">25+</div>
              <div className="text-sm md:text-base text-white/80">Years of Service</div>
            </div>
            <div className="text-center" data-testid="stat-publications">
              <div className="text-4xl md:text-5xl font-bold font-sans mb-2">150+</div>
              <div className="text-sm md:text-base text-white/80">Research Publications</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.button>
    </section>
  );
}
