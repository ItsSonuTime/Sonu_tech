"use client"

import { ArrowRight, Code, Database, Globe, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white min-h-screen flex items-center"
    >
      <div className="container px-4 md:px-6 w-full">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12">
          {/* Main Heading */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-900 leading-tight">
              MERN Stack
              <br />
              <span className="text-slate-700">Developer</span>
            </h1>
            <p className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed">
              Building modern, scalable web applications with
              <br className="hidden sm:block" />
              <span className="font-semibold text-slate-800"> MongoDB, Express.js, React, and Node.js</span>
            </p>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 py-8">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                <Database className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-slate-700" />
              </div>
              <span className="text-sm md:text-base font-semibold text-slate-600">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                <Server className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-slate-700" />
              </div>
              <span className="text-sm md:text-base font-semibold text-slate-600">Express.js</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                <Code className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-slate-700" />
              </div>
              <span className="text-sm md:text-base font-semibold text-slate-600">React</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                <Globe className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-slate-700" />
              </div>
              <span className="text-sm md:text-base font-semibold text-slate-600">Node.js</span>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg md:text-xl font-semibold h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  const headerOffset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                }
              }}
            >
              View My Work
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg md:text-xl font-semibold h-auto rounded-xl hover:border-slate-400 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  const headerOffset = 80
                  const elementPosition = element.getBoundingClientRect().top
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                }
              }}
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 md:pt-16">
            <div className="flex flex-col items-center gap-3 text-slate-400">
              <span className="text-sm md:text-base">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
