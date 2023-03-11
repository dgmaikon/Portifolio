import React, { useState } from "react";
import "./navbar.css";

import { motion, useTransform } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="nav">
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
