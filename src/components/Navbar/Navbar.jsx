import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logoAI.jpg";
import { AuthContext } from "../../context/AuthContext";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";
import { GoHomeFill } from "react-icons/go";
import { IoLogoModelS } from "react-icons/io";
import { ImBoxAdd } from "react-icons/im";
import { IoLogIn, IoLogOut } from "react-icons/io5";
const Navbar = () => {
  const { user, loading, signOutFun } = use(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutFun()
          .then(() => {
            Swal.fire({
              title: "LogOut!",
              text: "LogOut Successfully.",
              icon: "success",
            });
          })
          .catch((e) => {
            console.log(e.message);
          });
      }
    });
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  return (
    <div className="navbar bg-base-100  max-w-7xl mx-auto rounded-full px-3">
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
              <NavLink to="/">
                {" "}
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-models">
                {" "}
                <IoLogoModelS />
                All Models
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-model">
                {" "}
                <ImBoxAdd />
                Add Model
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="hidden md:block w-[60px] h-[60px] rounded-full"
            src={logoImg}
            alt=""
          />
          <p className="text-2xl sm:text-3xl">
            AI <span className="text-blue-600">Nexus</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">
              {" "}
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-models">
              {" "}
              <IoLogoModelS />
              All Models
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-model">
              {" "}
              <ImBoxAdd />
              Add Model
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <FadeLoader height={10} width={4} />
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
                {/* <img alt="Tailwind CSS Navbar component" src={user.photoURL} /> */}
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                {/* <img src={user.photoURL} alt="" /> */}
                <p className="text-sm font-bold text-center">
                  {user.displayName}
                </p>
                <p className="text-xs text-center">{user.email}</p>
              </div>
              <li className="mt-3 font-bold ">
                <NavLink to="/my-purchased-model" className="justify-between">
                  My Purchased Model
                </NavLink>
              </li>
              <li className="font-bold my-2">
                <NavLink to="/my-models">My Model</NavLink>
              </li>
              <li className="mt-3">
                <button onClick={handleSignOut} className="btn btn-primary">
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link className="btn btn-primary" to="/auth-login">
            <IoLogIn /> Login
          </Link>
        )}
        <div className="ml-3">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="theme-controller"
              defaultChecked={localStorage.getItem("theme") === "dark"}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
