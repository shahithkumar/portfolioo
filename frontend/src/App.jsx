import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
