import React from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "../ThemeContext";
import "../styles.css";
import { blob } from "stream/consumers";

const Home: React.FC = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <section id="home" className={`home-page`}>
      <div className="flex flex-col justify-start px-44">
        <div
          className={`text-2xl primary mb-2 font-bold ${
            toggleDarkMode && "text-white"
          }`}
        >
          Mah Chee Teng
        </div>
        <div
          className={`text-xl mb-20 ${
            toggleDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Student
        </div>

        <div
          className={`typewriter-text text-7xl leading-tight font-extrabold ${
            toggleDarkMode && "text-white"
          }`}
          id="typewriter-text"
        >
          <Typewriter
            options={{
              strings: ["Hey there! I'm a CS & Statistics student from NUS."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
