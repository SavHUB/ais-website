'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Proof', href: '#proof' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled 
          ? 'border-black/10 dark:border-white/10 glass backdrop-blur-md dark:bg-slate-950/80 bg-white/80' 
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">AIS</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
          
            <button className="hidden sm:inline-flex px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-md">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-900 dark:text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
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
              className="md:hidden flex flex-col gap-3 overflow-hidden bg-white dark:bg-slate-950 px-4 -mx-4 border-b border-slate-200 dark:border-white/10"
            >
              <div className="pb-4 pt-2 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm py-2 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="w-full mt-2 px-4 py-3 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-transform hover:scale-105 active:scale-95 shadow-md">
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
