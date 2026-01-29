import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="profile-img">
                    <img src="https://ui-avatars.com/api/?name=User+Name&background=random" alt="Profile" />
                </div>
                <div className="profile-info">
                    <h3>Sruthi Madhusudanan</h3>
                    <p>Designer</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                <a href="#home" className="nav-item active">
                    <i className="icon-home"></i> Home
                </a>
                <a href="#projects" className="nav-item">
                    <i className="icon-folder"></i> Projects
                </a>
                <a href="#about" className="nav-item">
                    <i className="icon-user"></i> About
                </a>
                <a href="#contact" className="nav-item">
                    <i className="icon-mail"></i> Contact
                </a>
            </nav>

            <div className="sidebar-section">
                <h4>RESOURCES</h4>
                <a href="#bookmarks" className="nav-item">
                    <i className="icon-bookmark"></i> Bookmarks
                </a>
                <a href="#stack" className="nav-item">
                    <i className="icon-layers"></i> Stack
                </a>
            </div>

            <div className="sidebar-footer">
                <div className="footer-card">
                    <p className="date">1/17/2026</p>
                    <p className="location">Singapore</p>
                </div>
                <button className="btn-download">
                    <i className="icon-download"></i> Download CV
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
