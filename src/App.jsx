import React from "react";
import ReactDOM from "react-dom/client";

//Components JSX
import Header from "./components/Header";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Button from "./components/Button";

//CSS
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Title />
      <About />
      <Skills />
      <Products />
      <Button />
      <Footer />
    </>
  );
};

export default App;
