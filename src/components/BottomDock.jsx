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
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-2">
        {dockItems.map((item) => (
          <div key={item.id} className="relative">
            {hoveredItem === item.id && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-cyan-300 text-sm font-medium whitespace-nowrap">
                {item.label}
              </div>
            )}
            <button
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-12 h-12 rounded-xl bg-white/10 hover:bg-red-500/20 hover:border-pink-500 transition-all duration-300 group cursor-pointer flex items-center justify-center ${
                hoveredItem === item.id ? 'transform -translate-y-3 scale-110' : ''
              }`}
            >
              <item.icon className="w-5 h-5 text-white group-hover:text-cyan-300" />
            </button>
          </div>
        ))}
      </div>
      <style>
        {`
          .fixed {
            position: fixed;
          }
          .bottom-6 {
            bottom: 1.5rem;
          }
          .left-1/2 {
            left: 50%;
          }
          .transform {
            transform: translate(-50%, 0);
          }
          .z-50 {
            z-index: 50;
          }
          .flex {
            display: flex;
          }
          .items-center {
            align-items: center;
          }
          .space-x-2 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 0.5rem;
          }
          .w-12 {
            width: 3rem;
          }
          .h-12 {
            height: 3rem;
          }
          .rounded-xl {
            border-radius: 0.75rem;
          }
          .transition-all {
            transition-property: all;
            transition-duration: 300ms;
          }
          .duration-300 {
            transition-duration: 300ms;
          }
          .transform {
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          }
          .-translate-y-3 {
            --tw-translate-y: -0.75rem;
          }
          .scale-110 {
            --tw-scale-x: 1.1;
            --tw-scale-y: 1.1;
          }
          .cursor-pointer {
            cursor: pointer;
          }
          .items-center {
            align-items: center;
          }
          .justify-center {
            justify-content: center;
          }

        `}
      </style>
    </div>
  );
};

export default BottomDock;