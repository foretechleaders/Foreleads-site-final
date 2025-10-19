import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaYoutube } from 'react-icons/fa'
import logo from '/Leadership Consulting LLC.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <img src={logo} alt="Foreleads logo" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="text-xl font-bold text-navy">Foreleads</div>
            <div className="text-xs text-slate-600">Leadership Consulting LLC</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Services</NavLink>
          <NavLink to="/programs" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Programs</NavLink>
          <NavLink to="/resources" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Resources</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-navy font-semibold' : 'hover:text-navy'}>Contact</NavLink>
          <a
            href="https://www.youtube.com/@ForeleadsLeadershipConsulting"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-700 hover:text-navy"
            aria-label="YouTube channel"
          >
            <FaYoutube className="text-red-600" /> <span className="hidden lg:inline">YouTube</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
