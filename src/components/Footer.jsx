import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-semibold text-navy">
            © {new Date().getFullYear()} Foreleads Leadership Consulting LLC
          </p>
          <p className="text-sm text-gray-600">Empowering Leadership. Enabling Growth.</p>
        </div>

        <div className="flex space-x-4 text-2xl">
          <a
            href="https://www.linkedin.com/company/foreleads-leadership-consulting-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-navy/70"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582426252186"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-navy/70"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/foreleads_leadership/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-navy/70"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:aforeman@foreleadsleadership.com"
            className="text-navy hover:text-navy/70"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
