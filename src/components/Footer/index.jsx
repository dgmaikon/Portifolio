import React from "react";
import "./styles.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="footer">
      <p className="copyright">
        Copyright © <span>{year}</span>
      </p>
      <h3 className="footer-text">
        Developed by: <a href="https://github.com/dgmaikon">@dgmaikon</a>
      </h3>
    </section>
  );
}

export default Footer;
