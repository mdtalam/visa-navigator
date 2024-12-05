import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user,logOutUser}= useContext(AuthContext);



  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website Logo */}
        <div className="text-xl font-bold">
          <a href="/">Visa Navigator</a>
          <p>{user?.email}</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-secondary ${
                  isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-visas"
              className={({ isActive }) =>
                `hover:text-secondary ${
                  isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                }`
              }
            >
              All Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-visa"
              className={({ isActive }) =>
                `hover:text-secondary ${
                  isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                }`
              }
            >
              Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-added-visas"
              className={({ isActive }) =>
                `hover:text-secondary ${
                  isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                }`
              }
            >
              My Added Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-visa-applications"
              className={({ isActive }) =>
                `hover:text-secondary ${
                  isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                }`
              }
            >
              My Visa Applications
            </NavLink>
          </li>
        </ul>

        {/* Conditional Authentication Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          {!user ? (
            <>
              <Link
            to="/auth/login"
            className="bg-secondary px-4 py-2 rounded hover:bg-accent transition"
          >
            Login
          </Link>
              <Link
            to="/auth/register"
            className="bg-accent px-4 py-2 rounded hover:bg-secondary transition"
          >
            Register
          </Link>
            </>
          ) : (
            <>
              <div className="relative group">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <div className="absolute top-12 left-0 bg-white text-black px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {user?.name}
                </div>
              </div>
              <button
                onClick={logOutUser}
                className="bg-secondary px-4 py-2 rounded hover:bg-accent transition"
              >
                Logout
              </button>
            </>
          )}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary">
          <ul className="flex flex-col items-center space-y-4 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-secondary ${
                    isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-visas"
                className={({ isActive }) =>
                  `hover:text-secondary ${
                    isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                  }`
                }
              >
                All Visas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-visa"
                className={({ isActive }) =>
                  `hover:text-secondary ${
                    isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                  }`
                }
              >
                Add Visa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-added-visas"
                className={({ isActive }) =>
                  `hover:text-secondary ${
                    isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                  }`
                }
              >
                My Added Visas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-visa-applications"
                className={({ isActive }) =>
                  `hover:text-secondary ${
                    isActive ? "bg-accent px-2 py-1 rounded-lg" : ""
                  }`
                }
              >
                My Visa Applications
              </NavLink>
            </li>
            <div className="flex flex-col space-y-4">
              <Link
                to="/auth/login"
                className="bg-secondary px-4 py-2 rounded hover:bg-accent transition"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="bg-accent px-4 py-2 rounded hover:bg-secondary transition"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
