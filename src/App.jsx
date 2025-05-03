import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ImageDetails from './ImageDetails';
import React from 'react'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image/:id" element={<ImageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

