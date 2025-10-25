import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/Leadership Consulting LLC.png"
            alt="Foreleads Leadership Logo"
            className="h-10 w-auto"
          />
          <Link
            to="/"
            className="text-2xl font-bold text-navy tracking-tight hover:text-blue-900 transition"
          >
            Foreleads Leadership Consulting LLC
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-navy font-semibold">
          <Link to="/" className="hover:text-blue-900 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-900 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-900 transition">
            Services
          </Link>
          <Link to="/resources" className="hover:text-blue-900 transition">
            Resources
          </Link>
          <Link to="/contact" className="hover:text-blue-900 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 text-center py-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-navy font-semibold"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-navy font-semibold"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-navy font-semibold"
          >
            Services
          </Link>
          <Link
            to="/resources"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-navy font-semibold"
          >
            Resources
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-navy font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
