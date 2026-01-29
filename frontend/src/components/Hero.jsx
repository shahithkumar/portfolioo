import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <h1 className="hero-title">V. Shahith Kumar</h1>
            <p className="hero-subtitle">
                AI Engineer | Data Scientist | Full-Stack Builder
            </p>
            <p className="hero-description">
                I build real projects using AI, data, and backend systems to solve practical problems. <br />
                I learn by building, testing, and improving working products.
            </p>
            <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <button className="btn btn-secondary">Download Resume</button>
            </div>
        </section>
    );
};

export default Hero;
