import React, { useState, useEffect } from "react";
import Logo from "../../objects/Logo";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCode,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const NavigationFooter = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="nav-footer">
      <ul className={width < 481 ? "visible" : "invible"}>
        <li className="nav-items-footer">
          <a className="nav-link" href="#main">
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </li>
        <li className="nav-items-footer">
          <a className="nav-link" href="#about">
            <FontAwesomeIcon icon={faAddressCard} />
          </a>
        </li>
        <li className="nav-items-footer">
            <Logo />
        </li>
        <li className="nav-items-footer">
          <a className="nav-link" href="#skills">
            <FontAwesomeIcon icon={faCode} />
          </a>
        </li>
        <li className="nav-items-footer">
          <a className="nav-link" href="#project-section">
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationFooter;
