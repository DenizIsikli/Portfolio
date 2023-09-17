import React from 'react';
import './portfolio.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
        <div className="intro-section">
            <header>
                <h1>Deniz Isikli</h1>
                <p>Software Engineering Student</p>
                <p>Denmark's Technical University (DTU)</p>
            
                <section className="socials">
                    <div>
                        <a href="https://github.com/DenizIsikli" rel="noopener noreferrer" target="_blank">
                        <FaGithub />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/deniz-isikli/" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:denizisikli7@gmail.com" rel="noopener noreferrer" target="_blank">
                        <FaEnvelope />
                        </a>
                    </div>
                </section>
            </header>
        </div>
        
        <div className='project-section'>
            <section className="projects">
                <h2>GitHub Projects</h2>
                <ul>
                    <li>
                        <a href="https://github.com/DenizIsikli/Portfolio">Portfolio</a>
                        <p>Portfolio website made with React and Typescript</p>
                    </li>
                    <li>
                        <a href="https://github.com/DenizIsikli/DcQueryBot">DcQueryBot</a>
                        <p>Discord bot developed for the purpose of making life easier</p>
                    </li>
                </ul>
            </section>
        </div>

        
    </div>
  );
};

export default Portfolio;
