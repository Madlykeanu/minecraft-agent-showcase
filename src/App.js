import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <Landing />
    </Router>
  );
}

export default App;
