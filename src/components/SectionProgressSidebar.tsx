"use client"

import { useEffect, useState, useCallback } from "react"

interface SectionProgress {
  id: string
  label: string
  progress: number
  isActive: boolean
  isVisible: boolean
}

export default function SectionProgressSidebar() {
  const [sectionProgress, setSectionProgress] = useState<SectionProgress[]>([
    { id: "home", label: "Home", progress: 0, isActive: false, isVisible: false },
    { id: "about", label: "About", progress: 0, isActive: false, isVisible: false },
    { id: "skills", label: "Skills", progress: 0, isActive: false, isVisible: false },
    { id: "projects", label: "Projects", progress: 0, isActive: false, isVisible: false },
    { id: "contact", label: "Contact", progress: 0, isActive: false, isVisible: false },
  ])
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    // Show sidebar after scrolling past hero section
    setIsVisible(scrollY > windowHeight * 0.3)

    const sections = ["home", "about", "skills", "projects", "contact"]
    const labels = ["Home", "About", "Skills", "Projects", "Contact"]

    const updatedProgress = sections.map((sectionId, index) => {
      const element = document.getElementById(sectionId)
      if (!element) {
        return {
          id: sectionId,
          label: labels[index],
          progress: 0,
          isActive: false,
          isVisible: false,
        }
      }

      const rect = element.getBoundingClientRect()
      const elementTop = rect.top + scrollY
      const elementHeight = rect.height
      const elementBottom = elementTop + elementHeight

      // Check if section is visible
      const isVisible = rect.top < windowHeight && rect.bottom > 0

      // Check if section is active (center of viewport)
      const isActive = rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2

      // Calculate progress through the section
      let progress = 0
      if (scrollY >= elementTop && scrollY <= elementBottom) {
        const scrolledInSection = scrollY - elementTop
        progress = Math.min((scrolledInSection / elementHeight) * 100, 100)
      } else if (scrollY > elementBottom) {
        progress = 100
      }

      return {
        id: sectionId,
        label: labels[index],
        progress: Math.max(0, progress),
        isActive,
        isVisible,
      }
    })

    setSectionProgress(updatedProgress)
  }, [])

  useEffect(() => {
    // Initial call
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
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

  return (
    <div
      className={`fixed left-4 xl:left-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
      } hidden lg:block`}
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-3 xl:p-4 space-y-2 xl:space-y-3">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 xl:mb-4">Sections</div>

        {sectionProgress.map((section, index) => (
          <div
            key={section.id}
            className={`group cursor-pointer transition-all duration-300 ${section.isActive ? "scale-105" : ""}`}
            onClick={() => scrollToSection(section.id)}
          >
            {/* Section Label */}
            <div className="flex items-center justify-between mb-1.5 xl:mb-2">
              <span
                className={`text-xs xl:text-sm font-medium transition-colors duration-200 ${
                  section.isActive ? "text-slate-900" : section.isVisible ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {section.label}
              </span>
              <span
                className={`text-xs transition-colors duration-200 ${
                  section.isActive ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {Math.round(section.progress)}%
              </span>
            </div>

            {/* Progress Bar Container */}
            <div className="relative">
              {/* Background Bar */}
              <div className="w-20 xl:w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                {/* Progress Fill */}
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    section.isActive ? "bg-gradient-to-r from-slate-700 to-slate-900" : "bg-slate-400"
                  }`}
                  style={{ width: `${section.progress}%` }}
                />
              </div>

              {/* Active Indicator Dot */}
              {section.isActive && (
                <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
                  <div className="w-3 h-3 bg-slate-900 rounded-full shadow-lg animate-pulse" />
                </div>
              )}
            </div>

            {/* Section Number */}
            <div
              className={`absolute -left-6 xl:-left-8 top-0 w-5 h-5 xl:w-6 xl:h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                section.isActive
                  ? "bg-slate-900 text-white shadow-lg scale-110"
                  : section.progress > 0
                    ? "bg-slate-300 text-slate-600"
                    : "bg-slate-100 text-slate-400"
              }`}
            >
              {index + 1}
            </div>
          </div>
        ))}

        {/* Overall Progress */}
        <div className="pt-3 xl:pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-1.5 xl:mb-2">
            <span className="text-xs font-medium text-slate-500">Overall</span>
            <span className="text-xs text-slate-500">
              {Math.round(sectionProgress.reduce((acc, section) => acc + section.progress, 0) / sectionProgress.length)}
              %
            </span>
          </div>
          <div className="w-20 xl:w-24 h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-slate-600 to-slate-800 rounded-full transition-all duration-500"
              style={{
                width: `${
                  sectionProgress.reduce((acc, section) => acc + section.progress, 0) / sectionProgress.length
                }%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
