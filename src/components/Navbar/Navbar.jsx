import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logoAI.jpg";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="navbar bg-base-100  max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-models">All Models</NavLink>
            </li>
            <li>
              <NavLink to="/add-model">Add Model</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src={logoImg}
            alt=""
          />
          <p className=" text-3xl">
            AI <span className="text-blue-600">Nexus</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all-models">All Models</NavLink>
          </li>
          <li>
            <NavLink to="/add-model">Add Model</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-primary" to="/auth-login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
