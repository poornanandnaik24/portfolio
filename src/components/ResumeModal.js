import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ResumeModal.css';

const ResumeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        window.addEventListener('openResume', openModal);
        const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
        window.addEventListener('keydown', handleKey);
        return () => {
            window.removeEventListener('openResume', openModal);
            window.removeEventListener('keydown', handleKey);
        };
    }, [openModal, closeModal]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const resumeUrl = process.env.PUBLIC_URL + '/Resume.pdf';

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop — click to close */}
                    <motion.div
                        className="resume-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeModal}
                    />

                    {/* Centering wrapper — no transform, pure flex centering */}
                    <div className="resume-modal-wrapper">
                        {/* Animated panel — framer-motion only handles scale/opacity, no translate */}
                        <motion.div
                            className="resume-modal"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Header */}
                            <div className="resume-modal-header">
                                <div className="resume-modal-title">
                                    <span className="resume-modal-icon">📄</span>
                                    <div>
                                        <h3>Poornanand — Resume</h3>
                                        <p>PhD Scholar · NIT Karnataka Surathkal</p>
                                    </div>
                                </div>
                                <div className="resume-modal-actions">
                                    <a
                                        href={resumeUrl}
                                        download="Poornanand_Resume.pdf"
                                        className="resume-dl-btn"
                                        title="Download PDF"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                        Download
                                    </a>
                                    <a
                                        href={resumeUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="resume-dl-btn"
                                        title="Open in new tab"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        New Tab
                                    </a>
                                    <button
                                        className="resume-close-btn"
                                        onClick={closeModal}
                                        aria-label="Close resume"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* PDF iframe */}
                            <div className="resume-modal-body">
                                <iframe
                                    src={resumeUrl + '#toolbar=0&navpanes=0&view=FitH'}
                                    title="Poornanand Resume"
                                    className="resume-iframe"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
