import React from "react";

const Skills = () => {
    const technicalSkills = [
        {
            category: "Programming & Logic",
            skills: [
                { name: "Python", level: "95%" },
                { name: "Java", level: "90%" },
                { name: "JavaScript", level: "88%" },
                { name: "SQL", level: "85%" },
                { name: "Data Structures & Algos", level: "82%" }
            ]
        },
        {
            category: "Web & FullStack",
            skills: [
                { name: "HTML / CSS", level: "95%" },
                { name: "React.js", level: "90%" },
                { name: "Flask", level: "85%" },
                { name: "Full Stack Development", level: "88%" }
            ]
        },
        {
            category: "AI & Data Science",
            skills: [
                { name: "Machine Learning Concepts", level: "80%" },
                { name: "Data Analysis", level: "85%" },
                { name: "RAG & NLP", level: "75%" }
            ]
        },
        {
            category: "Tools & Clouds",
            skills: [
                { name: "Git & GitHub", level: "90%" },
                { name: "MySQL", level: "85%" },
                { name: "AWS Cloud Foundations", level: "70%" },
                { name: "VS Code", level: "95%" }
            ]
        }
    ];

    const softSkills = [
        "Time Management", "Teamwork", "Adaptability",
        "Quick Learner", "Communication", "Problem Solving"
    ];

    const sectionStyles = {
        background: 'var(--bg-darker)',
        position: 'relative',
        overflow: 'hidden',
    };

    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        marginTop: '4rem',
    };

    const cardStyles = {
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        transition: 'var(--transition)',
        borderRadius: '24px'
    };

    const progressBg = {
        width: '100%',
        height: '8px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginTop: '0.5rem',
    };

    return (
        <section id="skills" style={sectionStyles}>
            <div className="container">
                <h2 className="section-title">Technical Proficiency</h2>

                <div style={gridStyles} className="skills-grid">
                    {technicalSkills.map((cat, idx) => (
                        <div key={idx} className="glass animate" style={cardStyles}>
                            <h3 style={{
                                color: 'var(--primary)',
                                fontFamily: 'Outfit',
                                fontSize: '1.3rem',
                                borderBottom: '1px solid var(--glass-border)',
                                paddingBottom: '1.2rem',
                                marginBottom: '0.8rem',
                                fontWeight: '700'
                            }}>
                                {cat.category}
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {cat.skills.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: 'var(--text-main)' }}>
                                            <span style={{ fontWeight: '600' }}>{skill.name}</span>
                                            <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>{skill.level}</span>
                                        </div>
                                        <div style={progressBg}>
                                            <div style={{
                                                width: skill.level,
                                                height: '100%',
                                                background: 'linear-gradient(to right, var(--primary), var(--secondary))',
                                                borderRadius: '10px',
                                                boxShadow: `0 0 15px ${idx % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'}33`
                                            }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '6rem' }}>
                    <h3 style={{
                        textAlign: 'center',
                        fontFamily: 'Outfit',
                        fontSize: '2rem',
                        marginBottom: '4rem',
                        color: 'var(--primary)'
                    }}>
                        Interpersonal & Soft Skills
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1.5rem'
                    }}>
                        {softSkills.map((skill, index) => (
                            <span
                                key={index}
                                className="glass"
                                style={{
                                    padding: "1rem 2.5rem",
                                    borderRadius: "50px",
                                    color: "var(--text-muted)",
                                    fontWeight: "600",
                                    fontSize: "1rem",
                                    transition: "var(--transition)",
                                    cursor: 'default',
                                    border: '1px solid var(--glass-border)'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = "var(--text-main)";
                                    e.target.style.borderColor = "var(--secondary)";
                                    e.target.style.transform = "scale(1.05)";
                                    e.target.style.background = "rgba(236, 72, 153, 0.05)";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = "var(--text-muted)";
                                    e.target.style.borderColor = "var(--glass-border)";
                                    e.target.style.transform = "scale(1)";
                                    e.target.style.background = "rgba(255,255,255,0.02)";
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
