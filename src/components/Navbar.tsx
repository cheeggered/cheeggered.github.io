import React from "react";
import NavLink from "./NavLink";
import "../styles.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="ml-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-5">
        <div className="flex items-center justify-end h-16">
          <div className="flex space-x-10">
            <NavLink
              href="#home"
              className="py-1 text-xs font-medium hover:text-gray-950"
              active={window.location.hash === "#home"}
            >
              Home
            </NavLink>
            <NavLink
              href="#experiences"
              className="py-1 text-xs font-medium hover:text-gray-950"
              active={window.location.hash === "#experiences"}
            >
              Experiences
            </NavLink>
            <NavLink
              href="#about"
              className="py-1 text-xs font-medium hover:text-gray-950"
              active={window.location.hash === "#about"}
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
