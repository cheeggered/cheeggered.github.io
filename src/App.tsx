import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Home from "./components/Home";
import { ThemeProvider, useTheme } from "./ThemeContext";

const App = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <div className={`app ${toggleDarkMode ? "bg-black" : ""}`}>
      <Navbar />
      <Home />
      <hr className="mt-36" />
      <Experience />
      <hr />
      <About />
    </div>
  );
};

const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
