import react, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Typewriter } from "react-simple-typewriter";

//Components JSX
import Navbar from "./Navbar/Navbar.jsx";
import Header from "./Header/Header.jsx";
import About from "./About/About.jsx";
import Skills from "./Skills/Skills.jsx";
import Works from "./Works/Works.jsx";
import Title from "./Works/Title-Work.jsx";

//JS
import projects from "./Works/works.js";

//CSS
import "./App.css";

function createEntry(workEntry) {
  return (
    <Works
      key={workEntry.id}
      id={workEntry.id}
      title={workEntry.title}
      content={workEntry.content}
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
      <div className="projects">{projects.map(createEntry)}</div>
    </>
  );
}

export default App;
