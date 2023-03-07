import React from "react";
import "./Projects.css";
import datamuse from "../assets/datamuse.png";
import file from "../assets/file.png";
import sudoku from "../assets/sudoku.png";
import unity from "../assets/unity.png";

export default function Projects(props) {
    return (
        <div className="container">
            <div id="projects">
                <h2 className="content-section-title">Projects</h2>
                <div className="project-list">
                    <div className="project-item fade">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={file} alt="file"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Pokemon<br/>Management<br/>System</h3>
                                <p className="paragraph">A pokemon card file management system in Java. Supports adding and editing albums, cards, and attributes.</p>
                                <a href="https://github.com/hugo-lui/Pokemon" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                        <div className="project-item fade">
                            <div className="project-image-container">
                                <img className="project-image-thumbnail" src={sudoku} alt="sudoku"/>
                            </div>
                            <div className="content-section-text">
                                <h3 className="project-title">Sudoku<br/>Solver</h3>
                                <p className="paragraph">Solves a given sudoku grid using backtracking. Complete with a visualizer</p>
                                <a href="https://github.com/hugo-lui/SudokuSolver" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                            </div>
                    </div>
                    <div className="project-item fade">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={unity} alt="unity"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Landmass<br/>Generator</h3>
                            <p className="paragraph">Random landmass generation in Unity using Perlin noise.</p>
                            <a href="https://github.com/hugo-lui/UnityLandmass" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                    <div className="project-item fade">
                        <div className="project-image-container">
                            <img className="project-image-thumbnail" src={datamuse} alt="datamuse"/>
                        </div>
                        <div className="content-section-text">
                            <h3 className="project-title">Synonym<br/>Generator</h3>
                            <p className="paragraph">Generates alternate sentences with synonyms using the DatamuseAPI.</p>
                            <a href="https://github.com/hugo-lui/Synonyms" target="_blank" rel="noreferrer noopener"><button className="generic-button">View Project</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}