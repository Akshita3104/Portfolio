
import React, { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!containerRef.current) return;

      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.animationDelay = Math.random() * 10 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        containerRef.current.appendChild(star);
      }
    };

    createStars();
  }, []);

  return (
    <>
      <div className="galaxy-bg"></div>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0"></div>
    </>
  );
};

export default GalaxyBackground;
