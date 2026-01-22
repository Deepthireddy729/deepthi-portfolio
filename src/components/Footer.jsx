import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const footerStyle = {
        padding: '6rem 0 3rem 0',
        borderTop: '1px solid var(--glass-border)',
        background: 'var(--bg-darker)',
        position: 'relative',
        overflow: 'hidden'
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start', // Align to start for better flex control
        flexWrap: 'wrap',
        gap: '4rem',
    };

    const logoStyles = {
        fontSize: '1.8rem',
        fontWeight: '900',
        fontFamily: 'Outfit',
        background: 'linear-gradient(to right, #fff, var(--primary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '-1px'
    };

    const socialLinkStyle = {
        width: '45px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-main)',
        fontSize: '1.2rem',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        textDecoration: 'none'
    };

    const icons = {
        linkedin: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
        ),
        github: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
        email: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
        )
    };

    const socials = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/deepthi-reddy-0966b7314', icon: icons.linkedin, color: '#0077b5' },
        { name: 'GitHub', url: 'https://github.com/Deepthireddy729', icon: icons.github, color: '#333' },
        { name: 'Email', url: 'mailto:nagadeepthireddy01@gmail.com', icon: icons.email, color: 'var(--primary)' }
    ];

    return (
        <footer style={footerStyle}>
            {/* Subtle glow effect */}
            <div style={{ position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '100px', background: 'var(--primary)', filter: 'blur(100px)', opacity: 0.1, pointerEvents: 'none' }}></div>

            <div className="container">
                <div style={containerStyle}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <a href="#" style={logoStyles}>
                            DEEPTHI<span style={{ color: 'var(--primary)', WebkitTextFillColor: 'var(--primary)' }}>.</span>
                        </a>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '1.5rem', maxWidth: '450px', lineHeight: '1.8' }}>
                            Dedicated to turning complex problems into elegant, user-centric software solutions that make a difference.
                        </p>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            {socials.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={socialLinkStyle}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.borderColor = link.color;
                                        e.currentTarget.style.color = link.color;
                                        e.currentTarget.style.background = `${link.color}15`;
                                        e.currentTarget.style.boxShadow = `0 10px 20px -5px ${link.color}40`;
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        e.currentTarget.style.color = 'var(--text-main)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                            <p style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '0.5rem' }}>nagadeepthireddy01@gmail.com</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                © 2026 Deepthi Reddy • Hyderabad, India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
