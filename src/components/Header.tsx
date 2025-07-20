'use client'

import { useState } from 'react'
// import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="px-3 py-2 text-sm font-medium nav-link-primary">
                Home
              </a>
              <a href="#about" className="px-3 py-2 text-sm font-medium nav-link">
                About
              </a>
              <a href="#work" className="px-3 py-2 text-sm font-medium nav-link">
                Work
              </a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium nav-link">
                Contact
              </a>
            </div>
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          {/* <div className="flex items-center space-x-4"> */}
            {/* <ThemeToggle /> */}
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none nav-link"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t" style={{backgroundColor: '#faffff', borderColor: '#cccccc'}}>
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium nav-link-primary">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                About
              </a>
              <a href="#work" className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                Work
              </a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium nav-link">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}