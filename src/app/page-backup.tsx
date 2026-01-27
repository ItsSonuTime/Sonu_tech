"use client"

import { useEffect, useState } from "react"
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

      <Modal
        open={showEnquiry}
        onOpenChange={(o) => (o ? setShowEnquiry(true) : dismissEnquiry())}
        title="Quick question"
        description="Before you explore — could you tell me why you visited?"
      >
        <form onSubmit={submitEnquiry} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Why are you visiting?</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="why" value="curiosity" checked={visitWhy === 'curiosity'} onChange={() => setVisitWhy('curiosity')} />
                <span className="text-sm">Curiosity / Browsing</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="why" value="hire" checked={visitWhy === 'hire'} onChange={() => setVisitWhy('hire')} />
                <span className="text-sm">Looking to hire / Work</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="why" value="learn" checked={visitWhy === 'learn'} onChange={() => setVisitWhy('learn')} />
                <span className="text-sm">Learning / Research</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="why" value="other" checked={visitWhy === 'other'} onChange={() => setVisitWhy('other')} />
                <span className="text-sm">Other</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Short reason (required)</label>
            <textarea value={visitReason} onChange={(e) => setVisitReason(e.target.value)} rows={4} className="w-full rounded-md border p-2" />
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button variant="outline" type="button" onClick={dismissEnquiry}>Skip</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Modal>
      <Modal
        open={showIntro}
        onOpenChange={(o) => (o ? setShowIntro(true) : dismissIntro())}
        title="Welcome"
        description="A quick overview before you explore"
      >
        <div className="space-y-4">
          <div>
         
          </div>
          <p className="text-sm leading-6 text-foreground">
            I build modern, performant web applications with a focus on clean UI, scalable architecture,
            and great user experience. Below is how to navigate this site.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
            <li><span className="font-medium">Home</span>: Overview and highlights.</li>
            <li><span className="font-medium">About</span>: Background, philosophy, and what I bring to teams.</li>
            <li><span className="font-medium">Skills</span>: Technologies and tools I use.</li>
            <li><span className="font-medium">Projects</span>: Selected work with context and impact.</li>
            <li><span className="font-medium">Contact</span>: Reach out via the classic form.</li>
          </ul>
          <div className="flex items-center justify-end gap-2 pt-2">
            <Button variant="outline" onClick={dismissIntro}>Skip</Button>
            <Button onClick={dismissIntro}>Enter Site</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}