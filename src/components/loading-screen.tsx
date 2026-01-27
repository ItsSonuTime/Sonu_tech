"use client"

import { useEffect, useState } from "react"
import { Code2, Terminal } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [currentText, setCurrentText] = useState("Initializing...")

  const loadingTexts = [
    "Initializing development environment...",
    "Loading React components...",
    "Setting up state management...",
    "Configuring API endpoints...",
    "Optimizing performance...",
    "Ready to showcase!"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 3 + 1
        
        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length)
        if (textIndex < loadingTexts.length) {
          setCurrentText(loadingTexts[textIndex])
        }

        if (newProgress >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          setTimeout(() => {
            onLoadingComplete()
          }, 800)
          return 100
        }
        return newProgress
      })
    }, 80)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Technical Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
          
          {/* Code Pattern - Hidden on small screens */}
          <div className="hidden sm:block absolute top-10 right-10 text-slate-200 font-mono text-xs opacity-20 select-none">
            <div>const portfolio = {`{`}</div>
            <div className="ml-4">developer: "Sonu",</div>
            <div className="ml-4">status: "loading...",</div>
            <div className="ml-4">progress: {Math.floor(progress)}%</div>
            <div>{`}`};</div>
          </div>

          <div className="text-center space-y-6 sm:space-y-8 px-4 relative z-10 max-w-sm sm:max-w-md">
            {/* Animated Logo */}
            <motion.div 
              className="relative w-16 sm:w-24 h-16 sm:h-24 mx-auto"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Outer ring */}
              <motion.div 
                className="absolute inset-0 border-3 sm:border-4 border-slate-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Progress ring */}
              <motion.div 
                className="absolute inset-0 border-3 sm:border-4 border-transparent rounded-full"
                style={{
                  borderTopColor: '#475569',
                  borderRightColor: '#64748b',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner icon */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Terminal className="w-8 sm:w-12 h-8 sm:h-12 text-slate-700" />
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div 
              className="space-y-2 sm:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.h1 
                className="text-2xl sm:text-3xl font-bold text-slate-900"
              >
                Sonu<span className="text-slate-600">-Tech</span>
              </motion.h1>
              
              <motion.p 
                className="text-slate-600 text-xs sm:text-sm px-2"
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {currentText}
              </motion.p>
            </motion.div>

            {/* Enhanced Progress Bar */}
            <motion.div 
              className="w-full max-w-xs mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="bg-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-slate-800 shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="flex justify-between mt-2 text-xs px-2">
                <motion.span 
                  className="text-slate-500 font-mono"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading...
                </motion.span>
                <motion.span 
                  className="text-slate-600 font-mono font-semibold"
                  key={Math.floor(progress)}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {Math.floor(progress)}%
                </motion.span>
              </div>
            </motion.div>

            {/* Technical Details */}
            <motion.div 
              className="text-xs text-slate-400 font-mono space-y-1 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div>React.js • Node.js • MongoDB • Express.js</div>
              <div>Full Stack Web Developer Portfolio</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}