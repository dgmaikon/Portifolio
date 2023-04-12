import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: -30 },
};

const Navbar = () => {
  const [scrollPosition, setscrollPosition] = useState(0);

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

  return (
    <motion.nav
      className="{scrollPosition > 0 ? navbar-scrolled : navbar}"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      <ul className="nav-items">
        <li className="nav-item">
          <a href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a href="#worksProjects">Works</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
