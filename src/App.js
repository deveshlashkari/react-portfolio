import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Main from "./Components/Main/Main";
import About from "./Components/About";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
