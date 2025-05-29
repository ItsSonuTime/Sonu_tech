"use client"

import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

// Predefined particle positions and animations
const PARTICLES = [
  { left: "10%", top: "20%", delay: "0s", duration: "3s" },
  { left: "20%", top: "60%", delay: "0.5s", duration: "3.5s" },
  { left: "30%", top: "40%", delay: "1s", duration: "4s" },
  { left: "40%", top: "80%", delay: "1.5s", duration: "3.2s" },
  { left: "50%", top: "30%", delay: "2s", duration: "3.8s" },
  { left: "60%", top: "70%", delay: "0.2s", duration: "3.3s" },
  { left: "70%", top: "50%", delay: "0.8s", duration: "3.7s" },
  { left: "80%", top: "90%", delay: "1.2s", duration: "3.4s" },
  { left: "90%", top: "10%", delay: "1.8s", duration: "3.6s" },
  { left: "15%", top: "85%", delay: "0.3s", duration: "3.9s" },
  { left: "25%", top: "15%", delay: "0.7s", duration: "3.1s" },
  { left: "35%", top: "65%", delay: "1.1s", duration: "3.5s" },
  { left: "45%", top: "35%", delay: "1.6s", duration: "3.8s" },
  { left: "55%", top: "95%", delay: "0.4s", duration: "3.2s" },
  { left: "65%", top: "25%", delay: "0.9s", duration: "3.6s" },
  { left: "75%", top: "75%", delay: "1.3s", duration: "3.3s" },
  { left: "85%", top: "45%", delay: "1.7s", duration: "3.7s" },
  { left: "95%", top: "85%", delay: "0.6s", duration: "3.4s" },
  { left: "5%", top: "55%", delay: "1.4s", duration: "3.8s" },
  { left: "35%", top: "5%", delay: "0.1s", duration: "3.5s" },
]

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
      className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-8 px-4 sm:space-y-10 relative">
        {/* Circular Loading Animation */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-black rounded-full animate-spin-slow"
            style={{
              borderTopColor: 'transparent',
              borderRightColor: 'transparent',
              transform: 'rotate(45deg)'
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 className="w-12 h-12 sm:w-16 sm:h-16 text-black" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 animate-fade-in">
            Happy<span className="text-black">Coder</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base animate-fade-in-delay">
            Loading professional content...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-72 sm:w-96 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
            <div
              className="bg-black h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-600 text-xs sm:text-sm">Loading</p>
            <p className="text-gray-600 text-xs sm:text-sm">{progress}%</p>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 border border-gray-100 rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[28rem] sm:h-[28rem] border border-gray-100 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
      </div>
    </div>
  )
}
