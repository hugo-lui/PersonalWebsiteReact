import React from "react";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="container">
      <div id="home">
        <div>
          <h1 className="home-title">Hi, I'm <span className="auto-type"></span></h1>
          <h2 className="home-description">A <span id="currentAge"></span> year old computer science student at TMU</h2>
          <div className="home-button">
          <a className="link" href="#about"><button className="generic-button">View More</button></a>
          </div>
        </div>
      </div>
    </div>
  );
}