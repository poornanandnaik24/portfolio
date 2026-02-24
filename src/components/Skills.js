import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skillCategories = [
  {
    id: 'dl',
    label: 'Deep Learning',
    icon: '',
    color: '#00e5ff',
    skills: [
      { name: 'PyTorch', level: 92 },
      { name: 'Keras / TensorFlow', level: 88 },
      { name: 'CNNs & Vision Transformers', level: 90 },
      { name: 'U-Net / SegNet', level: 88 },
      { name: 'Semi-Supervised Learning', level: 82 },
      { name: 'Mean Teacher Framework', level: 80 },
    ],
  },
  {
    id: 'imaging',
    label: 'Medical Imaging',
    icon: '',
    color: '#a855f7',
    skills: [
      { name: 'Chest X-Ray Analysis', level: 93 },
      { name: 'Rib Segmentation', level: 92 },
      { name: 'CT Scan Processing', level: 87 },
      { name: 'Tumour Segmentation (GTV)', level: 85 },
      { name: 'Lung Sound Analysis', level: 80 },
      { name: 'Spirometry Signal Processing', level: 78 },
    ],
  },
  {
    id: 'cv',
    label: 'Computer Vision',
    icon: '',
    color: '#ec4899',
    skills: [
      { name: 'Image Segmentation', level: 93 },
      { name: 'Anomaly Localization', level: 85 },
      { name: 'Active Learning', level: 83 },
      { name: 'Remote Sensing Classification', level: 80 },
      { name: 'OpenCV / PIL', level: 88 },
      { name: '3D Volumetric Analysis', level: 78 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Stack',
    icon: '',
    color: '#10b981',
    skills: [
      { name: 'Python / NumPy / Pandas', level: 95 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Linux / AWS EC2', level: 82 },
      { name: 'MySQL / Databases', level: 78 },
      { name: 'R Shiny / Statistical Tools', level: 75 },
      { name: 'C / C++', level: 72 },
    ],
  },
];

const techStack = [
  'PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'NumPy',
  'Pandas', 'Python', 'C++', 'Linux', 'AWS EC2', 'MySQL',
  'R Shiny', 'Git', 'CUDA', 'Keras', 'SciPy', 'Matplotlib', 'Jupyter',
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
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge"><span></span> Technical Skills</span>
          <h2 className="section-title">Expertise &amp; <span className="gradient-text">Capabilities</span></h2>
          <p className="section-subtitle">A deep toolkit spanning medical imaging, deep learning, and large-scale AI research.</p>
        </motion.div>

        <motion.div className="skills-tabs" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          {skillCategories.map((cat) => (
            <button key={cat.id} className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
              style={activeTab === cat.id ? { borderColor: cat.color, color: cat.color, background: `${cat.color}12` } : {}}
              onClick={() => setActiveTab(cat.id)}>
              <span>{cat.icon}</span><span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <motion.div key={activeTab} className="skills-bars glass-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="skills-bars-header">
            <span style={{ color: active.color, fontSize: '1.5rem' }}>{active.icon}</span>
            <div>
              <h3 className="skills-bars-title">{active.label}</h3>
              <p className="skills-bars-subtitle">Proficiency Levels</p>
            </div>
          </div>
          <div className="skill-bars-list">
            {active.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} color={active.color} inView={inView} delay={0.1 + i * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div className="tech-stack" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }}>
          <h3 className="tech-stack-title">Tools &amp; Technologies</h3>
          <div className="tech-pills">
            {techStack.map((tech, i) => (
              <motion.span key={tech} className="tech-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -3 }}>
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