import react from "react";
import ReactDOM from "react-dom/client";

//Components JSX
import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Products />
      <Button />
      <Footer />
    </>
  );
};

export default App;
