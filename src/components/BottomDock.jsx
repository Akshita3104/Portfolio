import React, { useState } from 'react';
import { Home, User, Briefcase, FolderOpen, Wrench, MessageCircle } from 'lucide-react';

const BottomDock = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const dockItems = [
    { icon: Home, id: 'home', label: 'Home' },
    { icon: User, id: 'about', label: 'About Me' },
    { icon: Briefcase, id: 'experience', label: 'Experience' },
    { icon: FolderOpen, id: 'projects', label: 'Projects' },
    { icon: Wrench, id: 'skills', label: 'Skills' },
    { icon: MessageCircle, id: 'contact', label: 'Contact' },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: '90%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {dockItems.map((item) => (
          <div key={item.id} style={{ position: 'relative' }}>
            {hoveredItem === item.id && (
              <div
                style={{
                  position: 'absolute',
                  top: '-3rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#00ffff',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                {item.label}
              </div>
            )}
            <button
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={(e) => {
                setHoveredItem(item.id);
                e.currentTarget.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                e.currentTarget.querySelector('svg').style.color = '#00ffff';
              }}
              onMouseLeave={(e) => {
                setHoveredItem(null);
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.querySelector('svg').style.color = '#fff';
              }}
              style={{
                width: '3rem',
                height: '3rem',
                borderRadius: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transform:
                  hoveredItem === item.id ? 'translateY(-0.75rem) scale(1.1)' : 'none',
              }}
            >
              <item.icon style={{ width: '1.25rem', height: '1.25rem', color: '#fff' }} />
            </button>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default BottomDock;
