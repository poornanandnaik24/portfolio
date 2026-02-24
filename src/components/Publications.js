import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Publications.css';

const publications = [
  {
    type: 'JOURNAL',
    year: '2024',
    title: 'An Automated Deep Learning Pipeline for Detecting User Errors in Spirometry Test',
    journal: 'Biomedical Signal Processing and Control',
    authors: 'Poornanand, et al.',
    abstract: 'Automated deep learning pipeline for quality assessment and error detection in spirometry tests, enabling reliable pulmonary function test evaluation without the need for expert review at every stage.',
    tags: ['Deep Learning', 'Spirometry', 'Signal Processing', 'Lung Function'],
    doi: '#',
    arxiv: null,
    citations: null,
    status: 'Published',
    color: '#00e5ff',
    if: null,
  },
  {
    type: 'COMMUNICATED',
    year: '2024',
    title: 'Automated Rib Segmentation in Chest X-rays Using ThoraxSegNet: Enhancing Pulmonary Disease Detection and Analysis',
    journal: 'Engineering Research Express',
    authors: 'Poornanand, et al.',
    abstract: 'ThoraxSegNet  a novel deep learning architecture for automated rib segmentation in chest radiographs. Demonstrated improvements in fracture detection, lesion identification, and quantitative anatomical analysis.',
    tags: ['ThoraxSegNet', 'Rib Segmentation', 'Chest X-Ray', 'Pulmonary AI'],
    doi: '#',
    arxiv: null,
    citations: null,
    status: 'Communicated',
    color: '#a855f7',
    if: null,
  },
  {
    type: 'COMMUNICATED',
    year: '2024',
    title: 'A Dual Competitive Mean Teacher Semi-Supervised Learning Framework for Enhanced Rib Segmentation Performance',
    journal: 'Sadhana  Academy Proceedings in Engineering Sciences',
    authors: 'Poornanand, et al.',
    abstract: 'A dual competitive mean teacher framework for semi-supervised rib segmentation that leverages unlabeled data to improve performance in data-scarce medical imaging scenarios.',
    tags: ['Semi-Supervised', 'Mean Teacher', 'Rib Segmentation', 'SSL'],
    doi: '#',
    arxiv: null,
    citations: null,
    status: 'Communicated',
    color: '#ec4899',
    if: null,
  },
  {
    type: 'CONFERENCE',
    year: '2023',
    title: 'Attention Based CRNN Models for Identification of Respiratory Diseases from Lung Sounds',
    journal: '14th ICCCNT  IIT Delhi, 2023',
    authors: 'Poornanand, et al.',
    abstract: 'Attention-based CRNN models for classifying respiratory diseases directly from lung auscultation sounds. Presented at the 14th International Conference on Communications, Computing, Networking and Technologies at IIT Delhi.',
    tags: ['CRNN', 'Attention', 'Lung Sounds', 'Respiratory Disease'],
    doi: '#',
    arxiv: null,
    citations: null,
    status: 'Published',
    color: '#10b981',
    if: null,
  },
  {
    type: 'CONFERENCE',
    year: '2023',
    title: 'Assessment of Asthma BAL Cytokines using Machine Learning Techniques',
    journal: '2nd PCEMS  Nagpur, India, 2023',
    authors: 'Poornanand, et al.',
    abstract: 'Machine learning-based assessment of asthma bronchoalveolar lavage (BAL) cytokines. Presented at the 2nd International Conference on Paradigm Shifts in Communications Embedded Systems, Machine Learning and Signal Processing.',
    tags: ['Machine Learning', 'Asthma', 'BAL Cytokines', 'Medical AI'],
    doi: '#',
    arxiv: null,
    citations: null,
    status: 'Published',
    color: '#f59e0b',
    if: null,
  },
  {
    type: 'CONFERENCE',
    year: '2018',
    title: 'Preserving Data Privacy Against Shoulder Surfing through LCD Polarization and Morphological Operations',
    journal: '3rd IEEE RTEICT-2018',
    authors: 'Poornanand, et al.',
    abstract: 'Novel approach to data privacy using LCD polarization combined with morphological operations to prevent shoulder surfing attacks. Led to the granted Indian Patent IN 423922 for the underlying technology.',
    tags: ['LCD Polarization', 'Data Privacy', 'Morphological Ops', 'Security'],
    doi: '#',
    arxiv: null,
    citations: null,
    status: 'Published',
    color: '#8b5cf6',
    if: null,
  },
];

const stats = [
  { icon: '', value: '6+', label: 'Publications' },
  { icon: '', value: '2', label: 'Journals' },
  { icon: '', value: '4', label: 'Conferences' },
  { icon: '', value: '1', label: 'Granted Patent' },
];

const Publications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="publications" className="section publications-section">
      <div className="container" ref={ref}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge"><span></span> Publications</span>
          <h2 className="section-title">Peer-Reviewed <span className="gradient-text">Research Work</span></h2>
          <p className="section-subtitle">Published in journals and conferences including Biomedical Signal Processing & Control, IIT Delhi ICCCNT, and IEEE RTEICT.</p>
        </motion.div>

        <motion.div className="pub-stats" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
          {stats.map((s, i) => (
            <motion.div key={s.label} className="pub-stat glass-card" initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.1 }}>
              <span className="pub-stat-icon">{s.icon}</span>
              <span className="pub-stat-value gradient-text">{s.value}</span>
              <span className="pub-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="publications-list">
          {publications.map((pub, i) => (
            <motion.div key={pub.title} className="pub-card glass-card"
              style={{ borderLeftColor: pub.color }}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="pub-header">
                <div className="pub-meta">
                  <span className="pub-type" style={{ background: `${pub.color}20`, color: pub.color }}>{pub.type}</span>
                  <span className="pub-year">{pub.year}</span>
                  <span className="pub-status" style={{ color: pub.status === 'Published' ? '#10b981' : '#f59e0b' }}>
                    {pub.status === 'Published' ? ' Published' : ' ' + pub.status}
                  </span>
                </div>
              </div>
              <h3 className="pub-title">{pub.title}</h3>
              <p className="pub-journal" style={{ color: pub.color }}>{pub.journal}</p>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-abstract">{pub.abstract}</p>
              <div className="pub-tags">
                {pub.tags.map(tag => <span key={tag} className="pub-tag">{tag}</span>)}
              </div>
              {pub.doi && pub.doi !== '#' && (
                <div className="pub-actions">
                  <a href={pub.doi} target="_blank" rel="noreferrer" className="pub-btn"> DOI Link</a>
                  {pub.arxiv && <a href={pub.arxiv} target="_blank" rel="noreferrer" className="pub-btn"> arXiv</a>}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div className="pub-cta" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}>
          <a href="https://scholar.google.com/" target="_blank" rel="noreferrer" className="btn-primary">
            View All on Google Scholar 
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;