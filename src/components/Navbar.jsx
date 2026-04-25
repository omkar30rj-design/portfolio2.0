import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { id: 'Home', label: 'Home' },
    { id: 'About', label: 'About' },
    { id: 'Project', label: 'Projects' },
    { id: 'Service', label: 'Services' },
    { id: 'Contact', label: 'Contact' },
  ]

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <div className="navbar px-4 lg:px-6">
        <div className="flex w-full justify-center">
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-end lg:justify-center">
              <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center justify-center rounded-xl border border-white/10 bg-black/40 p-3 text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-black/60 lg:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <ul className="nav-links desktop-nav hidden lg:flex">
                {navLinks.map((link) => (
                  <li key={link.id} className="list-none">
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              id="mobile-navigation"
              className={`mx-auto w-full max-w-sm overflow-hidden transition-all duration-300 ease-out lg:hidden ${
                isMenuOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <ul className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#080808]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
                {navLinks.map((link) => (
                  <li key={link.id} className="list-none">
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 font-[manrope] text-base text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
