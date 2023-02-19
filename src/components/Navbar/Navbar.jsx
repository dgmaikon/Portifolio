import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <a className="nav-item" href="#header">
          Home
        </a>
        <a className="nav-item" href="#about">
          About
        </a>
        <a className="nav-item" href="#skills">
          Skills
        </a>
        <a className="nav-item" href="#projects">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
