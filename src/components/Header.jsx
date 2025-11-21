import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// ⭐ NEW — Wrapped SVG logo import
import WrappedLogo from "../assets/foreleads_logo_wrapped.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">

        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src={WrappedLogo}
            alt="Foreleads Leadership Consulting Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
            Foreleads Leadership Consulting LLC
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-gray-700 hover:text-blue-700 text-xl"></i>
          </a>
          <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-gray-700 hover:text-pink-600 text-xl"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-gray-700 hover:text-blue-600 text-xl"></i>
          </a>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube text-gray-700 hover:text-red-600 text-xl"></i>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg py-4 text-center">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-800 hover:text-blue-700">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-800 hover:text-blue-700">About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-800 hover:text-blue-700">Services</Link>
          <Link to="/programs" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-800 hover:text-blue-700">Programs</Link>
          <Link to="/resources" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-800 hover:text-blue-700">Resources</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-800 hover:text-blue-700">Contact</Link>

          {/* Mobile Social */}
          <div className="flex justify-center space-x-5 mt-4">
            <a href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-gray-700 hover:text-blue-700 text-xl"></i>
            </a>
            <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-gray-700 hover:text-pink-600 text-xl"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-gray-700 hover:text-blue-600 text-xl"></i>
            </a>
            <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube text-gray-700 hover:text-red-600 text-xl"></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
