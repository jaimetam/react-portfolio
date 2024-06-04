
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './App.css'; // Import your global styles if you have any

function App() {
  return (
    <div className="app-container"> {/* Add a container for styling */}
      <Header />
      <main> 
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* Add a 404 route for handling invalid URLs */}
          <Route path="*" element={<div>Page Not Found</div>} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
