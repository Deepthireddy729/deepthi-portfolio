import React from 'react';

const About = () => {
    const containerStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        alignItems: 'stretch',
        maxWidth: '1200px',
        margin: '0 auto'
    };

    const highlight = {
        color: 'var(--primary)',
        fontWeight: '600',
    };

    const cardContainer = {
        background: 'rgba(255,255,255,0.01)',
        padding: 'clamp(1.5rem, 5vw, 2.5rem)',
        borderRadius: '32px',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    };

    const itemStyle = {
        marginBottom: '1.5rem',
        padding: '1.5rem',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.02)',
        borderLeft: '4px solid var(--primary)',
        transition: 'var(--transition)'
    };

    return (
        <section id="about" style={{ padding: '120px 0' }}>
            <div className="container">
                <h2 className="section-title">The Story So Far</h2>
                <div style={containerStyles}>
                    {/* About Column */}
                    <div className="animate" style={cardContainer}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontFamily: 'Outfit', color: 'var(--primary)', textAlign: 'center' }}>About Me</h3>

                        <div style={itemStyle} className="glass">
                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '700' }}>Who I Am</h4>
                            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                I am a <span style={highlight}>Computer Science Engineering student</span> at ICFAI Tech, passionate about building high-impact software solutions.
                            </p>
                        </div>

                        <div style={{ ...itemStyle, borderLeftColor: 'var(--secondary)' }} className="glass">
                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: '700' }}>My Journey</h4>
                            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                Mastered Python, Java, and JavaScript through diverse projects—from ML medical systems to full-scale e-commerce platforms.
                            </p>
                        </div>

                        <div style={{ ...itemStyle, borderLeftColor: 'var(--text-muted)', marginBottom: 0 }} className="glass">
                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '700' }}>Key Metrics</h4>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div>
                                    <h4 style={{ fontSize: '1.8rem', color: 'var(--primary)', fontFamily: 'Outfit', fontWeight: '800' }}>4+</h4>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Projects</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.8rem', color: 'var(--secondary)', fontFamily: 'Outfit', fontWeight: '800' }}>5+</h4>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>Certs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="animate" style={cardContainer}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontFamily: 'Outfit', color: 'var(--primary)', textAlign: 'center' }}>Education</h3>

                        <div style={itemStyle} className="glass">
                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: '700' }}>B.Tech in Computer Science</h4>
                            <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.5rem' }}>Icfai Tech, Hyderabad | 2022 - 2026</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>Focusing on algorithms, data structures, and advanced SE.</p>
                        </div>

                        <div style={{ ...itemStyle, borderLeftColor: 'var(--secondary)' }} className="glass">
                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: '700' }}>Higher Secondary Education</h4>
                            <p style={{ color: 'var(--secondary)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0' }}>Raos Junior College, Nandyal | 2020 - 2022</p>
                        </div>

                        <div style={{ ...itemStyle, borderLeftColor: 'var(--text-muted)', marginBottom: 0 }} className="glass">
                            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.3rem', fontWeight: '700' }}>Secondary Education</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Good Shepherd School, Nandyal | 2019 - 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
