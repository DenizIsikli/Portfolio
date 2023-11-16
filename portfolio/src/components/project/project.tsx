import React from 'react';
import './project.css';

const Project: React.FC = () => {
    return (
    <div className='project'>
        <section className="project-section">
            <ul>
                <li>
                    <a href="https://github.com/DenizIsikli/Portfolio">Portfolio</a>
                    <p>A personal website crafted using React and Typescript</p>
                    <div className='tags'>
                        <span className='tag'>React</span>
                        <span className='tag'>Typescript</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/DenizIsikli/DcQueryBot">DcQueryBot</a>
                    <p>Developed a Discord bot aimed at simplifying various tasks and enhancing user experience within the platform</p>
                    <div className='tags'>
                        <span className='tag'>Python</span> 
                        <span className='tag'>Discord.py</span>
                        <span className='tag'>RESTful API</span>
                        <span className='tag'>Dockerfile</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/DenizIsikli/CDIO">CDIO</a>
                    <p>Collaborative university project utilizing image recognition technology to achieve specific objectives</p>
                    <div className='tags'>
                        <span className='tag'>Python</span>
                        <span className='tag'>OpenCV</span>
                        <span className='tag'>Lego Mindstorm</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/DenizIsikli/PriceRunnerAPI">PriceRunnerAPI</a>
                    <p>A RESTful API enabling streamlined product searches on Denmark's PriceRunner platform, providing structured product information retrieval.</p>
                    <div className='tags'>
                        <span className='tag'>Python</span>
                        <span className='tag'>RESTful API</span>
                        <span className='tag'>BeautifulSoup</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/DenizIsikli/ConwaysGameOfLife">ConwaysGameOfLife</a>
                    <p>Implementation of Conway's Game of Life using Python</p>
                    <div className='tags'>
                        <span className='tag'>Python</span>
                    </div>
                </li>
                <li>
                    <a href="https://github.com/DenizIsikli/ChatRoom">ChatRoom</a>
                    <p>Created a Chatroom application in C++</p>
                    <div className='tags'>
                        <span className='tag'>C++</span>
                        <span className='tag'>Socket Programming</span>
                    </div>
                </li>
            </ul>
        </section>
    </div>
    );
}

export default Project;
