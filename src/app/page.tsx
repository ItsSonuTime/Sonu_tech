"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import CV from "@/components/cv"
import Contact from "@/components/Contact"
import Footer from "@/components/footer"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showIntro, setShowIntro] = useState(false)
  const [showEnquiry, setShowEnquiry] = useState(false)
  const [visitReason, setVisitReason] = useState("")
  const [visitWhy, setVisitWhy] = useState("curiosity")
  const [error, setError] = useState<string | null>(null)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    // Delay intro check until loading finishes for a smooth experience
    if (!isLoading) {
      try {
        const enquiryAnswered = typeof window !== 'undefined' ? localStorage.getItem('enquiryAnswered') : 'true'
        if (!enquiryAnswered) {
          setShowEnquiry(true)
          return
        }
      } catch {}
      const seen = typeof window !== 'undefined' ? localStorage.getItem('introSeen') : 'true'
      if (!seen) {
        setShowIntro(true)
      }
    }
  }, [isLoading])

  const dismissIntro = () => {
    try {
      localStorage.setItem('introSeen', 'true')
    } catch {}
    setShowIntro(false)
  }

  const submitEnquiry = (e?: React.FormEvent) => {
    e?.preventDefault()
    setError(null)
    if (!visitReason.trim()) {
      setError('Please tell me a short reason')
      return
    }
    const payload = {
      why: visitWhy,
      reason: visitReason.trim(),
      ts: Date.now(),
    }
    try {
      localStorage.setItem('enquiryAnswered', 'true')
      localStorage.setItem('enquiryResponse', JSON.stringify(payload))
      // mark intro seen so intro modal doesn't immediately appear after enquiry
      localStorage.setItem('introSeen', 'true')
    } catch {}
    console.log('Enquiry submitted:', payload)
    setShowEnquiry(false)
  }

  const dismissEnquiry = () => {
    try {
      localStorage.setItem('enquiryAnswered', 'true')
    } catch {}
    setShowEnquiry(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div
        className={`min-h-screen bg-white transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <CV />
          <Contact />
        </main>
        <Footer />
      </div>

      <Modal
        open={showEnquiry}
        onOpenChange={(o) => {
          if (o) {
            setShowEnquiry(true)
          } else {
            dismissEnquiry()
          }
        }}
        title="Welcome to my Portfolio"
        description="Help me understand what brings you here"
      >
        <form onSubmit={submitEnquiry} className="space-y-4 sm:space-y-6">
          {/* Purpose Selection */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              <label className="block text-sm sm:text-base font-semibold text-slate-900">What brings you here?</label>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <label className="flex items-start sm:items-center p-2 sm:p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200">
                <input 
                  type="radio" 
                  name="why" 
                  value="curiosity" 
                  checked={visitWhy === 'curiosity'} 
                  onChange={() => setVisitWhy('curiosity')}
                  className="w-4 h-4 cursor-pointer flex-shrink-0 mt-0.5 sm:mt-0"
                />
                <div className="ml-2 sm:ml-3 min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block">Curiosity / Browsing</span>
                  <p className="text-xs text-slate-600 leading-tight">Just exploring portfolios</p>
                </div>
              </label>
              
              <label className="flex items-start sm:items-center p-2 sm:p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200">
                <input 
                  type="radio" 
                  name="why" 
                  value="hire" 
                  checked={visitWhy === 'hire'} 
                  onChange={() => setVisitWhy('hire')}
                  className="w-4 h-4 cursor-pointer flex-shrink-0 mt-0.5 sm:mt-0"
                />
                <div className="ml-2 sm:ml-3 min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block">Looking to Hire</span>
                  <p className="text-xs text-slate-600 leading-tight">Let's work together</p>
                </div>
              </label>
              
              <label className="flex items-start sm:items-center p-2 sm:p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200">
                <input 
                  type="radio" 
                  name="why" 
                  value="learn" 
                  checked={visitWhy === 'learn'} 
                  onChange={() => setVisitWhy('learn')}
                  className="w-4 h-4 cursor-pointer flex-shrink-0 mt-0.5 sm:mt-0"
                />
                <div className="ml-2 sm:ml-3 min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block">Learning / Research</span>
                  <p className="text-xs text-slate-600 leading-tight">Study & explore</p>
                </div>
              </label>
              
              <label className="flex items-start sm:items-center p-2 sm:p-3 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200">
                <input 
                  type="radio" 
                  name="why" 
                  value="other" 
                  checked={visitWhy === 'other'} 
                  onChange={() => setVisitWhy('other')}
                  className="w-4 h-4 cursor-pointer flex-shrink-0 mt-0.5 sm:mt-0"
                />
                <div className="ml-2 sm:ml-3 min-w-0">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 block">Something Else</span>
                  <p className="text-xs text-slate-600 leading-tight">Tell me more below</p>
                </div>
              </label>
            </div>
          </div>

          {/* Additional Details */}
          <div className="space-y-2 sm:space-y-3 pt-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
              <label className="block text-sm sm:text-base font-semibold text-slate-900">Tell me more</label>
            </div>
            <textarea 
              value={visitReason} 
              onChange={(e) => setVisitReason(e.target.value)} 
              placeholder="Share your thoughts..." 
              rows={3} 
              className="w-full rounded-lg border-2 border-slate-200 p-2 sm:p-3 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
            />
            {error && (
              <div className="flex items-start gap-2 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm font-medium text-red-700">{error}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-100">
            <Button 
              variant="outline" 
              type="button" 
              onClick={dismissEnquiry}
              className="w-full sm:w-auto text-xs sm:text-sm text-slate-700 border-slate-300 hover:bg-slate-100 min-h-10 sm:min-h-11"
            >
              Skip
            </Button>
            <Button 
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm min-h-10 sm:min-h-11"
            >
              Continue →
            </Button>
          </div>
        </form>
      </Modal>
      <Modal
        open={showIntro}
        onOpenChange={(o) => {
          if (o) {
            setShowIntro(true)
          } else {
            dismissIntro()
          }
        }}
        title="Welcome"
        description="A quick overview before you explore"
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-2xl font-bold text-slate-900">Sonu</h4>
            <p className="text-lg font-semibold text-slate-700 mt-1">MERN Stack Developer</p>
            <p className="text-sm text-slate-600 mt-2">Full Stack Web Developer with 2+ Years Experience</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h5 className="font-semibold text-slate-900 mb-2">About Me</h5>
            <p className="text-sm leading-6 text-slate-700">
              I'm a dedicated Full Stack Developer specializing in building scalable web applications using the MERN stack. 
              With expertise in React.js, Node.js, MongoDB, and Express.js, I create modern solutions that drive business growth 
              and deliver exceptional user experiences. I've completed 15+ projects and am passionate about clean code and innovative solutions.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-slate-900 mb-2">How to Navigate This Website</h5>
            <p className="text-sm text-slate-600 mb-3">
              Explore my portfolio to learn more about my skills, projects, and experience:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
              <li><span className="font-medium">Home</span>: Overview and highlights.</li>
              <li><span className="font-medium">About</span>: Background, philosophy, and what I bring to teams.</li>
              <li><span className="font-medium">Skills</span>: Technologies and tools I use.</li>
              <li><span className="font-medium">Projects</span>: Selected work with context and impact.</li>
              <li><span className="font-medium">Projects</span>: Selected work with context and impact.</li>
              <li><span className="font-medium">Contact</span>: Reach out via the contact form.</li>
            </ul>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2">
            <Button variant="outline" onClick={dismissIntro}>Skip</Button>
            <Button onClick={dismissIntro}>Enter Site</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}