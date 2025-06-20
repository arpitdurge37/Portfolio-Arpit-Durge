"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

const navItems = ["about", "skills", "experience", "education", "projects", "contact"]

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-slate-800">Arpit Durge</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => onSectionClick(section)}
                className={`capitalize transition-colors ${
                  activeSection === section ? "text-blue-600 font-semibold" : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onSectionClick(section)
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left py-2 capitalize text-slate-600 hover:text-blue-600"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
