import React from "react";
import GalaxyBackground from "../components/GalaxyBackground.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Contact from "../components/Contact.jsx";
import BottomDock from "../components/BottomDock.jsx";

const Index = () => {
  return (
    <div>
      <GalaxyBackground />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <BottomDock />
    </div>
  );
};

export default Index;
