import React from "react";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <div className="container">
      <div className="nav-container">
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}