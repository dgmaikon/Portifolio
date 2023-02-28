import React from "react";
import projects from "./works.js";
import "./works.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Works(props) {
  return (
    <section className="works-section">
      <div className="works-items">
        <a
          className="external"
          target="_blank"
          href="https://github.com/dgmaikon?tab=repositories"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
        <h2 className="works-title">{props.title}</h2>
        <p className="works-content">{props.content}</p>
      </div>
    </section>
  );
}

export default Works;
