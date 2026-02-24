import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projects = [
    {
        id: 1,
        category: 'segmentation',
        title: 'BrainSeg-Transformer',
        subtitle: 'Automated Brain Tumor Segmentation',
        desc: 'A hybrid CNN-Transformer architecture for multi-class brain tumor segmentation on BraTS 2023 dataset. Implements a novel dual-attention mechanism achieving state-of-the-art Dice scores across enhancing tumor, tumor core, and whole tumor subregions.',
        tech: ['PyTorch', 'Vision Transformer', 'MONAI', 'BraTS 2023', 'AWS SageMaker'],
        metrics: [{ label: 'Whole Tumor Dice', value: '0.921' }, { label: 'Tumor Core Dice', value: '0.876' }],
        color: '#00e5ff',
        github: 'https://github.com/',
        demo: '#',
        icon: '🧠',
        featured: true,
    },
    {
        id: 2,
        category: 'detection',
        title: 'ChestVision AI',
        subtitle: 'Multi-Disease Chest X-Ray Classifier',
        desc: 'Multi-label classification system detecting 14 thoracic diseases from chest X-rays. Employs EfficientNetV2 backbone with custom attention layers, trained on the NIH ChestX-ray14 dataset with AUROC > 0.85 across all classes.',
        tech: ['TensorFlow', 'EfficientNetV2', 'GradCAM', 'NIH Dataset', 'Docker'],
        metrics: [{ label: 'Mean AUROC', value: '0.872' }, { label: 'Classes', value: '14' }],
        color: '#a855f7',
        github: 'https://github.com/',
        demo: '#',
        icon: '🫁',
        featured: true,
    },
    {
        id: 3,
        category: 'generation',
        title: 'MedDiffusion',
        subtitle: 'Medical Image Synthesis via Diffusion',
        desc: 'Latent Diffusion Model conditioned on clinical text reports for generating realistic synthetic MRI slices. Enables privacy-preserving data sharing and rare disease dataset augmentation. Evaluated using FID, SSIM, and radiologist preference scores.',
        tech: ['PyTorch', 'Stable Diffusion', 'CLIP', 'MIMIC-CXR', 'HuggingFace'],
        metrics: [{ label: 'FID Score', value: '8.2' }, { label: 'SSIM', value: '0.89' }],
        color: '#ec4899',
        github: 'https://github.com/',
        demo: '#',
        icon: '🏗️',
        featured: false,
    },
    {
        id: 4,
        category: 'detection',
        title: 'RetinaNet-DR',
        subtitle: 'Diabetic Retinopathy Grading System',
        desc: 'End-to-end fundus image analysis pipeline for DR grading (0–4 scale) and hard exudate/microaneurysm detection. Deployed as a REST API with a FastAPI backend, capable of processing 500+ images/hour.',
        tech: ['PyTorch', 'ResNet50', 'FastAPI', 'EyePACS', 'OpenCV'],
        metrics: [{ label: 'Grading Accuracy', value: '94.2%' }, { label: 'Kappa Score', value: '0.89' }],
        color: '#10b981',
        github: 'https://github.com/',
        demo: '#',
        icon: '👁️',
        featured: false,
    },
    {
        id: 5,
        category: 'federated',
        title: 'FedMed Framework',
        subtitle: 'Federated Learning for Clinical AI',
        desc: 'A modular federated learning framework tailored for heterogeneous clinical datasets. Implements FedAvg, FedProx, and a novel adaptive aggregation strategy. Enables HIPAA-compliant collaborative training across 5 simulated hospital nodes.',
        tech: ['PySyft', 'Flower', 'PyTorch', 'Docker', 'Privacy Computing'],
        metrics: [{ label: 'Accuracy Drop vs Central', value: '<3%' }, { label: 'Hospital Nodes', value: '5' }],
        color: '#6366f1',
        github: 'https://github.com/',
        demo: '#',
        icon: '🔗',
        featured: false,
    },
    {
        id: 6,
        category: 'segmentation',
        title: 'PolypSeg-U2Net',
        subtitle: 'Colon Polyp Segmentation',
        desc: 'U²-Net based architecture with squeeze-and-excitation blocks for precise colorectal polyp segmentation from colonoscopy images. Trained on Kvasir-SEG and CVC-ClinicDB datasets with real-time inference capability.',
        tech: ['PyTorch', 'U²-Net', 'SE-Blocks', 'Kvasir-SEG', 'CVC-ClinicDB'],
        metrics: [{ label: 'mDice', value: '0.906' }, { label: 'mIoU', value: '0.863' }],
        color: '#f59e0b',
        github: 'https://github.com/',
        demo: '#',
        icon: '🔬',
        featured: false,
    },
];

const FILTERS = ['All', 'segmentation', 'detection', 'generation', 'federated'];

const ProjectCard = ({ project, inView, index }) => (
    <motion.div
        className={`project-card glass-card ${project.featured ? 'featured' : ''}`}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        style={{ '--proj-color': project.color }}
    >
        {project.featured && <span className="featured-badge">⭐ Featured</span>}

        <div className="proj-header">
            <div className="proj-icon" style={{ background: `${project.color}15`, border: `1px solid ${project.color}35` }}>
                <span>{project.icon}</span>
            </div>
            <div className="proj-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="proj-link" title="GitHub">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                </a>
                <a href={project.demo} className="proj-link" title="Live Demo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </a>
            </div>
        </div>

        <div>
            <h3 className="proj-title" style={{ color: project.color }}>{project.title}</h3>
            <p className="proj-subtitle">{project.subtitle}</p>
        </div>

        <p className="proj-desc">{project.desc}</p>

        <div className="proj-metrics">
            {project.metrics.map(m => (
                <div key={m.label} className="proj-metric">
                    <span className="proj-metric-value" style={{ color: project.color }}>{m.value}</span>
                    <span className="proj-metric-label">{m.label}</span>
                </div>
            ))}
        </div>

        <div className="proj-tech">
            {project.tech.map(t => (
                <span key={t} className="proj-tech-tag">{t}</span>
            ))}
        </div>

        <div className="proj-accentbar" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
    </motion.div>
);

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="section projects-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge"><span>💡</span> Projects</span>
                    <h2 className="section-title">
                        Clinical AI <span className="gradient-text">Solutions Built</span>
                    </h2>
                    <p className="section-subtitle">
                        Hands-on implementations bridging cutting-edge deep learning research with real-world medical imaging challenges.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    className="proj-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                >
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            className={`proj-filter-btn ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Project Cards Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        className="projects-grid"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {filtered.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
