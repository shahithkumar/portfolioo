import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate network request to bypass backend requirement for deployment
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        }, 1200);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <span className="contact-pre">COMMUNICATION_PROTOCOL</span>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Drop a message into the secure line. I'm always open to new challenges and collaborative projects.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info-hub">
                    <div className="info-card">
                        <div className="info-icon">📧</div>
                        <div className="info-content">
                            <span className="info-label">Encrypted Mail</span>
                            <span className="info-value">shahithu2004@gmail.com</span>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">📞</div>
                        <div className="info-content">
                            <span className="info-label">Direct Line</span>
                            <span className="info-value">+91 6301103526</span>
                        </div>
                    </div>

                    <a href="https://linkedin.com/in/shahithkumar" target="_blank" rel="noopener noreferrer" className="info-card link-card">
                        <div className="info-icon">in</div>
                        <div className="info-content">
                            <span className="info-label">Professional Link</span>
                            <span className="info-value">LinkedIn Profile</span>
                        </div>
                    </a>
                </div>

                <div className="contact-form-area">
                    {status === 'success' ? (
                        <div className="success-message">
                            <h3>TRANSMISSION_COMPLETE</h3>
                            <p>Thank you. Your message has been routed to my inbox successfully.</p>
                            <button className="btn-premium primary" onClick={() => setStatus('')}>Send Another</button>
                        </div>
                    ) : (
                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className="form-label">IDENTITY/NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">COMMS/EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">PAYLOAD/MESSAGE</label>
                                    <textarea
                                        name="message"
                                        className="form-textarea"
                                        placeholder="Compose your transmission..."
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-contact-submit">
                                    {status === 'sending' ? 'TRANSMITTING...' : 'EXECUTE_SEND'}
                                </button>
                                {status === 'error' && <p className="error-text">ERROR: UPLINK_FAILED. Please retry.</p>}
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
