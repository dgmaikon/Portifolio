import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

//Components JSX
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Button from "./components/Button";
import NavigationFooter from "./components/NavigationFooter";
import PreLoader from "./components/PreLoader";
import Navbar from "./components/Navbar";

//CSS
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Title />
          <About />
          <Skills />
          <Products />
          <Button />
          <Footer />
          <NavigationFooter />
        </>
      )}
    </>
  );
};

export default App;
