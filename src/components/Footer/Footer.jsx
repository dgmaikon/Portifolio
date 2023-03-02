import React from "react";
import "./footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section id="footer">
      <ul className="footer-items">
        <li className="footer-link">
          <a href="#">Home</a>
        </li>
        <li className="footer-link">
          <a href="#about">About</a>
        </li>
        <li className="footer-link">
          <a href="">Projects</a>
        </li>
        <li className="footer-link">
          <a href="">Skills</a>
        </li>
      </ul>
      <div className="footer-socials">
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">
        Copyright © <span>{year}</span>
      </p>
    </section>
  );
}

export default Footer;
