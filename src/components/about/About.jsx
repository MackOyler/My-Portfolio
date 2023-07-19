import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>A growing list</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
          Hello there! <br></br>My name is Mack, and I am a full-stack web developer who originally started in the Finance/Accounting world. <br></br>
          I am a USMC veteran with a BS in Business Management from SIU Carbondale. <br></br>
          <br></br>
          After years of coding on the side as a hobby, I decided to enroll in the 'Full-Stack Web Development' bootcamp at Washington University in St Louis. 
          There, I gained hands on experience while learning in a classroom setting. <br></br>
          <br></br>
          I have strong experience in HTML, CSS, JavaScript, using APIs and using Node.js. 
          I also have some experience in SQL, and I am currently learning Python in my spare time. 
          I am actively seeking a career in Software Development/Tech where I can utilize my skill newly acquired skillset while expanding my knowledge and experiences. 
          I am very excited to be able to finally put to use HTML, CSS, JS, Node, Express, APIs / Frameworks a professional setting! 
          
          I am also so excited to finally make the shift into a new career! 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About