import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../assets/react.svg";

const Navbar = () => {

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black hover:bg-black w-24 h-12 rounded-lg text-xl flex justify-center items-center"
      : "hover:bg-black w-24 h-12 rounded-lg text-xl flex justify-center items-center"

  return (
    <>
      <div className="flex w-full h-24 bg-indigo-700 text-white justify-between items-center px-20">
        <div className="flex gap-2">
          <img src={logo} alt="logo" />
          <div className="font-semibold text-3xl">React Jobs</div>
        </div>

        <div className="flex gap-10">
          <NavLink
            to="/"
            className={linkClass}
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={linkClass}
          >
            Jobs
          </NavLink>
          <NavLink
            to="/add-job"
            className={linkClass}
          >
            Add Job
          </NavLink>
        </div>
      </div>
      <hr className="bg-slate-500" />
    </>
  );
};

export default Navbar;
