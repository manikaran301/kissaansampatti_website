'use client'

import { useState } from 'react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#how', label: 'How It Works' },
    { href: '/#tutorials', label: 'Tutorials' },
    { href: '/#features', label: 'Features' },
    { href: '/#contact', label: 'Contact' },
  ]

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-[var(--border)] sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-200">
            <Image
              src="/kisanshaktilogo.png"
              alt="Kissaan Sampatti Logo"
              width={56}
              height={56}
              className="object-contain"
            />
            <Image
              src="/Kisan-Sampati-text.png"
              alt="Kissaan Sampatti"
              width={160}
              height={40}
              className="object-contain hidden sm:block"
            />
          </a>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand)] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <LanguageSwitcher />
            <div id="google_translate_element" className="hidden"></div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-[var(--border)]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-3 text-[var(--text-secondary)] hover:text-[var(--brand)] hover:bg-[var(--brand-light)] rounded-lg transition-all duration-200 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

