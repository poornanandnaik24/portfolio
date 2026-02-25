import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const TYPED_STRINGS = [
  'PhD Research Scholar',
  'Machine Learning Researcher',
  'Computer Vision Specialist',
  'Medical Imaging Engineer',
  'Patent Holder',
];

const BrainSVG = () => (
  <svg className="hero-brain-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brainGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="brainGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
      </linearGradient>
      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
      </radialGradient>
      <filter id="brainGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <circle cx="250" cy="250" r="200" fill="url(#glowGrad)" />
    <circle cx="250" cy="250" r="220" stroke="rgba(0,229,255,0.08)" strokeWidth="1" strokeDasharray="5 8" />
    <circle cx="250" cy="250" r="185" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="3 6" />
    <path d="M250 120 C220 115 185 125 165 145 C140 168 132 198 135 220 C138 242 148 258 145 278 C142 298 130 310 132 328 C135 348 155 368 175 375 C195 382 220 378 235 372 L250 370" stroke="url(#brainGrad1)" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#brainGlow)" />
    <path d="M250 120 C280 115 315 125 335 145 C360 168 368 198 365 220 C362 242 352 258 355 278 C358 298 370 310 368 328 C365 348 345 368 325 375 C305 382 280 378 265 372 L250 370" stroke="url(#brainGrad2)" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#brainGlow)" />
    <path d="M250 120 C248 180 249 250 250 370" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" fill="none" />
    <path d="M175 175 C190 160 210 168 218 182 C226 196 215 210 200 208" stroke="url(#brainGrad1)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M155 230 C172 218 195 224 202 240 C209 256 198 268 182 265" stroke="url(#brainGrad1)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M148 290 C167 276 190 282 196 300 C202 318 188 330 172 326" stroke="url(#brainGrad1)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M175 340 C192 328 212 335 218 352" stroke="url(#brainGrad1)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    <path d="M325 175 C310 160 290 168 282 182 C274 196 285 210 300 208" stroke="url(#brainGrad2)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M345 230 C328 218 305 224 298 240 C291 256 302 268 318 265" stroke="url(#brainGrad2)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
    <path d="M352 290 C333 276 310 282 304 300 C298 318 312 330 328 326" stroke="url(#brainGrad2)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    <path d="M325 340 C308 328 288 335 282 352" stroke="url(#brainGrad2)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    {[[200, 165], [172, 238], [162, 312], [185, 358], [300, 165], [328, 238], [338, 312], [315, 358], [250, 150], [250, 245], [250, 340]].map(([cx, cy], i) => (
      <g key={i}>
        <circle cx={cx} cy={cy} r="5" fill="url(#brainGrad1)" opacity="0.9">
          <animate attributeName="opacity" values="0.9;0.4;0.9" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
        <circle cx={cx} cy={cy} r="10" fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="1">
          <animate attributeName="r" values="10;18;10" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      </g>
    ))}
    {["M200 165 L250 150", "M300 165 L250 150", "M200 165 L172 238", "M300 165 L328 238", "M172 238 L250 245", "M328 238 L250 245", "M172 238 L162 312", "M328 238 L338 312", "M162 312 L250 340", "M338 312 L250 340", "M162 312 L185 358", "M338 312 L315 358", "M250 245 L250 340"].map((d, i) => (
      <path key={i} d={d} stroke="url(#brainGrad1)" strokeWidth="1" opacity="0.3" strokeDasharray="4 4">
        <animate attributeName="stroke-dashoffset" values="0;-16" dur={`${1.5 + i * 0.2}s`} repeatCount="indefinite" />
      </path>
    ))}
    {["M200 165 L172 238", "M300 165 L328 238", "M172 238 L162 312"].map((d, i) => (
      <circle key={`p${i}`} r="3" fill="#00e5ff">
        <animateMotion dur={`${2 + i * 0.5}s`} repeatCount="indefinite" path={d} />
      </circle>
    ))}
    <ellipse cx="250" cy="250" rx="60" ry="80" stroke="rgba(0,229,255,0.12)" strokeWidth="1" strokeDasharray="3 5" />
    <ellipse cx="250" cy="250" rx="90" ry="120" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="2 7" />
  </svg>
);

const Hero = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    let current = 0;
    let charIndex = 0;
    let isDeleting = false;
    const el = typedRef.current;
    if (!el) return;
    const type = () => {
      const text = TYPED_STRINGS[current];
      if (!isDeleting) {
        el.textContent = text.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === text.length) {
          isDeleting = true;
          typedInstance.current = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = text.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          current = (current + 1) % TYPED_STRINGS.length;
        }
      }
      typedInstance.current = setTimeout(type, isDeleting ? 50 : 80);
    };
    typedInstance.current = setTimeout(type, 800);
    return () => clearTimeout(typedInstance.current);
  }, []);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };

  return (
    <section id="hero" className="hero">
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{ '--delay': `${i * 0.4}s`, '--x': `${Math.random() * 100}%`, '--dur': `${6 + Math.random() * 6}s`, '--size': `${2 + Math.random() * 4}px` }} />
        ))}
      </div>

      <div className="container hero-container">
        <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-dot" />
            PhD Scholar  NIT Karnataka Surathkal
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Decoding Medicine<br />
            <span className="gradient-text">Through AI Vision</span>
          </motion.h1>

          <motion.p className="hero-typed-line" variants={itemVariants}>
            <span className="typed-label">I am a </span>
            <span className="typed-text" ref={typedRef} />
            <span className="typed-cursor">|</span>
          </motion.p>

          <motion.p className="hero-desc" variants={itemVariants}>
            PhD researcher at <strong>NIT Karnataka</strong> specializing in{' '}
            <strong>Medical Imaging</strong> and <strong>Deep Learning</strong>. Building AI systems
            for rib segmentation, TB detection, and tumour delineation  with a granted patent and
            GATE-qualified credentials.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            {[
              { value: '5+', label: 'Years Research' },
              { value: '6+', label: 'Publications' },
              { value: '1', label: 'Granted Patent' },
              { value: '2x', label: 'GATE Qualified' },
            ].map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <button className="btn-primary" onClick={scrollToAbout}>
              <span>Explore My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="btn-outline" onClick={() => window.dispatchEvent(new CustomEvent('openResume'))}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              View Resume
            </button>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            {[
              { href: 'https://github.com/poornanandnaik24', icon: 'GH', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/poornanandnaik24', icon: 'LI', label: 'LinkedIn' },
              { href: 'https://scholar.google.com/citations?user=c16Cx-kAAAAJ&hl=en', icon: 'GS', label: 'Scholar' },
              { href: 'mailto:poornanandnaik24@gmail.com', icon: 'ML', label: 'Email' },
            ].map((s) => (
              <a key={s.label} href={s.href} className="social-pill" target="_blank" rel="noreferrer" title={s.label}>
                <span className="social-icon">{s.icon}</span>
                <span>{s.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.85, x: 60 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}>
          <div className="brain-wrapper">
            <div className="brain-glow-outer" />
            <div className="brain-glow-inner" />
            <BrainSVG />
            {[
              { label: 'PyTorch', icon: '', pos: 'top-left' },
              { label: 'CNN', icon: '', pos: 'top-right' },
              { label: 'DICOM', icon: '', pos: 'mid-left' },
              { label: 'NIT-K', icon: '', pos: 'bottom-right' },
            ].map((badge) => (
              <motion.div key={badge.label} className={`float-badge badge-${badge.pos}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}>
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} onClick={scrollToAbout}>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;