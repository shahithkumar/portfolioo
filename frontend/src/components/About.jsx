import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <h2 className="title">About Me</h2>
            <div className="about-glass-container">
                <div className="about-grid">
                    <div className="about-text-content">
                        <div className="tech-tag">INITIALIZING_BIOGRAPHY...</div>
                        <h2 className="about-greeting">Hi, I'm Shahith!</h2>

                        <p className="about-intro">
                            An emerging <span className="highlight-alt">AI engineer</span> with a passion to
                            <span className="highlight-alt"> learn</span> and a
                            <span className="highlight-alt"> can-do attitude</span>.
                        </p>

                        <div className="about-details">
                            <p>
                                I am driven by <span className="highlight-alt">curiosity</span> and a commitment to building impactful
                                AI solutions. I thrive on tackling complex problems and finding efficient ways to address them.
                            </p>
                            <p>
                                My journey is fueled by a desire to bridge the gap between <span className="highlight-alt">human creativity</span> and <span className="highlight-alt">machine intelligence</span>.
                            </p>
                        </div>

                        <div className="about-stats-mini">
                            <div className="stat-box">
                                <span className="stat-value">AI/ML</span>
                                <span className="stat-label">Core Focus</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-value">FULL STACK</span>
                                <span className="stat-label">Development</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-container">
                        <div className="profile-image-wrapper">
                            <div className="scan-line-profile"></div>
                            <img
                                src="https://ui-avatars.com/api/?name=S+K&background=1a1a1a&color=ff4d5a&size=512&font-size=0.3"
                                alt="Shahith Kumar"
                                className="about-profile-img"
                            />
                            <div className="image-accent-ring"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative corner accents */}
                <div className="corner-accent top-left"></div>
                <div className="corner-accent top-right"></div>
                <div className="corner-accent bottom-left"></div>
                <div className="corner-accent bottom-right"></div>
            </div>
        </section>
    );
};

export default About;
