import React, { useState, useEffect } from "react";
// import { link } from "react-scroll";
import "./styles.css";

const Navbar = () => {
  const [scrollPosition, setscrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollPosition(window.scrollY);
    });
  }, []);

  return (
    <nav className="{scrollPosition > 0 ? navbar-scrolled : navbar}">
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#worksProjects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
