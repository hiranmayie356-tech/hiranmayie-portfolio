import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiMapPin, FiAward, FiArrowRight } from 'react-icons/fi';
import FloatingParticles from '../components/FloatingParticles';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const titles = [
    'Computer Science Engineering Student',
    'Aspiring Data Analyst',
    'Cloud Technology Enthusiast'
  ];

  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const activeWord = titles[titleIdx];
    let typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && charIdx === activeWord.length) {
      typingSpeed = 2000; // Pause at end of text
      setIsDeleting(true);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % titles.length);
      typingSpeed = 400; // Delay before starting next word
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? activeWord.substring(0, charIdx - 1)
          : activeWord.substring(0, charIdx + 1)
      );
      setCharIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#03030C]"
    >
      {/* Space Background Layer */}
      <FloatingParticles />

      {/* Deep Space Nebula Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#A78BFA]/10 blur-3xl pointer-events-none z-0 animate-[pulse-slow_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#38BDF8]/10 blur-3xl pointer-events-none z-0 animate-[pulse-slow_8s_ease-in-out_infinite_delay-500]" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col text-left justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 text-accent font-semibold tracking-wider uppercase text-xs sm:text-sm mb-4 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
              <FiAward className="w-4 h-4" /> Available for Summer Internships
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white font-display mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#A78BFA] relative">
              Hiranmayie S
            </span>
          </motion.h1>

          {/* Typing Effect Container */}
          <motion.div
            className="h-8 md:h-10 mb-6 flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 border-r-2 border-accent pr-1 animate-pulse">
              {displayText}
            </span>
          </motion.div>

          <motion.p
            className="text-text-secondary max-w-xl text-sm sm:text-base mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I am a Computer Science Engineering student at Easwari Engineering College with a strong foundation in programming, problem-solving, and analytical thinking. I enjoy building innovative solutions, participating in hackathons, and collaborating on technology-driven projects. My interests lie in Data Analytics, Cloud Technologies, and Workflow Automation.
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-text-secondary font-medium text-sm mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <FiMapPin className="text-accent w-4 h-4" />
            <span>Chennai, Tamil Nadu, India</span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => onScrollTo('achievements')}
              className="px-6 py-3 bg-gradient-to-r from-accent to-purple-600 hover:from-accent-hover hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto cursor-pointer flex items-center gap-2"
            >
              View Achievements
              <FiArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onScrollTo('skills')}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-medium rounded-lg shadow-sm hover:-translate-y-0.5 transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              Explore Skills
            </button>
            <button
              onClick={() => onScrollTo('contact')}
              className="px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20 font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Celestial Orbital Column */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
          >
            {/* Nebula core glow */}
            <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl animate-pulse" />
            
            {/* Rotating Orbital Track 1 (Violet) */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-dashed border-[#A78BFA]/20 animate-[spin_25s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#A78BFA] to-purple-500 shadow-[0_0_15px_#A78BFA] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>
            </div>
            
            {/* Rotating Orbital Track 2 (Cyan) */}
            <div className="absolute w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-dashed border-[#38BDF8]/20 animate-[spin_15s_linear_infinite_reverse]">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8] flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white" />
              </div>
            </div>

            {/* Rotating Orbital Track 3 (Pink) */}
            <div className="absolute w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border border-dashed border-pink-500/10 animate-[spin_10s_linear_infinite]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
            </div>

            {/* Central Celestial Body - Glassmorphic Star */}
            <div className="absolute w-28 h-28 rounded-full glass-card flex items-center justify-center border border-white/10 shadow-[0_0_40px_rgba(56,189,248,0.2)] backdrop-blur-md">
              <div className="text-accent text-5xl animate-[pulse_4s_ease-in-out_infinite] select-none cursor-default">
                ✦
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
        <span className="text-xs uppercase tracking-widest text-text-secondary mb-2 font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-accent cursor-pointer"
          onClick={() => onScrollTo('about')}
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}
