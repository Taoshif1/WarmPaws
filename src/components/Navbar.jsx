import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <li >
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            isActive ? "text-white bg-[#FF6B35] font-semibold" : "hover:text-[#FF6B35]"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/all-pets" 
          className={({ isActive }) => 
            isActive ? "text-white bg-[#FF6B35] font-semibold" : "hover:text-[#FF6B35]"
          }
        >
          All Pets
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/add-pet" 
          className={({ isActive }) => 
            isActive ? "text-white bg-[#FF6B35] font-semibold" : "hover:text-[#FF6B35]"
          }
        >
          Add Pet
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/donation-campaigns" 
          className={({ isActive }) => 
            isActive ? "text-white bg-[#FF6B35] font-semibold" : "hover:text-[#FF6B35]"
          }
        >
          Donation Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "text-white bg-[#FF6B35] font-semibold" : "hover:text-[#FF6B35]"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? "text-white bg-[#FF6B35] font-semibold" : "hover:text-[#FF6B35]"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container-custom">
        <div className="navbar px-0 py-3">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <div 
                tabIndex="0" 
                role="button" 
                className="btn btn-ghost lg:hidden p-2"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-3 w-56 p-3 shadow-lg border border-gray-100"
              >
                {Links}
              </ul>
            </div>
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src={logo} 
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover ring-2 ring-[#FF6B35] ring-offset-2" 
                alt="WarmPaws Logo" 
              />
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#4A90E2] bg-clip-text text-transparent">
                WarmPaws
              </span>
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-medium gap-1">
              {Links}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end gap-2">
            {user ? (
              <div className="flex items-center gap-3">
                {/* User Avatar with Tooltip */}
                <div 
                  className="tooltip tooltip-bottom" 
                  data-tip={user.displayName || "User"}
                >
                  <div className="avatar online">
                    <div className="w-10 md:w-11 rounded-full ring ring-[#FF6B35] ring-offset-base-100 ring-offset-2 cursor-pointer hover:ring-[#4A90E2] transition-all">
                      <img 
                        src={user.photoURL || "https://i.ibb.co/kXvJjrW/default-avatar.png"} 
                        alt={user.displayName || "User"} 
                      />
                    </div>
                  </div>
                </div>

                {/* Logout Button */}
                <button 
                  onClick={handleLogout} 
                  className="btn btn-sm md:btn-md bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none normal-case font-medium transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="btn btn-sm md:btn-md bg-[#4A90E2] hover:bg-[#3A7BC8] text-white border-none normal-case font-medium transition-all"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-sm md:btn-md btn-outline border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35] normal-case font-medium transition-all"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;