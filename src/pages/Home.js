import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import "../styles/Home.css";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaNpm } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Ilia.</h2>
        <div className="prompt">
          <p>
            I am a React developer and a IT student who is willing to assist
            companies in developing websites.
          </p>
          <a
            href="https://www.linkedin.com/in/ilia-jaghmaidze-a16a12257/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedIn />
          </a>
          <a
            href="https://github.com/Glthub-owner"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHub />
          </a>
        </div>
      </div>
      <div className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-container">
          <div className="skills-items">
            <FaReact className="icons" />
            ReactJS
          </div>
          <div className="skills-items">
            <FaHtml5 className="icons" />
            HTML
          </div>
          <div className="skills-items">
            <FaCss3Alt className="icons" />
            CSS
          </div>
          <div className="skills-items">
            <FaSass className="icons" />
            SCSS
          </div>
          <div className="skills-items">
            <SiJavascript className="icons" />
            Javascript
          </div>
          <div className="skills-items">
            <FaNpm className="icons" />
            NPM
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
