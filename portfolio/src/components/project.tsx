import React from 'react';
import './frontpage.css';

const Project: React.FC = () => {
    return (
    <div className='project-section'>
            <section className="projects">
                <ul>
                    <li>
                        <a href="https://github.com/DenizIsikli/Portfolio">Portfolio</a>
                        <p>Portfolio website made with React and Typescript</p>
                    </li>
                    <li>
                        <a href="https://github.com/DenizIsikli/DcQueryBot">DcQueryBot</a>
                        <p>Discord bot developed for the purpose of making life easier</p>
                    </li>
                    <li>
                        <a href="https://github.com/DenizIsikli/CDIO">CDIO</a>
                        <p>University project using image recognition </p>
                    </li>
                    <li>
                        <a href="https://github.com/DenizIsikli/PriceRunnerAPI">PriceRunnerAPI</a>
                        <p>API for PriceRunner made to be integrated into my Discord bot</p>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Project;