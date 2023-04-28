import React from "react";
import dgLogo from "../../assets/icons/logo-dark.png";
import "./styles.css";

const Logo = () => {
  return (
    <>
      <a href="https://github.com/dgmaikon" target="_blank">
        <img className="logo-icon" src={dgLogo} alt="Logo-icon" />
      </a>
    </>
  );
};
export default Logo;
