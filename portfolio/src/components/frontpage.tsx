import React from 'react';
import './frontpage.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Frontpage: React.FC = () => {
  return (
    <div className="frontpage">
        <div className="intro-section">
            <header>
                <h1>Deniz Isikli</h1>
                <p>Software Engineering Student at<br></br>Denmark's Technical University (DTU)</p>

                <section className="socials">
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
                </section>
            </header>
        </div>
    </div>
  );
};

export default Frontpage;
  