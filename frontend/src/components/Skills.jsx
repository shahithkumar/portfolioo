import React, { useEffect, useState } from 'react';
import api from '../api';
import './Skills.css'; // We will create this or add to App.css

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
        <section id="skills" className="section">
            <h2 className="title">Skills</h2>
            <div className="skills-container">
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                    <div key={category} className="skill-category">
                        <h3 className="category-title">{category}</h3>
                        <div className="skills-grid">
                            {categorySkills.map((skill) => (
                                <div key={skill.id} className="skill-card">
                                    <i className={`${skill.icon} skill-icon`}></i>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
