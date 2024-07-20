import React from "react";
import NavLink from "./NavLink";
import { IconButton } from "@mui/material";
import { LightMode, Brightness2 } from "@mui/icons-material";
import { useTheme } from "../ThemeContext";
import "../styles.css";

const Navbar: React.FC = () => {
  const { toggleDarkMode, toggleDarkTheme } = useTheme();

  return (
    <nav className={`navbar ${toggleDarkMode ? "bg-black" : ""}`}>
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 border-b-black">
        <div>
          <IconButton color="inherit" onClick={toggleDarkTheme}>
            {toggleDarkMode ? (
              <LightMode className="text-white" />
            ) : (
              <Brightness2 />
            )}
          </IconButton>
        </div>
        <div className="flex justify-end space-x-10">
          <NavLink
            href="#home"
            className={`py-1 text-xs font-medium hover:${
              toggleDarkMode ? "text-gray-100" : "text-gray-950"
            }`}
            active={window.location.hash === "#home"}
            toggleDarkMode={toggleDarkMode}
          >
            Home
          </NavLink>
          <NavLink
            href="#experiences"
            className={`py-1 text-xs font-medium hover:${
              toggleDarkMode ? "text-gray-100" : "text-gray-950"
            }`}
            active={window.location.hash === "#experiences"}
            toggleDarkMode={toggleDarkMode}
          >
            Experiences
          </NavLink>
          <NavLink
            href="#about"
            className={`py-1 text-xs font-medium hover:${
              toggleDarkMode ? "text-gray-100" : "text-gray-950"
            }`}
            active={window.location.hash === "#about"}
            toggleDarkMode={toggleDarkMode}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
