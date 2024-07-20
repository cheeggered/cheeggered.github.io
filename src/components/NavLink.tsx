import React from "react";

interface NavLinkProps {
  href: string;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  toggleDarkMode: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  active = false,
  className = "",
  toggleDarkMode,
  children,
}) => {
  const classes = active
    ? toggleDarkMode
      ? "inline-flex items-center px-1 pt-1 border-b-2 border-gray-200 text-sm font-medium leading-5 text-gray-100 focus:outline-none focus:border-indigo-200 transition duration-150 ease-in-out"
      : "inline-flex items-center px-1 pt-1 border-b-2 border-gray-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
    : toggleDarkMode
    ? "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-white hover:border-gray-300"
    : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";

  return (
    <a href={href} className={`${classes} ${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
