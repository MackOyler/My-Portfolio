import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiFillCodeSandboxCircle } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('/');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Redirect back to the main page if the element doesn't exist
      window.location.href = '/';
    }
    setActiveNav(sectionId);
  };

  return (
    <nav>
      <div onClick={() => scrollToSection('home')} className={activeNav === 'home' ? 'active' : ''}><AiOutlineHome/></div>
      <div onClick={() => scrollToSection('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser/></div>
      <div onClick={() => scrollToSection('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook/></div>
      <div onClick={() => scrollToSection('services')} className={activeNav === 'services' ? 'active' : ''}><RiServiceLine/></div>
      <div onClick={() => scrollToSection('contact')} className={activeNav === 'contact' ? 'active' : ''}><BiMessageSquareDetail/></div>
      <Link to="/hwproj" onClick={() => setActiveNav('/hwproj')} className={activeNav === '/hwproj' ? 'active' : ''}><AiFillCodeSandboxCircle/></Link>
    </nav>
  );
};

export default Nav;
