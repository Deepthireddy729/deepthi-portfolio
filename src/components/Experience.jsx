import React, { useState, useEffect } from 'react';

const Experience = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const experiences = [
        {
            role: 'FullStack Development Intern',
            company: 'Code Alpha',
            period: 'June 2025 - July 2025',
            desc: 'Building responsive web applications using modern front-end and back-end stacks. Gained practical experience in Version Control (Git/GitHub) and API integration.',
            color: 'var(--primary)'
        },
        {
            role: 'Cloud Intern',
            company: 'SRR Cloud Experts',
            period: 'June 2024 - July 2024',
            desc: 'Acquired a comprehensive understanding of the SDLC (Waterfall, Agile, Spiral). Involved in Requirement Analysis, Testing, Debugging, and Maintenance phases.',
            color: 'var(--secondary)'
        }
    ];

    const timelineStyles = {
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        paddingLeft: 'clamp(1.5rem, 5vw, 3rem)',
        paddingTop: '2rem'
    };

    const lineStyles = {
        position: 'absolute',
        left: '9px',
        top: 0,
        bottom: 0,
        width: '2px',
        background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)',
        opacity: 0.3
    };

    return (
        <section id="experience" style={{ background: 'var(--bg-darker)' }}>
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div style={timelineStyles} className="experience-timeline">
                    <div style={lineStyles}></div>
                    {experiences.map((exp, i) => (
                        <div key={i} className="glass animate" style={{
                            position: 'relative',
                            marginBottom: '3rem',
                            padding: 'clamp(1.2rem, 4vw, 2.5rem)',
                            borderRadius: '24px',
                            borderLeft: `6px solid ${exp.color}`
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: isMobile ? '-1.05rem' : '-2.4rem', // Aligned with line
                                top: '2.5rem',
                                width: '18px',
                                height: '18px',
                                background: 'var(--bg-darker)',
                                border: `3px solid ${exp.color}`,
                                borderRadius: '50%',
                                zIndex: 2,
                                boxShadow: `0 0 10px ${exp.color}44`
                            }}></div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: '800' }}>{exp.role}</h4>
                                    <p style={{ color: 'var(--primary)', fontSize: '1.05rem', fontWeight: '700', marginTop: '0.2rem' }}>{exp.company}</p>
                                </div>
                                <span style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '30px',
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    border: '1px solid var(--glass-border)'
                                }}>{exp.period}</span>
                            </div>

                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                {exp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
