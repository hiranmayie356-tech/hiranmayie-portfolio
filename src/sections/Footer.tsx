import { FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      link: 'https://www.linkedin.com/in/hiranmayie-santhanaraman-929549335/',
      label: 'LinkedIn',
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      link: 'https://github.com/hiranmayie356-tech',
      label: 'GitHub',
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      link: 'mailto:hiranmayie356@gmail.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-[#020208] text-white pt-16 pb-8 border-t border-white/5 relative z-10 text-left">
      <div className="container mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Subtext */}
          <div className="md:col-span-5">
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-3">
              Hiranmayie S
            </h3>
            <p className="text-slate-400 text-sm max-w-sm mb-4 leading-relaxed font-sans">
              Computer Science Engineering student and aspiring Data Analyst and Cloud enthusiast, focusing on solving technical challenges and developing data-driven solutions.
            </p>
            {/* Social handles */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent border border-white/10 hover:border-accent text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Spacer column */}
          <div className="md:col-span-1 hidden md:block" />

          {/* Quick Navigation Panel */}
          <div className="md:col-span-6 flex flex-col md:items-end">
            <h4 className="text-sm uppercase tracking-wider font-extrabold text-slate-300 mb-4 md:text-right">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-8 md:text-right">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => onScrollTo(link.id)}
                  className="text-sm font-semibold text-slate-400 hover:text-white text-left md:text-right transition-colors pointer-events-auto cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal separator */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Footer bottom details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© 2026 Hiranmayie S. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
