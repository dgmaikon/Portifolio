import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants } from "../../Variables";
import HamburgerMenu from "../Hamburger";

import Logo from "../../objects/Logo";
import Navigation from "../../objects/Navigation";

import "./styles.css";

const Navbar = () => {
  const [scrollPosition, setscrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setscrollPosition(window.scrollY);
    });
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={scrollPosition > 0 ? "header scrolled" : "header"}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      <div className="navbar-logo">
        <Logo />
      </div>

      <HamburgerMenu handleClick={handleClick} />
      {isOpen && (
        <nav className="nav-hamburger">
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
      )}
      <Navigation />
    </motion.header>
  );
};

export default Navbar;
