
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="w-4"></div>
            
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="font-share-tech text-sm uppercase tracking-wider text-cyber-blue hover:text-white transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-neon-purple text-neon-purple bg-transparent hover:bg-neon-purple/10 font-orbitron font-bold py-2 px-6 rounded-lg transition-all duration-300 hidden md:block"
            >
              CONNECT
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
