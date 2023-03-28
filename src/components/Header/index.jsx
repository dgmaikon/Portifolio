import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "./styles.css";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 50 ? setVisible(true) : setVisible(false);
  };

  const clickTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Oper
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="header">
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
      <button
        className="myBtn"
        style={{ display: visible ? "inline" : "none" }}
        onClick={clickTop}
      >
        Top
      </button>
    </div>
  );
};

export default Header;
