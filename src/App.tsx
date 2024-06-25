import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Home from "./components/Home";
import React from "react";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <hr className="mt-36" />
      <Experience />
      <hr />
      <About />
    </div>
  );
};

export default App;
