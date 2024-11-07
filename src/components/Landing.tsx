import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCode, FiCpu, FiBox, FiTerminal } from 'react-icons/fi';
import '../styles/Landing.css';

const Landing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="landing-container">
      <header className="top-bar">
        <div className="logo-container">
          <h1>MC Agent Lab</h1>
        </div>
        <div className="nav-links">
          <a href="#experiments">Experiments</a>
          <a href="#about">About</a>
          <a href="https://github.com/madlykeanu" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            Minecraft Agent Experiments <span className="hero-emoji">🤖</span>
          </h1>
          <p className="hero-tagline">
            Exploring AI Possibilities in Minecraft
          </p>
          <p className="hero-description">
            Discover a collection of experiments using Minecraft's agent API to create intelligent behaviors, automated systems, and creative solutions.
          </p>
          <div className="cta-button-wrapper">
            <a href="#experiments" className="cta-button">
              View Experiments <FiArrowRight />
            </a>
          </div>
        </motion.div>
      </section>

      <section className="features-section" id="experiments">
        <h2>Featured Experiments</h2>
        <div className="features-container">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3><FiCode /> Pathfinding Agent</h3>
            <p>
              An intelligent agent that can navigate complex terrain and find optimal paths to targets.
            </p>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3><FiCpu /> Resource Collector</h3>
            <p>
              Automated resource gathering system with smart inventory management and efficient collection strategies.
            </p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3><FiBox /> Building Assistant</h3>
            <p>
              Agent that can help construct predefined structures and follow building patterns.
            </p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3><FiTerminal /> Command Interface</h3>
            <p>
              Advanced command system for controlling and programming agent behaviors in real-time.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>Technical Overview</h2>
        <div className="how-it-works-steps">
          <div className="step">
            <div className="step-content">
              <h3>Agent Architecture</h3>
              <p>
                Learn about the underlying architecture that powers these Minecraft agents,
                including decision-making systems and behavior trees.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-content">
              <h3>Implementation Details</h3>
              <p>
                Explore the technical implementation, including code samples and 
                explanations of key algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p>© {new Date().getFullYear()} MC Agent Lab. Created by [Your Name]</p>
        <div className="social-links">
          <a href="https://github.com/madlykeanu" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Landing; 