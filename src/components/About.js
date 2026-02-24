import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const timelineData = [
  {
    year: 'Aug 2020 - Present',
    title: 'PhD Research Scholar',
    org: 'NIT Karnataka Surathkal, India',
    desc: 'Conducting PhD research in Computer Science & Engineering. Focus areas: rib segmentation in chest X-rays, TB detection via rib suppression, and head & neck tumour segmentation using CNN/transformer-based pipelines.',
    icon: '',
    color: '#00e5ff',
  },
  {
    year: 'Aug 2018 - Oct 2019',
    title: 'Assistant Professor',
    org: 'Parul Institute of Engineering and Technology, Vadodara',
    desc: 'Taught core CS subjects including Data Structures, Algorithms, and DBMS. Served as research & project coordinator for AI/ML projects. Recognized as Best Faculty in CS & Engineering (Prof. R.H. Pandya Award 2019).',
    icon: '',
    color: '#a855f7',
  },
  {
    year: 'Aug 2016 - Jun 2018',
    title: 'M.Tech  Computer Science & Engineering',
    org: 'R.V. College of Engineering, Bengaluru',
    desc: 'Master of Technology in Computer Science and Engineering. Specialized in machine learning and AI systems with a strong focus on applied research and algorithm design.',
    icon: '',
    color: '#ec4899',
  },
  {
    year: 'Aug 2009 - Jun 2013',
    title: 'B.E.  Computer Science & Engineering',
    org: 'Srinivas Institute of Technology, Mangalore',
    desc: 'Bachelor of Engineering in Computer Science and Engineering. Built foundational knowledge in programming, computer architecture, and software development.',
    icon: '',
    color: '#10b981',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' }
  }),
};

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section about-section">
      <div className="container" ref={ref}>
        <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-badge">
            <span className="badge-icon"></span> About Me
          </span>
          <h2 className="section-title">
            Where Biology Meets<br />
            <span className="gradient-text">Artificial Intelligence</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          <motion.div className="about-bio" initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="glass-card bio-card">
              <div className="bio-avatar">
                <div className="avatar-ring" />
                <div className="avatar-inner">
                  <svg viewBox="0 0 120 120" fill="none">
                    <defs>
                      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00e5ff"/>
                        <stop offset="100%" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="45" r="22" fill="url(#avatarGrad)" opacity="0.9"/>
                    <path d="M20 110 Q20 80 60 80 Q100 80 100 110" fill="url(#avatarGrad)" opacity="0.7"/>
                    <circle cx="60" cy="45" r="22" stroke="rgba(0,229,255,0.4)" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>

              <h3 className="bio-name">Poornanand</h3>
              <p className="bio-role gradient-text">PhD Scholar  Machine Learning &amp; Medical Imaging</p>
              <div className="bio-location"><span></span> NIT Karnataka, Surathkal, India</div>

              <p className="bio-text">
                PhD Research Scholar at <strong>NIT Karnataka Surathkal</strong> with a M.Tech from
                R.V. College of Engineering, Bengaluru. Over <strong>5 years of R&amp;D experience</strong> in
                Machine Learning and AI, specializing in <strong>Computer Vision</strong> and{' '}
                <strong>Medical Imaging</strong>.
              </p>
              <p className="bio-text">
                Holder of <strong>Indian Patent IN 423922</strong> for anti-shoulder-surfing technology.
                GATE qualified twice  AIR 3499 [96.77 percentile, 2016] and AIR 12686 [87.19 percentile, 2020].
              </p>

              <div className="bio-interests">
                {['Medical Imaging', 'Rib Segmentation', 'Deep Learning', 'Computer Vision', 'NLP', 'Active Learning'].map(tag => (
                  <span key={tag} className="interest-tag">{tag}</span>
                ))}
              </div>

              <div className="bio-links">
                <a href="mailto:poornanandnaik24@gmail.com" className="bio-link">
                  <span></span> poornanandnaik24@gmail.com
                </a>
                <a href={process.env.PUBLIC_URL + '/Resume.pdf'} className="bio-link bio-link-resume" target="_blank" rel="noreferrer" download="Poornanand_Resume.pdf">
                  <span></span> Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div className="about-timeline" initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}>
            <h3 className="timeline-heading">My Journey</h3>
            <div className="timeline">
              {timelineData.map((item, i) => (
                <motion.div key={item.title} className="timeline-item" custom={i} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
                  <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}60` }}>
                    <span>{item.icon}</span>
                  </div>
                  <div className="timeline-content glass-card">
                    <span className="timeline-year" style={{ color: item.color }}>{item.year}</span>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-org">{item.org}</p>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
              <div className="timeline-line" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;