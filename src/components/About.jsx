import React, { useRef } from "react";
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
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">ABOUT_ME</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              Dynamic professional skilled in{" "}
              <span className="text-neon-purple font-bold">AI</span>,
              <span className="text-neon-pink font-bold"> Machine Learning</span>,
              <span className="text-cyber-blue font-bold"> GenAI</span>,
              <span className="text-neon-pink font-bold"> Data Science</span>, and
              <span className="text-neon-purple font-bold"> UI/UX Design</span>.
            </p>

            <p className="text-lg text-white/90 leading-relaxed">
              Adept at building{" "}
              <span className="text-neon-pink font-bold">MERN stack</span>{" "}
              applications, AI/ML solutions, and data-driven tools. Seeking
              opportunities in AI, web development, and data science to
              contribute to innovative projects.
            </p>

            {/* Stats Grid */}
            <div className="pt-6">
              <div className="stats-grid animate-float">
                <div className="stat-box">
                  <div className="stat-number text-neon-purple">300+</div>
                  <div className="stat-label">Tools Analyzed</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number text-cyber-blue">95%</div>
                  <div className="stat-label">AI Accuracy</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number text-neon-pink">40%</div>
                  <div className="stat-label">Efficiency Boost</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number text-neon-purple">10+</div>
                  <div className="stat-label">Projects Built</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Model Section */}
          <div className="relative">
            <div className="p-8 text-center h-[500px] flex flex-col items-center justify-center">
              <Canvas style={{ height: "400px", width: "100%" }}>
                <ambientLight intensity={1.0} />
                <pointLight position={[10, 10, 10]} intensity={1.0} />
                <pointLight position={[-10, -10, -10]} intensity={0.8} />
                <Model />
                <OrbitControls enableZoom={true} />
              </Canvas>
              <p className="text-sm text-white/70 mt-4">
                Use your mouse to rotate, zoom, and explore the model
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <style>
        {`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            backdrop-filter: blur(8px);
          }

          .stat-box {
            text-align: center;
          }

          .stat-number {
            font-family: 'Orbitron', sans-serif;
            font-size: 2rem;
            font-weight: bold;
          }

          .stat-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            margin-top: 0.25rem;
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          .text-neon-purple { color: #bf00ff; }
          .text-neon-pink { color: #ff00ff; }
          .text-cyber-blue { color: #00ffff; }
          .font-orbitron { font-family: 'Orbitron', sans-serif; }

          .section-title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #00ffff;
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          body {
            background: #0a0a1a;
            color: #fff;
          }
        `}
      </style>
    </section>
  );
};

export default About;
