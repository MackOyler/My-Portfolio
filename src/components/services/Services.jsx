import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className='container services__container'>
      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Full-Stack</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Front-End</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Back-End</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Single Page Static Design</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Interactive and Responsive Design</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Styling and Desining</p>
          </li>
          </ul>
      </article>
      {/* END OF WEB DEV */}
      <article className="service">
        <div className="service__head">
          <h3> Site Creation </h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Business</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Blog</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Portfolio</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Nonprofit / Orgs </p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Ecommerce</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Applications</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Entertainment</p>
          </li>
          </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}
      <article className="service">
        <div className="service__head">
          <h3>Writing</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Tech </p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Article/Essay </p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Current Events</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Fiction</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Non-Fiction</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Website Content</p>
          </li>
          </ul>
      </article>
      {/* END OF Writing */}
      </div>
    </section>
  )
}

export default Services