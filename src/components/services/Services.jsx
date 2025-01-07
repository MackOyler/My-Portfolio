import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            {[
              'Full-Stack',
              'Front-End',
              'Back-End',
              'Single Page Static Design',
              'Interactive and Responsive Design',
              'Styling and Designing',
            ].map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Site Creation</h3>
          </div>
          <ul className="service__list">
            {[
              'Business',
              'Blog',
              'Portfolio',
              'Nonprofit / Orgs',
              'Ecommerce',
              'Applications',
              'Entertainment',
            ].map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Writing</h3>
          </div>
          <ul className="service__list">
            {[
              'Tech',
              'Article/Essay',
              'Current Events',
              'Fiction',
              'Non-Fiction',
              'Website Content',
            ].map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;