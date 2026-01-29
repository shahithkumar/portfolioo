import React, { useEffect, useState } from 'react';
import api from '../api';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await api.get('/api/projects/');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    return (
        <section id="projects" className="section">
            <h2 className="title">Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        {project.video ? (
                            <video
                                controls
                                src={project.video}
                                className="project-media"
                                style={{ width: '100%', borderRadius: '4px', marginBottom: '20px' }}
                            />
                        ) : project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-media"
                                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', marginBottom: '20px' }}
                            />
                        ) : null}

                        <h3 className="project-title">{project.title}</h3>

                        <div className="project-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '15px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                            <span className="meta-item">👤 {project.role}</span>
                            <span className="meta-item">⏱️ {project.timeline}</span>
                            <span className="meta-item">🟢 {project.status}</span>
                        </div>

                        <div className="project-description" style={{ whiteSpace: 'pre-wrap', marginBottom: '20px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            {project.description}
                        </div>

                        <p className="project-tech" style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '20px' }}>
                            <strong>Tech Stack:</strong> {project.tech_stack}
                        </p>

                        <div className="project-links" style={{ display: 'flex', gap: '15px' }}>
                            {project.github_link && <a href={project.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>}
                            {project.live_link && <a href={project.live_link} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
