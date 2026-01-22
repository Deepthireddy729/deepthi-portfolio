import React, { useState, useEffect } from "react";

const Projects = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const projects = [
        {
            title: "🤖 RAG Chatbot",
            shortTitle: "RAG",
            description: "AI-powered chatbot using Retrieval-Augmented Generation. access key = deepthi",
            tech: ["Python", "NLP", "Machine Learning"],
            demoLink: "https://chatbot-nwe33q7j7-deepthireddy729s-projects.vercel.app/",
            codeLink: "https://github.com/Deepthireddy729/chatbot",
            cardBg: "linear-gradient(135deg, rgba(124, 58, 237, 0.4) 0%, rgba(91, 33, 182, 0.4) 100%)"
        },
        {
            title: "💊 Medication Recommendation",
            shortTitle: "ML",
            description: "ML system recommending medications based on health data. Connected via Flask backend for high-performance predictions.",
            tech: ["Python", "Machine Learning", "Flask"],
            cardBg: "linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, rgba(8, 145, 178, 0.4) 100%)",
            codeLink: "https://github.com/Deepthireddy729/Medical-Recommendation-System.git"
        },
        {
            title: "🛒 E-Commerce Website",
            shortTitle: "WEB",
            description: "Full-featured platform with production-ready authentication, shopping cart, and secure checkout integration.",
            tech: ["Python", "Flask", "MySQL"],
            cardBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.4) 0%, rgba(217, 119, 6, 0.4) 100%)",
            codeLink: "https://github.com/Deepthireddy729/CodeAlpha-ECommerce.git"
        },
        {
            title: "🌐 Social Media Platform",
            shortTitle: "APP",
            description: "Real-time social interaction platform featuring profile management, post creation, and engagement metrics.",
            tech: ["Python", "Flask", "JavaScript"],
            cardBg: "linear-gradient(135deg, rgba(16, 185, 129, 0.4) 0%, rgba(5, 150, 105, 0.4) 100%)",
            codeLink: "https://github.com/Deepthireddy729/code_alpha-Social-Media.git"
        }
    ];

    const allTechs = ["All", ...new Set(projects.flatMap(p => p.tech))];

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.tech.includes(activeFilter));

    const creativeBtnPrimary = {
        flex: 1,
        padding: "1.1rem",
        background: "linear-gradient(45deg, var(--primary), var(--secondary))",
        color: "white",
        borderRadius: "20px",
        fontWeight: "800",
        fontSize: "1rem",
        textAlign: "center",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        boxShadow: "0 10px 30px -10px rgba(99, 102, 241, 0.5)",
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    const creativeBtnOutline = {
        flex: 1,
        padding: "1.1rem",
        background: "rgba(255,255,255,0.03)",
        color: "var(--text-main)",
        borderRadius: "20px",
        border: "1px solid var(--glass-border)",
        fontWeight: "700",
        fontSize: "1rem",
        textAlign: "center",
        transition: "all 0.4s ease",
        textTransform: 'uppercase',
        letterSpacing: '1px'
    };

    return (
        <section id="projects" style={{ background: 'var(--bg-darker)', padding: '120px 0' }}>
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "4rem" }}>
                    {allTechs.map((tech, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(tech)}
                            className={activeFilter === tech ? "" : "glass"}
                            style={{
                                padding: "12px 32px",
                                background: activeFilter === tech
                                    ? "linear-gradient(45deg, var(--primary), var(--secondary))"
                                    : "rgba(255,255,255,0.03)",
                                color: "white",
                                borderRadius: "50px",
                                fontSize: "0.9rem",
                                fontWeight: "700",
                                border: "1px solid",
                                borderColor: activeFilter === tech ? "transparent" : "var(--glass-border)",
                                transition: "var(--transition)",
                                cursor: 'pointer',
                                boxShadow: activeFilter === tech ? "0 10px 20px -5px rgba(99, 102, 241, 0.4)" : "none",
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                            onMouseOver={(e) => {
                                if (activeFilter !== tech) {
                                    e.target.style.borderColor = 'var(--primary)';
                                    e.target.style.background = 'rgba(255,255,255,0.08)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (activeFilter !== tech) {
                                    e.target.style.borderColor = 'var(--glass-border)';
                                    e.target.style.background = 'rgba(255,255,255,0.03)';
                                }
                            }}
                        >
                            {tech}
                        </button>
                    ))}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: '2.5rem',
                }} className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="glass animate" style={{
                            overflow: "hidden",
                            transition: "var(--transition)",
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: '24px'
                        }}>
                            <div style={{
                                background: project.cardBg,
                                height: "200px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "4.5rem",
                                fontWeight: "900",
                                fontFamily: 'Outfit',
                                color: 'rgba(255, 255, 255, 0.95)',
                                textShadow: '0 10px 20px rgba(0,0,0,0.15)'
                            }}>
                                {project.shortTitle}
                            </div>

                            <div style={{ padding: "2.5rem", display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <h3 style={{ color: "var(--text-main)", fontSize: "1.6rem", marginBottom: "1.2rem", fontFamily: 'Outfit', fontWeight: '800' }}>{project.title}</h3>
                                <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: '1.8', marginBottom: "2rem", flex: 1 }}>{project.description}</p>

                                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2.5rem" }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            backgroundColor: "rgba(99, 102, 241, 0.08)",
                                            color: "var(--primary)",
                                            padding: "6px 16px",
                                            borderRadius: "50px",
                                            fontSize: "0.8rem",
                                            fontWeight: "700",
                                            border: "1px solid rgba(99, 102, 241, 0.15)"
                                        }}>{t}</span>
                                    ))}
                                </div>

                                <div style={{ display: "flex", gap: "1.2rem" }}>
                                    {project.demoLink !== "#" && project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={creativeBtnPrimary}
                                            onMouseOver={(e) => { e.target.style.transform = 'translateY(-6px) scale(1.02)'; e.target.style.boxShadow = '0 20px 40px -10px rgba(236, 72, 153, 0.6)'; }}
                                            onMouseOut={(e) => { e.target.style.transform = 'translateY(0) scale(1)'; e.target.style.boxShadow = '0 10px 30px -10px rgba(99, 102, 241, 0.5)'; }}>
                                            Explore
                                        </a>
                                    )}
                                    {project.codeLink !== "#" && (
                                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={creativeBtnOutline}
                                            onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.borderColor = 'var(--primary)'; }}
                                            onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.03)'; e.target.style.borderColor = 'var(--glass-border)'; }}>
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
