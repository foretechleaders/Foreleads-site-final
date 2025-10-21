import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 mt-12 bg-white">
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

        <div className="flex gap-5 justify-end text-slate-700">
          <a href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
             target="_blank" rel="noopener noreferrer" title="Follow us on LinkedIn" aria-label="LinkedIn" className="hover:text-navy">
            <FaLinkedin size={20} />
          </a>
          <a href="https://www.instagram.com/foreleads_leadership/"
             target="_blank" rel="noopener noreferrer" title="Follow us on Instagram" aria-label="Instagram" className="hover:text-navy">
            <FaInstagram size={20} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61582426252186"
             target="_blank" rel="noopener noreferrer" title="Follow us on Facebook" aria-label="Facebook" className="hover:text-navy">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting"
             target="_blank" rel="noopener noreferrer" title="Watch our YouTube Channel" aria-label="YouTube" className="hover:text-navy">
            <FaYoutube size={20} />
          </a>
          <a href="mailto:aforeman@foreleadsleadership.com"
             title="Email Foreleads Leadership Consulting" aria-label="Email" className="hover:text-navy">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
