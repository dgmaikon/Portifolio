import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants } from "../../Variables";

import "./styles.css";

const PreLoader = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div className="pre-loader"
    ref={ref}
    animate={controls}
    initial="hidden"
    variants={fadeVariants}>
      <div className="loader">
        <a href="https://github.com/dgmaikon" alt="">
         <h2 className="logo-left">d</h2>
         <h2 className="logo-right">g</h2>
        </a>
      </div>
    </motion.div>
  );
};

export default PreLoader;
