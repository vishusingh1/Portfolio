import React from "react";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { siteMeta } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar siteMeta={siteMeta} />

      <main className="max-w-7xl mx-auto px-6">
        <Hero />

        {/* About */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <Skills />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
