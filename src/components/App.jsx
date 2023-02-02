import react , { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Typewriter } from 'react-simple-typewriter';

//Components JSX
import Navbar from './Navbar/Navbar.jsx';
import Header from "./Header/typeWriter.jsx";
import About from './About/About.jsx';
import Skills from './Skills/Skills.jsx';
import Works from './Works/Works.jsx';

//JS
import projects from './Works/works.js';
import './Navbar/nav.js';

//CSS
import './root.css'
import './Header/header.css'
import './Navbar/navbar.css'
import './About/about.css'
import './Skills/skills.css'
import './Works/works.css'

function createEntry(workEntry) {
  return (
    <Works 
      key={workEntry.id}
      id={workEntry.id}
      title={workEntry.title}
      content={workEntry.content}
    />
  )
}


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <div id='works'>
      <button className="glowing-btn"><span className='glowing-txt'>W<span className='faulty-letter'>O</span>RKS</span></button>
        {projects.map(createEntry)}
      </div>
    </>
  );
}

export default App;
