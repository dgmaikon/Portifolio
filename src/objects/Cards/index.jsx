import React from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <ul className="cards-list">
        <li className="card-item">
          <a
            className="card-link"
            href="https://www.instagram.com/dgmaikon/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="card-item">
          <a
            className="card-link"
            href="https://discordapp.com/channels/@me/195164414176002058"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className="card-item">
          <a
            className="card-link"
            href="https://www.linkedin.com/in/dgmaikondev/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Cards;
