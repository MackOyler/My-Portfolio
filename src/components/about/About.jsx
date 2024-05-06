import React, { useEffect, useRef } from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import headcutout from '../../assets/headcutout.png'
import btnBG from '../../assets/button-bb-bg.png'

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
              <small>2 Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>A growing list</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>
          </div>

          <p>
          Hello world! <br></br> <br></br>My name is Mack, a full-stack web developer with a strong foundation in the MERN stack, and Front-End Development. <br></br>
          My career transitioned from Finance/Accounting into tech after serving as a USMC veteran and earning a BS in Business Management from SIU Carbondale. <br></br>
          <br></br>
          I further developed my coding skills at the 'Full-Stack Coding' bootcamp at Washington University in St. Louis, which provided hands-on learning experiences from industry-skilled instructors. I then honed these skills during an internship at Skeleton Key, where I worked on projects ranging from dynamic web applications to interactive games, enhancing my expertise in project delivery and client solutions.<br></br>
          <br></br>
          In addition to my proficiency with the MERN stack, I actively engage in side projects using Python, particularly in game development, which allows me to explore more creative aspects of coding. <br></br>
          <br></br>My goal is to leverage my experiences and skills in a professional software development role where I can continue to grow and make significant contributions to projects. I am particularly passionate about using my expertise in HTML, CSS, JavaScript, and Node.js to create impactful and efficient web solutions. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <a href="https://mackoyler.github.io/BetterCallMack/" className='bcm-button' target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${btnBG})` }}>
  The One Who Codes <img src={headcutout} alt="Mack's Cutout" className="inline-icon"/>
</a>
        </div>
      </div>
      </section>
  )
}

export default About;