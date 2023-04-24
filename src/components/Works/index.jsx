import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import projectsData from "../../data/works.json";

import "./styles.css";

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 50 },
};

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const worksData = projectsData.map((item) => {
    return (
      <div className="project-items" key={item.id}>
        <h2 className="project-title-content">{item.title}</h2>
        <p className="project-content">{item.content}</p>
        <div className="project-links">
          <a className="icon-link" target="_blank" href={item.link}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="icon-link" target="_blank" href={item.linkWeb}>
            <FontAwesomeIcon icon={faLink} />
          </a>
        </div>
      </div>
    );
  });
  return (
    <motion.article
      id="project-section"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      {worksData}
    </motion.article>
  );
};

export default Projects;
