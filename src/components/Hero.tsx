
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Building smart systems with aesthetic elegance.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-normal text-pink-500 whitespace-nowrap">
            AKSHITA SHETTY
          </h1>
        </div>

        <div className="mb-8 space-y-4">
          <p className="font-rajdhani text-2xl md:text-3xl lg:text-4xl text-white/90 font-medium">
            AI Developer | Web Engineer | UX Enthusiast
          </p>
          <div className="h-8 flex items-center justify-center">
            <p className="font-share-tech text-xl md:text-2xl text-neon-purple">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-orbitron font-bold py-3 px-8 text-base rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            VIEW PROJECTS
          </Button>
          <Button
            onClick={() => window.open('mailto:akshitashetty43@gmail.com')}
            variant="outline"
            className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-orbitron font-bold py-3 px-8 text-base rounded-lg transform transition-all duration-300 hover:scale-105"
          >
            DOWNLOAD RESUME
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, href: "https://github.com/Akshita3104", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/akshita-shetty-2004s", label: "LinkedIn" },
            { icon: Mail, href: "mailto:akshitashetty43@gmail.com", label: "Email" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-500/20 border border-white/20 hover:border-blue-500 transition-all duration-300 group"
            >
              <Icon className="w-6 h-6 text-blue-500 group-hover:text-blue-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
