import React from 'react';
import './frontpage.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Image from '../pictures/FatBronny.png';

const Frontpage: React.FC = () => {
    return (
        <div className="frontpage">
            <div className="frontpage-section">
                <div className="text-content">
                    <h1>Deniz Isikli</h1>
                    <p>Software Engineering student at Denmark's Technical University</p>
                    
                    <section className="socials">
                        <div>
                            <Link to="/project">Projects<FaCode /></Link>
                        </div>
                        <div>
                            <a href="https://github.com/DenizIsikli" rel="noopener noreferrer" target="_blank">
                                GitHub<FaGithub />
                            </a>
                        </div>
                        <div>
                            <Link to="/githubactivity">GitHub Activity<FaGithub /></Link>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/deniz-isikli/" rel="noopener noreferrer" target="_blank">
                                LinkedIn<FaLinkedin />
                            </a>
                        </div>
                        <div>
                            <a href="mailto:denizisikli7@gmail.com" rel="noopener noreferrer" target="_blank">
                                Gmail<FaEnvelope />
                            </a>
                        </div>
                    </section>
                </div>
                <div className="picture">
                    <img src={Image} alt="Bronny" className="profile-picture"/>
                </div>
            </div>
        </div>
    );
}

export default Frontpage;
  