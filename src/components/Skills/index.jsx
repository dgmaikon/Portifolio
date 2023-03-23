import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section id="skills">
      <button className="glowing-btn">
        <span className="glowing-txt">
          S<span className="faulty-letter">K</span>ILLS
        </span>
      </button>

      <div className="cards-wrapper">
        <ul className="cards-list">
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faHtml5} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faCss3Alt} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faJs} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faReact} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faNodeJs} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faGitAlt} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faSass} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faBootstrap} />
            </i>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
