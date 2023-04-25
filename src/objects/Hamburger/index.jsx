import React, { useState } from "react";
import "./styles.css";

const MenuHamburger = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
    return setShowNav(!showNav);
  };

  return (
    <button
      className={isOpen ? "hamburger open" : "hamburger"}
      onClick={handleClick}
    >
      <span className="hamburger-item"></span>
      <span className="hamburger-item"></span>
      <span className="hamburger-item"></span>
    </button>
  );
};
export default MenuHamburger;
