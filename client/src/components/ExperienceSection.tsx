import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Award, Users, Building2 } from "lucide-react";

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
      color: "from-blue-500 to-indigo-500"
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
      color: "from-violet-500 to-purple-500"
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
      color: "from-sky-500 to-cyan-500"
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
      color: "from-teal-500 to-emerald-500"
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
      color: "from-indigo-500 to-blue-500"
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
      color: "from-purple-500 to-fuchsia-500"
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
      color: "from-cyan-500 to-sky-500"
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
      color: "from-blue-400 to-violet-400"
    },
    {
      year: "1997–1998",
      title: "Lecturer (English)",
      organization: "BSA College of Engineering & Technology, Mathura",
      description: "Strengthened expertise in academic instruction and curriculum delivery.",
      highlights: [],
      icon: Briefcase,
      color: "from-teal-400 to-cyan-400"
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
      color: "from-indigo-400 to-purple-400"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Simple creative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-50 opacity-40 blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-purple-50 opacity-40 blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 rounded-full bg-cyan-50 opacity-40 blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-44 h-44 rounded-full bg-indigo-50 opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-50 opacity-20 blur-3xl" />
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-4" data-testid="text-experience-heading">
            Professional Journey
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Three decades of excellence in education, leadership, and institutional development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200" />

          <div className="space-y-8 sm:space-y-12">
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
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;
  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative grid md:grid-cols-2 gap-6 sm:gap-8 items-center ${isEven ? "" : "md:flex-row-reverse"}`}
      data-testid={`experience-item-${index}`}
    >
      {/* Content - Left side for even, right for odd */}
      <div className={`${isEven ? "md:text-right md:pr-12" : "md:pl-12 md:col-start-2"} space-y-3 sm:space-y-4`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${experience.color} text-white text-xs sm:text-sm font-semibold shadow-lg`}>
            {experience.year}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-2" data-testid={`text-experience-title-${index}`}>
            {experience.title}
          </h3>
          <p className="text-sm sm:text-base text-indigo-600 font-semibold mb-3" data-testid={`text-experience-org-${index}`}>
            {experience.organization}
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4" data-testid={`text-experience-desc-${index}`}>
            {experience.description}
          </p>
          {experience.highlights.length > 0 && (
            <ul className="space-y-2">
              {experience.highlights.map((highlight: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                  <span className="text-violet-500 mt-1">✓</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>

      {/* Icon - Center */}
      <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br ${experience.color} shadow-lg border-4 border-white z-10`}>
        <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
      </div>

      {/* Empty space on opposite side */}
      <div className={`hidden md:block ${isEven ? "md:col-start-2" : ""}`} />
    </motion.div>
  );
}
