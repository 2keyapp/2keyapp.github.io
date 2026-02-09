'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Merchants', href: '/merchants' },
    { name: 'Influencers', href: '/influencers' },
    { name: 'Buyers', href: '/buyers' },
    { name: 'Trust', href: '/trust' },
  ]

  const isActive = (href) => pathname === href

  return (
    <header className="bg-navy/95 backdrop-blur-md w-full sticky top-0 z-50 border-b border-white/10">
      <nav className="w-full relative">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="text-teal text-2xl font-bold font-heading group-hover:text-teal/80 transition-colors">2key</div>
              <span className="text-white/80 text-2xl font-bold font-heading group-hover:text-white transition-colors">.app</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 xl:px-4 py-2 text-sm xl:text-base transition-colors font-heading font-medium ${
                    active
                      ? 'text-teal font-semibold'
                      : 'text-white/80 hover:text-teal'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Link
              href="/login"
              className="px-4 xl:px-6 py-2 xl:py-2.5 h-10 xl:h-11 flex items-center justify-center border-2 border-white/20 text-white/90 rounded-xl hover:border-teal hover:text-teal hover:bg-white/5 transition-all duration-200 text-sm xl:text-base font-heading font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="group relative px-4 xl:px-6 py-2 xl:py-2.5 h-10 xl:h-11 flex items-center justify-center bg-teal text-navy rounded-xl overflow-hidden transition-all hover:bg-teal/80 hover:shadow-lg hover:shadow-teal/30 text-sm xl:text-base font-heading font-semibold"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white/80 hover:text-teal focus:outline-none ml-auto"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 top-16 md:top-20"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            <div className="lg:hidden absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-md border-b border-white/10 shadow-lg z-50 pb-4">
              <div className="flex flex-col space-y-1 pt-4 px-4 sm:px-6">
                {navLinks.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-4 py-2 text-base rounded-md transition-colors font-heading font-medium ${
                        active
                          ? 'text-teal bg-white/5 font-semibold'
                          : 'text-white/80 hover:text-teal hover:bg-white/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                  <Link
                    href="/login"
                    className="px-4 py-2.5 border-2 border-white/20 text-white/90 rounded-xl hover:border-teal hover:text-teal hover:bg-white/5 transition-all duration-200 text-base font-heading font-medium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="group relative px-4 py-2.5 bg-teal text-navy rounded-xl overflow-hidden transition-all hover:bg-teal/80 hover:shadow-lg hover:shadow-teal/30 text-base font-heading font-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute inset-0 w-full h-full bg-white/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                    <span className="relative">Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
