import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';

interface NavbarProps {
  activeSection: string;
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'py-4 glass-nav shadow-lg bg-[#03030C]/80'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-white font-display hover:text-accent transition-colors pointer-events-auto cursor-pointer"
        >
          <div className="p-1.5 bg-accent/10 rounded-lg text-accent shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <FiGlobe className="w-5 h-5 animate-[spin_20s_linear_infinite]" />
          </div>
          <span>Hiranmayie S.</span>
        </button>

        {/* Desktop Links Navigation */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 pointer-events-auto cursor-pointer border ${
                activeSection === link.id
                  ? 'bg-accent/15 text-accent border-accent/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                  : 'text-text-secondary border-transparent hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden text-white hover:text-accent p-1.5 rounded-lg border border-white/10 bg-white/5 shadow-sm transition-all pointer-events-auto cursor-pointer"
        >
          {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links Navigation Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-[#03030C]/95 backdrop-blur-lg border-b border-white/10 shadow-lg py-4 px-6 flex flex-col gap-2 z-50">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`w-full py-3 px-4 rounded-xl text-left text-base font-semibold transition-all pointer-events-auto cursor-pointer border ${
                activeSection === link.id
                  ? 'bg-accent/15 text-accent border-accent/20'
                  : 'text-text-secondary border-transparent hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
