import React, { useState } from "react";

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
        "Built a reference system for faster tool selection",
      ],
      tech: ["OSINT", "AI Tools", "Documentation", "Analysis"],
    },
    {
      title: "AI Intern",
      company: "Dalal Naresh Vasanji",
      period: "Dec 2024 – May 2025",
      type: "Part-time, Remote",
      achievements: [
        "Developed 'Invoice Data Extractor' (95%+ accuracy from PDFs/JPGs)",
        "Used OCR (Tesseract), Gemini API, PDF parsers",
        "Delivered structured Excel output with 90%+ success",
      ],
      tech: ["OCR", "Tesseract", "Gemini API", "PDF Processing", "Excel Automation"],
    },
    {
      title: "AI Intern",
      company: "Aavaaz Inc (ASPIRE Program)",
      period: "Dec 2024 – Jan 2025",
      type: "Remote",
      achievements: [
        "Trained NLP models for voice interaction",
        "Boosted model accuracy by 10% via dataset cleanup",
        "Deployed MVP for speech-to-text pipeline",
      ],
      tech: ["NLP", "Voice Processing", "Speech-to-Text", "Model Training"],
    },
    {
      title: "Web Development Intern",
      company: "EY GDS & AICTE",
      period: "Feb 2025 – Mar 2025",
      type: "Remote",
      achievements: [
        "Built a MERN-stack project management tool",
        "Added task planning, tracking, and team collaboration",
        "Followed Agile and improved UI responsiveness",
      ],
      tech: ["MERN Stack", "Project Management", "Agile", "UI/UX"],
    },
    {
      title: "Data Science Intern",
      company: "KJ Somaiya College of Engineering",
      period: "Dec 2023 – Jan 2024",
      type: "Hybrid",
      achievements: [
        "Built a Book Recommendation System (Tkinter, MySQL)",
        "Used Matplotlib for visualization",
        "Improved recommendation relevance by 35%",
      ],
      tech: ["Python", "Tkinter", "MySQL", "Matplotlib", "Recommendation Systems"],
    },
    {
      title: "Web Development Intern",
      company: "KJ Somaiya College of Engineering",
      period: "Jul 2023 – Aug 2023",
      type: "Remote",
      achievements: [
        "Designed and developed a music streaming website from scratch",
        "Utilized HTML, CSS, and JavaScript for full UI build",
        "Created a clean, responsive interface to showcase music and user submissions",
      ],
      tech: ["HTML", "CSS", "JavaScript", "Frontend Development"],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "80px 24px",
        backgroundColor: "rgba(0,0,0,0.2)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.75rem",
            fontWeight: "bold",
            marginBottom: "3rem",
            background: "linear-gradient(to right, #9F00FF, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
            position: "relative",
            zIndex: 2,
          }}
        >
          EXPERIENCE_TIMELINE
        </h2>

        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            top: "140px",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "3px",
            background: "linear-gradient(to bottom, #9F00FF, #FF00C8, #9F00FF)",
            zIndex: 0,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: isLeft ? "row" : "row-reverse",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "40px",
                  position: "relative",
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    width: "16px",
                    height: "16px",
                    background: "linear-gradient(to right, #9F00FF, #FF00C8)",
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                ></div>

                {/* Experience Card */}
                <div
                  style={{
                    width: "calc(50% - 60px)",
                    marginLeft: isLeft ? "0" : "auto",
                    marginRight: isLeft ? "auto" : "0",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: hovered
                      ? "1px solid rgba(70, 130, 180, 0.4)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "24px",
                    boxShadow: hovered
                      ? "0 0 12px rgba(70, 130, 180, 0.2)"
                      : "none",
                    transform: hovered ? "scale(1.02)" : "scale(1)",
                    transition: "box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out, border 0.4s ease-in-out",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <h3
                    style={{
                      fontFamily: "Orbitron, sans-serif",
                      fontSize: "1.25rem",
                      color: "#9F00FF",
                      marginBottom: "4px",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Rajdhani, sans-serif",
                      fontSize: "1.1rem",
                      color: "#FF00C8",
                      fontWeight: "600",
                    }}
                  >
                    {exp.company}
                  </p>
                  <div style={{ margin: "8px 0", fontSize: "0.85rem", color: "#bbb" }}>
                    <span>{exp.period}</span>  •  <span>{exp.type}</span>
                  </div>

                  <ul style={{ paddingLeft: "20px", marginBottom: "12px" }}>
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: "0.9rem",
                          marginBottom: "8px",
                          color: "#eee",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "6px",
                            height: "6px",
                            backgroundColor: "#9F00FF",
                            borderRadius: "50%",
                            marginRight: "8px",
                            marginBottom: "-1px",
                          }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: "0.8rem",
                          background: "rgba(255,255,255,0.05)",
                          padding: "4px 10px",
                          borderRadius: "6px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "white",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;