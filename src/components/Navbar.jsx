import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyles = {
        position: 'fixed',
        top: 0,
        width: '100%',
        borderRadius: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '0.8rem 0' : '1.2rem 0',
        background: scrolled || isOpen ? 'rgba(2, 6, 23, 0.9)' : 'transparent',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled || isOpen ? '1px solid rgba(99, 102, 241, 0.2)' : 'none',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.5)' : 'none'
    };

    const logoStyles = {
        fontSize: '1.6rem',
        fontWeight: '900',
        letterSpacing: '-1px',
        fontFamily: 'Outfit',
        background: 'linear-gradient(to right, #fff, var(--primary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: 'none'
    };

    const menuStyles = {
        display: 'flex',
        gap: '2.5rem',
        listStyle: 'none',
        transition: 'all 0.4s ease',
    };

    const mobileMenuStyles = {
        ...menuStyles,
        position: 'fixed',
        top: '100%',
        left: 0,
        width: '100%',
        background: 'rgba(15, 23, 42, 0.98)',
        flexDirection: 'column',
        padding: '2rem',
        gap: '2rem',
        textAlign: 'center',
        borderBottom: '1px solid var(--glass-border)'
    };

    const linkStyles = {
        fontSize: '0.9rem',
        fontWeight: '600',
        color: 'var(--text-muted)',
        transition: 'var(--transition)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        textDecoration: 'none'
    };

    const hamburger = {
        display: 'none',
        flexDirection: 'column',
        gap: '6px',
        cursor: 'pointer',
        zIndex: 1001
    };

    // Reactive resize logic
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 868 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 868);
            if (window.innerWidth > 868) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const containerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        width: '100%'
    };

    return (
        <nav style={navStyles}>
            <div className="container" style={containerStyles}>
                <a href="#" style={logoStyles}>
                    DEEPTHI<span style={{ color: 'var(--primary)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                {!isMobile && (
                    <ul style={menuStyles}>
                        {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} style={linkStyles} className="nav-item">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Mobile Hamburger toggle */}
                {isMobile && (
                    <div style={{ ...hamburger, display: 'flex' }} onClick={() => setIsOpen(!isOpen)}>
                        <div style={{ width: '30px', height: '2px', background: 'white', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
                        <div style={{ width: '30px', height: '2px', background: 'white', opacity: isOpen ? 0 : 1, transition: '0.3s' }}></div>
                        <div style={{ width: '30px', height: '2px', background: 'white', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none' }}></div>
                    </div>
                )}

                {/* Mobile Menu Content */}
                <ul style={{
                    ...mobileMenuStyles,
                    display: isMobile ? 'flex' : 'none',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-150%)',
                    zIndex: isOpen ? 999 : -1
                }}>
                    {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                style={{ ...linkStyles, fontSize: '1.2rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
