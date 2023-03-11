import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Components JSX
import Navbar from "./Navbar/Navbar.jsx";
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import Skills from "./Skills/Skills.jsx";
import Works from "./Works/Works.jsx";
import Title from "./Works/Title-Work.jsx";
import Footer from "./Footer/Footer.jsx";

//JS
import worksProjects from "./Works/works.js";

//CSS
import "./App.css";

function createEntry(workEntry) {
  return (
    <Works
      key={workEntry.id}
      id={workEntry.id}
      title={workEntry.title}
      content={workEntry.content}
      link={workEntry.link}
      linkWeb={workEntry.linkWeb}
    />
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Title />
      <div id="worksProjects">{worksProjects.map(createEntry)}</div>
      <Footer />
    </>
  );
}

export default App;
