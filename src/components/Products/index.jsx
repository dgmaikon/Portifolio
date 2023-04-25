import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeVariants } from "../../Variables";

import TitleWorks from "../../objects/Works/Title-Work";
import Projects from "../../objects/Works";

import "./styles.css";

const Products = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      className="products"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      <TitleWorks />
      <Projects />
    </motion.article>
  );
};

export default Products;
