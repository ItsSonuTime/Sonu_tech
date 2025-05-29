"use client"

import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(() => {
            onLoadingComplete()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-6 px-4 sm:space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400 mx-auto" />
          </div>
          <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto relative z-10 animate-pulse" />
        </div>

        {/* Loading Text */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-white animate-fade-in">
            Dev<span className="text-slate-400">Portfolio</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base animate-fade-in-delay">Loading professional content...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 mx-auto">
          <div className="bg-slate-700 rounded-full h-1.5 sm:h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-slate-400 to-slate-300 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">{progress}%</p>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-slate-400 rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
