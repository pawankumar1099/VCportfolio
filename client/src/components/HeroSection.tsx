import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import vcPortrait from "@assets/generated_images/Vice_Chancellor_formal_portrait_d28967dd.png";

export default function HeroSection() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="relative z-10 container max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 font-medium"
            >
              Shaping innovators, not just graduates.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-bold leading-tight"
              data-testid="text-hero-name"
            >
              <span className="block text-6xl md:text-7xl lg:text-8xl text-blue-500">
                SHAPING
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl text-gray-900">
                INDIA'S TOMORROW
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base md:text-lg text-gray-700 max-w-xl leading-relaxed"
            >
              Empowering students through experiential learning, industry collaboration, 
              and learning. Industry collaboration, and educational innovation.
            </motion.p>

            {/* Decorative Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-flex items-center gap-3 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="font-semibold text-sm md:text-base">Elevate Your Future</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Gradient Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-blue-300/30 to-blue-400/40 rounded-3xl transform rotate-3 scale-105" />
              
              {/* Main Image */}
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={vcPortrait}
                alt="Dr. Anoop Gupta - Vice Chancellor"
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
                data-testid="img-hero-portrait"
              />

              {/* Info Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-blue-100"
              >
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">
                  Assistant Prof
                </p>
                <p className="text-lg font-bold text-gray-900" data-testid="text-hero-title">
                  Dr. Anoop Gupta
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute top-6 left-6 bg-blue-500/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg"
              >
                <p className="text-xs text-white font-semibold uppercase tracking-wide mb-1">
                  Location
                </p>
                <p className="text-sm font-bold text-white" data-testid="text-hero-institution">
                  Student's Heart
                </p>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl"
              >
                <div className="text-white text-center">
                  <div className="w-10 h-10 mx-auto mb-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <p className="text-xs font-bold leading-tight">Elevate Your<br/>Future</p>
                </div>
              </motion.div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-6 shadow-2xl transform rotate-3 hidden lg:block"
              >
                <div className="text-white text-center min-w-[120px]">
                  <p className="text-3xl font-bold mb-1" data-testid="stat-years">25+</p>
                  <p className="text-sm font-medium">Years of Service</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 gap-6 mt-12 lg:hidden"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-center text-white shadow-lg">
            <p className="text-4xl font-bold mb-2" data-testid="stat-years">25+</p>
            <p className="text-sm font-medium">Years of Service</p>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-center text-white shadow-lg">
            <p className="text-4xl font-bold mb-2" data-testid="stat-publications">150+</p>
            <p className="text-sm font-medium">Research Publications</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </motion.button>
    </section>
  );
}
