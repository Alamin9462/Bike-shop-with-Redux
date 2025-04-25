import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import ProfileDropdownModal from "./ProfileDropdown";

const Navber = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark"); 
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark"); 
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const link = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-product">All Products</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </>
  );

  return (
    <div
      className={`navbar shadow-sm ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-10">
            {link}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">BikeShop</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4 mr-2 relative">
        <NavLink to="/cart" className="btn btn-ghost">
          <ShoppingCartIcon className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-purple-500"}`} />
        </NavLink>

        <div className="relative">
          <button
            onClick={() => setShowProfileDropdown((prev) => !prev)}
            className="btn btn-ghost"
          >
            <UserCircleIcon className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-gray-600"}`} />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 z-50">
              <ProfileDropdownModal onClose={() => setShowProfileDropdown(false)} />
            </div>
          )}
        </div>

        <button
          onClick={toggleTheme}
          className="btn btn-ghost text-xl"
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Navber;
