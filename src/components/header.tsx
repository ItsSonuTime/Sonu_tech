"use client"

import { useState, useEffect, useCallback } from "react"
import { Code2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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
    const sections = ["home", "about", "skills", "projects", "cv", "contact"]
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
    // Create a simple CV content
    const cvContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
       
        <p>Email: sonu@example.com | Phone: +1234567890</p>
        <h2>Skills</h2>
        <p>MongoDB, Express.js, React, Node.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS</p>
        <h2>Experience</h2>
        <p>Passionate MERN stack developer with expertise in building modern web applications.</p>
      </div>
    `
    
    const element = document.createElement('a')
    const file = new Blob([cvContent], {type: 'text/html'})
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
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-professional-lg border-b border-slate-200/50"
            : "bg-white/90 backdrop-blur-md border-b border-slate-100/50"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-slate-200/50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-slate-800 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </motion.div>

        <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 md:px-6">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 className="w-6 sm:w-8 h-6 sm:h-8 text-slate-800 transition-transform duration-300" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 bg-slate-800/20 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.span 
              className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Sonu
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <motion.a
                  href={`#${item.id}`}
                  className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold transition-professional rounded-lg ${
                    activeSection === item.id
                      ? "text-slate-900 bg-gradient-to-r from-blue-50 to-purple-50 shadow-professional"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    smoothScrollTo(item.id)
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 h-0.5 bg-slate-800 transform -translate-x-1/2"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === item.id ? 32 : 0 
                    }}
                    whileHover={{ width: 32 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                {/* Mini Progress Bar */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-slate-800"
                    initial={{ width: 0 }}
                    animate={{ width: `${sectionProgress[item.id] || 0}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6">
              <motion.span
                className="absolute top-1 left-0 w-5 sm:w-6 h-0.5 bg-gray-600"
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-2 sm:top-2.5 left-0 w-5 sm:w-6 h-0.5 bg-gray-600"
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute top-3 sm:top-4 left-0 w-5 sm:w-6 h-0.5 bg-gray-600"
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-14 sm:top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b shadow-lg z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container px-3 sm:px-4 md:px-6 py-4 sm:py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.id} 
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.a
                      href={`#${item.id}`}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? "text-slate-800 bg-slate-100 border-l-4 border-slate-800"
                          : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                      }`}
                      onClick={(e) => {
                        e.preventDefault()
                        smoothScrollTo(item.id)
                        setIsMenuOpen(false)
                      }}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <span className="text-xs text-gray-400">{Math.round(sectionProgress[item.id] || 0)}%</span>
                      </div>
                      {/* Mobile Progress Bar */}
                      <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-slate-800"
                          initial={{ width: 0 }}
                          animate={{ width: `${sectionProgress[item.id] || 0}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.a>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
            
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
