import React, { useState, useEffect } from "react";

const ClickSpark = ({ children }) => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newSpark = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setSparks((prev) => [...prev, newSpark]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
      }, 400);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="fixed inset-0 pointer-events-none z-50">
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute animate-ping"
            style={{
              left: spark.x - 15,
              top: spark.y - 15,
              width: "30px",
              height: "30px",
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-75 animate-pulse"></div>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-4 bg-gradient-to-t from-pink-500 via-purple-500 to-blue-500 animate-bounce"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: "0.4s",
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

export default ClickSpark;
