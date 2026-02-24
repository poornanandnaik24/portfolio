import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const projects = [
  {
    icon: '',
    title: 'ThoraxSegNet',
    subtitle: 'Automated Rib Segmentation in Chest X-Rays',
    desc: 'Implemented deep learning-based rib segmentation to improve diagnostic accuracy in thoracic imaging. Enhances detection of fractures, pathologies, and lesions. Supports surgical planning and quantitative analysis of anatomical changes.',
    metrics: [{ label: 'Task', value: 'Segmentation' }, { label: 'Modality', value: 'Chest X-Ray' }],
    tags: ['PyTorch', 'U-Net', 'Chest X-Ray', 'DICOM'],
    github: 'https://github.com/poornanandnaik24',
    demo: null,
    category: 'segmentation',
    featured: true,
  },
  {
    icon: '',
    title: 'TB-RibSuppress',
    subtitle: 'Tuberculosis Detection via Rib Suppression',
    desc: 'Developed an algorithm combining rib suppression and anomaly localization to improve visualization of apical lung regions. Reduces bony occlusion from ribs and clavicles, enabling robust detection of TB-related abnormalities.',
    metrics: [{ label: 'Target', value: 'TB Detection' }, { label: 'Region', value: 'Apical Lung' }],
    tags: ['PyTorch', 'Rib Suppression', 'Anomaly Detection', 'X-Ray'],
    github: 'https://github.com/poornanandnaik24',
    demo: null,
    category: 'detection',
    featured: true,
  },
  {
    icon: '',
    title: 'HNT-SegPipeline',
    subtitle: 'Head & Neck Tumour Segmentation',
    desc: 'Designed and validated an advanced CNN/transformer-based segmentation pipeline for precise delineation of GTV-1 in head and neck tumours. Enables early tumour detection, longitudinal growth monitoring, and radiotherapy response assessment.',
    metrics: [{ label: 'Target', value: 'GTV-1 Tumour' }, { label: 'Model', value: 'CNN+Transformer' }],
    tags: ['Transformer', 'CNN', 'Radiotherapy', 'Segmentation'],
    github: 'https://github.com/poornanandnaik24',
    demo: null,
    category: 'segmentation',
    featured: true,
  },
  {
    icon: '',
    title: 'Anti-Spy LCD Display',
    subtitle: 'Granted Patent  Shoulder Surfing Prevention',
    desc: 'Modified optical properties of LCDs and integrated 3D filtering techniques to develop anti-spy display systems for secure banking. Granted Indian Patent IN 423922 (March 2023). Prevents shoulder-surfing through hardware-level view angle restriction.',
    metrics: [{ label: 'Patent', value: 'IN 423922' }, { label: 'Granted', value: 'Mar 2023' }],
    tags: ['LCD Optics', 'Security', 'Patent', 'Banking Tech'],
    github: 'https://github.com/poornanandnaik24',
    demo: null,
    category: 'other',
    featured: true,
  },
  {
    icon: '',
    title: 'Smart Water Leak Detection',
    subtitle: 'Tirupati Municipal Corporation Project',
    desc: 'Collaborated with Tirupati Municipal Corporation to develop a smart water leak detection system using ML and mathematical modeling. Deployed an interactive R Shiny application on AWS Cloud for real-time monitoring and predictive analytics.',
    metrics: [{ label: 'Platform', value: 'AWS + R Shiny' }, { label: 'Client', value: 'Tirupati Corp' }],
    tags: ['Machine Learning', 'R Shiny', 'AWS', 'IoT'],
    github: 'https://github.com/poornanandnaik24',
    demo: null,
    category: 'other',
    featured: false,
  },
  {
    icon: '',
    title: 'Remote Sensing Classifier',
    subtitle: 'Active Learning for Satellite Imagery',
    desc: 'Implemented image classification and feature identification on satellite imagery using active learning and supervised algorithms. Demonstrated superior performance in reducing labeling effort while maintaining classification accuracy through comparative analysis.',
    metrics: [{ label: 'Method', value: 'Active Learning' }, { label: 'Data', value: 'Satellite Imagery' }],
    tags: ['Active Learning', 'Python', 'Scikit-learn', 'Remote Sensing'],
    github: 'https://github.com/poornanandnaik24',
    demo: null,
    category: 'detection',
    featured: false,
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'segmentation', label: 'Segmentation' },
  { id: 'detection', label: 'Detection' },
  { id: 'other', label: 'Other' },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container" ref={ref}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge"><span></span> Projects</span>
          <h2 className="section-title">Clinical AI <span className="gradient-text">Solutions Built</span></h2>
          <p className="section-subtitle">Hands-on implementations bridging cutting-edge deep learning research with real-world medical and societal challenges.</p>
        </motion.div>

        <motion.div className="filter-bar" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          {categories.map(cat => (
            <button key={cat.id} className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`} onClick={() => setActiveFilter(cat.id)}>
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div key={activeFilter} className="projects-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {filtered.map((project, i) => (
              <motion.div key={project.title} className="project-card glass-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}>
                {project.featured && <div className="featured-badge"> Featured</div>}
                <div className="project-links-top">
                  <a href={project.github} target="_blank" rel="noreferrer" className="proj-icon-link" title="GitHub">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 013.01-.4c1.02 0 2.05.13 3.01.4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="proj-icon-link" title="Demo">
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
                <div className="project-icon-wrap"><span>{project.icon}</span></div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.desc}</p>
                <div className="project-metrics">
                  {project.metrics.map(m => (
                    <div key={m.label} className="proj-metric">
                      <span className="proj-metric-val">{m.value}</span>
                      <span className="proj-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="project-tags">
                  {project.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;