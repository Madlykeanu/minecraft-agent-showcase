import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCode, FiCpu, FiBox, FiTerminal, FiYoutube, FiArrowUp } from 'react-icons/fi';
import '../styles/Landing.css';
import stoneTexture from '../images/minecraft-stone.jpg';
import individualRun from '../images/benchmark-run1.png';
import benchmarkSummary from '../images/benchmark-run-summary.png';

const Landing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="landing-container">
      <header className="top-bar">
        <div className="logo-container">
          <h1 
            className="minecraft-logo" 
            style={{ 
              backgroundImage: `url(${stoneTexture})`,
              backgroundSize: '120px 120px',
              backgroundRepeat: 'repeat'
            }}
          >
            Madly's MC Agent Lab
          </h1>
        </div>
        <div className="nav-links">
          <div className="youtube-pointer">
            <span>unrelated but sub to my silly youtube channel</span>
            <FiArrowUp size={14} />
          </div>
          <a 
            href="https://youtube.com/@madlykeanu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="youtube-button"
          >
            <FiYoutube size={20} />
            YouTube
            <span className="subscriber-count">
              127K
            </span>
          </a>
          <a href="#experiments">Experiments</a>
          <a href="https://github.com/madlykeanu" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <div className="subtitle-container">
        <p className="subtitle-text">some AI agent stuff i've been working on that i think is pretty cool :D</p>
      </div>

      <section className="demo-video-section">
        <div className="video-grid">
          <div className="video-container">
            <h3 className="video-title">MC-agent-1</h3>
            <video 
              className="demo-video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/mc-agent-1-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <a 
              href="https://youtu.be/KV7b9kYWZeE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-fallback-link"
            >
              Alternate link if video doesn't load
            </a>
            <p className="demo-caption">
              MC-agent-1 gathering wood using self-generated Mineflayer code. 
              The agent receives a natural language command and then dynamically writes and executes the necessary code to complete that specific task.
            </p>
          </div>

          <div className="video-container">
            <h3 className="video-title">MC-Agent</h3>
            <video 
              className="demo-video"
              controls
              playsInline
              preload="none"
            >
              <source src="/videos/mc-agent-benchmark.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <a 
              href="https://youtu.be/kITiuxO1aEA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="video-fallback-link"
            >
              Alternate link if video doesn't load
            </a>
            <p className="demo-caption">
              MC-Agent completing "stone pickaxe" scenario from scratch in under 80 seconds using gpt-4o-mini. 
              The agent autonomously gathers wood, crafts tools, mines stone, and crafts the final pickaxe.
            </p>
          </div>
        </div>
      </section>

      <section className="features-section" id="experiments">
        <h2>Featured Experiments</h2>
        <div className="features-container">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="feature-card-header">
              <FiCpu size={24} />
              <h3>MC-Agent</h3>
            </div>
            <p>
              A heavily modified fork of Mindcraft with an integrated benchmarking framework 
              for evaluating agent performance. 
            </p>
            <p>
              this is pretty much my main passion project as of right now as i work on it every day.
            </p>

            <p>
              
            </p>

            <div className="feature-sections">
              <div className="feature-section">
                <h4>Performance Metrics</h4>
                <p className="benchmark-context">
                  Results from the stone_pickaxe benchmark scenario(using gpt-4o-mini):
                </p>
                <div className="comparison-grid">
                  <div className="metric">
                    <span className="metric-label">Speed</span>
                    <div className="comparison">
                      <div className="old">Mindcraft: 140-260s</div>
                      <div className="new">MC-Agent: 70-105s</div>
                    </div>
                  </div>
                  <div className="metric">
                    <span className="metric-label">API Efficiency</span>
                    <div className="comparison">
                      <div className="old">Mindcraft: 22-34 calls</div>
                      <div className="new">MC-Agent: 9-14 calls</div>
                    </div>
                  </div>
                </div>
                <p className="note">* 9 API calls represents perfect AI decision-making in this specific scenario</p>
              </div>

              <div className="feature-section">
                <h4>Framework Features</h4>
                <ul>
                  <li>Can repeatedly test performance in specific scenarios</li>
                  <li>Comprehensive performance tracking</li>
                  <li>Efficiency metrics and breakdown</li>
                  <li>Experimental task decomposition system</li>
                </ul>
              </div>

              <div className="feature-section">
                <h4>Benchmarking system</h4>
                <p className="benchmark-description">
                  The main purpose of the benchmarking system is mainly to make identifying areas for improvement easy by providing detailed metrics of agent performance.
                </p>
                <p className="benchmark-description">
                  It works by creating a fresh minecraft server, giving the agent a goal, waiting for it to complete the goal, then repeating until the specified amount of runs is completed, after which a final summary is created.
                </p>
                <div className="benchmark-grid">
                  <div className="benchmark-item">
                    <img 
                      src={individualRun}
                      alt="Individual Benchmark Run" 
                      className="benchmark-image"
                    />
                    <p className="benchmark-caption">
                      Individual run completing stone pickaxe scenario in 80.05s with optimal 9 API calls
                    </p>
                  </div>
                  <div className="benchmark-item">
                    <img 
                      src={benchmarkSummary}
                      alt="Benchmark Summary" 
                      className="benchmark-image"
                    />
                    <p className="benchmark-caption">
                      Summary of 22 benchmark runs showing 81.8% success rate and 98.08s average completion time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="feature-card-header">
              <FiCode size={24} />
              <h3>MC-Agent-1</h3>
            </div>
            <p>
              An experimental agent developed in a week that dynamically writes and executes 
              its own code to complete specific Minecraft tasks.
            </p>
            <p>
              not really a full agent because of its inability to handle complex tasks. (could maybe be solved with task decomposition framework)
            </p>
            
            <div className="feature-sections">
              <div className="feature-section">
                <h4>Key Capabilities</h4>
                <ul>
                  <li>Dynamic code generation using GPT-4o or Claude 3-5 sonnet</li>
                  <li>Real-time execution and monitoring</li>
                  <li>Automatic error handling and code regeneration</li>
                  <li>Code optimized to the specific task and situation</li>
                </ul>
              </div>

              
            </div>
          </motion.div>
        </div>
      </section>

      <section className="other-projects-section">
        <h2>Other Programming Projects</h2>
        <div className="other-projects-grid">
          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="feature-card-header">
              <FiTerminal size={24} />
              <h3>Project Alpha</h3>
            </div>
            <p>
              A sophisticated data processing pipeline that handles real-time analytics 
              and visualization. Built with Python and React, it processes millions of 
              data points efficiently.
            </p>
          </motion.div>

          <motion.div 
            className="feature-card"
            whileHover={{ scale: 1.02 }}
          >
            <div className="feature-card-header">
              <FiBox size={24} />
              <h3>Project Beta</h3>
            </div>
            <p>
              An automated testing framework that integrates with CI/CD pipelines to 
              ensure code quality. Features include parallel test execution and detailed 
              reporting capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="footer-section">
        <p>{new Date().getFullYear()} MC Agent Lab. Created with love by Madlykeanu</p>
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