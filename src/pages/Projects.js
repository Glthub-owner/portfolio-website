import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  const frontendProjects = ProjectList.slice(5);
  const backendProjects = ProjectList.slice(0, 5);

  return (
    <div className="projects">
      <h1>Backend Projects</h1>
      <div className="projectList">
        {backendProjects.map((project, index) => (
          <ProjectItem
            key={index}
            id={index}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
      {frontendProjects.length > 0 && (
        <div>
          <h1>Frontend Projects</h1>
          <div className="projectList">
            {frontendProjects.map((project, index) => (
              <ProjectItem
                key={index + 5}
                id={index + 5}
                name={project.name}
                image={project.image}
              />
            ))}
          </div>
        </div>
      )}
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
