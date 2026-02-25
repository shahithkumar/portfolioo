import React, { useEffect, useState } from 'react';
import api from '../api';
import './Skills.css';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await api.get('/api/skills/');
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    };

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


