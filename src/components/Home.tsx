import React from "react";
import Typewriter from "typewriter-effect";
import "../styles.css";

const Home = () => {
  return (
    <section id="home" className="home-page">
      <div className="flex flex-col justify-start px-44">
        <div className="text-2xl primary mb-2 font-bold">Mah Chee Teng</div>
        <div className="text-xl text-gray-700 mb-20">Student</div>

        <div
          className="typewriter-text text-7xl leading-tight font-extrabold"
          id="typewriter-text"
        >
          <Typewriter
            options={{
              strings: [
                "Hey there! I'm a Computer Science & Statistics student from the National University of Singapore.",
              ],
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
