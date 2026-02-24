import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      <div className="grid-bg" />

      {loading ? (
        <div className="loader-screen">
          <div className="loader-content">
            <div className="loader-rings">
              <div className="loader-ring ring-1" />
              <div className="loader-ring ring-2" />
              <div className="loader-ring ring-3" />
            </div>
            <div className="loader-icon">
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="35" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M20 40 Q30 25 40 40 Q50 55 60 40" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="40" cy="40" r="6" fill="url(#grad1)" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="loader-text">Initializing<span className="loader-dots">...</span></p>
          </div>
        </div>
      ) : (
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Research />
            <Projects />
            <Publications />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
