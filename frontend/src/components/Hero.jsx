import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: null, y: null, radius: 150 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 100;
        const connectionDistance = 150;

        const resize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                init();
            }
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.radius = Math.random() * 2 + 0.5;
                this.density = (Math.random() * 20) + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                if (mouseRef.current.x != null) {
                    let dx = mouseRef.current.x - this.x;
                    let dy = mouseRef.current.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseRef.current.radius) {
                        let force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
                        this.x -= (dx / distance) * force * this.density * 0.5;
                        this.y -= (dy / distance) * force * this.density * 0.5;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = '#ff4d5a';
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 77, 90, ${opacity * 0.4})`;
                        ctx.lineWidth = opacity * 1.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        resize();
        animate();

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section id="hero" className="section hero-section">
            <nav className="hero-navbar">
                <div className="nav-container">
                    <a href="#hero" className="nav-logo">
                        <img src="/nav-logo.svg?v=1" alt="Shahith Kumar" />
                    </a>
                    <div className="nav-menu">
                        <a href="#about" className="nav-link">About</a>
                        <a href="#skills" className="nav-link">Skills</a>
                        <a href="#projects" className="nav-link">Projects</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                </div>
            </nav>
            <canvas ref={canvasRef} id="particle-canvas" className="hero-background-canvas"></canvas>
            <div className="hero-background-glow"></div>

            <div className="hero-container">
                <div className="hero-text-container">
                    <h1 className="hero-title">
                        Hello, I'm <span className="highlight-text">Shahith Kumar</span>.
                    </h1>
                    <h2 className="hero-subtitle">
                        I'm an AI Engineer & Full-Stack Developer.
                    </h2>
                    <p className="hero-description">
                        Building intelligent applications with data-driven insights and modern web technologies.
                    </p>
                    <div className="hero-action">
                        <a href="#projects" className="hero-btn-premium">
                            Explore my work
                            <span className="btn-icon">→</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="scroll-arrows">
                    <span className="m-scroll-arrows unu"></span>
                    <span className="m-scroll-arrows doi"></span>
                    <span className="m-scroll-arrows trei"></span>
                </div>
            </div>
        </section>
    );
};





export default Hero;


