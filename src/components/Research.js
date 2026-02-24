import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Research.css';

const researchAreas = [
    {
        icon: '🧠',
        title: 'Neurological Disorder Detection',
        color: '#00e5ff',
        desc: 'Developing transformer-based architectures for automated detection of Alzheimer\'s disease, multiple sclerosis, and gliomas from multi-modal MRI data. Leveraging attention mechanisms to identify subtle early-stage biomarkers.',
        tags: ['Vision Transformer', 'MRI Analysis', 'Multi-Modal Fusion', 'Early Detection'],
        metric: '96.3% AUC',
        metricLabel: 'on ADNI Dataset',
    },
    {
        icon: '🫁',
        title: 'Pulmonary Disease Screening',
        color: '#a855f7',
        desc: 'Building robust convolutional pipelines for COVID-19, tuberculosis, and lung cancer detection from chest X-rays and CT scans. Achieving radiologist-level accuracy with interpretable GradCAM visualizations.',
        tags: ['Chest X-Ray', 'CT Segmentation', 'GradCAM', 'Class Activation Maps'],
        metric: '94.8% F1',
        metricLabel: 'on CheXpert Dataset',
    },
    {
        icon: '👁️',
        title: 'Retinal Fundus Image Analysis',
        color: '#ec4899',
        desc: 'End-to-end deep learning system for diabetic retinopathy grading, optic disc/cup segmentation, and glaucoma detection. Utilizes ensemble models trained on DRIVE, STARE, and EyePACS datasets.',
        tags: ['Fundus Analysis', 'Retinopathy Grading', 'Vessel Segmentation', 'Glaucoma'],
        metric: '97.1% Accuracy',
        metricLabel: 'on EyePACS Dataset',
    },
    {
        icon: '🔬',
        title: 'Histopathology WSI Analysis',
        color: '#10b981',
        desc: 'Multiple instance learning (MIL) approaches for whole slide image (WSI) cancer classification. Patch-level feature extraction with attention pooling enables slide-level predictions without pixel-level annotations.',
        tags: ['WSI Pathology', 'MIL', 'Cancer Grading', 'TCGA Dataset'],
        metric: '93.5% AUC',
        metricLabel: 'on TCGA-BRCA',
    },
    {
        icon: '🏗️',
        title: 'Generative Models for Data Augmentation',
        color: '#f59e0b',
        desc: 'Exploring conditional GANs and latent diffusion models to synthesize realistic medical images, addressing critical class imbalance in rare disease datasets while maintaining clinical fidelity.',
        tags: ['cGAN', 'Diffusion Models', 'Synthetic Data', 'Data Augmentation'],
        metric: 'FID Score 8.2',
        metricLabel: 'on Brain MRI Synthesis',
    },
    {
        icon: '🔗',
        title: 'Federated Learning for Privacy',
        color: '#6366f1',
        desc: 'Implementing privacy-preserving federated learning frameworks for collaborative AI model training across hospitals without sharing sensitive patient data. Tackles non-IID data distribution challenges.',
        tags: ['Federated Learning', 'Privacy-Preserving AI', 'Distributed Training', 'Healthcare'],
        metric: '3% Accuracy Drop',
        metricLabel: 'vs. Centralized Training',
    },
];

const ResearchCard = ({ area, index, inView }) => (
    <motion.div
        className="research-card glass-card"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ '--card-color': area.color }}
    >
        <div className="research-card-top">
            <div className="research-icon" style={{ background: `${area.color}18`, border: `1px solid ${area.color}40` }}>
                <span>{area.icon}</span>
            </div>
            <div className="research-metric">
                <span className="metric-value" style={{ color: area.color }}>{area.metric}</span>
                <span className="metric-label">{area.metricLabel}</span>
            </div>
        </div>

        <h3 className="research-title">{area.title}</h3>
        <p className="research-desc">{area.desc}</p>

        <div className="research-tags">
            {area.tags.map(tag => (
                <span key={tag} className="r-tag" style={{ borderColor: `${area.color}30`, color: area.color, background: `${area.color}08` }}>
                    {tag}
                </span>
            ))}
        </div>

        <div className="research-card-glow" style={{ background: `radial-gradient(circle at top right, ${area.color}12, transparent 60%)` }} />
    </motion.div>
);

const Research = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section id="research" className="section research-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge"><span>🔬</span> Research Areas</span>
                    <h2 className="section-title">
                        Pioneering <span className="gradient-text">Medical AI</span> Research
                    </h2>
                    <p className="section-subtitle">
                        Focused multidisciplinary research spanning neuroimaging, radiology, pathology,
                        and privacy-preserving AI for clinical translation.
                    </p>
                </motion.div>

                <div className="research-grid">
                    {researchAreas.map((area, i) => (
                        <ResearchCard key={area.title} area={area} index={i} inView={inView} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
