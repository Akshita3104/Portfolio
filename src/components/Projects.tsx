
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "KnowTera",
      description: "PDF Q&A and quiz generator with LLM integration for dynamic interaction",
      tech: ["React", "Vite", "Render", "Groq LLM", "PDF Processing"],
      features: [
        "Upload PDFs and generate summaries",
        "Interactive Q&A system",
        "Dynamic quiz generation",
        "LLM-powered content analysis"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Notoria",
      description: "Cross-platform productivity app with minimalist UI and music integration",
      tech: ["React", "Vite", "Electron", "Cross-platform"],
      features: [
        "Note-taking system",
        "Task management",
        "Integrated music player",
        "Minimalist design"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Resume Builder + ATS Checker",
      description: "Create ATS-validated resumes with real-time optimization suggestions",
      tech: ["React", "Tailwind", "Node.js", "Express", "LLM"],
      features: [
        "ATS score validation",
        "Real-time optimization",
        "Multiple templates",
        "Export functionality"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Invoice Data Extractor",
      description: "OCR-powered invoice data extraction with 95%+ accuracy",
      tech: ["Tkinter", "OCR", "Google GenAI", "PDF Processing"],
      features: [
        "OCR text extraction",
        "95%+ accuracy rate",
        "Structured data output",
        "Multiple format support"
      ],
      githubUrl: "#"
    },
    {
      title: "Food Ordering Website",
      description: "Full-stack food ordering system with user authentication",
      tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "XAMPP"],
      features: [
        "User authentication",
        "Menu management",
        "Shopping cart",
        "Order tracking"
      ],
      githubUrl: "#"
    },
    {
      title: "Book Recommendation System",
      description: "GUI application with genre filtering and personalized recommendations",
      tech: ["Python", "Tkinter", "MySQL", "Matplotlib"],
      features: [
        "Genre-based filtering",
        "User preferences",
        "Data visualization",
        "Recommendation engine"
      ],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="section-title text-center">FEATURED_PROJECTS</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-transparent border border-white/10 hover:border-cyber-blue/30 rounded-xl p-6 transform transition-all duration-500 hover:scale-105 group relative overflow-hidden backdrop-blur-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-orbitron text-xl font-bold text-neon-purple group-hover:text-neon-pink transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-share-tech text-sm text-neon-pink uppercase tracking-wider">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start">
                        <span className="text-neon-purple mr-2 mt-1.5 w-1 h-1 rounded-full bg-neon-purple flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-white text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      variant="outline"
                      className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 flex-1"
                    >
                      LIVE DEMO
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    variant="outline"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all duration-300 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    CODE
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
