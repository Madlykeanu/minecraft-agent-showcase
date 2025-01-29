import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import Blog from './components/Blog.tsx';
import LLMsRevolutionizingGameAI from './components/blog-posts/LLMsRevolutionizingGameAI.tsx';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/llms-revolutionizing-game-ai" element={<LLMsRevolutionizingGameAI />} />
      </Routes>
    </Router>
  );
}

export default App;
