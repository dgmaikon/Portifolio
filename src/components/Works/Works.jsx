import React from "react";
import projects from "./works.js";
import "./works.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Works(props) {
  return (
    <section className="works-section">
      <div className="works-items">
        <h2 className="works-title">{props.title}</h2>
        <p className="works-content">{props.content}</p>
        <div className="works-links">
          <a
            className="icon-link"
            target="_blank"
            href="https://github.com/dgmaikon?tab=repositories"
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a className="icon-link" target="_blank" href="">
            <FontAwesomeIcon icon="fa-solid fa-link" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Works;
