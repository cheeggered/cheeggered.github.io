import React from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "../ThemeContext";
import "../styles.css";
import { blob } from "stream/consumers";

const Home: React.FC = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <section id="home" className={`home-page`}>
      <div className="flex flex-col justify-start px-10 md:px-20 lg:px-40 mt-10">
        <div
          className={`text-lg lg:text-2xl primary lg:mb-2 font-bold ${
            toggleDarkMode && "text-white"
          }`}
        >
          Mah Chee Teng
        </div>
        <div
          className={`text-sm lg:text-xl mb-10 lg:mb-20 ${
            toggleDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Student
        </div>

        <div
          className={`typewriter-text text-2xl md:text-6xl lg:text-7xl leading-tight font-extrabold ${
            toggleDarkMode && "text-white"
          }`}
          id="typewriter-text"
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 35,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Hey there! I'm a penultimate CS & Statistics student from NUS."
                )
                .pauseFor(10) // Pause for 2000 milliseconds (2 seconds) after typin
                .start();
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
