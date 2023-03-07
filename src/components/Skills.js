import React from "react";
import "./Skills.css";

export default function Skills(props) {
  return (
    <div className="container">
      <div id="skills">
        <h2 className="content-section-title">Skills</h2>
          <h3>Front End</h3>
          <div className="section">
            <div className="item-1" id="skill-item">
              <h4>Javascript</h4>
              <p>Advanced</p>
            </div>
            <div className="item-2" id="skill-item">
              <h4>HTML</h4>
              <p>Intermediate</p>
            </div>
            <div id="skill-item">
              <h4>CSS</h4>
              <p>Intermediate</p>
            </div>
            <div id="skill-item">
              <h4>React.js</h4>
              <p>Intermediate</p>
            </div>
          </div>
          <h3>Back End</h3>
          <div className="section">
            <div className="item-1" id="skill-item">
              <h4>Java</h4>
              <p>Advanced</p>
            </div>
            <div className="item-2" id="skill-item">
              <h4>Python</h4>
              <p>Intermediate</p>
            </div>
            <div id="skill-item">
              <h4>C#</h4>
              <p>Beginner</p>
            </div>
            <div id="skill-item">
              <h4>SQL</h4>
              <p>Intermediate</p>
            </div>
            <div id="skill-item">
              <h4>Express.js</h4>
              <p>Advanced</p>
            </div>
            <div id="skill-item">
              <h4>Node.js</h4>
              <p>Intermediate</p>
            </div>
            <div id="skill-item">
              <h4>PostgreSQL</h4>
              <p>Intermediate</p>
            </div>
          </div>
      </div>
    </div>
  );
}