import React from "react";
import "./Contact.css";
import email from "../assets/email.png";

export default function Contact(props) {
    return (
        <div className="container">
            <div class="content" id="contact">        
                <div class="content-section-2">
                    <h2 class="content-section-title">Contact Me</h2>
                    <p class="content-section-text">Feel free to connect with me on any of these platforms below.<br/>Email: hugo_lui@rogers.com<br/>Instagram: <a class="link" href="https://instagram.com/ghost.feather" target="_blank" rel="noreferrer noopener">@ghost.feather</a><br/>Github: <a class="link" href="https://github.com/hugo-lui" target="_blank" rel="noreferrer noopener">github.com/hugo-lui</a><br/>Linkedin: <a class="link" href="https://www.linkedin.com/in/hugo-lui-454115254" target="_blank" rel="noreferrer noopener">linkedin.com/in/hugo-lui-454115254</a></p>
                </div>
                <div class="content-section-1">
                    <img class="content-image-contact" src={email} alt="Email"/>
                </div>
            </div>
        </div>
    );
}