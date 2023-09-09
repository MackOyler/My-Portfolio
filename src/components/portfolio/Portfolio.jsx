import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/codeQuiz.png'
import IMG4 from '../../assets/pwGen.png'
import IMG5 from '../../assets/HoriseonSEO.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/stlPets.jpg'
import IMG8 from '../../assets/portfolio5.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 5,
    image: IMG5,
    title: 'Horiseon: SEO',
    github: 'https://github.com/MackOyler/Horiseon-SEO',
    demo: 'https://mackoyler.github.io/Horiseon-SEO/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce Back-End',
    github: 'https://github.com/MackOyler/E-Commerce.Back-End',
    demo: 'https://github.com/MackOyler/E-Commerce.Back-End'
  },
  {
    id: 6,
    image: IMG8,
    title: 'Social Media API ',
    github: 'https://github.com/MackOyler/SocialMediaAPI',
    demo: 'https://github.com/MackOyler/SocialMediaAPI'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Password Generator ',
    github: 'https://github.com/MackOyler/RandomPasswordGenerator',
    demo: 'https://mackoyler.github.io/RandomPasswordGenerator/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Basic Code Quiz Game',
    github: 'https://github.com/MackOyler/Code-Quiz',
    demo: 'https://mackoyler.github.io/Code-Quiz/'
  },
  {
    id: 1,
    image: IMG7,
    title: 'STL Pets',
    github: 'https://github.com/MackOyler/Project-3-Repo',
    demo: 'https://saint-louis-pets-554-d862dc3f7739.herokuapp.com/'
  }
];



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio