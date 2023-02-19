import React from "react";
import projects from "./works.js";
import "./works.css";

function Works(props) {
  return (
    <section className="works-section">
      <div className="works-items">
        <a className="external" target="_blank" href="">
          <img src="src/assets/icons/github.png" alt="icon-external" />
        </a>
        <a className="external" target="_blank" href="">
          <img src="src/assets/icons/external.png" alt="icon-external" />
        </a>
        <h2 className="works-title">{props.title}</h2>
        <p className="works-content">{props.content}</p>
      </div>
    </section>
  );
}

export default Works;
