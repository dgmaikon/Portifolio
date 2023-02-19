import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <button className="glowing-btn">
        <span className="glowing-txt">
          A<span className="faulty-letter">B</span>OUT
        </span>
      </button>
      <p className="about-text">
        Olá me chamo Maikon Natã sou Front-End Developer,
        <span>
          {" "}
          Estou sempre procurando aprender coisas novas e melhorando a cada dia.
        </span>
      </p>
    </div>
  );
};

export default About;
