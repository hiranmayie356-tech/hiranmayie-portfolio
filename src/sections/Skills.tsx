import { motion } from 'framer-motion';
import {
  SiPython,
  SiMysql,
  SiGithub,
  SiGit,
} from 'react-icons/si';
import {
  FiCpu,
  FiLayers,
  FiLink,
  FiBarChart2,
  FiCloud,
  FiSettings,
} from 'react-icons/fi';
import { DiDatabase, DiJava } from 'react-icons/di';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  isLearning?: boolean;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  color: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      color: 'from-[#38BDF8]/10 to-[#38BDF8]/5 border-[#38BDF8]/20 text-[#38BDF8]',
      skills: [
        { name: 'Python', icon: <SiPython className="w-8 h-8 text-[#3776AB]" /> },
        { name: 'Java', icon: <DiJava className="w-8 h-8 text-[#007396]" /> },
        { name: 'SQL (Basic)', icon: <DiDatabase className="w-8 h-8 text-[#4479A1]" /> },
      ],
    },
    {
      title: 'Core Concepts',
      color: 'from-[#A78BFA]/10 to-[#A78BFA]/5 border-[#A78BFA]/20 text-[#A78BFA]',
      skills: [
        { name: 'Data Structures & Algorithms', icon: <FiLayers className="w-7 h-7 text-[#A78BFA]" /> },
        { name: 'Object-Oriented Programming (OOP)', icon: <FiCpu className="w-7 h-7 text-[#F43F5E]" /> },
        { name: 'JDBC', icon: <FiLink className="w-7 h-7 text-[#10B981]" /> },
      ],
    },
    {
      title: 'Tools & Platforms',
      color: 'from-[#EC4899]/10 to-[#EC4899]/5 border-[#EC4899]/20 text-[#EC4899]',
      skills: [
        { name: 'Git', icon: <SiGit className="w-8 h-8 text-[#F05032]" /> },
        { name: 'GitHub', icon: <SiGithub className="w-8 h-8 text-[#E2E8F0]" /> },
        { name: 'MySQL', icon: <SiMysql className="w-8 h-8 text-[#4479A1]" /> },
      ],
    },
    {
      title: 'Currently Learning',
      color: 'from-[#F59E0B]/10 to-[#F59E0B]/5 border-[#F59E0B]/20 text-[#F59E0B]',
      skills: [
        { name: 'Data Analytics', icon: <FiBarChart2 className="w-7 h-7 text-[#F59E0B]" />, isLearning: true },
        { name: 'Cloud Technologies', icon: <FiCloud className="w-7 h-7 text-[#38BDF8]" />, isLearning: true },
        { name: 'Workflow Automation', icon: <FiSettings className="w-7 h-7 animate-[spin_6s_linear_infinite] text-[#10B981]" />, isLearning: true },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 70, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-[#03030C] relative overflow-hidden">
      {/* Background stardust glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-0 left-10 w-80 h-80 rounded-full bg-[#A78BFA]/5 blur-3xl pointer-events-none z-0" />

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
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary text-sm sm:text-base">
            An overview of my core programming competencies, fundamental computer science concepts, development tools, and active learning pursuits.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className={`glass-card p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg bg-gradient-to-tr ${category.color.split(' ').slice(0, 2).join(' ')} ${category.color.split(' ').slice(2, 3).join(' ')}`}
            >
              <h3 className="text-lg font-bold text-white font-display mb-6 border-b border-white/10 pb-3 text-left">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <div className="text-left">
                      <span className="font-semibold text-white/90 text-sm sm:text-base block">
                        {skill.name}
                      </span>
                      {skill.isLearning && (
                        <span className="text-[10px] uppercase font-bold text-accent tracking-widest block mt-0.5 animate-pulse">
                          Active Path
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
