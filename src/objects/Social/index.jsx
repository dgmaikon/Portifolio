import React from "react";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const social = () => {
  return (
    <div className="social-wrapper-about">
      <ul className="social-list-about">
        <li className="social-item">
          <a
            className="social-link"
            href="https://www.instagram.com/dgmaikon/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="social-item">
          <a
            className="social-link"
            href="https://discordapp.com/channels/@me/195164414176002058"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
        <li className="social-item">
          <a
            className="social-link"
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
export default social;
