import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // Add scroll listener for shadow effect
  useEffect(() => {
    const header = document.getElementById("site-header");

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("nav-solid");
      } else {
        header.classList.remove("nav-solid");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 bg-navy text-white nav-shadow transition-all duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO LEFT */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/foreleads_logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex space-x-10 text-lg font-medium">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/programs">Programs</Link>
          <Link className="nav-link" to="/leadership-articles">Articles</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
