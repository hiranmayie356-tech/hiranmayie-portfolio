import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiExternalLink, FiCode, FiAward } from 'react-icons/fi';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

interface Profile {
  name: string;
  username: string;
  icon: React.ReactNode;
  stats: string[];
  link: string;
  color: string; // Tailwind v4 dynamic colors or inline theme vars
  glowClass: string;
}

export default function CodingProfiles() {
  const profiles: Profile[] = [
    {
      name: 'GitHub',
      username: '@hiranmayies',
      icon: <FiGithub className="w-8 h-8" />,
      stats: ['50+ Repositories', '1,200+ Contributions', '15+ Active Projects'],
      link: 'https://github.com',
      color: 'bg-[#181717]/10 hover:bg-[#181717] hover:text-white border-[#181717]/20 text-[#181717]',
      glowClass: 'hover:shadow-[0_0_25px_rgba(24,23,23,0.35)]',
    },
    {
      name: 'LeetCode',
      username: '@hiranmayie_s',
      icon: <SiLeetcode className="w-8 h-8" />,
      stats: ['450+ Problems Solved', 'Easy: 180 | Medium: 230 | Hard: 40', 'Top 12% Global Rank'],
      link: 'https://leetcode.com',
      color: 'bg-[#FFA116]/10 hover:bg-[#FFA116] hover:text-white border-[#FFA116]/20 text-[#FFA116]',
      glowClass: 'hover:shadow-[0_0_25px_rgba(255,161,22,0.35)]',
    },
    {
      name: 'LinkedIn',
      username: 'hiranmayie-santhanaraman',
      icon: <FiLinkedin className="w-8 h-8" />,
      stats: ['500+ Connections', 'AWS Cloud Tech Network', 'Active Technical Poster'],
      link: 'https://linkedin.com',
      color: 'bg-[#0077B5]/10 hover:bg-[#0077B5] hover:text-white border-[#0077B5]/20 text-[#0077B5]',
      glowClass: 'hover:shadow-[0_0_25px_rgba(0,119,181,0.35)]',
    },
    {
      name: 'HackerRank',
      username: '@hiranmayie_s',
      icon: <SiHackerrank className="w-8 h-8" />,
      stats: ['5 Stars Problem Solving', '5 Stars Java Programming', 'Gold Badge Algorithmics'],
      link: 'https://hackerrank.com',
      color: 'bg-[#2EC866]/10 hover:bg-[#2EC866] hover:text-white border-[#2EC866]/20 text-[#2EC866]',
      glowClass: 'hover:shadow-[0_0_25px_rgba(46,200,102,0.35)]',
    },
  ];

  return (
    <section id="profiles" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none z-0" />

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
            Developer Profiles
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-accent mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <p className="text-text-secondary">
            Connect with me across coding registries, open-source hubs, algorithmic platforms, and professional networks.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profiles.map((profile, idx) => (
            <motion.div
              key={idx}
              className={`glass-card p-8 rounded-2xl border border-primary/10 shadow-sm transition-all duration-300 flex flex-col justify-between text-left h-full ${profile.glowClass} group cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                {/* Profile Header Brand Icon */}
                <div className={`p-4 rounded-xl border w-fit mb-6 transition-all duration-300 ${profile.color}`}>
                  {profile.icon}
                </div>

                {/* Profile Title / Brand */}
                <h3 className="text-xl font-bold text-secondary font-display mb-1">
                  {profile.name}
                </h3>
                
                {/* Username */}
                <p className="text-xs text-text-secondary font-mono mb-6 bg-slate-50 border border-slate-100 rounded px-2.5 py-1 w-fit">
                  {profile.username}
                </p>

                {/* Bullet Stats list */}
                <ul className="space-y-2 mb-8 text-sm text-text-secondary leading-relaxed">
                  {profile.stats.map((stat, statIdx) => (
                    <li key={statIdx} className="flex items-center gap-2">
                      {statIdx === 0 ? (
                        <FiCode className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      ) : (
                        <FiAward className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      )}
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View Profile Action Link Button */}
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 hover:bg-secondary border border-secondary/5 hover:text-white text-secondary rounded-lg font-medium text-sm transition-all duration-300 shadow-sm"
              >
                View Profile
                <FiExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
