import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa'
import logo from '/Leadership Consulting LLC.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <img src={logo} alt="Foreleads logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="text-xl font-bold text-navy">Foreleads</div>
            <div className="text-xs text-slate-600">Leadership Consulting LLC</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Services</NavLink>
          <NavLink to="/programs" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Programs</NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Resources</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Contact</NavLink>

          {/* Social Icons */}
          <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-navy">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-navy">
            <FaFacebook size={18} />
          </a>
          <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-navy">
            <FaYoutube size={18} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-navy focus:outline-none">
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="flex flex-col items-center gap-4 py-6 text-sm">
            <NavLink to="/" onClick={toggleMenu} className="hover:text-navy">Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-navy">About</NavLink>
            <NavLink to="/services" onClick={toggleMenu} className="hover:text-navy">Services</NavLink>
            <NavLink to="/programs" onClick={toggleMenu} className="hover:text-navy">Programs</NavLink>
            <NavLink to="/resources" onClick={toggleMenu} className="hover:text-navy">Resources</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="hover:text-navy">Contact</NavLink>

            <div className="flex gap-6 pt-2 text-navy">
              <a href="https://www.instagram.com/foreleads_leadership/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61582426252186" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.youtube.com/@ForeleadsLeadershipConsulting" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
