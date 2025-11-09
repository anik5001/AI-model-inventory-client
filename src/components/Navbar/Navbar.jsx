import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logoAI.jpg";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, loading, signOutFun } = use(AuthContext);

  const handleSignOut = () => {
    signOutFun()
      .then(() => {
        alert("user signout successful");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

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
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="" />
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
                  Logout
                </button>
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
