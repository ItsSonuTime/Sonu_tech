"use client"

import { useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/Contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import SectionProgressSidebar from "@/components/section-progress-sidebar"


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <ScrollProgress />
      <SectionProgressSidebar />
      <div
        className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        
        </main>
        <Footer />
      </div>
    </>
  )
}
