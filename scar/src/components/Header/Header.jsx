import React from "react";
import { NavLink } from "react-router-dom";
  

export const Header = () => {
  return (
    <div className="w-screen bg-blue-900 shadow-xl shadow-gray-700">
      <ul className="flex w-full h-14 justify-center items-center gap-10 text-xl text-white font-semibold tracking-wide uppercase rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.5)]">
        <li>
          <NavLink
            exact
            to="/"  
            className={({ isActive }) =>
              `px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:text-white hover:shadow-xl ${
                isActive ? "bg-white text-blue-900 font-bold shadow-2xl" : ""
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignUp"
            className={({ isActive }) =>
              `px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:text-white hover:shadow-xl ${
                isActive ? "bg-white text-blue-900 font-bold shadow-2xl" : ""
              }`
            }
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              `px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:text-white hover:shadow-xl ${
                isActive ? "bg-white text-blue-900 font-bold shadow-2xl" : ""
              }`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contactus"
            className={({ isActive }) =>
              `px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:bg-blue-700 hover:text-white hover:shadow-xl ${
                isActive ? "bg-white text-blue-900 font-bold shadow-2xl" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};