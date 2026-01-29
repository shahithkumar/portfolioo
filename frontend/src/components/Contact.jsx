import React, { useState } from 'react';
import api from '../api';

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
        try {
            await api.post('/api/contact/', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <p style={{ color: 'var(--accent)', fontSize: '16px', marginBottom: '10px' }}>What's Next?</p>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '20px' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '50px' }}>
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
                <p style={{ marginBottom: '10px' }}>shahithu2004@gmail.com</p>
                <p style={{ marginBottom: '10px' }}>+91 6301103526</p>
                <p style={{ marginBottom: '10px' }}>
                    <a href="https://linkedin.com/in/shahithkumar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>linkedin.com/in/shahithkumar</a>
                </p>
                <p style={{ marginBottom: '20px' }}>
                    <a href="https://github.com/shahithkumar" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>github.com/shahithkumar</a>
                </p>
            </div>

            {status === 'success' ? (
                <div style={{ padding: '20px', background: 'rgba(100, 255, 218, 0.1)', color: 'var(--accent)', borderRadius: '4px' }}>
                    Message sent successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', background: 'var(--bg-secondary)', border: '1px solid #233554', color: 'var(--text-primary)', borderRadius: '4px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', background: 'var(--bg-secondary)', border: '1px solid #233554', color: 'var(--text-primary)', borderRadius: '4px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '5px' }}>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            style={{ width: '100%', padding: '10px', background: 'var(--bg-secondary)', border: '1px solid #233554', color: 'var(--text-primary)', borderRadius: '4px' }}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
                </form>
            )}
        </section>
    );
};

export default Contact;
