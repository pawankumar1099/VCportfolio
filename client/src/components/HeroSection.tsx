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
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-700 font-medium"
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
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-blue-500">
                SHAPING
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-900">
                INDIA'S TOMORROW
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl leading-relaxed"
            >
              Empowering students through experiential learning, industry collaboration, 
              and educational innovation.
            </motion.p>

            {/* Decorative Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="font-semibold text-xs sm:text-sm md:text-base">Elevate Your Future</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Background Gradient Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-blue-300/30 to-blue-400/40 rounded-3xl transform rotate-3 scale-105" />
              
              {/* Main Image */}
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src={vcPortrait}
                alt="Dr. Ankur Rai - Vice Chancellor"
                className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
                data-testid="img-hero-portrait"
              />

              {/* Info Badges - Positioned to avoid face on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-white/95 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border border-blue-100 max-w-[calc(100%-1.5rem)] sm:max-w-none"
              >
                <p className="text-[10px] sm:text-xs text-blue-600 font-semibold uppercase tracking-wide mb-0.5 sm:mb-1">
                  Vice Chancellor
                </p>
                <p className="text-sm sm:text-lg font-bold text-gray-900" data-testid="text-hero-title">
                  Dr. Ankur Rai
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-blue-500/95 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg"
              >
                <p className="text-[10px] sm:text-xs text-white font-semibold uppercase tracking-wide mb-0.5 sm:mb-1">
                  Since
                </p>
                <p className="text-xs sm:text-sm font-bold text-white" data-testid="text-hero-institution">
                  January 2025
                </p>
              </motion.div>

              {/* Decorative Elements - Hidden on mobile to avoid overlapping face */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3 sm:top-6 right-3 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl hidden sm:flex"
              >
                <div className="text-white text-center px-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto mb-0.5 sm:mb-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold leading-tight">Elevate Your<br/>Future</p>
                </div>
              </motion.div>

              {/* Stats Cards - Desktop only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-6 shadow-2xl transform rotate-3 hidden lg:block"
              >
                <div className="text-white text-center min-w-[120px]">
                  <p className="text-3xl font-bold mb-1" data-testid="stat-years">30+</p>
                  <p className="text-sm font-medium">Years in Education</p>
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
          className="grid grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 lg:hidden"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white shadow-lg">
            <p className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2" data-testid="stat-years">30+</p>
            <p className="text-xs sm:text-sm font-medium">Years in Education</p>
          </div>
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center text-white shadow-lg">
            <p className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2" data-testid="stat-publications">5</p>
            <p className="text-xs sm:text-sm font-medium">Advanced Degrees</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
        </div>
      </motion.button>
    </section>
  );
}
