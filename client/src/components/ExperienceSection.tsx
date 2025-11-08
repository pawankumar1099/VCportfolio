import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Award, Users, Building2, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      year: "2025–Present",
      title: "Vice Chancellor",
      organization: "GLA University, Mathura",
      description: "The apex leadership position of the university.",
      highlights: [
        "Overall academic, research, and administrative vision",
        "Institutional growth and innovation",
        "Global partnerships and student development"
      ],
      icon: Award,
      color: "from-green-600 to-green-700",
      accentColor: "from-green-400 to-emerald-500",
      featured: true
    },
    {
      year: "2021–2025",
      title: "Pro Vice-Chancellor",
      organization: "GLA University, Mathura",
      description: "Oversaw institutional planning, policy-making, and strategic initiatives.",
      highlights: [
        "Strengthened academic excellence",
        "Innovation culture development"
      ],
      icon: Building2,
      color: "from-purple-500 to-purple-600",
      accentColor: "from-purple-400 to-fuchsia-500",
      featured: true
    },
    {
      year: "2018–2021",
      title: "Dean of Academic Affairs",
      organization: "GLA University, Mathura",
      description: "Managed university-wide academic operations, policies, and program development.",
      highlights: [
        "Enhanced quality standards",
        "Academic governance improvement"
      ],
      icon: Users,
      color: "from-orange-500 to-orange-600",
      accentColor: "from-orange-400 to-red-500"
    },
    {
      year: "2010–Present",
      title: "Director – Institute of Applied Science & Humanities",
      organization: "GLA University, Mathura",
      description: "Handled academic and administrative leadership within the university.",
      highlights: [
        "Spearheaded e-Governance Project",
        "University website modernization (www.gla.ac.in)"
      ],
      icon: Briefcase,
      color: "from-green-500 to-green-600",
      accentColor: "from-green-400 to-teal-500"
    },
    {
      year: "2006–2010",
      title: "Founder Director",
      organization: "GLA Institute of Professional Studies",
      description: "Set up and developed the institute under Dr. B.R. Ambedkar University, Agra.",
      highlights: [
        "Elevated to top position among affiliated colleges"
      ],
      icon: Building2,
      color: "from-teal-500 to-teal-600",
      accentColor: "from-teal-400 to-cyan-500"
    },
    {
      year: "2003–2006",
      title: "Dean (Administration) & Reader",
      organization: "GLA Institute of Technology and Management",
      description: "Oversaw both teaching and administration.",
      highlights: [
        "Launched official publication GLADTIMES",
        "Organized educational workshops"
      ],
      icon: Users,
      color: "from-indigo-500 to-indigo-600",
      accentColor: "from-indigo-400 to-blue-500"
    },
    {
      year: "2000–2003",
      title: "Director",
      organization: "Rajiv Academy for Technology and Management",
      description: "Established the institute and achieved top university rankings.",
      highlights: [
        "Built strong academic and administrative systems"
      ],
      icon: Briefcase,
      color: "from-pink-500 to-pink-600",
      accentColor: "from-pink-400 to-rose-500"
    },
    {
      year: "1998–2000",
      title: "Lecturer (English & Professional Communication)",
      organization: "GLA Institute of Technology and Management",
      description: "Contributed to language and soft skills development among engineering students.",
      highlights: [
        "Beginning of long-term association with GLA"
      ],
      icon: Briefcase,
      color: "from-cyan-500 to-cyan-600",
      accentColor: "from-cyan-400 to-blue-500"
    },
    {
      year: "1997–1998",
      title: "Lecturer (English)",
      organization: "BSA College of Engineering & Technology, Mathura",
      description: "Strengthened expertise in academic instruction and curriculum delivery.",
      highlights: [],
      icon: Briefcase,
      color: "from-amber-500 to-amber-600",
      accentColor: "from-amber-400 to-yellow-500"
    },
    {
      year: "1993–1997",
      title: "Teaching Associate",
      organization: "G. B. Pant University of Agriculture & Technology",
      description: "Department of Humanities & Social Sciences",
      highlights: [
        "Began academic journey teaching English",
        "Developed foundation in higher education pedagogy"
      ],
      icon: Briefcase,
      color: "from-rose-500 to-rose-600",
      accentColor: "from-rose-400 to-pink-500"
    }
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-40 overflow-hidden"
    >
      {/* Animated background gradients */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

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
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Career Milestones</span>
          </motion.div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-green-800 to-emerald-900 bg-clip-text text-transparent" data-testid="text-experience-heading">
            Professional Journey
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three decades of excellence in education, leadership, and institutional development
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-300 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-green-400/50 via-emerald-400/50 to-green-400/50 blur-sm" />
          </div>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isEven = index % 2 === 0;
  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
      data-testid={`experience-item-${index}`}
    >
      {/* Content Card */}
      <motion.div 
        className={`${isEven ? "lg:text-right lg:pr-12" : "lg:pl-12 lg:col-start-2"} relative group`}
        whileHover={{ scale: experience.featured ? 1.02 : 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Decorative glow effect for featured items */}
        {experience.featured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0.3, 0.6, 0.3] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -inset-1 bg-gradient-to-r ${experience.accentColor} rounded-3xl blur-xl opacity-30`}
          />
        )}

        <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border ${experience.featured ? 'border-green-200' : 'border-gray-100'} overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute inset-0 bg-gradient-to-br ${experience.color}`} />
          </div>

          {/* Year badge with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: isEven ? 20 : -20 }}
            animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative inline-flex items-center gap-2 px-5 py-2.5 mb-5 rounded-full bg-gradient-to-r ${experience.color} shadow-lg ${isEven ? 'lg:float-right' : 'lg:float-left'}`}
          >
            <span className="text-white text-sm sm:text-base font-bold tracking-wide">
              {experience.year}
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-1.5 h-1.5 rounded-full bg-white/80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative space-y-4"
          >
            <h3 className={`font-bold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-br ${experience.color} bg-clip-text text-transparent leading-tight`} data-testid={`text-experience-title-${index}`}>
              {experience.title}
            </h3>
            
            <div className={`flex items-center gap-2 ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${experience.accentColor}`} />
              <p className="text-base sm:text-lg text-gray-600 font-semibold" data-testid={`text-experience-org-${index}`}>
                {experience.organization}
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed" data-testid={`text-experience-desc-${index}`}>
              {experience.description}
            </p>

            {experience.highlights.length > 0 && (
              <motion.ul 
                className="space-y-3 pt-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {experience.highlights.map((highlight: string, i: number) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className={`flex items-start gap-3 text-sm sm:text-base text-gray-600 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${experience.accentColor} flex items-center justify-center mt-0.5`}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="flex-1">{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>

          {/* Decorative corner accent */}
          <div className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-32 h-32 bg-gradient-to-br ${experience.accentColor} opacity-5 blur-2xl`} />
        </div>
      </motion.div>

      {/* Enhanced center icon with animations */}
      <motion.div 
        className={`hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20`}
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
      >
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
          {/* Pulsing glow effect */}
          <motion.div
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${experience.accentColor} rounded-full blur-lg`}
          />
          
          {/* Main icon container */}
          <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${experience.color} shadow-2xl border-4 border-white flex items-center justify-center`}>
            <Icon className="w-10 h-10 text-white" />
            
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className={`absolute inset-0 rounded-full border-2 border-dashed ${experience.featured ? 'border-white/50' : 'border-white/30'}`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Empty space on opposite side */}
      <div className={`hidden lg:block ${isEven ? "lg:col-start-2" : ""}`} />
    </motion.div>
  );
}
