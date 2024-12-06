import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing specific icons

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Website Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Visa Navigator</h1>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>Email: <a href="mailto:contact@visanavigator.com" className="hover:text-secondary">contact@visanavigator.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-secondary">+1 (234) 567-890</a></p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p>&copy; 2024 Visa Navigator. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;