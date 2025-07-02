
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "JavaScript", "HTML/CSS", "PHP"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      title: "Web Frameworks",
      skills: ["React.js", "Node.js", "Express.js", "Django"]
    },
    {
      title: "AI/ML Tools",
      skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV", "LLMs", "OCR"]
    },
    {
      title: "Development Tools",
      skills: ["Git/GitHub", "Postman", "REST APIs", "XAMPP", "Electron", "AWS", "Vercel"]
    },
    {
      title: "Design & UI/UX",
      skills: ["Figma", "Canva", "Adobe Illustrator", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center">SKILLS_&_EXPERTISE</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-transparent border border-white/10 hover:border-cyber-blue/30 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 hover:scale-105 text-center group">
              <div className="space-y-4">
                <h3 className="font-orbitron text-lg font-bold text-neon-purple">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="text-white text-sm m-1">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
