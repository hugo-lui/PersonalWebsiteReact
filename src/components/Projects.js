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
                <h2 class="content-section-title">Projects</h2>
                <div class="project-list">
                    <div class="project-item fade">
                        <div class="project-image-container">
                            <img class="project-image-thumbnail" src={file} />
                        </div>
                        <div class="content-section-text">
                            <h3 class="project-title">Pokemon<br/>Management<br/>System</h3>
                                <p class="paragraph">A pokemon card file management system in Java. Supports adding and editing albums, cards, and attributes.</p>
                                <a href="https://github.com/hugo-lui/Pokemon" target="_blank" rel="noreferrer noopener"><button class="generic-button">View Project</button></a>
                        </div>
                    </div>
                        <div class="project-item fade">
                            <div class="project-image-container">
                                <img class="project-image-thumbnail" src={sudoku} />
                            </div>
                            <div class="content-section-text">
                                <h3 class="project-title">Sudoku<br/>Solver</h3>
                                <p class="paragraph">Solves a given sudoku grid using backtracking. Complete with a visualizer</p>
                                <a href="https://github.com/hugo-lui/SudokuSolver" target="_blank" rel="noreferrer noopener"><button class="generic-button">View Project</button></a>
                            </div>
                    </div>
                    <div class="project-item fade">
                        <div class="project-image-container">
                            <img class="project-image-thumbnail" src={unity} />
                        </div>
                        <div class="content-section-text">
                            <h3 class="project-title">Landmass<br/>Generator</h3>
                            <p class="paragraph">Random landmass generation in Unity using Perlin noise.</p>
                            <a href="https://github.com/hugo-lui/UnityLandmass" target="_blank" rel="noreferrer noopener"><button class="generic-button">View Project</button></a>
                        </div>
                    </div>
                    <div class="project-item fade">
                        <div class="project-image-container">
                            <img class="project-image-thumbnail" src={datamuse} />
                        </div>
                        <div class="content-section-text">
                            <h3 class="project-title">Synonym<br/>Generator</h3>
                            <p class="paragraph">Generates alternate sentences with synonyms using the DatamuseAPI.</p>
                            <a href="https://github.com/hugo-lui/Synonyms" target="_blank" rel="noreferrer noopener"><button class="generic-button">View Project</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}