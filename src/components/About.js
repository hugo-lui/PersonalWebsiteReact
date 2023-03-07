import React from "react";
import "./About.css";
import computer from "../assets/computer.jpg";

export default function About(props) {
    return (
        <div className="container">
            <div className="content" id="about">
                <div className="content-section-1">
                    <img className="content-image-about" src={computer} alt="Computer Science" />
                </div>
                <div className="content-section-2">
                    <h2 className="content-section-title">About Me</h2>
                    <p className="content-section-text">I'm currently in my first year of university, studying computer science at Toronto Metropolitan University. In my free time, I enjoy building projects with all types of different languages, focusing on APIs, databases, and the back-end. </p>
                </div>
            </div>
        </div>
    );
}