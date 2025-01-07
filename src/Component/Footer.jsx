import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing specific icons
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import logo from "../../src/assets/Leonardo_Phoenix_Design_a_modern_simple_and_scalable_Visa_Navi_1.jpg"; // Add your logo image import here

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Logo and Name */}
          <div className="mb-4 md:mb-0 flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
            <h1 className="text-2xl font-bold">Visa Navigator</h1>
          </div>

          {/* Footer Links */}
          <div className="text-center md:text-left mb-4 md:mb-0 ">
            <NavLink to="/" className="hover:text-secondary block mb-2">
              Home
            </NavLink>
            <NavLink
              to="/all-visas"
              className="hover:text-secondary block mb-2"
            >
              All Visas
            </NavLink>
            <NavLink to="/add-visa" className="hover:text-secondary block mb-2">
              Add Visa
            </NavLink>
            <NavLink
              to="/my-added-visas"
              className="hover:text-secondary block mb-2"
            >
              My Added Visas
            </NavLink>
            <NavLink
              to="/my-visa-applications"
              className="hover:text-secondary block mb-2"
            >
              My Visa Applications
            </NavLink>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col space-x-4">
            <div className="text-center mt-4 mb-4">
              <p>
                Email:{" "}
                <a
                  href="mailto:contact@visanavigator.com"
                  className="hover:text-secondary"
                >
                  rafsantasnimrafsan@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:text-secondary">
                  +8801911424195
                </a>
              </p>
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.facebook.com/rafsan.tasnim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://x.com/mdtalambd"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mdtalambd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/rafsantasnim/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>&copy; 2024 Visa Navigator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
