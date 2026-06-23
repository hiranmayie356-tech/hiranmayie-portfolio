import { motion } from 'framer-motion';
import { FiBookOpen, FiAward, FiLayers, FiBriefcase, FiCheck } from 'react-icons/fi';

export default function About() {
  const stats = [
    {
      icon: <FiBookOpen className="w-6 h-6 text-accent" />,
      value: '9.4',
      label: 'Current CGPA',
      desc: 'First 4 Semesters',
    },
    {
      icon: <FiAward className="w-6 h-6 text-accent" />,
      value: '3+',
      label: 'Hackathons',
      desc: 'Hacktrix, Hack-On, Genesis',
    },
    {
      icon: <FiLayers className="w-6 h-6 text-accent" />,
      value: '5',
      label: 'Certifications',
      desc: 'AWS, Cisco, NPTEL, Intel',
    },
    {
      icon: <FiBriefcase className="w-6 h-6 text-accent" />,
      value: '1',
      label: 'Research Intern',
      desc: 'Noctalyctic Insights',
    },
  ];

  const summaryPoints = [
    'Strong foundation in Computer Science fundamentals and software development.',
    'Experienced in collaborative project development and hackathon participation.',
    'Skilled in analytical thinking, problem-solving, and technical teamwork.',
    'Passionate about Data Analytics, Cloud Technologies, and emerging technologies.',
    'Seeking opportunities to apply technical knowledge through internships and industry projects.',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 bg-[#03030C] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-display text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Personal Bio & Education Column */}
          <motion.div
            className="lg:col-span-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white font-display mb-6">
              Aspiring Data Analyst & Cloud Enthusiast
            </h3>
            
            <div className="space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed">
              <p>
                I am a passionate and driven Computer Science Engineering student with a CGPA of 9.4 across my first four semesters. My academic journey has equipped me with strong technical foundations in programming, object-oriented design, data structures, and algorithms.
              </p>
              <p>
                Beyond academics, I actively participate in hackathons, technical events, and collaborative projects that challenge me to think critically and solve problems creatively. Through internships and leadership roles, I have developed teamwork, communication, analytical, and organizational skills that complement my technical expertise.
              </p>
              <p>
                My goal is to leverage technology and data-driven decision-making to create meaningful solutions while continuously growing as a technology professional.
              </p>
            </div>

            {/* Education block */}
            <div className="mt-8 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-accent mb-3">
                Education
              </h4>
              <h5 className="text-lg font-bold text-white font-display mb-1">
                Easwari Engineering College
              </h5>
              <p className="text-text-secondary text-sm font-semibold mb-2">
                Bachelor of Engineering (B.E.) – Computer Science and Engineering
              </p>
              <div className="inline-block px-3 py-1 bg-accent/15 text-accent border border-accent/20 rounded-full text-xs font-bold font-mono">
                Current CGPA: 9.4 (First 4 Semesters)
              </div>
            </div>
          </motion.div>

          {/* Statistics & Professional Summary Column */}
          <div className="lg:col-span-6 space-y-8">
            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="glass-card hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 p-5 rounded-2xl flex flex-col text-left group cursor-default"
                >
                  <div className="p-2.5 bg-white/5 rounded-xl w-fit mb-3 group-hover:bg-accent/15 group-hover:text-accent transition-all duration-300 text-text-secondary">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-0.5">
                    {stat.value}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-white/95 mb-0.5">
                    {stat.label}
                  </p>
                  <p className="text-[11px] sm:text-xs text-text-secondary">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Professional Summary Points */}
            <motion.div
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs uppercase tracking-wider font-extrabold text-accent mb-4">
                Professional Summary
              </h4>
              <ul className="space-y-3">
                {summaryPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="p-0.5 bg-accent/15 border border-accent/20 rounded text-accent mt-0.5 flex-shrink-0">
                      <FiCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
