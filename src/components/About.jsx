import React, { useState, useRef } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("src/components/anime.glb");
  const ref = useRef();
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      dispose={null}
      scale={2.7}
      position={[0, 0, 0]}
    />
  );
};

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        <h2
  style={{
    fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "48px",
    background: "linear-gradient(to right, #9F00FF, #00FFFF)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "#fff", // fallback
    letterSpacing: "2px",
    textTransform: "uppercase",
    lineHeight: "1.2",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  }}
>
  ABOUT_ME
</h2>
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
              }}
            >
              Dynamic professional skilled in{" "}
              <span
                style={{
                  color: "#bf00ff",
                  fontWeight: "bold",
                }}
              >
                AI
              </span>
              ,{" "}
              <span
                style={{
                  color: "#ff00ff",
                  fontWeight: "bold",
                }}
              >
                Machine Learning
              </span>
              ,{" "}
              <span
                style={{
                  color: "#00ffff",
                  fontWeight: "bold",
                }}
              >
                GenAI
              </span>
              ,{" "}
              <span
                style={{
                  color: "#ff00ff",
                  fontWeight: "bold",
                }}
              >
                Data Science
              </span>
              , and{" "}
              <span
                style={{
                  color: "#bf00ff",
                  fontWeight: "bold",
                }}
              >
                UI/UX Design
              </span>
              .
            </p>
            
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
              }}
            >
              Adept at building{" "}
              <span
                style={{
                  color: "#ff00ff",
                  fontWeight: "bold",
                }}
              >
                MERN stack
              </span>{" "}
              applications, AI/ML solutions, and data-driven tools. Seeking
              opportunities in AI, web development, and data science to
              contribute to innovative projects.
            </p>

            <div
              style={{
                padding: "32px",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                backdropFilter: "blur(8px)",
                textAlign: "center",
                animation: "float 3s ease-in-out infinite",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#bf00ff",
                    }}
                  >
                    300+
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.875rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    Tools Analyzed
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#00ffff",
                    }}
                  >
                    95%
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.875rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    AI Accuracy
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#ff00ff",
                    }}
                  >
                    40%
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.875rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    Efficiency Boost
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "#bf00ff",
                    }}
                  >
                    10+
                  </div>
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "0.875rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    Projects Built
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "32px",
                textAlign: "center",
                height: "450px",
                width: "475px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 255, 255, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div style={{ width: "100%", height: "400px" }}>
                <Canvas style={{ height: "400px", width: "400px" }}>
                  <ambientLight intensity={1.0} />
                  <pointLight position={[10, 10, 10]} intensity={1.0} />
                  <pointLight position={[-10, -10, -10]} intensity={0.8} />
                  <Model />
                  <OrbitControls enableZoom={true} />
                </Canvas>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginTop: "36px",
                  }}
                >
                  Use your mouse to rotate, zoom, and explore the model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes glow {
            from { box-shadow: 0 0 5px #bf00ff, 0 0 10px #00ffff; }
            to { box-shadow: 0 0 10px #bf00ff, 0 0 20px #00ffff; }
          }

          .text-neon-purple { color: #bf00ff; }
          .text-neon-pink { color: #ff00ff; }
          .text-cyber-blue { color: #00ffff; }

          .section-title {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(to right, #9F00FF, #00FFFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
        `}
      </style>
    </section>
  );
};

export default About;