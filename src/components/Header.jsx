import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/Leadership Consulting LLC.png"
            alt="Foreleads Leadership Consulting Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-semibold text-gray-900">
            Foreleads Leadership Consulting LLC
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-gray-700 hover:text-blue-700 text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/foreleads_leadership/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-gray-700 hover:text-pink-600 text-xl"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582426252186"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook text-gray-700 hover:text-blue-600 text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com/@ForeleadsLeadershipConsulting"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube text-gray-700 hover:text-red-600 text-xl"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
