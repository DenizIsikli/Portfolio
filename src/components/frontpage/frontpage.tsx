import React, { useState, useEffect, useRef } from "react";
import '../tailwind.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { } from 'react-router-dom';
import Portrait from '../images/Bronny.png'
import Workspace1 from '../images/ArteliaAS.png'
import University from '../images/DTU.png'

const Frontpage: React.FC = () => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="bg-[#111111] frontpage flex h-screen w-auto text-white">
            {/* Left Side - Personal Info */}
            <div className="left-side w-1/2 p-8 flex flex-col justify-start mt-8 pl-30">
                <div className="picture w-32 h-32 mx-auto mb-4 rounded-full">
                    <img src={Portrait} alt="Bronny" className="profile-picture w-full h-full object-cover rounded-full"/>
                </div>
                <div className="flex flex-col items-start text-left mx-auto">
                    <h2 className="text-3xl font-bold">Deniz Isikli</h2>
                    <p className="text-xl mt-2">Copenhagen, Denmark</p>
                    <p className="text-base mt-2">Software Engineering student &nbsp;
                        <a href="https://en.wikipedia.org/wiki/Technical_University_of_Denmark" className="text-base hover:text-gray-400" rel="noopener noreferrer" target="_blank">
                            @Denmark's Technical University
                        </a>        
                    </p>

                    <section className="text-gray-400 socials mt-4 flex space-x-4 justify-center">
                        <div>
                            <a href="https://github.com/DenizIsikli" className="text-xl hover:text-white" rel="noopener noreferrer" target="_blank">
                                <FaGithub />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/deniz-isikli/" className="text-xl hover:text-white" rel="noopener noreferrer" target="_blank">
                                <FaLinkedin />
                            </a>
                        </div>
                        <div>
                            <a href="mailto:denizisikli7@gmail.com" className="text-xl hover:text-white" rel="noopener noreferrer" target="_blank">
                                <FaEnvelope />
                            </a>
                        </div>
                        <div>
                            <a href="https://codeforces.com/profile/Berxwedan" className="text-xl hover:text-white" rel="noopener noreferrer" target="_blank">
                                <SiCodeforces />
                            </a>
                        </div>
                        <div>
                            <a href="https://leetcode.com/u/DenizIsikli/" className="text-xl hover:text-white" rel="noopener noreferrer" target="_blank">
                                <SiLeetcode />
                            </a>
                        </div>
                    </section>
                </div>
            </div>

            {/* Right Side - Skills, Projects, Experience */}
            <div className="right-side w-1/2 overflow-y-auto p-8 text-left">
                <div className="space-y-8 pt-12">
                    <section>
                        <h2 className="text-2xl font-semibold">Projects</h2>
                        <div className="max-w-lg mt-4">
                            <button
                                onClick={toggleModal}
                                className="group relative inline-flex border border-blue-500 focus:outline-none w-full sm:w-auto hover:cursor-pointer">
                                <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-blue-500 ring-1 ring-blue-500 ring-offset-1 ring-offset-blue-500 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">View Projects</span>
                            </button>
                        </div>
                        {isOpen && (
                            <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-[50px] z-50">
                                <div ref={modalRef} className="bg-[#111111] border-4 border-gray-700 w-[70%] h-[70%] max-h-[80vh] overflow-y-auto p-6 rounded-lg relative">
                                    <button onClick={toggleModal} className="absolute top-5 right-10 text-xl font-bold text-white hover:cursor-pointer">X</button>
                                    <section>
                                        <h2 className="text-2xl font-semibold text-white">Projects</h2>
                                        <div className="mt-4 grid grid-cols-3 gap-6">
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/Dotfiles" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    Dotfiles
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Personal dotfiles for Neovim, Alacritty, Tmux and Windows Terminal</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Neovim</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Alacritty</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Tmux</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Win. Term.</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Lua</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Bash</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">PowerShell</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/Portfolio" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    Portfolio
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Personal portfolio website built using React, Tailwind CSS, and Vite.</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">React</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Tailwind CSS</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Vite</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">TypeScript</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/Codeforces" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    Codeforces
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>    
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Codeforces problems and contests solutions in C++</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">C++</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/LeetCode-CPP" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    LeetCode-CPP
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">LeetCode problems solutions in C++</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">C++</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/AdventOfCode-AoC" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    AdventOfCode-AoC
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Advent of Code problems solutions different languages</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">C++</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Rust</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/DcQueryBot" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    DcQueryBot
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Developed a Discord bot aimed at simplifying various tasks and enhancing user experience within the platform</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Discord API</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">RapidAPI</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">BeautifulSoup</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/UselessBotWebsite" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    UselessBotWebsite
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">A website for the UselessBot Discord bot, providing information and commands for users.</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">React</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Tailwind CSS</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Vite</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">TypeScript</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/VsCodeConfig" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    VsCodeConfig
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Personal Visual Studio Code settings and extensions</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Visual Studio Code</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">JSON</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/LeetCode-Python" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    LeetCode-Python
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">LeetCode problems solutions in Python</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/LeetCode-Sql" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    LeetCode-Sql
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">LeetCode problems solutions in SQL</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">SQL</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/AutomaticCADQA" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    AutomaticCADQA
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-sm text-gray-400 pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Private repository</p>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Automated quality assurance system for CAD files using Bentley Microstation SDK and Batch Processing</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">VBA</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Bentley Microstation SDK</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Batch Processing</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">HTML</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">CSS</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/ScandalfCrawlerART" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    ScandalfCrawlerART
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-sm text-gray-400 pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Private repository</p>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">File crawling system to automate project data extraction and processing, ensuring seamless integration with SQL databases for streamlined analysis</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">MS SQL</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Docker</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/Anamoly-Detector---Bachelor-Project" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    Anamoly-Detector---Bachelor-Project
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-sm text-gray-400 pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Private repository</p>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Bachelor project - Anomaly detection in time series data using deep learning models</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">TensorFlow</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Pandas</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/DaemonCollection" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    DaemonCollection
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">Collection of various daemon scripts for personal use</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">C++</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Bash</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/62413-Project" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    62413-Project
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">University project for the course 62413 C# - Utilizing .NET Core, RESTful API, and Encryption</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">C#</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">.NET Core</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">RESTful API</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/62444-DataVisualization-Analysis" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    62444-DataVisualization-Analysis
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">University project for the course 62444 Data Visualization and Analysis - Utilizing Python, Jupyter Notebook, and Data Analysis</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Jupyter Notebook</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Seaborn</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/PriceRunnerAPI" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    PriceRunnerAPI
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">RESTful API for product price comparison on PriceRunner</p> 
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Flask</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Beautiful Soup</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">RESTful API</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/ProshopAPI" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    ProshopAPI
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">RESTful API for product price comparison on Proshop</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Flask</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Beautiful Soup</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">RESTful API</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/QuittAPI" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    QuittAPI
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">RESTful API for streamlined media search on Quitt</p>
                                                <p className="text-sm text-gray-400 pt-2 px-4 max-w-full overflow-hidden text-ellipsis">The website is no longer available, so the API is not functional</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Flask</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">Beautiful Soup</li>
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">RESTful API</li>
                                                </ul>
                                            </div>
                                            <div className="mt-4 border-2 bg-black-700 border-none rounded-md text-center pt-2 pb-5 hover:shadow-[0px_0px_20px_10px_rgba(62,17,224,0.8)] transition duration-250 ease-in-out transform hover:-translate-y-0.5 hover:scale-102">
                                                <a href="https://github.com/DenizIsikli/Mandatory-Assignment-2" className="text-lg font-semibold text-sky-400 relative group" rel="noopener noreferrer" target="_blank">
                                                    Mandatory-Assignment-2
                                                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                                <p className="text-base pt-2 px-4 max-w-full overflow-hidden text-ellipsis">University project for the course 62588 Operating Systems - Utilizing C</p>
                                                <ul className="list-none pt-2 mt-2 flex flex-wrap justify-center gap-2">
                                                    <li className="bg-green-600 text-white px-3 py-0.2 rounded-full text-sm font-medium">C</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )}
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Skills</h2>
                        <h3 className="text-lg font-semibold mt-4">Languages</h3>
                        <ul className="list-none p-0 mt-2 flex flex-wrap justify-left gap-2">
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">Python</li>
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">C</li>
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">C++</li>
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">CS</li>
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">Java</li>
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">HTML/CSS</li>
                            <li className="bg-green-600 text-green-100 px-3 py-0.2 rounded-full text-sm font-medium">VBA</li>
                        </ul>
                        <h3 className="text-lg font-semibold mt-4">Frameworks</h3>
                        <ul className="list-none p-0 mt-2 flex flex-wrap justify-left gap-2">
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">Dockerfile</li>
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">.NET Core</li>
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">Jupyter Notebook</li>
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">Flask</li>
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">JUnit</li>
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">RESTful API</li>
                            <li className="bg-blue-600 text-blue-100 px-3 py-0.2 rounded-full text-sm font-medium">CRUD</li>
                        </ul>
                        <h3 className="text-lg font-semibold mt-4">Tools</h3>
                        <ul className="list-none p-0 mt-2 flex flex-wrap justify-left gap-2">
                            <li className="bg-red-800 text-red-100 px-3 py-0.2 rounded-full text-sm font-medium">JetBrains IDE's</li>
                            <li className="bg-red-800 text-red-100 px-3 py-0.2 rounded-full text-sm font-medium">Neovim</li>
                            <li className="bg-red-800 text-red-100 px-3 py-0.2 rounded-full text-sm font-medium">Visual Studio Code</li>
                            <li className="bg-red-800 text-red-100 px-3 py-0.2 rounded-full text-sm font-medium">Visual Studio</li>
                        </ul>
                        <h3 className="text-lg font-semibold mt-4">Practices</h3>
                        <ul className="list-none p-0 mt-2 flex flex-wrap justify-left gap-2">
                            <li className="bg-yellow-700 text-yellow-100 px-3 py-0.2 rounded-full text-sm font-medium">GIT</li>
                            <li className="bg-yellow-700 text-yellow-100 px-3 py-0.2 rounded-full text-sm font-medium">SCRUM</li>
                            <li className="bg-yellow-700 text-yellow-100 px-3 py-0.2 rounded-full text-sm font-medium">JIRA</li>
                            <li className="bg-yellow-700 text-yellow-100 px-3 py-0.2 rounded-full text-sm font-medium">AGI</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">Experience</h2>
                        <div className="mt-4 border-l-2 border-gray-600 pl-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-white rounded-full p-1">
                                    <img src={Workspace1} alt="Artelia AS" className="w-full h-full object-cover rounded-full"/>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">SWE Student Job - CAD Software Development</p>
                                    <p className="text-base">Artelia, Søborg</p>
                                    <p className="text-sm text-gray-400">2025 - Present</p>
                                </div>
                            </div>
                            <ul className="list-disc pl-5 pt-2 space-y-2">
                                <li className="max-w-md text-base break-words">Develop .NET applications, automate solutions, and enhance project workflows using Bentley SDK, Batch Processing, and SQL integration.</li>
                            </ul>
                        </div>
                        <div className="mt-4 border-l-2 border-gray-600 pl-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-white rounded-full p-1">
                                    <img src={Workspace1} alt="Artelia AS" className="w-full h-full object-cover rounded-full"/>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">SWE Internship - CAD Software Development</p>
                                    <p className="text-base">Artelia, Søborg</p>
                                    <p className="text-sm text-gray-400">2024 - 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc pl-5 pt-2 space-y-2">
                                <li className="max-w-md text-base break-words">Developed and implemented an automated quality assurance system for DGN files using the Bentley SDK and Batch Processing, enhancing compliance with CAD standards and streamlining validation processes.</li>
                                <li className="max-w-md text-base break-words">Developed .NET Core DLLs to automate tasks within ProjectWise, improving workflow efficiency.</li>
                                <li className="max-w-md text-base break-words">Built a file crawling system to automate project data extraction and processing, ensuring seamless integration with SQL databases for streamlined analysis.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-semibold">Education</h3>
                        <div className="mt-4 border-l-2 border-gray-600 pl-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-16 h-16 bg-white rounded-full p-1">
                                    <img src={University} alt="DTU" className="w-full h-full object-cover rounded-full"/>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold">Bachelor of Engineering, Software Technology</p>
                                    <p className="text-base">Technical University of Denmark</p>
                                    <p className="text-sm text-gray-400">2021 - Present</p>
                                </div>
                            </div>
                        </div>
                    </section>              
                </div>
            </div>
        </div>
    );
};

export default Frontpage;
