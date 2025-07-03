import React, { useEffect, useRef } from "react";

const GalaxyBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const colors = ["#ffffff", "#00ffff", "#ff00ff", "#9f00ff", "#00ccff"];
    const starCount = 400;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "galaxy-star";

      const size = Math.random() * 1.5 + 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];

      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.backgroundColor = color;
      star.style.boxShadow = `0 0 6px ${color}55`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${6 + Math.random() * 4}s`;

      containerRef.current.appendChild(star);
    }
  }, []);

  return (
    <>
      {/* Galaxy background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(ellipse at bottom, #0d0d1a 0%, #000000 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Stars container */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Styling */}
      <style>{`
        .galaxy-star {
          position: absolute;
          border-radius: 50%;
          opacity: 0.7;
          animation: twinkle-drift 8s ease-in-out infinite;
        }

        @keyframes twinkle-drift {
          0% {
            opacity: 0.5;
            transform: translateY(0px) scale(1);
          }
          25% {
            opacity: 1;
            transform: translateY(-20px) scale(1.3);
          }
          50% {
            opacity: 0.6;
            transform: translateY(20px) scale(1.1);
          }
          75% {
            opacity: 1;
            transform: translateY(-20px) scale(1.4);
          }
          100% {
            opacity: 0.5;
            transform: translateY(0px) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default GalaxyBackground;
