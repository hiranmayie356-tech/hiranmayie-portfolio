import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export default function Experience() {
  const internshipPoints = [
    'Analyzed and interpreted complex data sets to derive meaningful business insights.',
    'Improved reporting and data presentation clarity through structured analysis & visualization.',
    'Strengthened analytical thinking and reporting methodologies through practical mock projects.',
    'Worked closely with industry mentors to develop robust data-driven problem-solving approaches.',
    'Gained hands-on exposure to collaborative research practices and professional analytical workflows.',
  ];

  return (
    <section id="experience" className="py-24 bg-[#03030C] relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-[#A78BFA]/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-[#38BDF8]/5 blur-3xl pointer-events-none z-0" />

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
            Work Experience
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary text-sm sm:text-base">
            Chronological log of my professional internships, practical projects, and collaborative research engagements.
          </p>
        </div>

        {/* Experience Workstation Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-lg p-6 sm:p-10 relative group bg-gradient-to-tr from-white/[0.01] to-white/[0.03]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          >
            {/* Top border ambient glow */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 text-left">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/15 border border-accent/25 rounded-full text-xs font-bold text-accent">
                    <FiBriefcase className="w-3.5 h-3.5" /> Internship
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary font-medium">
                    <FiCalendar className="w-3.5 h-3.5" /> Ongoing Research Path
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary font-medium">
                    <FiMapPin className="w-3.5 h-3.5" /> Remote / Hybrid
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-1.5">
                  Research Intern
                </h3>
                <h4 className="text-lg font-semibold text-accent mb-6 font-display">
                  Noctalyctic Insights
                </h4>

                <div className="space-y-4">
                  {internshipPoints.map((bullet, bulletIdx) => (
                    <motion.div
                      key={bulletIdx}
                      className="flex items-start gap-3.5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: bulletIdx * 0.1 }}
                    >
                      <span className="p-0.5 bg-accent/10 border border-accent/20 rounded text-accent mt-0.5 flex-shrink-0">
                        <FiCheckCircle className="w-4 h-4" />
                      </span>
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Data Telemetry Mock Panel */}
              <div className="lg:col-span-5 flex justify-center w-full">
                <div className="w-full max-w-sm rounded-2xl border border-white/5 bg-black/40 p-5 shadow-inner relative overflow-hidden font-mono text-[11px] text-left">
                  {/* Decorative window circles */}
                  <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                    <span className="text-[10px] text-text-secondary ml-2">telemetry_console.py</span>
                  </div>

                  <div className="space-y-2.5 leading-normal text-text-secondary">
                    <p className="text-green-400">{'>>> import noctalyctic_analytics as na'}</p>
                    <p className="text-green-400">{">>> model = na.DataModel(dataset='market_telemetry')"}</p>
                    <p className="text-green-400">{'>>> model.fit_and_summarize()'}</p>
                    <div className="border border-white/5 rounded p-2.5 bg-white/[0.01] space-y-1 mt-1 text-white/95">
                      <p className="text-accent">Model Evaluation Completed.</p>
                      <p>• Data points processed: 48,209</p>
                      <p>• Confidence level: 98.4%</p>
                      <p>• Primary insights extracted: 5 core indicators</p>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-accent font-semibold animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>Console idle... waiting for query</span>
                    </div>
                  </div>

                  {/* Aesthetic Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
