import React, { useEffect, useState } from 'react';
import api from '../api';
import './Skills.css';

const LOCAL_SKILLS = [
    // Languages
    { id: 1, name: 'Python', category: 'LG', icon: 'fab fa-python' },
    { id: 2, name: 'SQL', category: 'LG', icon: 'fas fa-database' },
    { id: 3, name: 'Dart', category: 'LG', icon: 'fas fa-code' },
    { id: 4, name: 'JavaScript', category: 'LG', icon: 'fab fa-js' },
    { id: 5, name: 'HTML', category: 'LG', icon: 'fab fa-html5' },
    { id: 6, name: 'CSS', category: 'LG', icon: 'fab fa-css3-alt' },
    // Frameworks
    { id: 7, name: 'Django', category: 'FW', icon: 'fas fa-layer-group' },
    { id: 8, name: 'Django REST Framework (DRF)', category: 'FW', icon: 'fas fa-server' },
    { id: 9, name: 'Flask', category: 'FW', icon: 'fas fa-flask' },
    { id: 10, name: 'React', category: 'FW', icon: 'fab fa-react' },
    { id: 11, name: 'Tailwind CSS', category: 'FW', icon: 'fas fa-wind' },
    { id: 12, name: 'Flutter', category: 'FW', icon: 'fas fa-mobile-alt' },
    // AI / ML
    { id: 13, name: 'Machine Learning', category: 'AI', icon: 'fas fa-brain' },
    { id: 14, name: 'Deep Learning', category: 'AI', icon: 'fas fa-network-wired' },
    { id: 15, name: 'TensorFlow', category: 'AI', icon: 'fas fa-microchip' },
    { id: 16, name: 'LLM APIs', category: 'AI', icon: 'fas fa-robot' },
    // Data & Analytics
    { id: 17, name: 'Power BI', category: 'DA', icon: 'fas fa-chart-bar' },
    { id: 18, name: 'Tableau', category: 'DA', icon: 'fas fa-chart-line' },
    { id: 19, name: 'Microsoft Excel', category: 'DA', icon: 'fas fa-file-excel' },
    { id: 20, name: 'Pandas', category: 'DA', icon: 'fas fa-table' },
    { id: 21, name: 'NumPy', category: 'DA', icon: 'fas fa-calculator' },
    // Databases
    { id: 22, name: 'PostgreSQL', category: 'DB', icon: 'fas fa-database' },
    { id: 23, name: 'MySQL', category: 'DB', icon: 'fas fa-database' },
    { id: 24, name: 'SQLite', category: 'DB', icon: 'fas fa-database' }
];

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Simulate premium loading delay
        setTimeout(() => {
            setSkills(LOCAL_SKILLS);
        }, 500);
    }, []);

    // Split skills into two rows for the marquee effect
    const midPoint = Math.ceil(skills.length / 2);
    const firstRow = skills.slice(0, midPoint);
    const secondRow = skills.slice(midPoint);

    const MarqueeRow = ({ items, speed, direction = 'left' }) => (
        <div className={`marquee-wrapper ${direction}`}>
            <div className="marquee-content" style={{ animationDuration: `${speed}s` }}>
                {items.map((skill, index) => (
                    <span key={`original-${index}`} className="marquee-item">
                        &lt;{skill.name}&gt;
                    </span>
                ))}
                {items.map((skill, index) => (
                    <span key={`duplicate-${index}`} className="marquee-item">
                        &lt;{skill.name}&gt;
                    </span>
                ))}
            </div>
        </div>
    );

    const categories = {
        'LG': 'Languages',
        'FW': 'Frameworks / Libraries',
        'AI': 'AI / ML',
        'DA': 'Data & Analytics',
        'DB': 'Databases'
    };

    const groupedSkills = skills.reduce((acc, skill) => {
        const cat = categories[skill.category] || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {});


    return (
        <section id="skills" className="section skills-marquee-section">
            <h2 className="title">Skills</h2>
            <div className="skills-marquee-container">
                <MarqueeRow items={firstRow} speed={30} direction="left" />
                <MarqueeRow items={secondRow} speed={40} direction="right" />
            </div>

            <div className="section skills-categories-container">
                <div className="skills-matrix-header">
                    <span className="matrix-status">SYSTEM_NODES: ONLINE</span>
                    <div className="status-pulse"></div>
                </div>

                <div className="skills-grid-system">
                    {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                        <div key={category} className="matrix-cell">
                            <div className="cell-header">
                                <span className="cell-id">0{Object.keys(groupedSkills).indexOf(category) + 1}</span>
                                <h3 className="skill-category-title">{category.toUpperCase()}</h3>
                            </div>
                            <div className="skill-tags-grid">
                                {categorySkills.map((skill) => (
                                    <div key={skill.id} className="skill-node">
                                        <div className="node-bracket"></div>
                                        <span className="node-text">{skill.name}</span>
                                        <div className="node-indicator"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;


