import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skillCategories = [
    {
        id: 'dl',
        label: 'Deep Learning',
        icon: '🧠',
        color: '#00e5ff',
        skills: [
            { name: 'PyTorch', level: 95 },
            { name: 'TensorFlow / Keras', level: 90 },
            { name: 'CNNs & Vision Transformers', level: 92 },
            { name: 'U-Net / SegNet', level: 88 },
            { name: 'GANs (Pix2Pix, CycleGAN)', level: 80 },
            { name: 'Diffusion Models', level: 72 },
        ],
    },
    {
        id: 'imaging',
        label: 'Medical Imaging',
        icon: '🏥',
        color: '#a855f7',
        skills: [
            { name: 'MRI Analysis', level: 93 },
            { name: 'CT Scan Processing', level: 90 },
            { name: 'X-Ray Diagnostics AI', level: 88 },
            { name: 'Fundus Image Analysis', level: 85 },
            { name: 'DICOM / NIfTI Processing', level: 87 },
            { name: 'Histopathology Analysis', level: 75 },
        ],
    },
    {
        id: 'cv',
        label: 'Computer Vision',
        icon: '👁️',
        color: '#ec4899',
        skills: [
            { name: 'Image Segmentation', level: 94 },
            { name: 'Object Detection (YOLO)', level: 85 },
            { name: 'Image Classification', level: 93 },
            { name: 'Super-Resolution', level: 78 },
            { name: 'OpenCV / PIL', level: 90 },
            { name: '3D Volumetric Analysis', level: 80 },
        ],
    },
    {
        id: 'tools',
        label: 'Tools & Stack',
        icon: '⚙️',
        color: '#10b981',
        skills: [
            { name: 'Python / NumPy / SciPy', level: 96 },
            { name: 'MONAI (Medical AI)', level: 82 },
            { name: 'SimpleITK / ITK', level: 80 },
            { name: 'Docker / AWS / GCP', level: 75 },
            { name: 'Git / MLflow / W&B', level: 85 },
            { name: 'MATLAB / R (Statistics)', level: 72 },
        ],
    },
];

const techStack = [
    'PyTorch', 'TensorFlow', 'MONAI', 'OpenCV', 'Scikit-learn',
    'Docker', 'AWS', 'Python', 'DICOM', 'ITK', 'NumPy', 'Pandas',
    'Matplotlib', 'W&B', 'Git', 'CUDA', 'HuggingFace', 'FastAPI',
];

const SkillBar = ({ name, level, color, inView, delay }) => (
    <div className="skill-item">
        <div className="skill-info">
            <span className="skill-name">{name}</span>
            <span className="skill-level" style={{ color }}>{level}%</span>
        </div>
        <div className="skill-bar-bg">
            <motion.div
                className="skill-bar-fill"
                style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${level}%` } : { width: 0 }}
                transition={{ duration: 1, delay, ease: 'easeOut' }}
            />
        </div>
    </div>
);

const Skills = () => {
    const [activeTab, setActiveTab] = useState('dl');
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const active = skillCategories.find(c => c.id === activeTab);

    return (
        <section id="skills" className="section skills-section">
            <div className="container" ref={ref}>
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-badge">
                        <span>⚡</span> Technical Skills
                    </span>
                    <h2 className="section-title">
                        Expertise &amp; <span className="gradient-text">Capabilities</span>
                    </h2>
                    <p className="section-subtitle">
                        A deep toolkit bridging clinical medical knowledge with state-of-the-art deep learning.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    className="skills-tabs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
                            style={activeTab === cat.id ? { borderColor: cat.color, color: cat.color, background: `${cat.color}12` } : {}}
                            onClick={() => setActiveTab(cat.id)}
                        >
                            <span>{cat.icon}</span>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Skill Bars */}
                <motion.div
                    key={activeTab}
                    className="skills-bars glass-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="skills-bars-header">
                        <span style={{ color: active.color, fontSize: '1.5rem' }}>{active.icon}</span>
                        <div>
                            <h3 className="skills-bars-title">{active.label}</h3>
                            <p className="skills-bars-subtitle">Proficiency Levels</p>
                        </div>
                    </div>
                    <div className="skill-bars-list">
                        {active.skills.map((skill, i) => (
                            <SkillBar
                                key={skill.name}
                                {...skill}
                                color={active.color}
                                inView={inView}
                                delay={0.1 + i * 0.1}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack Pills */}
                <motion.div
                    className="tech-stack"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <h3 className="tech-stack-title">Tools &amp; Technologies</h3>
                    <div className="tech-pills">
                        {techStack.map((tech, i) => (
                            <motion.span
                                key={tech}
                                className="tech-pill"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                                whileHover={{ scale: 1.08, y: -3 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
