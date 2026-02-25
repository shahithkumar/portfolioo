import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Sidebar.css';

const Sidebar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/project/');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 || isProjectPage) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isProjectPage]);

    return (
        <aside className={`sidebar ${!isVisible ? 'hidden' : 'visible'}`}>
            <div className="sidebar-header">
                <Link to="/" className="profile-link">
                    <div className="profile-img">
                        <img src="/favicon.svg" alt="SK Badge" />
                    </div>
                </Link>
                <div className="profile-info">
                    <h3>Shahith Kumar</h3>
                    <p>AI Engineer</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <HashLink smooth to="/#hero" className="nav-item">
                    <i className="icon-home"></i> Home
                </HashLink>
                <HashLink smooth to="/#projects" className="nav-item">
                    <i className="icon-folder"></i> Projects
                </HashLink>
                <HashLink smooth to="/#skills" className="nav-item">
                    <i className="icon-user"></i> Skills
                </HashLink>
                <HashLink smooth to="/#contact" className="nav-item">
                    <i className="icon-mail"></i> Contact
                </HashLink>
            </nav>

            <div className="sidebar-footer">
                <div className="footer-card">
                    <p className="date">{new Date().toLocaleDateString()}</p>
                    <p className="location">Building Things</p>
                </div>
                <button className="btn-download">
                    <i className="icon-download"></i> Download CV
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;



