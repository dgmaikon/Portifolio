import react , { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Typewriter } from 'react-simple-typewriter';

//Components JSX
import Navbar from './Navbar/Navbar.jsx';
import MyComponent from "./Header/typeWriter.jsx";
import About from './About/About.jsx';
import Skills from './skills/skills.jsx';

//JS
import '../components/Navbar/nav.js';

//CSS
import '../components/root.css'
import '../components/Header/header.css'
import '../components/Navbar/navbar.css'
import '../components/About/about.css'
import '../components/skills/skills.css'

function App() {
  return (
    <>
      <Navbar />
      <MyComponent />
      <About />
      <Skills />
    </>
  );
}

export default App;
