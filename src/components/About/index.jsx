import React, { useEffect } from "react";

import Social from "../../objects/Social";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants, TitleVariants } from "../../Variables";

import "./styles.css";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      id="about"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      <motion.button
        className="glowing-btn"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={TitleVariants}
      >
        <span className="glowing-txt">
          <span className="faulty-letter">A</span>BOUT
        </span>
      </motion.button>

      <div className="about-wrapper">
        <article className="about-profile"></article>
        <div className="about-content">
          <p className="about-text">
            Meu nome é Maikon Natã, tenho 25 anos, sou Front-End developer. Eu
            trabalho com HTML, CSS e Javascript para desenvolver interfaces
            amigáveis e intuitivas para os usuários.
          </p>
          <Social />
        </div>
      </div>
    </motion.article>
  );
};

export default About;
