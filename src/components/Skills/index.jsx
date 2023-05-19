import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants, TitleVariants } from "../../Variables";

import changeDescription from "../../data/changeDescription.json";

import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hoveredItem, setHoveredItem] = useState(false);
  const [text, setText] = useState("Passe o mouse em algum icone.");

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleMouseEnter = (itemId, itemDescription) => {
    setHoveredItem(itemId);
    setText(itemDescription);
    console.log(itemDescription);
  };

  const handleMouseLeave = () => {
    setHoveredItem(false);
    setText("Passe o mouse em algum icone.");
  };

  const skillsData = changeDescription.map((item) => {
    return (
      <ul className="description-list" key={item.id}>
        <li
          className="description-item"
          onMouseEnter={() => handleMouseEnter(item.id, item.description)}
          onMouseLeave={handleMouseLeave}
        >
          <i className="description-link">
            <FontAwesomeIcon icon={item.icon} />
          </i>
        </li>
      </ul>
    );
  });

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
          SK
          <span className="faulty-letter">I</span>LLS
        </span>
      </motion.button>
      <div className="skills-wrapper">
        <h2 className="change-description">{text}</h2>
        <aside className="description">{skillsData}</aside>
      </div>
    </motion.article>
  );
};

export default Skills;
