import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TitleVariants } from "../../Variables";

const TitleWorks = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.button
      className="glowing-btn"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={TitleVariants}
    >
      <span className="glowing-txt">
        W<span className="faulty-letter">O</span>RKS
      </span>
    </motion.button>
  );
};

export default TitleWorks;
