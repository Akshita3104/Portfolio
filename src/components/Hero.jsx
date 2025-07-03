import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
        color: "#fff",
        textAlign: "center",
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
            fontSize: "6rem",
            color: "#ff2ca8",
            marginBottom: "1rem",
            whiteSpace: "nowrap",
          }}
        >
          AKSHITA SHETTY
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "2rem",
            color: "#e0e0e0",
            marginBottom: "1rem",
            fontWeight: 400,
          }}
        >
          AI Developer | Web Engineer | UX Enthusiast
        </p>

        {/* Typing line */}
        <p
          style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: "1.5rem",
            color: "#bf00ff",
            minHeight: "30px",
            marginBottom: "2rem",
          }}
        >
          {displayText}
          <span style={{ animation: "blink 1s infinite" }}>|</span>
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            style={{
              padding: "12px 32px",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              borderRadius: "12px",
              cursor: "pointer",
              fontFamily: "'Orbitron', sans-serif",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            VIEW PROJECTS
          </button>

          <button
            onClick={() => window.open("mailto:akshitashetty43@gmail.com")}
            style={{
              padding: "12px 32px",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "1px solid #3b82f6",
              color: "#3b82f6",
              borderRadius: "12px",
              cursor: "pointer",
              fontFamily: "'Orbitron', sans-serif",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            DOWNLOAD RESUME
          </button>
        </div>

        {/* Icons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          {[
            { icon: Github, href: "https://github.com/Akshita3104" },
            { icon: Linkedin, href: "https://linkedin.com/in/akshita-shetty-2004s" },
            { icon: Mail, href: "mailto:akshitashetty43@gmail.com" },
          ].map(({ icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "12px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <Icon size={24} color="#fff" />
            </a>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1 }
            50% { opacity: 0 }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
