import React from "react";
import dgLogo from "../../assets/icons/logo-dark.png";
import "./styles.css";

const PreLoader = () => {
  return (
    <div className="pre-loader">
      <div className="loader">
        <img src={dgLogo} alt="" />
      </div>
    </div>
  );
};

export default PreLoader;
