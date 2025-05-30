"use client"

import { useState, useEffect, useCallback } from "react"
import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({})

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)

    // Calculate scroll progress
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    setScrollProgress(Math.min(progress, 100))

    // Calculate section progress for navigation indicators
    const sections = ["home", "about", "skills", "projects", "contact"]
    const newSectionProgress: Record<string, number> = {}

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementHeight = rect.height
        const elementBottom = elementTop + elementHeight

        let progress = 0
        if (window.scrollY >= elementTop && window.scrollY <= elementBottom) {
          const scrolledInSection = window.scrollY - elementTop
          progress = Math.min((scrolledInSection / elementHeight) * 100, 100)
        } else if (window.scrollY > elementBottom) {
          progress = 100
        }

        newSectionProgress[sectionId] = Math.max(0, progress)
      }
    })

    setSectionProgress(newSectionProgress)

    // Update active section based on scroll position
    const current = sections.find((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    if (current) {
      setActiveSection(current)
    }
  }, [])

  useEffect(() => {
    // Initial call
    handleScroll()

    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const smoothScrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([document.querySelector('.cv-content')?.innerHTML || ''], {type: 'text'})
    element.href = URL.createObjectURL(file)
    element.download = 'Sonu_MERN_Developer_CV.html'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200/50">
          <div
            className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <Code2 className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Happy Coder
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(item.id)
                  }}
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300 transform -translate-x-1/2 ${
                      activeSection === item.id ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </a>

                {/* Mini Progress Bar */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
                    style={{ width: `${sectionProgress[item.id] || 0}%` }}
                  />
                </div>
              </div>
            ))}
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-2.5" : ""
                }`}
              />
              <span
                className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute top-4 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b shadow-lg transition-all duration-300 ${
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="container py-6 space-y-2">
            {navItems.map((item, index) => (
              <div key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  } ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50 hover:translate-x-2"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(item.id)
                    setIsMenuOpen(false)
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-xs text-gray-400">{Math.round(sectionProgress[item.id] || 0)}%</span>
                  </div>
                  {/* Mobile Progress Bar */}
                  <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-300"
                      style={{ width: `${sectionProgress[item.id] || 0}%` }}
                    />
                  </div>
                </a>
              </div>
            ))}
         
          </div>
        </div>
      </header>
    </>
  )
}
