import React from 'react';
import './portfolio.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Deniz Isikli</h1>
        <p>Software Engineering Student</p>
        <p>Denmark's Technical University (DTU)</p>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/your-github/your-repo-1">Project 1</a>
            <p>Description of Project 1.</p>
          </li>
          <li>
            <a href="https://github.com/your-github/your-repo-2">Project 2</a>
            <p>Description of Project 2.</p>
          </li>
        </ul>
      </section>

      <section className="socials">
        <div>
          <a href="https://github.com/DenizIsikli" rel="noopener noreferrer" target="_blank">
            <FaGithub /> GitHub
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/deniz-isikli/" rel="noopener noreferrer" target="_blank">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <div>
          <a href="mailto:your-email@example.com" rel="noopener noreferrer" target="_blank">
            <FaEnvelope /> Email
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
