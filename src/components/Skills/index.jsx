import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faSass,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 100 },
};

const TitleVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, y: 100 },
};

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      id="skills"
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
          S<span className="faulty-letter">K</span>ILLS
        </span>
      </motion.button>

      <div className="cards-wrapper">
        <ul className="cards-list">
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faHtml5} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faCss3Alt} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faJs} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faReact} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faNodeJs} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faGitAlt} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faSass} />
            </i>
          </li>
          <li className="card-item">
            <i className="card-link" href="https://www.instagram.com/dgmaikon/">
              <FontAwesomeIcon icon={faBootstrap} />
            </i>
          </li>
        </ul>
      </div>
    </motion.article>
  );
};

export default Skills;
