import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BookOpen, Trophy, Sparkles, Star } from "lucide-react";
import { useRef } from "react";

export default function EducationSection() {
  const education = [
    {
      year: "2014–2016",
      degree: "Master's in Higher Education Administration",
      institution: "Michigan State University, USA",
      achievement: "3.75/4.0 GPA",
      description: "Advanced training in educational leadership and administration from a world-renowned institution.",
      icon: GraduationCap,
      color: "from-green-600 to-green-700",
      accentColor: "from-green-400 to-emerald-500",
      borderColor: "border-green-200",
      featured: true
    },
    {
      year: "2012",
      degree: "CEO Simulation Workshop",
      institution: "EnParadigm, IIM Ahmedabad",
      achievement: "Executive Education",
      description: "Strategic leadership and decision-making simulation training from India's premier management institute.",
      icon: Trophy,
      color: "from-purple-600 to-purple-700",
      accentColor: "from-purple-400 to-fuchsia-500",
      borderColor: "border-purple-200",
      featured: true
    },
    {
      year: "2011–2012",
      degree: "Executive Programme (Marketing & HR)",
      institution: "IIT Bombay",
      achievement: "Topper",
      description: "Distinguished performance in executive education program at one of India's top technical institutions.",
      icon: Award,
      color: "from-orange-600 to-orange-700",
      accentColor: "from-orange-400 to-red-500",
      borderColor: "border-orange-200",
      featured: true
    },
    {
      year: "1996–2000",
      degree: "Ph.D. (English Literature)",
      institution: "University",
      achievement: "Doctorate",
      description: "Advanced research and scholarly contribution in English Literature.",
      icon: GraduationCap,
      color: "from-green-600 to-green-700",
      accentColor: "from-green-400 to-teal-500",
      borderColor: "border-green-200"
    },
    {
      year: "1992–1993",
      degree: "M.Phil. (English Literature)",
      institution: "University",
      achievement: "First Division",
      description: "Master of Philosophy with excellent academic standing.",
      icon: BookOpen,
      color: "from-teal-600 to-teal-700",
      accentColor: "from-teal-400 to-cyan-500",
      borderColor: "border-teal-200"
    },
    {
      year: "1990–1992",
      degree: "M.A. (English Literature)",
      institution: "University",
      achievement: "Gold Medalist",
      description: "Top academic honors in Master of Arts program.",
      icon: Award,
      color: "from-amber-600 to-amber-700",
      accentColor: "from-amber-400 to-yellow-500",
      borderColor: "border-amber-200",
      featured: true
    },
    {
      year: "1987–1990",
      degree: "B.A. (Hindi, English, Political Science, Economics)",
      institution: "College",
      achievement: "College Topper",
      description: "Bachelor of Arts with distinction across multiple disciplines.",
      icon: GraduationCap,
      color: "from-rose-600 to-rose-700",
      accentColor: "from-rose-400 to-pink-500",
      borderColor: "border-rose-200"
    }
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-40 overflow-hidden"
    >
      {/* Animated background with sophisticated gradients */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-100/40 via-transparent to-transparent" />
      </motion.div>

      {/* Floating decorative blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-60 left-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 sm:mb-24"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200"
          >
            <Star className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">Academic Achievements</span>
          </motion.div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-purple-800 to-pink-900 bg-clip-text text-transparent" data-testid="text-education-heading">
            Academic Excellence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A distinguished academic journey spanning five advanced degrees with consistent excellence
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Sophisticated vertical timeline */}
          <div className="hidden lg:block absolute left-16 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-300 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-400/50 via-pink-400/50 to-purple-400/50 blur-sm" />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <EducationItem key={index} education={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationItem({ education, index }: { education: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = education.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60, rotateY: -15 }}
      animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative"
      data-testid={`education-item-${index}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="lg:pl-36 relative group">
        {/* Glow effect for featured items */}
        {education.featured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0.2, 0.5, 0.2] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -inset-2 bg-gradient-to-r ${education.accentColor} rounded-3xl blur-2xl opacity-20`}
          />
        )}

        <motion.div
          whileHover={{ 
            scale: 1.02,
            rotateY: 2,
            rotateX: 2,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`relative bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border-2 ${education.borderColor} overflow-hidden`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated gradient background */}
          <motion.div
            animate={{ 
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 bg-gradient-to-br ${education.color} opacity-5`}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Decorative dots pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <div className="grid grid-cols-4 gap-2 p-4">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${education.color}`}
                />
              ))}
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-6 items-start">
            {/* Enhanced Icon Section */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2 + index * 0.1
              }}
              className="relative flex-shrink-0"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative"
              >
                {/* Pulsing background */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${education.accentColor} rounded-2xl blur-lg`}
                />
                
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${education.color} shadow-xl flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-white relative z-10" />
                  
                  {/* Orbiting particles */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className={`absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white/60`} />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className={`absolute bottom-0 right-1/2 w-2 h-2 -mr-1 -mb-1 rounded-full bg-white/60`} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 min-w-0 space-y-4">
              {/* Year Badge with enhanced design */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${education.color} shadow-lg flex items-center gap-2`}>
                  <span className="text-white text-sm sm:text-base font-bold tracking-wide">
                    {education.year}
                  </span>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-white/80"
                  />
                </div>
              </motion.div>

              {/* Degree Title with gradient */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`font-bold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-br ${education.color} bg-clip-text text-transparent leading-tight`}
                data-testid={`text-education-degree-${index}`}
              >
                {education.degree}
              </motion.h3>
              
              {/* Institution and Achievement */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="flex flex-wrap items-center gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${education.accentColor}`} />
                  <p className="text-base sm:text-lg text-gray-600 font-semibold" data-testid={`text-education-institution-${index}`}>
                    {education.institution}
                  </p>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${education.accentColor} shadow-md`}
                >
                  <Trophy className="w-4 h-4 text-white" />
                  <span className="text-white text-xs sm:text-sm font-bold">
                    {education.achievement}
                  </span>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-base sm:text-lg text-gray-700 leading-relaxed pt-2"
                data-testid={`text-education-desc-${index}`}
              >
                {education.description}
              </motion.p>
            </div>
          </div>

          {/* Decorative corner sparkles */}
          {education.featured && (
            <>
              <motion.div
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4"
              >
                <Sparkles className={`w-5 h-5 text-gradient-to-br ${education.color}`} />
              </motion.div>
              <motion.div
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 right-4"
              >
                <Star className={`w-4 h-4 text-gradient-to-br ${education.color}`} />
              </motion.div>
            </>
          )}
        </motion.div>
      </div>

      {/* Enhanced Timeline Dot */}
      <motion.div 
        className="hidden lg:block absolute left-16 top-12 transform -translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, delay: 0.3 + index * 0.1 }}
      >
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="relative"
        >
          {/* Pulsing ring */}
          <motion.div
            animate={{ 
              scale: [1, 1.8, 1],
              opacity: [0.8, 0.2, 0.8]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${education.accentColor}`}
          />
          
          {/* Main dot */}
          <div className={`relative w-8 h-8 rounded-full bg-gradient-to-br ${education.color} border-4 border-white shadow-xl flex items-center justify-center`}>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
