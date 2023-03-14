import React from "react";
import "./Projects.css";
import file from "../assets/file.png";
import jwt from "../assets/jwt.png";
import sidebar from "../assets/sidebar.jpg";
import sudoku from "../assets/sudoku.png";
import unity from "../assets/unity.png";
import weather from "../assets/weather.png";

export default function Projects(props) {
    return (
        <div className="container">
            <div id="projects">
                <h2 className="content-section-title">Projects</h2>
                <div className="project-list">
                    <div className="project-item fade" id="grow">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={file} alt="file"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Pokemon<br/>Management<br/>System</h3>
                                <p className="paragraph">A file management system using OOP. Supports editing albums, cards, and attributes.</p>
                                <a href="https://github.com/hugo-lui/Pokemon" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                    <div className="project-item fade" id="grow">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={sudoku} alt="sudoku"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Sudoku<br/>Solver</h3>
                            <p className="paragraph">Solves a given sudoku grid using backtracking. Complete with a visualizer</p>
                            <a href="https://github.com/hugo-lui/SudokuSolver" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                    <div className="project-item fade" id="grow">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={unity} alt="unity"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Landmass<br/>Generator</h3>
                            <p className="paragraph">Random landmass generation in Unity using Perlin noise.</p>
                            <a href="https://github.com/hugo-lui/UnityLandmass" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                </div>
                <div className="project-list">
                    <div className="project-item fade" id="grow">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={jwt} alt="jwt"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">User<br/>Authentication</h3>
                            <p className="paragraph">User authentication with Express.js and JSON Web Tokens.</p>
                            <a href="https://github.com/hugo-lui/JWT-Auth" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                    <div className="project-item fade" id="grow">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={weather} alt="weather"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Weather<br/>App</h3>
                            <p className="paragraph">A full-stack application using the PERN stack and the Open-Meteo Weather Forecast API.</p>
                            <a href="https://github.com/hugo-lui/WeatherApp" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                    <div className="project-item fade" id="grow">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={sidebar} alt="sidebar"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Discord<br/>Sidebar</h3>
                            <p className="paragraph">A clone of Discord's sidebar using React and Tailwind.</p>
                            <a href="https://github.com/hugo-lui/DiscordSidebarClone" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}