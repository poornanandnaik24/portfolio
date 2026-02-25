import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer">
            <div className="footer-top-line" />
            <div className="container footer-inner">
                {/* Logo & tagline */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
                            <circle cx="20" cy="20" r="18" stroke="url(#fGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                            <path d="M10 20 Q15 12 20 20 Q25 28 30 20" stroke="url(#fGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />
                            <circle cx="20" cy="20" r="4" fill="url(#fGrad)" />
                            <defs>
                                <linearGradient id="fGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#00e5ff" />
                                    <stop offset="100%" stopColor="#a855f7" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="footer-name">Poornanand<span style={{ color: 'var(--accent-cyan)' }}>.</span></span>
                    </div>
                    <p className="footer-tagline">
                        PhD Scholar @ NIT Karnataka — Advancing healthcare through AI-powered medical imaging research.
                    </p>
                    <div className="footer-socials">
                        {[
                            { label: 'GitHub', href: 'https://github.com/poornanandnaik24' },
                            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/poornanandnaik24' },
                            { label: 'Scholar', href: 'https://scholar.google.com/citations?user=c16Cx-kAAAAJ&hl=en' },
                            { label: 'Email', href: 'mailto:poornanandnaik24@gmail.com' },
                        ].map(s => (
                            <a key={s.label} href={s.href} className="footer-social" target="_blank" rel="noreferrer">{s.label}</a>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="footer-nav-group">
                    <h4>Navigation</h4>
                    <ul>
                        {['About', 'Skills', 'Research', 'Projects', 'Publications', 'Contact'].map(item => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} onClick={e => {
                                    e.preventDefault();
                                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                                }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Research Interests */}
                <div className="footer-nav-group">
                    <h4>Research Focus</h4>
                    <ul>
                        {['Rib Segmentation', 'Tumour Detection AI', 'TB Imaging', 'Semi-Supervised Learning', 'Computer Vision', 'Lung Sound Analysis'].map(item => (
                            <li key={item}><span className="footer-interest">{item}</span></li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Poornanand. All rights reserved.
                        Built with <span className="heart">♥</span> using React &amp; Framer Motion.
                    </p>
                    <motion.button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
