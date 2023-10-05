import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Mack Oyler</h1>
      <h5 className="text-light">Former Accountant Turned Software Developer</h5>
      <h6>Avid reader. Gamer. Writer. Enjoyer of sports.</h6>
      <CTA />
      <HeaderSocials />


      <div className='me'>
        <img src={ME} alt="Mack Oyler" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      </header>
  )
}

export default Header