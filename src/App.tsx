import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CursorGlow from './components/CursorGlow';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 72; // height of the navbar
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'experience',
        'achievements',
        'certifications',
        'contact',
      ];
      
      // Offset to trigger highlight slightly early for better UX
      const scrollPosition = window.scrollY + 110;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to handle initial load/refresh positions
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#03030C] overflow-x-hidden antialiased select-none text-text-primary">
      {/* Premium Spotlight Follower */}
      <CursorGlow />
      
      {/* Floating Glass Navbar */}
      <Navbar activeSection={activeSection} onScrollTo={handleScrollTo} />
      
      {/* Portfolio Sections */}
      <Hero onScrollTo={handleScrollTo} />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      
      {/* Branded Footer */}
      <Footer onScrollTo={handleScrollTo} />
    </div>
  );
}

export default App;
