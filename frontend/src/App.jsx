import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';

import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';

import './App.css';

const Home = () => (
  <div className="main-content">
    <Hero />
    <About />
    <Skills />
    <Projects />

    <Contact />
    <Footer />
  </div>
);

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const observeSections = () => {
      const sections = document.querySelectorAll('.section, .detail-section, .project-unit');
      sections.forEach(section => {
        if (!section.classList.contains('reveal-hidden') && !section.classList.contains('reveal-active')) {
          section.classList.add('reveal-hidden');
        }
        observer.observe(section);
      });
    };

    observeSections();

    // Set up mutation observer to catch dynamically added items (like projects)
    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <div className="app-wrapper">

        <div className="noise-overlay"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

