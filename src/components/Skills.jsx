import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "JavaScript", "HTML/CSS", "PHP"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      title: "Web Frameworks",
      skills: ["React.js", "Node.js", "Express.js", "Django"],
    },
    {
      title: "AI/ML Tools",
      skills: ["Scikit-learn", "TensorFlow", "Keras", "OpenCV", "LLMs", "OCR"],
    },
    {
      title: "Development Tools",
      skills: [
        "Git/GitHub",
        "Postman",
        "REST APIs",
        "XAMPP",
        "Electron",
        "AWS",
        "Vercel",
      ],
    },
    {
      title: "Design & UI/UX",
      skills: ["Figma", "Canva", "Adobe Illustrator", "Responsive Design"],
    },
  ];

  return (
    <section
      id="skills"
      style={{ padding: "80px 24px", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
            textAlign: "center",
            fontSize: "2.75rem",
            fontWeight: "bold",
            marginBottom: "48px",
            background: "linear-gradient(to right, #9F00FF, #00FFFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          SKILLS_&_EXPERTISE
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
            gap: "24px",
          }}
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "24px",
                transition: "all 0.5s ease",
                backdropFilter: "blur(8px)",
                transform: "scale(1)",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <h3
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#9F00FF",
                    marginBottom: "8px",
                  }}
                >
                  {category.title}
                </h3>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      color: "#fff",
                      fontSize: "1rem",
                      margin: "4px 0",
                      lineHeight: "1.6",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
