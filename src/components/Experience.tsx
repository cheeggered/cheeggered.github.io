import React from "react";
import { useTheme } from "../ThemeContext";

const Experience = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <section id="experiences" className="experience-page">
      <div
        className={`flex justify-center text-4xl font-bold ${
          toggleDarkMode ? "text-gray-100" : "text-gray-950"
        } mt-12`}
      >
        Experiences
      </div>
      <div className="timeline-container">
        <ul>
          <li
            style={
              {
                "--accent-color": toggleDarkMode ? "#666" : "#C2C2C2",
                "--hover-color": toggleDarkMode ? "#C2C2C2" : "#666",
                "--container-color": toggleDarkMode ? "#292524" : "white",
              } as React.CSSProperties
            }
          >
            <div className="date">May 2024 - Present</div>
            <div className={`title ${toggleDarkMode && "text-gray-300"}`}>
              Software Engineer Intern
              <br />
              <div className={`text-sm ${toggleDarkMode && "text-gray-300"}`}>
                @ TradeFlow Capital Management
              </div>
            </div>
            <div className="descr rounded-b-lg">
              <p
                className={`text-sm font-light ${
                  toggleDarkMode && "text-gray-300"
                }`}
              >
                Working on a management platform that facilitates trades.
              </p>
            </div>
          </li>
          <li
            style={
              {
                "--accent-color": toggleDarkMode ? "#666" : "#C2C2C2",
                "--hover-color": toggleDarkMode ? "#C2C2C2" : "#666",
                "--container-color": toggleDarkMode ? "#292524" : "white",
              } as React.CSSProperties
            }
          >
            <div className="date">Aug 2023 - Dec 2023</div>
            <div className={`title ${toggleDarkMode && "text-gray-300"}`}>
              Contributor, UI designer
              <br />
              <div className={`text-sm ${toggleDarkMode && "text-gray-300"}`}>
                for MediConnect
              </div>
            </div>
            <div className="descr rounded-b-lg">
              <p
                className={`text-sm font-light ${
                  toggleDarkMode && "text-gray-300"
                }`}
              >
                Collaborated with 4 team members to develop a desktop
                application targeted to help receptionists in small GP clinics
                accomplish their administrative tasks.
              </p>
            </div>
          </li>
          <li
            style={
              {
                "--accent-color": toggleDarkMode ? "#666" : "#C2C2C2",
                "--hover-color": toggleDarkMode ? "#C2C2C2" : "#666",
                "--container-color": toggleDarkMode ? "#292524" : "white",
              } as React.CSSProperties
            }
          >
            <div className="date">Jun 2023 - Aug 2023</div>
            <div className={`title ${toggleDarkMode && "text-gray-300"}`}>
              Contributor, UI designer
              <br />
              <div className={`text-sm ${toggleDarkMode && "text-gray-300"}`}>
                for Indecisive Foodies
              </div>
            </div>
            <div className="descr rounded-b-lg">
              <p
                className={`text-sm font-light ${
                  toggleDarkMode && "text-gray-300"
                }`}
              >
                Developed a cross-platform mobile application that recommends
                users various cuisines and food options using NodeJS, Supabase,
                and React Native.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
