import React, { useState } from 'react';
import './project.css';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project: React.FC = () => {
    const [stars, setStars] = useState<JSX.Element[]>([]);

    const createStars = () => {
        const starCount = 30;
        const starsList: JSX.Element[] = [];

        for (let i = 0; i < starCount; i++) {
            starsList.push(
                <div
                    className='star' // Add or ensure that this class is styled properly in project.css
                    key={i}
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                ></div>
            );
        }

        setStars(starsList);
    };

    const removeStars = () => {
        setStars([]);
    };

    return (
    <div className='project'>
        <span>
            <Link to="/" className="home-button">
                <FaArrowLeft className="back-arrow"/>
            </Link>
        </span>
        <section className="project-section">
            <ul>
                <div className="project-group">
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/Portfolio">Portfolio</a>
                        <p>A personal website crafted using React and Typescript</p>
                        <div className='tags'>
                            <span className='tag'>React</span>
                            <span className='tag'>Typescript</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/DcQueryBot">DcQueryBot</a>
                        <p>Developed a Discord bot aimed at simplifying various tasks and enhancing user experience within the platform</p>
                        <div className='tags'>
                            <span className='tag'>Python</span> 
                            <span className='tag'>OOP</span>
                            <span className='tag'>Discord.py</span>
                            <span className='tag'>RESTful API</span>
                            <span className='tag'>Dockerfile</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                </div>
                <div className="project-group">
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/CDIO">CDIO</a>
                        <p>Collaborative university project utilizing image recognition technology to achieve specific objectives</p>
                        <div className='tags'>
                            <span className='tag'>Python</span>
                            <span className='tag'>OpenCV</span>
                            <span className='tag'>Lego Mindstorm</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/PriceRunnerAPI">PriceRunnerAPI</a>
                        <p>A RESTful API enabling streamlined product searches on Denmark's version of PriceRunner, providing structured product information retrieval.</p>
                        <div className='tags'>
                            <span className='tag'>Python</span>
                            <span className='tag'>RESTful API</span>
                            <span className='tag'>BeautifulSoup</span>
                            <span className='tag'>SQLite</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                </div>
                <div className="project-group">
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/ConwaysGameOfLife">ConwaysGameOfLife</a>
                        <p>Implementation of Conway's Game of Life using Python</p>
                        <div className='tags'>
                            <span className='tag'>Python</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/ChatRoom">ChatRoom</a>
                        <p>Created a Chatroom application in C++</p>
                        <div className='tags'>
                            <span className='tag'>C++</span>
                            <span className='tag'>Socket Programming</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                </div>
                <div className="project-group">
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/Mandatory-Assignment-2">Mandatory-Assignment-2</a>
                        <p>Developed Memory Management in C</p>
                        <div className='tags'>
                            <span className='tag'>C</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/Spyware">Spyware</a>
                        <p>Developed Spyware in Python</p>
                        <div className='tags'>
                            <span className='tag'>Python</span>
                            <span className='tag'>OOP</span>
                            <span className='tag'>Threads</span>
                            <span className='tag'>Cryptography</span>
                            <span className='tag'>smtplib</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                </div>
                <div className="project-group">
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/QuittAPI">QuittAPI</a>
                        <p>A RESTful API enabling streamlined media searches on Quitt.net, providing structured media information retrieval.</p>
                        <div className='tags'>
                            <span className='tag'>Python</span>
                            <span className='tag'>RESTful API</span>
                            <span className='tag'>BeautifulSoup</span>
                            <span className='tag'>SQLite</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/WowChatBot">WowChatBot</a>
                        <p>Developed a World Of Warcraft extension aimed at simplifying various tasks and enhancing user experience within the game</p>
                        <div className='tags'>
                            <span className='tag'>Lua</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                </div>
                <div className="project-group">
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/AlgorithmAndDataStructures">AlgorithmAndDataStructures</a>
                        <p>Implementation of algorithms and data structures in Java</p>
                        <div className='tags'>
                            <span className='tag'>Java</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                    <li 
                        onMouseEnter={createStars} 
                        onMouseLeave={removeStars}
                    >
                        <a href="https://github.com/DenizIsikli/02393-Programming-in-CPP">02393-Programming-in-CPP</a>
                        <p>C++ exercises</p>
                        <div className='tags'>
                            <span className='tag'>C++</span>
                        </div>
                        {stars.length > 0 && <div className='star-container'>{stars}</div>}
                    </li>
                </div>
            </ul>
        </section>
    </div>
    );
}

export default Project;
