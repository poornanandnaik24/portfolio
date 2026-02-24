import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const timelineData = [
    {
        year: '2024 – Present',
        title: 'Research Scholar – Medical Imaging AI',
        org: 'National Institute / University',
        desc: 'Leading deep learning research on automated detection of neurological disorders from MRI and CT scans using transformer-based architectures.',
        icon: '🔬',
        color: '#00e5ff',
    },
    {
        year: '2022 – 2024',
        title: 'M.Tech – Biomedical Engineering',
        org: 'Premier Medical Technology University',
        desc: 'Specialized in computational imaging and AI-assisted diagnostics. Thesis on "Attention-Guided U-Net for Tumor Segmentation in Brain MRI."',
        icon: '🎓',
        color: '#a855f7',
    },
    {
        year: '2021 – 2022',
        title: 'Research Intern – Deep Learning',
        org: 'AI Healthcare Startup',
        desc: 'Built CNN pipelines for diabetic retinopathy grading achieving 94.2% accuracy on fundus image datasets. Deployed models on cloud infrastructure.',
        icon: '💻',
        color: '#ec4899',
    },
    {
        year: '2018 – 2022',
        title: 'B.Tech – Electronics & Communication',
        org: 'Engineering College',
        desc: 'Graduated with distinction. Final year project: "Deep Learning-Based Pneumonia Detection from Chest X-rays" — awarded Best Project.',
        icon: '⚡',
        color: '#10b981',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
    }),
};

const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="about" className="section about-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">
                        <span className="badge-icon">👤</span> About Me
                    </span>
                    <h2 className="section-title">
                        Where Biology Meets<br />
                        <span className="gradient-text">Artificial Intelligence</span>
                    </h2>
                </motion.div>

                <div className="about-grid">
                    {/* Left: Bio Card */}
                    <motion.div
                        className="about-bio"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass-card bio-card">
                            {/* Avatar */}
                            <div className="bio-avatar">
                                <div className="avatar-ring" />
                                <div className="avatar-inner">
                                    <svg viewBox="0 0 120 120" fill="none">
                                        <defs>
                                            <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#00e5ff" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="60" cy="45" r="22" fill="url(#avatarGrad)" opacity="0.9" />
                                        <path d="M20 110 Q20 80 60 80 Q100 80 100 110" fill="url(#avatarGrad)" opacity="0.7" />
                                        <circle cx="60" cy="45" r="22" stroke="rgba(0,229,255,0.4)" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className="bio-name">Poornanand</h3>
                            <p className="bio-role gradient-text">Medical Imaging Researcher &amp; Deep Learning Engineer</p>

                            <div className="bio-location">
                                <span>📍</span> India
                            </div>

                            <p className="bio-text">
                                I am a passionate researcher working at the exciting crossroads of{' '}
                                <strong>Medical Imaging</strong> and <strong>Deep Learning</strong>. My work focuses
                                on developing novel neural network architectures that can analyze medical scans —
                                from MRI and CT to X-ray and fundus images — with superhuman precision.
                            </p>

                            <p className="bio-text">
                                I believe AI has the power to democratize healthcare diagnostics, making expert-level
                                analysis accessible anywhere in the world. Every model I build is a step toward that
                                future.
                            </p>

                            <div className="bio-interests">
                                {['Computer Vision', 'Medical AI', 'Image Segmentation', 'Generative Models', 'Transfer Learning', 'Clinical Validation'].map(tag => (
                                    <span key={tag} className="interest-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="bio-links">
                                <a href="mailto:poornanand@example.com" className="bio-link">
                                    <span>✉</span> poornanand@example.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Timeline */}
                    <motion.div
                        className="about-timeline"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <h3 className="timeline-heading">My Journey</h3>
                        <div className="timeline">
                            {timelineData.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="timeline-item"
                                    custom={i}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                >
                                    <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}60` }}>
                                        <span>{item.icon}</span>
                                    </div>
                                    <div className="timeline-content glass-card">
                                        <span className="timeline-year" style={{ color: item.color }}>{item.year}</span>
                                        <h4 className="timeline-title">{item.title}</h4>
                                        <p className="timeline-org">{item.org}</p>
                                        <p className="timeline-desc">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div className="timeline-line" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
