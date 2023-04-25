import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import { fadeVariants } from "../../Variables";

import "./styles.css";

const Title = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.article
      id="main"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeVariants}
    >
      <h1 className="main-title">
        Maikon Natã{" "}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["eu sou", "Gamer", "e sou", "Front-End Developer"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={60}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </motion.article>
  );
};

export default Title;
