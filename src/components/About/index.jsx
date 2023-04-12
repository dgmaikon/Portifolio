import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 100 },
};

const TitleVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, y: 100 },
};

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
            <motion.ul
              className="cards-list"
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={fadeVariants}
            >
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
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default About;
