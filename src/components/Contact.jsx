import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for reaching out. I'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "12px",
    padding: "16px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
    marginBottom: "16px",
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akshitashetty43@gmail.com",
      href: "mailto:akshitashetty43@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Akshita3104",
      href: "https://github.com/Akshita3104",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/akshita-shetty-2004s",
      href: "https://linkedin.com/in/akshita-shetty-2004s",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "80px 24px",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
          }}
        >
          GET_IN_TOUCH
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          {/* Left - Info & Cards */}
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#9F00FF",
                marginBottom: "16px",
                fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
              }}
            >
              Let's Build Something Amazing Together
            </h3>
            <p style={{ color: "#ccc", marginBottom: "24px", lineHeight: "1.6" }}>
              I'm always excited to discuss new opportunities in AI, Machine Learning,
              and Full Stack Development. Whether you're looking for collaboration
              on innovative projects or have an exciting role to discuss, I'd love to hear from you.
            </p>

            <div>
              {contactInfo.map(({ icon: Icon, label, value, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div
                    style={cardStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 8px rgba(70, 130, 180, 0.3)";
                      e.currentTarget.style.border = "1px solid #4682B4";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div
                        style={{
                          background: "linear-gradient(to right, #9F00FF, #FF00C8)",
                          borderRadius: "50%",
                          padding: "12px",
                        }}
                      >
                        <Icon color="white" size={24} />
                      </div>
                      <div>
                        <p style={{ fontSize: "12px", color: "#FF00C8", textTransform: "uppercase" }}>
                          {label}
                        </p>
                        <p style={{ color: "#fff" }}>{value}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            style={{
              ...cardStyle,
              padding: "32px",
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 8px rgba(70, 130, 180, 0.3)";
              e.currentTarget.style.border = "1px solid #4682B4";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.2)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                color: "#FF00C8",
                marginBottom: "8px",
                fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
              }}
            >
              Send a Message
            </h3>
            <p style={{ fontSize: "14px", color: "#aaa", marginBottom: "24px" }}>
              Drop me a line and I'll get back to you as soon as possible.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div>
                <label
                  style={{
                    color: "#9F00FF",
                    fontSize: "12px",
                    marginBottom: "4px",
                    display: "block",
                  }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    color: "#9F00FF",
                    fontSize: "12px",
                    marginBottom: "4px",
                    display: "block",
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    color: "#9F00FF",
                    fontSize: "12px",
                    marginBottom: "4px",
                    display: "block",
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "8px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #9F00FF, #00FFFF)",
                  color: "white",
                  padding: "12px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;