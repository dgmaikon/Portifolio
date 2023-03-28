import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

const Header = () => {
  return (
    <header id="header">
      <h1 className="main-title">
        Maikon Natã{" "}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["eu sou", "Gamer", "Front-End Developer"]}
            loop={2}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </header>
  );
};

export default Header;
