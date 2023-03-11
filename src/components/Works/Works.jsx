import React from "react";
import workProjects from "./works.js";
import "./works.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function Works(props) {
  return (
    <section className="works-section">
      <div className="works-items">
        <h2 className="works-title">{props.title}</h2>
        <p className="works-content">{props.content}</p>
        <div className="works-links">
          <a className="icon-link" target="_blank" href={props.link}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="icon-link" target="_blank" href={props.linkWeb}>
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Works;
