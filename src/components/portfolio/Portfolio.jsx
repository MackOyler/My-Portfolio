import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/RMimg.png'
import IMG3 from '../../assets/codeQuiz.png'
import IMG4 from '../../assets/CGoL.png'
import IMG5 from '../../assets/Brainwave.png'
import IMG6 from '../../assets/sxl.png'
import IMG7 from '../../assets/2048.png'
import IMG8 from '../../assets/PlanetOrbit.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 5,
    image: IMG5,
    title: 'Brainwave',
    github: 'https://github.com/MackOyler/BrainWave',
    demo: 'https://brainwavemack.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Gravity Simulation (Slingshot)',
    github: 'https://github.com/MackOyler/Slingshot_Gravity_Sim/tree/main',
    demo: 'https://github.com/MackOyler/Slingshot_Gravity_Sim/blob/main/main.py'
  },
  {
    id: 6,
    image: IMG8,
    title: 'Planet Orbit Simulation',
    github: 'https://github.com/MackOyler/Planet_Orbit_Sim',
    demo: 'https://github.com/MackOyler/Planet_Orbit_Sim/blob/main/main.py'
  },
  {
    id: 1,
    image: IMG7,
    title: '2048',
    github: 'https://github.com/MackOyler/2048',
    demo: 'https://github.com/MackOyler/2048/commit/8f86463e6330299550c259392dbad0bcf670c5b8'
  },
  {
    id: 5,
    image: IMG6,
    title: 'SpaceX Launch Tracker',
    github: 'https://github.com/MackOyler/SpaceX_Launch_Tracker',
    demo: 'https://github.com/MackOyler/SpaceX_Launch_Tracker/blob/main/app.py'
  },
  {
    id: 4,
    image: IMG4,
    title: "Conway's Game of Life",
    github: 'https://github.com/MackOyler/Conways_Game_of_Life',
    demo: 'https://github.com/MackOyler/Conways_Game_of_Life/blob/main/main.py'
  },
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