import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      year: "2014–2016",
      degree: "Master's in Higher Education Administration",
      institution: "Michigan State University, USA",
      achievement: "3.75/4.0 GPA",
      description: "Advanced training in educational leadership and administration from a world-renowned institution.",
      icon: GraduationCap,
      color: "from-blue-600 to-blue-700"
    },
    {
      year: "2012",
      degree: "CEO Simulation Workshop",
      institution: "EnParadigm, IIM Ahmedabad",
      achievement: "Executive Education",
      description: "Strategic leadership and decision-making simulation training from India's premier management institute.",
      icon: Trophy,
      color: "from-purple-600 to-purple-700"
    },
    {
      year: "2011–2012",
      degree: "Executive Programme (Marketing & HR)",
      institution: "IIT Bombay",
      achievement: "Topper",
      description: "Distinguished performance in executive education program at one of India's top technical institutions.",
      icon: Award,
      color: "from-orange-600 to-orange-700"
    },
    {
      year: "1996–2000",
      degree: "Ph.D. (English Literature)",
      institution: "University",
      achievement: "Doctorate",
      description: "Advanced research and scholarly contribution in English Literature.",
      icon: GraduationCap,
      color: "from-green-600 to-green-700"
    },
    {
      year: "1992–1993",
      degree: "M.Phil. (English Literature)",
      institution: "University",
      achievement: "First Division",
      description: "Master of Philosophy with excellent academic standing.",
      icon: BookOpen,
      color: "from-teal-600 to-teal-700"
    },
    {
      year: "1990–1992",
      degree: "M.A. (English Literature)",
      institution: "University",
      achievement: "Gold Medalist",
      description: "Top academic honors in Master of Arts program.",
      icon: Award,
      color: "from-amber-600 to-amber-700"
    },
    {
      year: "1987–1990",
      degree: "B.A. (Hindi, English, Political Science, Economics)",
      institution: "College",
      achievement: "College Topper",
      description: "Bachelor of Arts with distinction across multiple disciplines.",
      icon: GraduationCap,
      color: "from-rose-600 to-rose-700"
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-20 md:py-32 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" data-testid="text-education-heading">
            Academic Excellence
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A distinguished academic journey spanning five advanced degrees with consistent excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line - desktop */}
          <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-rose-200" />

          <div className="space-y-6 sm:space-y-8">
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
    threshold: 0.2,
  });

  const Icon = education.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
      data-testid={`education-item-${index}`}
    >
      <div className="lg:pl-24 pl-0">
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Icon & Year - Mobile/Tablet */}
            <div className="flex items-center gap-4 sm:hidden">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${education.color} flex items-center justify-center shadow-md`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${education.color} text-white text-sm font-semibold shadow-md`}>
                {education.year}
              </span>
            </div>

            {/* Icon - Desktop */}
            <div className={`hidden sm:flex flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${education.color} items-center justify-center shadow-lg`}>
              <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Year - Desktop */}
              <span className={`hidden sm:inline-block mb-3 px-4 py-2 rounded-full bg-gradient-to-r ${education.color} text-white text-sm font-semibold shadow-md`}>
                {education.year}
              </span>

              <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-2 mt-2 sm:mt-0" data-testid={`text-education-degree-${index}`}>
                {education.degree}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <p className="text-sm sm:text-base text-blue-600 font-semibold" data-testid={`text-education-institution-${index}`}>
                  {education.institution}
                </p>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${education.color} bg-opacity-10 text-xs sm:text-sm font-semibold w-fit`}>
                  <Trophy className="w-3.5 h-3.5" />
                  {education.achievement}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed" data-testid={`text-education-desc-${index}`}>
                {education.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline dot - Desktop */}
      <div className={`hidden lg:block absolute left-12 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${education.color} border-4 border-white shadow-lg z-10`} />
    </motion.div>
  );
}
