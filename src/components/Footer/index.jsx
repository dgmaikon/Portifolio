import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FooterVariants } from "../../Variables";

import "./styles.css";

function Footer() {
  const year = new Date().getFullYear();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="footer"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={FooterVariants}
    >
      <p className="copyright">
        Copyright © <span>{year}</span>
      </p>
      <h3 className="footer-text">
        Developed by:{" "}
        <a href="https://github.com/dgmaikon" target="_blank">
          @dgmaikon
        </a>
      </h3>
    </motion.section>
  );
}

export default Footer;
