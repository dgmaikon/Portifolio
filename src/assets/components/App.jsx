import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Typewriter } from 'react-simple-typewriter';

import Navbar from './Navbar';
import MyComponent from "./typeWriter.jsx";
import About from './About';

import '../css/root.css'
import '../css/navbar.css'
import '../css/about.css'

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
