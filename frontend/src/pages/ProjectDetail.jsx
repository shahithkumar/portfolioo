import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const LOCAL_PROJECTS = {
    "6": { // Assuming ID 6 is Walletrix based on logs
        id: 6,
        title: "Walletrix",
        subtitle: "AI-Based Survival Budgeting App",
        role: "FULL STACK & AI ENGINEER",
        problem_hook: "Ever had issues managing your financials and wondered where all your money went by the 20th?",
        problem_statement: "Current finance apps track past spending but fail to guide users on how to survive financially in real time, leading to budgeting anxiety and poor financial decisions.",
        solution_overview: `Walletrix is designed as a real-time financial decision-making system, not just a tracker.\n\nInstead of showing what already happened, it continuously answers:\n👉 "What should I do with my remaining money?"\n\nBy combining adaptive budgeting, AI-driven insights, and structured savings, Walletrix transforms financial management into a proactive, intelligent, and guided experience.\n\n**⚙️ Core Features & System Design**\n\n**🔹 1. Dynamic Survival Budgeting Engine (Core Innovation)**\nAt the heart of Walletrix lies a real-time budgeting system that ensures financial survival until the next income cycle.\n*Key Capabilities:*\n- Recalculates safe daily spending limit after every transaction\n- Adjusts dynamically based on:\n  - Remaining balance\n  - Number of days left until payday\n- Handles unexpected expenses without breaking the system\n*Impact:* Eliminates guesswork in daily spending. Prevents users from running out of money prematurely.\n👉 *Users always know: "Can I afford this right now?"*\n\n**🤖 2. AI-Powered Financial Coach**\nWalletrix integrates an intelligent assistant powered by Groq LLaMA-3, acting as a real-time financial advisor.\n*Key Capabilities:*\n- Analyzes user spending behavior and patterns\n- Generates:\n  - Personalized financial insights\n  - Context-aware suggestions\n  - "What-if" scenario simulations\n- Provides non-judgmental, empathetic guidance\n*Impact:* Helps users make better financial decisions. Replaces confusion with clarity and direction.\n👉 *Feels like a calm, intelligent financial mentor*\n\n**🏦 3. Smart Savings Jars & Goal Tracking**\nWalletrix separates money into purpose-driven allocations instead of treating it as a single pool.\n*Key Capabilities:*\n- Create multiple Savings Jars for different goals\n- Allocate funds without affecting survival budget\n- Visual goal tracking and progress monitoring\n*Impact:* Encourages disciplined saving. Balances short-term survival with long-term growth.\n👉 *Users don't sacrifice the future to survive the present*\n\n**📊 4. Multi-Tiered Financial Analytics**\nInstead of overwhelming users with raw data, Walletrix focuses on meaningful insights.\n*Key Capabilities:*\n- Standard analytics: Spending patterns, Financial flow tracking\n- Advanced analytics (Premium): Category-based forecasting, Predictive financial trends, Future balance projections\n*Impact:* Converts financial data into actionable understanding. Helps users identify what is working and what is not.\n👉 *Clarity over complexity*\n\n**📅 5. Calendar-Based Transaction System**\nWalletrix ensures transparency through a structured and intuitive tracking system.\n*Key Capabilities:*\n- Day-by-day expense visualization\n- Easy auditing of past transactions\n- Organized historical financial view\n*Impact:* Improves awareness of spending habits. Makes financial tracking simple and intuitive.\n👉 *Users can quickly understand their financial behavior*`,
        tech_stack: "Flutter, Django, PostgreSQL, REST APIs, LLM",
        video: "https://d9sfi7dhczrymieu.public.blob.vercel-storage.com/Walletrix.mp4",
        image: null,
        github_link: "https://github.com/Shahithkumar/Walletrix", // Placeholders, user can update
        live_link: null
    },
    // Adding fallback to JobBot for any other IDs clicked
    "default": {
        id: "default",
        title: "JobBot",
        subtitle: "Agentic AI Application Factory",
        role: "FULL STACK & AI ENGINEER",
        problem_hook: "Tired of endlessly submitting to black-hole ATS systems and getting instantly rejected?",
        problem_statement: "The job search process is fragmented and inefficient, requiring candidates to manually manage applications, optimize resumes for ATS, and prepare for interviews without proper guidance, leading to stress, poor outcomes, and prolonged unemployment.",
        solution_overview: `JobBot is an agentic AI system designed to automate job hunting with the speed of a bot and the precision of a human. Instead of mass auto-applying or acting like a passive tracker, JobBot behaves like a controlled job-application factory where every action is intelligent, verified, and ethically safe.\n\n**🔍 1. Smart Job Discovery Engine**\nFetches relevant job listings based on user-defined roles, location, and filters. Eliminates manual browsing across multiple platforms.\n*How it works:*\n- React-based search interface captures user inputs\n- Django backend integrates with external APIs (JSearch via RapidAPI)\n- Parses and returns structured job data (role, company, apply link)\n- Users can directly push jobs into their tracking pipeline\n\n**📄 2. AI Resume & Cover Letter Optimization (ATS Engine)**\nDynamically tailors resumes to match job descriptions. Increases ATS compatibility and keyword alignment.\n*How it works:*\n- Parses uploaded resumes (PDF/DOCX) using Python libraries\n- Combines resume content with job description\n- Sends structured prompt to LLM (Groq LLaMA-3 / GPT)\n- Generates optimized resume + personalized cover letter\n\n**📋 3. Interactive Application Tracker (Kanban System)**\nVisual pipeline: Wishlist → Applied → Interview → Offer → Rejected. Enables structured tracking of job applications.\n*How it works:*\n- React + Framer Motion for drag-and-drop UI\n- State updates synced with Django REST API\n- PostgreSQL stores application states persistently\n\n**🎙️ 4. Real-Time AI Interview Coach**\nSimulates live interviews with instant feedback. Helps users improve communication and confidence.\n*How it works:*\n- Captures audio via Web Audio API\n- Converts speech to text (Whisper / STT)\n- LLM evaluates responses (STAR method, clarity, filler words)\n- Generates feedback and next questions\n- Optional TTS converts responses back to voice\n\n**📧 5. Automated Outreach & Follow-Up System**\nTracks recruiter communication and automates follow-ups. Reduces missed opportunities due to lack of response.\n*How it works:*\n- Email monitoring via IMAP/Gmail API\n- Detects response signals (Interview / Rejection / Offer)\n- Triggers follow-up generation using LLM\n- Sends or queues emails via SMTP / email APIs\n\n**📊 6. Analytics & Performance Dashboard**\nConverts job search into measurable insights.\n*Metrics include:* Application Success Rate, Response / Ghosting Rate, Time-to-Interview / Offer\n*How it works:*\n- Backend aggregates data using SQL queries\n- React visualizes metrics using chart libraries`,
        tech_stack: "React, Python (Django, DRF), PostgreSQL, REST APIs, LLM Integration (Groq LLaMA-3), Whisper (STT), Email APIs",
        video: "https://d9sfi7dhczrymieu.public.blob.vercel-storage.com/JobBot.mp4",
        image: null,
        github_link: "https://github.com/Shahithkumar/JobBot", // Placeholders, user can update
        live_link: null
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Completely bypass DB - pull directly from inline object
    const project = LOCAL_PROJECTS[id] || LOCAL_PROJECTS["default"];

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on page load
        setTimeout(() => setIsLoaded(true), 100);
    }, [id]);

    const renderFormattedText = (text) => {
        if (!text) return null;

        const lines = text.split('\n');
        const elements = [];
        let ul = [];

        const flushList = () => {
            if (ul.length > 0) {
                elements.push(<ul key={`ul-${elements.length}`} className="detail-list">{[...ul]}</ul>);
                ul = [];
            }
        };

        const formatLine = (line) => {
            return line.split(/(\*\*.*?\*\*|\*[^*]+\*|`[^`]+`)/g).map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j} className="text-highlight">{part.slice(2, -2)}</strong>;
                } else if (part.startsWith('*') && part.endsWith('*')) {
                    return <em key={j} className="text-italic">{part.slice(1, -1)}</em>;
                } else if (part.startsWith('`') && part.endsWith('`')) {
                    return <code key={j} className="text-code">{part.slice(1, -1)}</code>;
                }
                return part;
            });
        };

        lines.forEach((line, i) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
                // Determine indentation base class to support nested bullet points visually
                const isNested = line.startsWith('  ');
                ul.push(<li key={`li-${i}`} className={isNested ? "nested-li" : ""}>{formatLine(trimmedLine.substring(2))}</li>);
            } else {
                flushList();
                if (trimmedLine === '') {
                    // Skip empty lines or handle spacing implicitly
                } else if (trimmedLine.startsWith('👉')) {
                    elements.push(
                        <div key={`callout-${i}`} className="detail-callout">
                            <span className="callout-icon">👉</span>
                            <span className="callout-text">{formatLine(trimmedLine.substring(1).trim())}</span>
                        </div>
                    );
                } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**') && trimmedLine.split('**').length === 3) {
                    elements.push(<h4 key={`h4-${i}`} className="detail-subheading">{formatLine(trimmedLine)}</h4>);
                } else {
                    elements.push(<p key={`p-${i}`} className="detail-paragraph">{formatLine(line)}</p>);
                }
            }
        });
        flushList();

        return elements;
    };

    return (
        <div className={`project-detail-page ${isLoaded ? 'loaded' : ''}`}>
            {/* 1. Hero Section (Hook) */}
            <header className="detail-hero">
                <div className="hero-content">
                    <button className="back-btn" onClick={() => navigate('/')}>
                        ← Back
                    </button>
                    {project.role && (
                        <div className="detail-metadata">
                            <span className="metadata-item">{project.role}</span>
                        </div>
                    )}
                    <h1 className="detail-title">{project.title}</h1>
                    {project.subtitle && <h2 className="detail-subtitle">{project.subtitle}</h2>}

                    <div className="hero-actions">
                        {project.github_link && (
                            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="btn-premium">
                                <i className="icon-github"></i> GitHub
                            </a>
                        )}
                        {project.live_link && (
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="btn-premium primary">
                                <i className="icon-play"></i> Live Demo
                            </a>
                        )}
                    </div>
                </div>

            </header>

            <div className="detail-layout-grid">
                <div className="detail-content-side">
                    {/* 2. Problem Statement */}
                    {project.problem_statement && (
                        <section className="detail-section problem-section">
                            <div className="section-header">
                                <h2 className="section-label">01. THE CHALLENGE</h2>
                                <h3 className="section-title">Identifying the friction</h3>
                            </div>
                            <div className="section-content preview-description-text">
                                {renderFormattedText(project.problem_statement)}
                            </div>
                        </section>
                    )}

                    {/* 3. Solution Overview */}
                    {project.solution_overview && (
                        <section className="detail-section solution-section">
                            <div className="section-header">
                                <h2 className="section-label">02. THE APPROACH</h2>
                                <h3 className="section-title">Engineering a solution</h3>
                            </div>
                            <div className="section-content preview-description-text">
                                {renderFormattedText(project.solution_overview)}
                            </div>
                        </section>
                    )}

                    {/* 5. Tech Stack Badge Grid */}
                    <section className="detail-section tech-section">
                        <div className="section-header">
                            <h2 className="section-label">03. TECH STACK</h2>
                            <h3 className="section-title">Tools & Architecture</h3>
                        </div>
                        <div className="section-content">
                            <div className="tech-badge-grid">
                                {project.tech_stack.split(',').map(tech => (
                                    <div key={tech} className="tech-badge">
                                        <span className="badge-name">{tech.trim()}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                </div> {/* End detail-content-side */}

                <div className="detail-visual-side">
                    <div className="sticky-visual">
                        <div className={`device-preview-wrapper ${project.tech_stack.toLowerCase().includes('flutter') ? 'type-mobile' : 'type-monitor'}`}>
                            <div className="device-frame">
                                <div className="device-screen">
                                    {project.video ? (
                                        <video autoPlay muted loop playsInline src={project.video} />
                                    ) : (
                                        <img src={project.image} alt={project.title} />
                                    )}
                                </div>
                                <div className="device-ambient-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End detail-layout-grid */}
        </div>
    );
};

export default ProjectDetail;
