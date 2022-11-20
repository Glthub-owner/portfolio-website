import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub } from "@mui/icons-material";
import "../styles/ProjectDisplay.css";
import { FaUpload } from "react-icons/fa";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <img src={project.image} />
      <div className="startIcons">
        <a href={project.liveWebsite} target="_blank" rel="noreferrer noopener">
          <FaUpload className="live-icon" title="Live Website" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer noopener"
          title="Github Link"
        >
          <GitHub />
        </a>
      </div>
      <p>
        <b>Technologies:</b> {project.technologies}
      </p>
      <div className="desc-container">
        <p>
          <b>Description:</b> {project.Description}
        </p>
      </div>
    </div>
  );
}

export default ProjectDisplay;
