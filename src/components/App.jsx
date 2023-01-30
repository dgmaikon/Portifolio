import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Typewriter } from 'react-simple-typewriter';

import Navbar from './Navbar/Navbar.jsx';
import MyComponent from "./Header/typeWriter.jsx";
import About from './About/About.jsx';

import '../components/root.css'
import '../components/Header/header.css'
import '../components/Navbar/navbar.css'
import '../components/About/about.css'

function App() {
  return (
    <div>
      <Navbar />
      <MyComponent />
      <About />
    </div>
  );
}

export default App;
