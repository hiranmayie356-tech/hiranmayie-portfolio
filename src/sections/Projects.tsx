import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiCloud, FiGlobe, FiCpu } from 'react-icons/fi';

interface Project {
  id: number;
  name: string;
  category: 'cloud' | 'web' | 'academic';
  description: string;
  tags: string[];
  github: string;
  demo: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'cloud' | 'web' | 'academic'>('all');

  const projects: Project[] = [
    {
      id: 1,
      name: 'AWS Automated Multi-Region Backup',
      category: 'cloud',
      description: 'High-availability automated backups across AWS S3 and Glacier with versioning lifecycle rules, using Lambda functions and EventBridge schedules for cron triggers.',
      tags: ['Terraform', 'AWS Lambda', 'Amazon S3', 'Glacier', 'Python'],
      github: 'https://github.com',
      demo: 'https://aws.amazon.com',
      icon: <FiCloud className="w-12 h-12 text-[#FF9900]" />,
      gradient: 'from-[#FF9900]/10 to-[#FF9900]/5',
    },
    {
      id: 2,
      name: 'Containerized ECS Multi-Tier App',
      category: 'cloud',
      description: 'Production-ready cloud architecture on AWS ECS Fargate, routing traffic through an Application Load Balancer (ALB) with Route53 DNS resolving and RDS scaling.',
      tags: ['AWS ECS', 'Fargate', 'Docker', 'Route53', 'RDS', 'Terraform'],
      github: 'https://github.com',
      demo: 'https://aws.amazon.com',
      icon: <FiCloud className="w-12 h-12 text-[#4A6FA5]" />,
      gradient: 'from-[#4A6FA5]/10 to-[#272838]/5',
    },
    {
      id: 3,
      name: 'SaaS DevOps Analytics Dashboard',
      category: 'web',
      description: 'A premium real-time developer metrics platform tracking server health telemetry, Docker cluster capacity, system logs, and live webhook deployment pipelines.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Chart.js', 'Node.js', 'Express'],
      github: 'https://github.com',
      demo: 'https://github.com',
      icon: <FiGlobe className="w-12 h-12 text-[#61DAFB]" />,
      gradient: 'from-[#61DAFB]/10 to-[#272838]/5',
    },
    {
      id: 4,
      name: 'Real-time Collaborative Scrum Board',
      category: 'web',
      description: 'A responsive Kanban project planner with dynamic drag-and-drop lane workflows, team membership management, task nesting, and instant web-socket synchronizations.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'CSS3', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://github.com',
      icon: <FiGlobe className="w-12 h-12 text-[#AECBD5]" />,
      gradient: 'from-[#AECBD5]/20 to-[#4A6FA5]/5',
    },
    {
      id: 5,
      name: 'Distributed Network Cluster Scheduler',
      category: 'academic',
      description: 'A decentralized algorithmic task scheduler implementing custom dynamic load-balancing to distribute computationally heavy processes across TCP socket server grids.',
      tags: ['Java', 'Socket Programming', 'Multithreading', 'MySQL', 'Distributed Systems'],
      github: 'https://github.com',
      demo: 'https://github.com',
      icon: <FiCpu className="w-12 h-12 text-[#10B981]" />,
      gradient: 'from-[#10B981]/10 to-[#272838]/5',
    },
    {
      id: 6,
      name: 'Predictive Server Load Surge Analyzer',
      category: 'academic',
      description: 'An AI-powered load capacity forecasting script utilizing regression algorithms to predict web traffic and system usage surges from historical server request logs.',
      tags: ['Python', 'Scikit-Learn', 'Pandas', 'Flask API', 'Jupyter'],
      github: 'https://github.com',
      demo: 'https://github.com',
      icon: <FiCpu className="w-12 h-12 text-[#F43F5E]" />,
      gradient: 'from-[#F43F5E]/10 to-[#272838]/5',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-12 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold font-display text-secondary mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary">
            Explore a curated selection of my practical creations spanning AWS architecture, full-stack websites, and computer science projects.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {(['all', 'cloud', 'web', 'academic'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold capitalize cursor-pointer transition-all duration-300 ${
                filter === cat
                  ? 'bg-secondary text-white shadow-md'
                  : 'bg-white text-text-secondary border border-secondary/10 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'Show All' : `${cat} projects`}
            </button>
          ))}
        </div>

        {/* Projects Grid Container with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`glass-card rounded-2xl border border-primary/10 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 bg-gradient-to-br ${project.gradient} group`}
              >
                <div>
                  {/* Decorative graphic panel */}
                  <div className="h-48 bg-slate-900/5 border-b border-primary/5 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-900/10 transition-colors duration-300">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Rotating grid decoration */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                    
                    {/* Visual Project Mockup */}
                    <div className="relative p-6 bg-white/95 rounded-2xl shadow-sm border border-secondary/15 flex items-center justify-center transform group-hover:scale-108 transition-all duration-300">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project Info details */}
                  <div className="p-6 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <FiFolder className="w-4 h-4 text-accent" />
                      <span className="text-xs uppercase tracking-widest font-bold text-accent">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-secondary font-display mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.name}
                    </h3>

                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[11px] font-bold text-secondary/80 bg-white/80 border border-slate-100 px-2 py-0.5 rounded shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-primary/5 bg-white/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-secondary transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                  >
                    Live Demo
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
