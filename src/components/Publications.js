import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Publications.css';

const publications = [
    {
        title: 'Dual-Attention Hybrid Transformer for Multi-Class Brain Tumor Segmentation in Multi-Modal MRI',
        journal: 'IEEE Transactions on Medical Imaging',
        year: '2024',
        impact: 'IF: 10.048',
        authors: 'Poornanand, A. Sharma, R. Kumar, et al.',
        abstract: 'We propose a novel Dual-Attention Hybrid Transformer (DAHT) that integrates local CNN features with global self-attention for robust multi-class brain tumor segmentation across T1, T2, and FLAIR MRI modalities...',
        tags: ['Brain MRI', 'Segmentation', 'Transformer', 'Multi-Modal'],
        doi: 'https://doi.org/',
        arxiv: 'https://arxiv.org/',
        citations: 42,
        color: '#00e5ff',
        type: 'Journal',
    },
    {
        title: 'Privacy-Preserving Federated Learning for Multi-Institutional Diabetic Retinopathy Screening',
        journal: 'Nature Digital Medicine',
        year: '2024',
        impact: 'IF: 15.357',
        authors: 'Poornanand, S. Patel, M. Singh, et al.',
        abstract: 'A novel federated learning framework with differential privacy guarantees for collaborative DR screening model training across geographically distributed hospitals without sharing patient data...',
        tags: ['Federated Learning', 'Retinopathy', 'Privacy', 'Healthcare AI'],
        doi: 'https://doi.org/',
        arxiv: 'https://arxiv.org/',
        citations: 28,
        color: '#a855f7',
        type: 'Journal',
    },
    {
        title: 'MedDiff: Conditioned Latent Diffusion Models for Realistic Medical Image Synthesis',
        journal: 'MICCAI 2024 – Medical Image Computing and Computer-Assisted Intervention',
        year: '2024',
        impact: 'Top Conference (A*)',
        authors: 'Poornanand, L. Zhang, T. Williams, et al.',
        abstract: 'MedDiff presents a text-conditioned latent diffusion framework achieving state-of-the-art FID scores on MRI and CT synthesis, enabling privacy-preserving data augmentation for rare disease ML pipelines...',
        tags: ['Diffusion Models', 'Image Synthesis', 'Data Augmentation', 'LDM'],
        doi: 'https://doi.org/',
        arxiv: 'https://arxiv.org/',
        citations: 19,
        color: '#ec4899',
        type: 'Conference',
    },
    {
        title: 'Attention-Guided U-Net with Multi-Scale Feature Fusion for Accurate Lung Nodule Segmentation in CT',
        journal: 'Medical Image Analysis (Elsevier)',
        year: '2023',
        impact: 'IF: 13.828',
        authors: 'Poornanand, A. Mehta, V. Rao, et al.',
        abstract: 'An attention-guided U-Net framework with multi-scale encoder feature fusion for robust lung nodule segmentation in LIDC-IDRI CT dataset, achieving superior performance over existing methods on nodules < 3mm...',
        tags: ['CT Scan', 'Lung Nodule', 'U-Net', 'Attention Mechanism'],
        doi: 'https://doi.org/',
        arxiv: 'https://arxiv.org/',
        citations: 57,
        color: '#10b981',
        type: 'Journal',
    },
    {
        title: 'EnsemblePath: Weakly-Supervised Ensemble Learning for Whole Slide Image Classification',
        journal: 'CVPR 2023 – Workshop on Computer Vision for Microscopy Image Analysis',
        year: '2023',
        impact: 'Top Conference (A*)',
        authors: 'Poornanand, N. Gupta, P. Chen, et al.',
        abstract: 'A weakly-supervised MIL ensemble approach using attention pooling across ResNet, ViT, and DenseNet backbones for cancer subtype classification from histopathology WSIs with slide-level labels only...',
        tags: ['Histopathology', 'WSI', 'Weakly Supervised', 'Ensemble MIL'],
        doi: 'https://doi.org/',
        arxiv: 'https://arxiv.org/',
        citations: 31,
        color: '#6366f1',
        type: 'Conference',
    },
];

const PublicationCard = ({ pub, index, inView }) => (
    <motion.div
        className="pub-card glass-card"
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{ '--pub-color': pub.color }}
    >
        <div className="pub-accent" style={{ background: pub.color }} />

        <div className="pub-header">
            <div className="pub-meta">
                <span className="pub-type" style={{ color: pub.color, background: `${pub.color}12`, border: `1px solid ${pub.color}30` }}>
                    {pub.type}
                </span>
                <span className="pub-year">{pub.year}</span>
                <span className="pub-impact">{pub.impact}</span>
            </div>
            <div className="pub-citations">
                <span className="cite-icon">📄</span>
                <span>{pub.citations} citations</span>
            </div>
        </div>

        <h3 className="pub-title">{pub.title}</h3>
        <p className="pub-journal">{pub.journal}</p>
        <p className="pub-authors">{pub.authors}</p>
        <p className="pub-abstract">{pub.abstract}</p>

        <div className="pub-tags">
            {pub.tags.map(tag => (
                <span key={tag} className="pub-tag" style={{ borderColor: `${pub.color}25`, color: `${pub.color}cc` }}>
                    {tag}
                </span>
            ))}
        </div>

        <div className="pub-actions">
            <a href={pub.doi} className="pub-btn" target="_blank" rel="noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" /></svg>
                DOI Link
            </a>
            <a href={pub.arxiv} className="pub-btn" target="_blank" rel="noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                arXiv Preprint
            </a>
        </div>
    </motion.div>
);

const Publications = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="publications" className="section publications-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge"><span>📚</span> Publications</span>
                    <h2 className="section-title">
                        Peer-Reviewed <span className="gradient-text">Research Work</span>
                    </h2>
                    <p className="section-subtitle">
                        Published in top-tier journals and conferences including IEEE TMI, Nature Digital Medicine, and MICCAI.
                    </p>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    className="pub-stats"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {[
                        { value: '10+', label: 'Publications', icon: '📄' },
                        { value: '177+', label: 'Total Citations', icon: '📖' },
                        { value: '8.5', label: 'h-Index', icon: '📊' },
                        { value: '3', label: 'Top-Tier Journals', icon: '🏆' },
                    ].map(stat => (
                        <div key={stat.label} className="pub-stat-card glass-card">
                            <span className="pub-stat-icon">{stat.icon}</span>
                            <span className="pub-stat-value gradient-text">{stat.value}</span>
                            <span className="pub-stat-label">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Publications List */}
                <div className="publications-list">
                    {publications.map((pub, i) => (
                        <PublicationCard key={pub.title} pub={pub} index={i} inView={inView} />
                    ))}
                </div>

                {/* Google Scholar Link */}
                <motion.div
                    className="scholar-cta"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <a href="https://scholar.google.com" className="btn-outline" target="_blank" rel="noreferrer">
                        View All on Google Scholar ↗
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Publications;
