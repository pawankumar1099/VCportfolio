import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import heroBackground from "@assets/generated_images/University_campus_main_building_327dc270.png";
import vcPortrait from "@assets/generated_images/Vice_Chancellor_formal_portrait_d28967dd.png";
import AnimatedBlobs from "./AnimatedBlobs";

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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-900/40 to-black/80" />
      </div>

      <AnimatedBlobs />

      <div className="relative z-10 container max-w-7xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-full blur-2xl animate-pulse-glow" />
            <motion.img
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0, 123, 255, 0.3)",
                  "0 0 40px rgba(0, 193, 217, 0.5)",
                  "0 0 20px rgba(0, 123, 255, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              src={vcPortrait}
              alt="Vice Chancellor"
              className="relative w-41 h-60  object-cover rounded-lg border-4 border-white/30 shadow-2xl"
              data-testid="img-hero-portrait"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-8 h-8 text-secondary" />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
            data-testid="text-hero-name"
          >
            Dr. Anoop Gupta
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative mb-2"
          >
            <motion.div
              animate={{ 
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-xl"
            />
            <p
              className="relative text-xl md:text-2xl font-medium text-white"
              data-testid="text-hero-title"
            >
              Vice Chancellor
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-12 font-medium"
            data-testid="text-hero-institution"
          >
            GLA University
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 gap-8 md:gap-16"
          >
            <motion.div 
              className="text-center relative" 
              data-testid="stat-years"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl" />
              <div className="relative text-4xl md:text-5xl font-bold font-sans mb-2 bg-gradient-to-br from-white to-blue-200 bg-clip-text text-transparent">25+</div>
              <div className="relative text-sm md:text-base text-white/90">Years of Service</div>
            </motion.div>
            <motion.div 
              className="text-center relative" 
              data-testid="stat-publications"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl" />
              <div className="relative text-4xl md:text-5xl font-bold font-sans mb-2 bg-gradient-to-br from-white to-yellow-200 bg-clip-text text-transparent">150+</div>
              <div className="relative text-sm md:text-base text-white/90">Research Publications</div>
            </motion.div>
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
