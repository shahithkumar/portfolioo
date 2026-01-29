import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <h2 className="title">About Me</h2>
            <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '15px' }}>
                    I’m V. Shahith Kumar, a B.Tech student in Computer Science & IT at MVGR College of Engineering. I enjoy building real products using AI, data, and backend systems, and I focus more on creating working solutions than just learning concepts.
                </p>
                <p style={{ marginBottom: '15px' }}>
                    I learn best by building. When I study something new, I try to apply it immediately in a project and see how it behaves in real situations. This approach has helped me understand how AI, machine learning, and data analytics fit into complete, usable systems.
                </p>
                <p style={{ marginBottom: '15px' }}>
                    Through projects like JobBot and Walletrix, I’ve worked on automation, intelligent decision-making, and data-driven product design. I like turning messy or complex problems into simple, structured solutions that people can actually use.
                </p>
                <p style={{ marginBottom: '15px' }}>
                    I believe projects matter more than certificates. They show how you think, how you design systems, and how you solve problems. That’s why I focus on building end-to-end applications instead of small demos.
                </p>
                <p>
                    My goal is to grow as an AI engineer and product builder who creates intelligent systems with real-world impact. I value consistency, practical thinking, and steady improvement, and I let my work speak for itself.
                </p>
            </div>
        </section>
    );
};

export default About;
