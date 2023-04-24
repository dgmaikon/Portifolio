import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo from "../../objects/Logo";
import Navigation from "../../objects/Navigation";

import "./styles.css";
import MenuHamburger from "../Hamburger";

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: -30 },
};

const Header = () => {
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
    <motion.header
      className={scrollPosition > 0 ? "header scrolled" : "header"}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      <Logo />
      <Navigation />
      <MenuHamburger />
    </motion.header>
  );
};

export default Header;
