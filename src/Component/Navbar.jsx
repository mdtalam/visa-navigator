import React, { useContext, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Importing react-icons for hamburger and cross icons
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOutUser, updateUserProfile, setUser } =
    useContext(AuthContext);

  const [isModalOpen, setIsModalOpen] = useState(false); // For modal
  const [newDisplayName, setNewDisplayName] = useState(user?.displayName || "");
  const [newPhotoURL, setNewPhotoURL] = useState(user?.photoURL || "");

  const [theme, setTheme] = useState("light");

  const [isSticky, setIsSticky] = useState(false); // State to track sticky navbar

  // Handle the scroll event to make navbar sticky
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({
        displayName: newDisplayName,
        photoURL: newPhotoURL,
      });
      setUser({ ...user, displayName: newDisplayName, photoURL: newPhotoURL });
      Swal.fire({
        title: "Success!",
        text: "Profile updated successfully!",
        icon: "success",
        confirmButtonText: "Close",
      });
      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Failed to update profile. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <nav
      className={`bg-primary text-white w-full ${isSticky ? "sticky top-0 z-50 shadow-lg bg-opacity-90 transition-all duration-300 ease-in-out" : "relative transition-all duration-300 ease-in-out"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Website Logo */}
        <div className="text-xl font-bold">
          <a href="/">Visa Navigator</a>
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
          {
            user && (
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
            )
          }
          {
            user && (
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
            )
          }
          {
            user && (
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
            )
          }
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
              <div>
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  data-tooltip-id="profileTooltip"
                  data-tooltip-content={user?.displayName || "User Profile"}
                  onClick={() => setIsModalOpen(true)} // Open modal on click
                />
                {/* Tooltip */}
                <Tooltip
                  id="profileTooltip"
                  place="bottom"
                  effect="solid"
                  className="bg-gray-800 text-white z-10 px-2 py-1 rounded"
                />
              </div>
              <button
                onClick={logOutUser}
                className="bg-secondary px-4 py-2 rounded hover:bg-accent transition"
              >
                Logout
              </button>
            </>
          )}
          <button
            onClick={toggleTheme}
            className="text-xl bg-primary text-white px-4 py-2 rounded transition flex items-center"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
            <span className="ml-2">
              {/* {theme === "light" ? "Dark Mode" : "Light Mode"} */}
            </span>
          </button>
        </div>

        {/* Profile Update Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-2xl text-black font-bold mb-4">
                Update Profile
              </h2>
              <form onSubmit={handleProfileUpdate}>
                <div className="mb-4 *:text-black">
                  <label type="displayName" className="block mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    id="displayName"
                    Value={newDisplayName}
                    onChange={(e) => setNewDisplayName(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="mb-4 *:text-black">
                  <label htmlFor="photoURL" className="block mb-2">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    id="photoURL"
                    value={newPhotoURL}
                    onChange={(e) => setNewPhotoURL(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
            <div className="pt-4">
              {!user ? (
                <>
                  <Link
                    to="/auth/login"
                    className="block text-center px-4 py-2 bg-secondary rounded my-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/register"
                    className="block text-center px-4 py-2 bg-accent rounded my-2"
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={logOutUser}
                    className="block text-center px-4 py-2 bg-secondary rounded my-2"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
