import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="title">Experience</h2>
            <div style={{ borderLeft: '2px solid var(--bg-secondary)', paddingLeft: '20px' }}>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: 'var(--text-primary)', fontSize: '20px' }}>Data Science Intern @ Extion Infotech</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '10px' }}>Internship</p>
                    <ul style={{ color: 'var(--text-secondary)' }}>
                        <li style={{ marginBottom: '10px' }}>• Worked on real datasets to clean, analyze, and visualize patterns.</li>
                        <li style={{ marginBottom: '10px' }}>• Built predictive models using Machine Learning algorithms.</li>
                        <li>• Gained industry exposure in data pipelines and model deployment.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
