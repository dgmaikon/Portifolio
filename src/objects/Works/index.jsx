import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import projectsData from "../../data/works.json";

import "./styles.css";

const Projects = () => {
  const worksData = projectsData.map((item) => {
    return (
      <div className="project-items" key={item.id}>
        <h2 className="project-title-content">{item.title}</h2>
        <p className="project-content">{item.content}</p>
        <div className="project-links">
          <a className="icon-link" target="_blank" href={item.link}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="icon-link" target="_blank" href={item.linkWeb}>
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    );
  });
  return <article id="project-section">{worksData}</article>;
};

export default Projects;
