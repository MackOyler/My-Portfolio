import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Mack Oyler</h1>
        <h2 className="tagline">Code Enthusiast. Solution Creator. Innovation Explorer.</h2>
        <h3 className="subtagline">
          Designing clean solutions, transforming ideas into reality, and redefining the art of software development.
        </h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Mack Oyler" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;