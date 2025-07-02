import React from "react";
import GalaxyBackground from "@/components/GalaxyBackground";
import Hero from "@/components/Hero";
import About from "../components/About.jsx";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BottomDock from "../components/BottomDock.jsx";
import ClickSpark from "../components/ClickSpark.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white relative overflow-x-hidden">
      <GalaxyBackground />
      <ClickSpark>
        <BottomDock />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </ClickSpark>
    </div>
  );
};

export default Index;
