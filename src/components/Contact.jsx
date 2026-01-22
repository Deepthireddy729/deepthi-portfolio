import React, { useState } from 'react';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
            alert('Message sent successfully!');
            e.target.reset();
        }, 1500);
    };

    const containerStyle = {
        maxWidth: '1000px',
        margin: '0 auto',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '2.5rem',
        marginTop: '2rem',
    };

    const icons = {
        email: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        phone: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
        linkedin: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
            </svg>
        ),
        location: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        )
    };

    const contactInfo = [
        { label: 'Email', value: 'nagadeepthireddy01@gmail.com', icon: icons.email, link: 'mailto:nagadeepthireddy01@gmail.com', color: '#ea4335' },
        { label: 'Phone', value: '+91 9063285543', icon: icons.phone, link: 'tel:+919063285543', color: '#34a853' },
        { label: 'LinkedIn', value: 'Deepthi Reddy', icon: icons.linkedin, link: 'https://www.linkedin.com/in/deepthi-reddy-0966b7314', color: '#0077b5' },
        { label: 'Location', value: 'Hyderabad, India', icon: icons.location, link: '#', color: 'var(--secondary)' }
    ];

    const infoItem = {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1.5rem',
        borderRadius: '24px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--glass-border)',
        transition: 'var(--transition)',
        marginBottom: '1rem',
        cursor: 'pointer'
    };

    const inputStyle = {
        width: '100%',
        padding: '1.2rem',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-main)',
        fontSize: '1rem',
        marginBottom: '1.5rem',
        outline: 'none',
        transition: 'var(--transition)',
    };

    const creativeBtn = {
        width: '100%',
        padding: '1.2rem',
        borderRadius: '16px',
        background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
        color: 'white',
        fontWeight: '800',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.6)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        position: 'relative',
        overflow: 'hidden'
    };

    return (
        <section id="contact" style={{ padding: '120px 0' }}>
            <div className="container" style={containerStyle}>
                <h2 className="section-title">Get In Touch</h2>
                <div style={gridStyle} className="contact-grid contact-wrapper">
                    <div className="animate">
                        <h3 style={{ fontSize: 'clamp(1.8rem, 8vw, 2.5rem)', marginBottom: '1.5rem', fontFamily: 'Outfit', fontWeight: '800', color: 'var(--primary)', wordBreak: 'break-word' }}>Let's Work Together</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1rem', lineHeight: '1.8' }}>
                            I'm open to full-time roles and collaborative projects. Reach out via the form or through my professional channels.
                        </p>
                        {contactInfo.map((info, i) => (
                            <a key={i} href={info.link} target="_blank" rel="noopener noreferrer" style={infoItem} className="glass contact-card"
                                onMouseOver={(e) => {
                                    e.currentTarget.style.borderColor = info.color;
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                }}>
                                <span style={{
                                    width: 'clamp(40px, 10vw, 50px)',
                                    height: 'clamp(40px, 10vw, 50px)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    background: `${info.color}15`,
                                    color: info.color,
                                    flexShrink: 0
                                }}>
                                    {info.icon}
                                </span>
                                <div style={{ minWidth: 0 }}>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{info.label}</p>
                                    <p style={{ fontSize: 'clamp(0.9rem, 4vw, 1.1rem)', color: 'var(--text-main)', fontWeight: '600', wordBreak: 'break-all' }}>{info.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="animate glass" style={{ padding: 'clamp(1.2rem, 5vw, 3rem)', borderRadius: '32px', position: 'relative' }}>
                        <h3 style={{ fontSize: 'clamp(1.5rem, 6vw, 1.8rem)', marginBottom: '2rem', fontFamily: 'Outfit', fontWeight: '700', color: 'var(--primary)' }}>Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your Name" required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                            <input type="email" placeholder="Your Email" required style={inputStyle} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'} />
                            <textarea placeholder="How can I help you?" required rows="4" style={{ ...inputStyle, resize: 'none' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary)'} onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}></textarea>
                            <button
                                type="submit"
                                style={creativeBtn}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'translateY(-5px) scale(1.02)';
                                    e.target.style.boxShadow = '0 15px 50px -10px rgba(236, 72, 153, 0.6)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'translateY(0) scale(1)';
                                    e.target.style.boxShadow = '0 10px 40px -10px rgba(99, 102, 241, 0.6)';
                                }}
                            >
                                {formStatus === 'sending' ? 'Sending...' : 'Launch Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
