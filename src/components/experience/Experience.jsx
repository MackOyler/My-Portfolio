import React from 'react';
import './experience.css';
import { BsCheckCircle } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Development Section */}
        <div className="experience__box">
          <h3>Development</h3>
          <div className="experience__content">
            {[
              'MERN Stack',
              'HTML, CSS, JavaScript',
              'UX/UI & Website Design',
              'APIs & Database Design',
              'Claris FileMaker Pro',
              'Unit Testing & QA',
              'Scientific Simulations',
              'Git, GitHub, GitLab',
            ].map((item) => (
              <article className="experience__details" key={item}>
                <BsCheckCircle className="experience__details-icon" />
                <h4>{item}</h4>
              </article>
            ))}
          </div>
        </div>

        {/* Data Section */}
        <div className="experience__box">
          <h3>Data</h3>
          <div className="experience__content">
            {[
              'Python for Data Analysis',
              'Excel (Advanced)',
              'SQL & Database Management',
              'Data Visualization (Tableau, Power BI)',
              'Data Cleaning & Transformation',
              'Statistical Analysis',
              'JIRA for Data Projects',
              'Cloud & Databases (Google Cloud, BigQuery, PostgreSQL, MySQL)',
            ].map((item) => (
              <article className="experience__details" key={item}>
                <BsCheckCircle className="experience__details-icon" />
                <h4>{item}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
