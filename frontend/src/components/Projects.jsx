import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

// STATIC INLINE DATA (Bypassing Database Entirely)
const LOCAL_PROJECTS = [
    {
        id: '6',
        title: "Walletrix",
        subtitle: "AI-Based Survival Budgeting",
        role: "FULL STACK & AI ENGINEER",
        problem_hook: "Ever had issues managing your financials and wondered where all your money went by the 20th?",
        problem_statement: "Current finance apps track past spending but fail to guide users on how to survive financially in real time...",
        solution_overview: `Walletrix is designed as a real-time financial decision-making system, not just a tracker.\n\nInstead of showing what already happened, it continuously answers:\n👉 “What should I do with my remaining money?”\n\n**⚙️ Core Features**\n- Dynamic Survival Budgeting Engine\n- AI-Powered Financial Coach\n- Smart Savings Jars\n- Calendar-Based Transaction System`,
        tech_stack: "Flutter, Django, PostgreSQL, REST APIs, LLM",
        video: "http://127.0.0.1:8000/media/videos/Walletrix.mp4",
        image: null,
        github_link: "https://github.com/Shahithkumar/Walletrix",
        live_link: null
    },
    {
        id: 'default',
        title: "JobBot",
        subtitle: "Agentic AI Application Factory",
        role: "FULL STACK & AI ENGINEER",
        problem_hook: "Tired of endlessly submitting to black-hole ATS systems and getting instantly rejected?",
        problem_statement: "The job search process is fragmented and inefficient, requiring candidates to manually manage applications...",
        solution_overview: `JobBot is an agentic AI system designed to automate job hunting with the speed of a bot and the precision of a human.\n\n**⚙️ Core Features**\n- Smart Job Discovery Engine\n- AI Resume & Cover Letter Optimization (ATS Engine)\n- Interactive Application Tracker\n- Real-Time AI Interview Coach\n- Automated Follow-Up System`,
        tech_stack: "React, Django, PostgreSQL, Groq LLaMA-3, Whisper",
        video: "http://127.0.0.1:8000/media/videos/JobBot.mp4",
        image: null,
        github_link: "https://github.com/Shahithkumar/JobBot",
        live_link: null
    }
];

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Mocking API delay for extreme premium feel
        setTimeout(() => {
            setProjects(LOCAL_PROJECTS);
            setLoading(false);
        }, 800);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                const modal = document.querySelector('.preview-modal-overlay');
                if (modal) modal.scrollTop = 0;
            }, 10);
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedProject]);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
        const y = ((e.clientY - rect.top) / card.clientHeight) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -8;
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8;
        card.style.setProperty('--tilt-x', `${rotateX}deg`);
        card.style.setProperty('--tilt-y', `${rotateY}deg`);
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.setProperty('--tilt-x', `0deg`);
        card.style.setProperty('--tilt-y', `0deg`);
    };

    const closePreview = () => setSelectedProject(null);

    const renderFormattedText = (text) => {
        if (!text) return null;
        return text.split('\n').map((line, i) => (
            <p key={i}>
                {line.split(/(\*\*.*?\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, j) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={j} style={{ color: '#fff', fontWeight: 600 }}>{part.slice(2, -2)}</strong>;
                    } else if (part.startsWith('*') && part.endsWith('*')) {
                        return <em key={j} style={{ color: 'rgba(255, 255, 255, 0.9)', fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
                    } else if (part.startsWith('`') && part.endsWith('`')) {
                        return <code key={j} className="inline-code-fragment">{part.slice(1, -1)}</code>;
                    }
                    return part;
                })}
            </p>
        ));
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="section-header-modern">
                <span className="section-subtitle-badge">02. MY WORK</span>
                <h2 className="title huge-title">Featured Projects</h2>
            </div>

            {loading ? (
                <div className="projects-loader-container">
                    <div className="loader-glitch">
                        <span className="loader-text">INITIALIZING_PROJECTS...</span>
                        <div className="loader-bar"></div>
                    </div>
                </div>
            ) : (
                <div className="projects-container">
                    {projects.map((project) => (
                        <div key={project.id} className="project-unit">
                            <div
                                className="project-overview-card premium-card"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="card-top-content">
                                    <div className="tech-stack-pills">
                                        {project.tech_stack.split(',').slice(0, 3).map(tech => (
                                            <span key={tech} className="mini-pill">{tech.trim()}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-media-preview">
                                    <div className="media-overlay">
                                        <div className="play-icon-container">
                                            <span className="quick-look-text">QUICK LOOK</span>
                                        </div>
                                    </div>
                                    {project.video ? (
                                        <video autoPlay muted loop src={project.video} />
                                    ) : project.image ? (
                                        <img src={project.image} alt={project.title} />
                                    ) : (
                                        <div className="placeholder-media"></div>
                                    )}
                                </div>

                                <div className="project-card-footer">
                                    <div className="title-wrapper">
                                        <h3 className="preview-title premium-title">{project.title}</h3>
                                        <p className="preview-subtitle">{project.subtitle}</p>
                                    </div>
                                    <p className="hook-preview-text">"{project.problem_hook}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Project Preview Modal */}
            {selectedProject && (
                <div className="preview-modal-overlay" onClick={closePreview}>
                    <div className="preview-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="preview-close-btn" onClick={closePreview}>×</button>

                        <div className="preview-header">
                            <span className="preview-category">{selectedProject.role}</span>
                            <h2 className="preview-main-title">{selectedProject.title}</h2>
                        </div>

                        <div className="preview-body">
                            {selectedProject.problem_hook && (
                                <div className="modal-hook-container">
                                    <span className="problem-badge">THE PROBLEM</span>
                                    <p className="modal-problem-text">"{selectedProject.problem_hook}"</p>
                                </div>
                            )}

                            <div className="preview-description-text">
                                {renderFormattedText(selectedProject.solution_overview)}
                            </div>

                            <div className={`device-preview-wrapper ${selectedProject.tech_stack?.toLowerCase().includes('flutter') ? 'type-mobile' : 'type-monitor'}`}>
                                <div className="device-frame">
                                    <div className="device-screen">
                                        {selectedProject.video ? (
                                            <video autoPlay muted loop playsInline src={selectedProject.video} />
                                        ) : (
                                            <img src={selectedProject.image} alt={selectedProject.title} />
                                        )}
                                    </div>
                                    <div className="device-ambient-glow"></div>
                                </div>
                            </div>
                        </div>

                        <div className="preview-footer">
                            <button
                                className="full-project-btn"
                                onClick={() => {
                                    closePreview();
                                    navigate(`/project/${selectedProject.id}`);
                                }}
                            >
                                View Full Case Study
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
