import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error("Error logging out!");
      });
  };

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img src={logo} className="w-20 h-20 rounded-full" alt="logo" />
          <span className="btn btn-ghost text-xl -ml-4 text-2xl font-bold">
            WarmPaws
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{Links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img 
                    src={user.photoURL || "https://i.ibb.co/kXvJjrW/default-avatar.png"} 
                    alt={user.displayName} 
                  />
                </div>
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-sm btn-error">
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
            <Link to="/register" className="btn btn-sm btn-outline">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;