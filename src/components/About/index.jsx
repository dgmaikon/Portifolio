import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants, TitleVariants } from "../../Variables";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

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
      <motion.button className="glowing-btn" variants={TitleVariants}>
        <span className="glowing-txt">
          A<span className="faulty-letter">B</span>OUT
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
          <div className="cards-wrapper">
            <ul className="cards-list">
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://www.instagram.com/dgmaikon/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://discordapp.com/channels/@me/195164414176002058"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>
              <li className="card-item">
                <a
                  className="card-link"
                  href="https://www.linkedin.com/in/dgmaikondev/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default About;
