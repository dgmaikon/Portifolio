import React from "react";
import Hamburger from "hamburger-react";

import "./styles.css";

const HamburgerMenu = ({ handleClick }) => {
  return (
    <div className="hamburger-menu" onClick={handleClick}>
      <Hamburger color="#61efff" />
    </div>
  );
};

export default HamburgerMenu;
