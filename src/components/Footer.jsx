import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 mt-12">
      <div className="container grid md:grid-cols-3 gap-6 items-center">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Foreleads Leadership Consulting LLC
          <div className="text-slate-500">Empowering Leadership. Enabling Growth.</div>
        </div>

        <nav className="flex flex-wrap gap-4 justify-center text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex gap-4 justify-end">
          <a
            href="https://www.youtube.com/@ForeleadsLeadershipConsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a href="mailto:info@foreleadsleadership.com" className="hover:text-navy" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
