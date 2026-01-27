"use client"

import { ArrowRight, Code, Database, Globe, Server, Terminal, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-br from-white via-slate-50 to-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Professional Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none" />
      
      {/* Code Pattern Overlay - Hidden on small screens */}
      <div className="hidden lg:block absolute top-10 right-10 text-slate-200 font-mono text-xs lg:text-sm opacity-20 select-none">
        <div>const developer = {`{`}</div>
        <div className="ml-4">name: "Sonu",</div>
        <div className="ml-4">role: "Full Stack Developer",</div>
        <div className="ml-4">stack: ["MongoDB", "Express", "React", "Node.js"],</div>
        <div className="ml-4">experience: "Professional",</div>
        <div className="ml-4">passion: "Building scalable solutions"</div>
        <div>{`}`};</div>
      </div>

      <div className="container px-3 sm:px-4 md:px-6 w-full relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Name - Prominently Displayed */}
              <motion.div 
                className="space-y-4"
                variants={itemVariants}
              >
                <motion.div
                  className="inline-block mb-2"
                  variants={itemVariants}
                >
                  <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                    Professional Developer
                  </span>
                </motion.div>
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-[1.1]"
                  variants={itemVariants}
                >
                  Sonu
                </motion.h1>
                <motion.div 
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-full text-xs sm:text-base font-semibold shadow-professional-lg hover-professional"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <Terminal className="w-5 h-5" />
                  <span>MERN Stack Developer</span>
                </motion.div>
              </motion.div>

              {/* Qualification */}
              <motion.div 
                className="space-y-3"
                variants={itemVariants}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                  Full Stack Web Developer
                </h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
                    React.js Specialist
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
                    Node.js Expert
                  </span>
                  <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
                    MongoDB Professional
                  </span>
                </div>
              </motion.div>

              {/* About Me - Prominently Displayed */}
              <motion.div 
                className="space-y-4 sm:space-y-5 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-professional-lg p-4 sm:p-6 md:p-8 border border-slate-200/50 shadow-professional-lg hover-professional"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                  <h3 className="text-2xl font-bold text-slate-900">About Me</h3>
                </div>
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  variants={itemVariants}
                >
                  I'm <span className="font-bold text-slate-900">Sonu</span>, a dedicated Full Stack Developer with <span className="font-semibold">2+ years</span> of professional experience specializing in the <span className="font-semibold text-blue-600">MERN stack</span>. 
                  I build scalable, efficient web applications that solve real-world problems and deliver exceptional user experiences. 
                  With expertise in <span className="font-medium">React.js, Node.js, MongoDB, and Express.js</span>, I create modern solutions that drive business growth.
                </motion.p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-50 rounded-lg">
                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">15+ Projects</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-50 rounded-lg">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">2+ Years Exp</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-50 rounded-lg">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Satisfaction</span>
                  </div>
                </div>
              </motion.div>

              {/* Key Skills */}
              <motion.div className="space-y-4" variants={itemVariants}>
                <h3 className="text-lg font-semibold text-slate-900">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Frontend Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Server className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Backend Architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Database className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Database Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-slate-700" />
                    </div>
                    <span className="text-slate-700 font-medium">API Development</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-3 text-lg font-semibold rounded-professional shadow-professional-lg hover:shadow-professional-xl transition-professional"
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
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
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
                    Get In Touch
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Tech Stack */}
            <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants}>
              <div className="bg-slate-50 rounded-lg sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Technology Stack</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-sm sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"].map((tech) => (
                        <span key={tech} className="px-2 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-sm sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"].map((tech) => (
                        <span key={tech} className="px-2 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h4 className="text-sm sm:text-lg font-semibold text-slate-800 mb-2 sm:mb-3">Tools & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack"].map((tech) => (
                        <span key={tech} className="px-2 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">15+</div>
                      <div className="text-xs sm:text-sm text-slate-600">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">2+</div>
                      <div className="text-xs sm:text-sm text-slate-600">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">100%</div>
                      <div className="text-xs sm:text-sm text-slate-600">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
