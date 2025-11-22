import React from 'react'
import { siteMeta } from '../data'

const  Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-bg/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-xl font-bold">{siteMeta.name}</h1>

        <nav className="hidden md:flex items-center gap-6 text-textSecondary">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;