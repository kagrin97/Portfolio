import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

import HeaderNav from './components/HeaderNav';

function App() {
  const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );

  return (
    <Router>
      <HeaderNav />
      <main>{routes}</main>
    </Router>
  );
}

export default App;
