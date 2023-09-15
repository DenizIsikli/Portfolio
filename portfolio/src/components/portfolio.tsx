import React from 'react';
import './portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Your Name</h1>
        <p>Software Engineering Student</p>
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
        <h2>Social Links</h2>
        <div>
          <a href="https://github.com/your-github">
            <img src="/path/to/github-logo.png" alt="GitHub" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/your-linkedin">
            <img src="/path/to/linkedin-logo.png" alt="LinkedIn" />
          </a>
        </div>
        <div>
          <a href="mailto:your-email@example.com">
            <img src="/path/to/email-logo.png" alt="Email" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
