'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Logo } from './Logo'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'How it works', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Results', href: '#proof' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '#faq' },
  ]

  const scrollToDemo = () => {
    const el = document.getElementById('roi-calculator')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'border-white/10 backdrop-blur-md bg-slate-950/80' 
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToDemo}
              className="hidden sm:inline-flex px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden flex flex-col gap-3 overflow-hidden bg-slate-950 px-4 -mx-4 border-b border-white/10"
            >
              <div className="pb-4 pt-2 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm py-2 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    scrollToDemo()
                  }}
                  className="w-full mt-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-md"
                >
                  Get Started
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
