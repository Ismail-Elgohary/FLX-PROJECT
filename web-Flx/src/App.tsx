import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Placeholder routes for future implementation */}
        <Route path="/login" element={<div className="p-10 text-center">Login Page (Coming Soon)</div>} />
        <Route path="/register" element={<div className="p-10 text-center">Register Page (Coming Soon)</div>} />
        <Route path="/products/:id" element={<div className="p-10 text-center">Product Details (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
