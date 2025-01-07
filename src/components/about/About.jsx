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
              <small>5 Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>A growing list</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>55+ Completed</small>
            </article>
          </div>

          <p>
  Hello world!<br /><br />
  My name is Mack, a versatile professional blending expertise in Business Analysis, Data Analysis, and Software Development.<br /><br />
  My career journey began in Finance/Accounting before transitioning into the tech industry, following my service as a USMC veteran and earning a BS in Business Management from SIU Carbondale.<br /><br />
  I further cultivated my technical skills through the 'Full-Stack Coding' bootcamp at Washington University in St. Louis, where I gained hands-on experience from industry-seasoned instructors. During an internship at Skeleton Key, I worked on diverse projects, ranging from dynamic web applications to interactive games, sharpening my abilities in delivering solutions that meet both technical and business needs.<br /><br />
  Today, I leverage my background in Finance and tech to bridge the gap between data-driven insights and actionable strategies. My work focuses on analyzing data, creating impactful visualizations, and crafting software solutions that enhance decision-making processes. I specialize in front-end development using HTML, CSS, and JavaScript, alongside developing and visualizing data with tools like Python and SQL.<br /><br />
  Whether building intuitive user interfaces or uncovering insights through data, I am driven by a passion for problem-solving and creating value through technology. My goal is to continue evolving as a professional, making meaningful contributions to projects that blend innovation with practicality.
          </p>


          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <a href="https://mackoyler.github.io/BetterCallMack/" className='bcm-button' target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${btnBG})` }}>
  The One Who Codes ? <img src={headcutout} alt="Mack's Cutout" className="inline-icon"/>
</a>
        </div>
      </div>
      </section>
  )
}

export default About;