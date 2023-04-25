import React from "react";
import dgLogo from "../../assets/icons/logo-dark.png";
import "./styles.css";

const Logo = () => {
  return (
    <>
      <a href="#main">
        <img className="logo-icon" src={dgLogo} alt="Logo-icon" />
      </a>
    </>
  );
};
export default Logo;
