import React from "react";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <article id="about">
      <button className="glowing-btn">
        <span className="glowing-txt">
          A<span className="faulty-letter">B</span>OUT
        </span>
      </button>
      <div className="about-wrapper">
        <article className="about-profile"></article>
        <div className="about-content">
          <p className="about-text">
            Meu nome é Maikon Natã, tenho 25 anos, sou Front-End developer. Eu
            trabalho com HTML, CSS e Javascript para desenvolver interfaces
            amigáveis e intuitivas para os usuários.
          </p>
          <div className="cards-wrapper">
            <ul className="cards-list">
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://www.instagram.com/dgmaikon/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://www.instagram.com/dgmaikon/"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://www.instagram.com/dgmaikon/"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://www.instagram.com/dgmaikon/"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
