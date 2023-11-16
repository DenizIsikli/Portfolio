import React from 'react';
import './frontpage.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaFilePdf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Frontpage: React.FC = () => {
    return (
        <div className="frontpage">
            <div className="frontpage-section">
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
                        <a href="https://www.linkedin.com/in/deniz-isikli/" rel="noopener noreferrer" target="_blank">
                            LinkedIn<FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <a href="mailto:denizisikli7@gmail.com" rel="noopener noreferrer" target="_blank">
                            Gmail<FaEnvelope />
                        </a>
                    </div>
                    <div>
                        <Link to="/cv">CV<FaFilePdf /></Link>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Frontpage;
  