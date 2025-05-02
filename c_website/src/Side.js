import React, { useState } from 'react';
import { NavLink, Route, Routes, useLocation} from "react-router-dom";
import About from "./About.js";
import Blog from "./Blog.js";
import Project from "./Project.js";
import Contact from "./Contact.js";

import profilePic from './suad2025.jpg';
import aboutPic from './aboutPic.jpg';
import "./Side.css";
import Home from './Home'; 
import CV from './CV';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 
  return (
    <div className="container">
   <header className="header">
   <div className="header-inner">
    
  <div className="top-row">
    <div className="profile-info">
      <h2>Suad Ali Hersi</h2>
      <h5>AI Problem Solver</h5>
    </div>

    {/* Hamburger menu */}
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
      ☰
    </button>
  </div>

 
  <div className="social-icons mobile-only">
    <a href="https://x.com/suad_ali473" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/in/suad-hersi9/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.instagram.com/suad_ah9/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>

  <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
    <NavLink to="/cv" onClick={() => setMenuOpen(false)}>CV</NavLink>
    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
  </nav>

  {/* Desktop-only social icons (at bottom) */}
  <div className="social-icons desktop-only">
    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://www.instagram.com/suad_ah9/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
  </div>
  </div>
</header>


      {/* Main content area */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />


          {/* Add more routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default Sidebar;
