import React, { useState } from "react";
import "./styles.css";

const Button = () => {
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
    <button
      className="myBtn"
      style={{ display: visible ? "inline" : "none" }}
      onClick={clickTop}
    >
      Top
    </button>
  );
};

export default Button;
