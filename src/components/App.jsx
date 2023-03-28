import react from "react";
import ReactDOM from "react-dom/client";

//Components JSX
import Navbar from "./Navbar/";
import Header from "./Header/";
import About from "./About/";
import Skills from "./Skills/";
import Works from "./Works/";
import Title from "./Works/Title-Work.jsx";
import Footer from "./Footer/";
import Button from "./Button/";

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

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Title />
      <div id="worksProjects">{worksProjects.map(createEntry)}</div>
      <Button />
      <Footer />
    </>
  );
};

export default App;
