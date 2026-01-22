import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const phrases = ["Full Stack Developer", "AI/ML Enthusiast"];

    useEffect(() => {

        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    const heroStyles = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 60px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
    };

    const contentStyles = {
        zIndex: 1,
        maxWidth: '900px',
    };

    const greetingStyles = {
        color: 'var(--primary)',
        fontWeight: '700',
        letterSpacing: '3px',
        marginBottom: '1rem',
        display: 'inline-block',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        minHeight: '1.2rem'
    };

    const titleStyles = {
        fontSize: 'clamp(2.5rem, 15vw, 5rem)', // Scaled better for mobile
        lineHeight: 1.1,
        marginBottom: '2rem',
        letterSpacing: isMobile ? '-1px' : '-2px',
        fontWeight: '900',
        fontFamily: 'Outfit',
        width: '100%',
        wordBreak: 'break-word',
        overflowWrap: 'break-word'
    };

    const descStyles = {
        color: 'var(--text-muted)',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
        marginBottom: '3.5rem',
        maxWidth: '750px',
        marginInline: 'auto',
        fontWeight: '400',
        lineHeight: '1.6'
    };

    const ctaContainer = {
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        flexWrap: 'wrap'
    };

    const btnPrimary = {
        padding: '1.4rem 3.5rem',
        borderRadius: '20px',
        fontSize: '1.1rem',
        fontWeight: '800',
        background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
        color: 'white',
        boxShadow: '0 15px 40px -10px rgba(99, 102, 241, 0.6)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    };

    const btnSecondary = {
        padding: '1.4rem 3.5rem',
        borderRadius: '20px',
        fontSize: '1.1rem',
        fontWeight: '700',
        background: 'rgba(255,255,255,0.03)',
        color: 'var(--text-main)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'var(--glass-blur)',
        transition: 'all 0.4s ease',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    return (
        <section style={heroStyles}>
            <div className="container animate" style={contentStyles}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <span className="typing-container" style={greetingStyles}>{text}</span>
                </div>
                <h1 style={titleStyles}>K. NAGA DEEPTHI<br /> <span style={{ opacity: 0.3 }}>Innovation driven.</span></h1>
                <p style={descStyles}>
                    Transforming complex data into seamless user experiences. Specializing in building scalable web applications and intelligent systems.
                </p>
                <div style={ctaContainer}>
                    <a href="#projects" style={btnPrimary}
                        onMouseOver={(e) => { e.target.style.transform = 'translateY(-6px) scale(1.05)'; e.target.style.boxShadow = '0 20px 50px -10px rgba(236, 72, 153, 0.6)'; }}
                        onMouseOut={(e) => { e.target.style.transform = 'translateY(0) scale(1)'; e.target.style.boxShadow = '0 15px 40px -10px rgba(99, 102, 241, 0.6)'; }}>
                        View Work
                    </a>
                    <a href="#contact" style={btnSecondary}
                        onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.borderColor = 'var(--primary)'; }}
                        onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'var(--glass-border)'; }}>
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
