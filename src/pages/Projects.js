import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>

      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
            <ProjectItem
              key={index}
              id={index}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
      <a
        href="https://github.com/Glthub-owner/portfolio-website"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="portfolio">Portfolio Code</button>
      </a>
    </div>
  );
}

export default Projects;
