import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/foreleads_logo_white_outline.svg.png"; // use your preferred logo file

const Header = () => {
  return (
    <header className="bg-navy text-white fixed top-0 left-0 right-0 shadow z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Foreleads Logo" className="h-10 w-auto" />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-8 text-lg">

          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-300">
            About
          </Link>

          <Link to="/programs" className="hover:text-blue-300">
            Programs
          </Link>

          {/* ⭐ NEW ARTICLES LINK */}
          <Link to="/leadership-articles" className="hover:text-blue-300">
            Articles
          </Link>

          <Link to="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
