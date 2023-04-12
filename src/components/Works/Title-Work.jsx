import React, { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TitleVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, y: 100 },
};

const Title = () => {
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

export default Title;
