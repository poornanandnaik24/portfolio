import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Research.css';

const researchAreas = [
  {
    icon: '',
    title: 'Rib Segmentation in Chest X-Rays',
    metric: 'ThoraxSegNet',
    metricLabel: 'Custom Architecture',
    desc: 'Developed deep learning-based rib segmentation (ThoraxSegNet) to improve diagnostic accuracy in thoracic imaging. Enhances detection of fractures, pathologies, and lesions while supporting surgical planning and quantitative anatomical analysis.',
    tags: ['U-Net', 'Chest X-Ray', 'Segmentation', 'ThoraxSegNet'],
    color: '#00e5ff',
    status: 'Communicated  Engineering Research Express',
  },
  {
    icon: '',
    title: 'TB Detection via Rib Suppression',
    metric: '~Improved',
    metricLabel: 'Apical Visibility',
    desc: 'Developed an algorithm combining rib suppression and anomaly localization to improve visualization of apical lung regions. Reduces bony structure occlusion, enabling more robust detection of TB-related abnormalities in chest X-rays.',
    tags: ['Rib Suppression', 'Anomaly Localization', 'TB Detection', 'X-Ray'],
    color: '#a855f7',
    status: 'Active Research  NIT Karnataka',
  },
  {
    icon: '',
    title: 'Head & Neck Tumour Segmentation',
    metric: 'GTV-1',
    metricLabel: 'Tumour Delineation',
    desc: 'Designed and validated an advanced segmentation pipeline (CNN/transformer-based) for precise delineation of GTV-1 in head and neck tumours. Enables early detection, longitudinal growth monitoring, and radiotherapy response assessment.',
    tags: ['Transformer', 'CNN', 'Radiotherapy', 'Tumour GTV'],
    color: '#ec4899',
    status: 'Active Research  NIT Karnataka',
  },
  {
    icon: '',
    title: 'Spirometry Error Detection',
    metric: 'Automated',
    metricLabel: 'Deep Learning Pipeline',
    desc: 'Automated deep learning pipeline for detecting user errors in spirometry tests. Published in Biomedical Signal Processing and Control (2024), enabling reliable pulmonary function test quality checks without expert review.',
    tags: ['Signal Processing', 'Spirometry', 'Deep Learning', 'Lung Function'],
    color: '#10b981',
    status: 'Published  BSPC 2024',
  },
  {
    icon: '',
    title: 'Respiratory Disease from Lung Sounds',
    metric: 'CRNN',
    metricLabel: 'Attention-Based Model',
    desc: 'Attention-based CRNN models for identification of respiratory diseases from lung sounds. Presented at ICCCNT IIT Delhi 2023 and PCEMS 2023. Classifies asthma BAL cytokines using machine learning techniques.',
    tags: ['CRNN', 'Attention', 'Lung Sounds', 'Asthma'],
    color: '#f59e0b',
    status: 'Published  ICCCNT IIT Delhi 2023',
  },
  {
    icon: '',
    title: 'Remote Sensing Image Classification',
    metric: 'Active Learning',
    metricLabel: 'Reduced Labeling Effort',
    desc: 'Implemented image classification and feature identification on satellite imagery using active learning and supervised algorithms. Demonstrated superior performance of active learning in reducing labeling effort while maintaining classification accuracy.',
    tags: ['Active Learning', 'Satellite Imagery', 'Classification', 'Remote Sensing'],
    color: '#8b5cf6',
    status: 'Research Project',
  },
];

const Research = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="research" className="section research-section">
      <div className="container" ref={ref}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge"><span></span> Research Areas</span>
          <h2 className="section-title">Pioneering <span className="gradient-text">Medical AI</span> Research</h2>
          <p className="section-subtitle">Multidisciplinary PhD research spanning thoracic imaging, pulmonology, oncology, and privacy-preserving AI at NIT Karnataka.</p>
        </motion.div>

        <div className="research-grid">
          {researchAreas.map((area, i) => (
            <motion.div key={area.title} className="research-card glass-card"
              style={{ '--r-color': area.color }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}>
              <div className="rc-top">
                <div className="rc-icon" style={{ background: `${area.color}18`, border: `1px solid ${area.color}30` }}>
                  <span>{area.icon}</span>
                </div>
                <div className="rc-metric">
                  <span className="rc-value" style={{ color: area.color }}>{area.metric}</span>
                  <span className="rc-metric-label">{area.metricLabel}</span>
                </div>
              </div>
              <h3 className="rc-title">{area.title}</h3>
              <p className="rc-desc">{area.desc}</p>
              <p className="rc-status" style={{ color: area.color, fontSize: '0.75rem', fontStyle: 'italic', marginTop: '0.5rem' }}>{area.status}</p>
              <div className="rc-tags">
                {area.tags.map(tag => (
                  <span key={tag} className="rc-tag" style={{ borderColor: `${area.color}40`, color: area.color }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;