import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const contactInfo = [
    { icon: '✉', label: 'Email', value: 'poornanandnaik24@gmail.com', href: 'mailto:poornanandnaik24@gmail.com', color: '#00e5ff' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/poornanandnaik24', href: 'https://www.linkedin.com/in/poornanandnaik24', color: '#a855f7' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/poornanandnaik24', href: 'https://github.com/poornanandnaik24', color: '#ec4899' },
    { icon: '📞', label: 'Phone', value: '+91-9945218238', href: 'tel:+919945218238', color: '#10b981' },
];

const Contact = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'

    const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate send (replace with EmailJS or Formspree integration)
        await new Promise(r => setTimeout(r, 1500));
        setStatus('sent');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge"><span>📡</span> Contact</span>
                    <h2 className="section-title">
                        Let's <span className="gradient-text">Collaborate</span>
                    </h2>
                    <p className="section-subtitle">
                        Open to research collaborations, project discussions, speaking engagements, and academic partnerships.
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Left: Info & Cards */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="contact-intro glass-card">
                            <div className="contact-status-dot">
                                <span className="status-pulse" />
                                <span>Available for collaborations</span>
                            </div>
                            <h3>Open to Collaborations!</h3>
                            <p>
                                PhD Scholar at <strong>NIT Karnataka Surathkal</strong> working on Medical Imaging & Deep Learning.
                                Open to research collaborations, joint publications, speaking engagements, and academic partnerships.
                            </p>
                            <p>
                                I typically respond within <strong>24 hours</strong>.
                            </p>
                        </div>

                        <div className="contact-cards">
                            {contactInfo.map((info, i) => (
                                <motion.a
                                    key={info.label}
                                    href={info.href}
                                    className="contact-card glass-card"
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    style={{ '--c-color': info.color }}
                                >
                                    <span className="c-icon" style={{ color: info.color }}>{info.icon}</span>
                                    <div>
                                        <span className="c-label">{info.label}</span>
                                        <span className="c-value">{info.value}</span>
                                    </div>
                                    <span className="c-arrow">→</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <form className="contact-form glass-card" onSubmit={handleSubmit}>
                            <h3 className="form-title">Send a Message</h3>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Dr. Jane Smith"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="jane@hospital.edu"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Research Collaboration Inquiry"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Tell me about your project, research idea, or how you'd like to collaborate..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="form-input form-textarea"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn-primary form-submit ${status === 'sending' ? 'sending' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <span className="btn-spinner" />
                                        Sending...
                                    </>
                                ) : status === 'sent' ? (
                                    <>✓ Message Sent!</>
                                ) : (
                                    <>
                                        Send Message
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                    </>
                                )}
                            </button>

                            {status === 'sent' && (
                                <motion.p
                                    className="form-success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    🎉 Thanks! I'll get back to you within 24 hours.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
