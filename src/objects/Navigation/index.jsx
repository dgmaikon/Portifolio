import React, { useState, useEffect } from "react";

import "./styles.css";

const Navigation = () => {
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
    <nav>
      <ul className={width > 770 ? "nav-items" : "invisible"}>
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
