
import React from 'react';
import { Card } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "AI Cyber Lab Analyst Intern",
      company: "DeepCytes Cyber Lab (UK)",
      period: "Feb 2025 – Present",
      type: "Remote",
      achievements: [
        "Analyzed 300+ OSINT/AI tools and documented capabilities",
        "Streamlined tagging, boosting team efficiency by 40%",
        "Built a reference system for faster tool selection"
      ],
      tech: ["OSINT", "AI Tools", "Documentation", "Analysis"]
    },
    {
      title: "AI Intern",
      company: "Dalal Naresh Vasanji",
      period: "Dec 2024 – Jun 2025",
      type: "Part-time, Remote",
      achievements: [
        "Developed 'Invoice Data Extractor' (95%+ accuracy from PDFs/JPGs)",
        "Used OCR (Tesseract), Gemini API, PDF parsers",
        "Delivered structured Excel output with 90%+ success"
      ],
      tech: ["OCR", "Tesseract", "Gemini API", "PDF Processing", "Excel Automation"]
    },
    {
      title: "AI Intern",
      company: "Aavaaz Inc (ASPIRE Program)",
      period: "Dec 2024 – Jan 2025",
      type: "Remote",
      achievements: [
        "Trained NLP models for voice interaction",
        "Boosted model accuracy by 10% via dataset cleanup",
        "Deployed MVP for speech-to-text pipeline"
      ],
      tech: ["NLP", "Voice Processing", "Speech-to-Text", "Model Training"]
    },
    {
      title: "Web Development Intern",
      company: "EY GDS & AICTE",
      period: "Feb 2025 – Mar 2025",
      type: "Remote",
      achievements: [
        "Built a MERN-stack project management tool",
        "Added task planning, tracking, and team collaboration",
        "Followed Agile and improved UI responsiveness"
      ],
      tech: ["MERN Stack", "Project Management", "Agile", "UI/UX"]
    },
    {
      title: "Data Science Intern",
      company: "KJSCE",
      period: "Dec 2023 – Jan 2024",
      type: "Hybrid",
      achievements: [
        "Built a Book Recommendation System (Tkinter, MySQL)",
        "Used Matplotlib for visualization",
        "Improved recommendation relevance by 35%"
      ],
      tech: ["Python", "Tkinter", "MySQL", "Matplotlib", "Recommendation Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">EXPERIENCE_TIMELINE</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-pink to-neon-purple"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink animate-glow z-10"></div>
                
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="cyber-card hover:scale-105 transition-transform duration-500">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-orbitron text-xl font-bold text-neon-purple">
                          {exp.title}
                        </h3>
                        <p className="font-rajdhani text-lg text-neon-pink font-semibold">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm text-white/70 mt-1">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.type}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-white/90 text-sm flex items-start">
                            <span className="text-neon-purple mr-2 mt-1.5 w-1 h-1 rounded-full bg-neon-purple flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <span key={i} className="text-white text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
