"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-bold transition-colors ${
              isScrolled
                ? 'text-primary hover:text-accent'
                : 'text-white hover:text-accent'
            }`}
          >
            <span style={{ fontFamily: 'var(--font-heading)' }}>Carl Shawn Watkins</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Home
            </Link>
            <Link
              href="/coaching"
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Coaching
            </Link>
            <Link
              href="/notary"
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              Notary Services
            </Link>
            <Link
              href="/#about"
              className={`transition-colors font-medium ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
              }`}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg font-medium"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled
                ? 'text-foreground hover:text-primary'
                : 'text-white hover:text-accent'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border py-4 space-y-4">
            <Link
              href="/"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/coaching"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Coaching
            </Link>
            <Link
              href="/notary"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Notary Services
            </Link>
            <Link
              href="/#about"
              className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="px-4">
              <Link
                href="/#contact"
                className="block text-center px-6 py-2.5 bg-primary text-white-button rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
