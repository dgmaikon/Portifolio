import React from "react";

import "./styles.css";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#main">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#project-section">Works</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
