import React, { useState } from "react";
import { Github } from "lucide-react";

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
        "LLM-powered content analysis",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Notoria",
      description: "Cross-platform productivity app with minimalist UI and music integration",
      tech: ["React", "Vite", "Electron", "Cross-platform"],
      features: [
        "Note-taking system",
        "Task management",
        "Integrated music player",
        "Minimalist design",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Resume Builder + ATS Checker",
      description: "Create ATS-validated resumes with real-time optimization suggestions",
      tech: ["React", "Tailwind", "Node.js", "Express", "LLM"],
      features: [
        "ATS score validation",
        "Real-time optimization",
        "Multiple templates",
        "Export functionality",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Invoice Data Extractor",
      description: "OCR-powered invoice data extraction with 95%+ accuracy",
      tech: ["Tkinter", "OCR", "Google GenAI", "PDF Processing"],
      features: [
        "OCR text extraction",
        "95%+ accuracy rate",
        "Structured data output",
        "Multiple format support",
      ],
      githubUrl: "#",
    },
    {
      title: "Food Ordering Website",
      description: "Full-stack food ordering system with user authentication",
      tech: ["PHP", "JavaScript", "HTML/CSS", "MySQL", "XAMPP"],
      features: [
        "User authentication",
        "Menu management",
        "Shopping cart",
        "Order tracking",
      ],
      githubUrl: "#",
    },
    {
      title: "Book Recommendation System",
      description: "GUI application with genre filtering and personalized recommendations",
      tech: ["Python", "Tkinter", "MySQL", "Matplotlib"],
      features: [
        "Genre-based filtering",
        "User preferences",
        "Data visualization",
        "Recommendation engine",
      ],
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "Orbitron, sans-serif",
            textAlign: "center",
            fontSize: "2.75rem",
            fontWeight: "bold",
            marginBottom: "60px",
            background: "linear-gradient(to right, #9F00FF, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          FEATURED_PROJECTS
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {projects.map((project, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={index}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "24px",
                  transition: "all 0.4s ease-in-out",
                  backdropFilter: "blur(8px)",
                  overflow: "hidden",
                  boxShadow: isHovered
                    ? "0 0 12px rgba(70, 130, 180, 0.2)"
                    : "none",
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                  border: isHovered
                    ? "1px solid rgba(70, 130, 180, 0.4)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <h3
                  style={{
                    fontFamily: "Orbitron, sans-serif",
                    fontSize: "1.25rem",
                    color: isHovered ? "#FF00C8" : "#9F00FF",
                    marginBottom: "8px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    color: "#ddd",
                    marginBottom: "12px",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>

                <h4
                  style={{
                    fontFamily: "Share Tech Mono, monospace",
                    color: "#FF00C8",
                    fontSize: "0.85rem",
                    marginBottom: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Key Features:
                </h4>

                <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        color: "#eee",
                        fontSize: "0.85rem",
                        marginBottom: "6px",
                        lineHeight: "1.6",
                      }}
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "16px",
                  }}
                >
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "4px 8px",
                        borderRadius: "8px",
                        color: "white",
                        fontSize: "0.75rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {project.liveUrl && (
                    <button
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #00FFFF",
                        borderRadius: "8px",
                        background: "transparent",
                        color: "#00FFFF",
                        cursor: "pointer",
                        fontFamily: "Orbitron, sans-serif",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#00FFFF";
                        e.currentTarget.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#00FFFF";
                      }}
                    >
                      LIVE DEMO
                    </button>
                  )}

                  <button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      border: "1px solid #00FFFF",
                      borderRadius: "8px",
                      background: "transparent",
                      color: "#00FFFF",
                      cursor: "pointer",
                      fontFamily: "Orbitron, sans-serif",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00FFFF";
                      e.currentTarget.style.color = "#000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#00FFFF";
                    }}
                  >
                    <Github size={16} /> CODE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;