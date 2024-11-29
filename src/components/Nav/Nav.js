import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleScroll = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <a href="#home" onClick={() => handleScroll('#home')} className={activeNav === '#home' ? 'active' : ''}><span>Home</span></a>
      <a href="#services" onClick={() => handleScroll('#services')} className={activeNav === '#services' ? 'active' : ''}><span>Service</span></a>
      <a href="#experiences" onClick={() => handleScroll('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><span>Experiences</span></a>
      <a href="#hireMe" id='navHead' onClick={() => handleScroll('#hireMe')} className={activeNav === '#hireMe' ? 'active' : '' }><span><b>SATYA DINESH</b></span></a>        
      <a href="#portfolio" onClick={() => handleScroll('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><span>Project</span></a>
      <a href="#testimonials" onClick={() => handleScroll('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><span>Testimonials</span></a>
      <a href="#contact" onClick={() => handleScroll('#contact')} className={activeNav === '#contact' ? 'active' : ''}><span>Contact</span></a>
    </nav>
  );
};

export default Nav;
