import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 100 },
};

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
      variants={fadeVariants}
    >
      <p className="copyright">
        Copyright © <span>{year}</span>
      </p>
      <h3 className="footer-text">
        Developed by: <a href="https://github.com/dgmaikon">@dgmaikon</a>
      </h3>
    </motion.section>
  );
}

export default Footer;
