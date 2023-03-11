import React from "react";
import "./footer.css";
import "../Navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section id="footer">
      <div className="footer-socials">
        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>

      <ul className="nav-items">
        <li className="nav-item">
          <a href="#">Home</a>
        </li>
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="">Skills</a>
        </li>
        <li className="nav-item">
          <a href="">Projects</a>
        </li>
      </ul>

      <p className="copyright">
        Copyright © <span>{year}</span>
      </p>
    </section>
  );
}

export default Footer;
