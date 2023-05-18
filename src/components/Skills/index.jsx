import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants } from "../../Variables";

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
      <div className="skills-description">
        <h2 className="skills-title">Skills</h2>
        <h2 className="change-description">{text}</h2>
      </div>
      <aside className="description">{skillsData}</aside>;
    </motion.article>
  );
};

export default Skills;
