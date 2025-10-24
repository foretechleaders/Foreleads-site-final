import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import logo from '/public/Leadership Consulting LLC.png'

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Foreleads Logo" className="h-10 w-auto" />
          <Link to="/" className="text-xl font-bold text-navy leading-tight">
            Foreleads <br />
            Leadership Consulting LLC
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-navy transition">Home</Link>
          <Link to="/about" className="hover:text-navy transition">About</Link>
          <Link to="/services" className="hover:text-navy transition">Services</Link>
          <Link to="/programs" className="hover:text-navy transition">Programs</Link>
          <Link to="/resources" className="hover:text-navy transition">Resources</Link>
          <Link to="/contact" className="hover:text-navy transition">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 text-2xl text-navy">
          <a
            href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy/70"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582426252186"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy/70"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/foreleads_leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy/70"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:aforeman@foreleadsleadership.com"
            className="hover:text-navy/70"
            title="Email Foreleads Leadership Consulting"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  )
}
