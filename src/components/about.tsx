"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Lightbulb, Users, Award, BookOpen, Briefcase, Target } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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
        delayChildren: 0.1,
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
        ease: [0.4, 0, 0.2, 1] as const, // easeOut cubic bezier
      },
    },
  }

  return (
    <section id="about" ref={ref} className="relative py-12 md:py-16 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container px-3 sm:px-4 md:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center space-y-4 sm:space-y-6 mb-12 md:mb-20" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full glass-premium px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-slate-700 shadow-professional border border-blue-200/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Professional Background
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
              I'm <span className="font-bold text-slate-900">Sonu</span>, a dedicated Full Stack Developer with expertise in modern web technologies. 
              I specialize in creating scalable, efficient applications that solve real-world problems and deliver exceptional user experiences.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-16">
            {/* Left Column - Professional Summary */}
            <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
              <div className="bg-white rounded-lg md:rounded-professional-lg p-4 sm:p-6 md:p-8 shadow-professional-lg border border-slate-200/50 hover-professional">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Technical Expertise</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Full Stack Development</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Proficient in end-to-end web application development using the MERN stack. 
                      Experience with modern frameworks, state management, and responsive design principles.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Backend Architecture</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Skilled in designing RESTful APIs, database optimization, authentication systems, 
                      and implementing scalable server-side solutions with Node.js and Express.js.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Database Management</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Experience with both SQL and NoSQL databases, data modeling, query optimization, 
                      and implementing efficient data storage solutions for various application needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Values */}
              <div className="bg-white rounded-professional-lg p-8 shadow-professional-lg border border-slate-200/50 hover-professional">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Approach</h3>
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Target className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Solution-Oriented</h4>
                      <p className="text-slate-600 text-sm">Focus on delivering practical solutions that meet business objectives</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Code2 className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Clean Code Advocate</h4>
                      <p className="text-slate-600 text-sm">Write maintainable, well-documented code following industry best practices</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BookOpen className="w-5 h-5 text-slate-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Continuous Learning</h4>
                      <p className="text-slate-600 text-sm">Stay updated with latest technologies and development methodologies</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills & Achievements */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Core Competencies */}
              <div className="bg-white rounded-professional-lg p-8 shadow-professional-lg border border-slate-200/50 hover-professional">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Competencies</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Code2, title: "Frontend", desc: "React, Next.js, TypeScript" },
                    { icon: Globe, title: "Backend", desc: "Node.js, Express, APIs" },
                    { icon: Lightbulb, title: "Database", desc: "MongoDB, PostgreSQL" },
                    { icon: Users, title: "DevOps", desc: "Git, Docker, AWS" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <item.icon className="w-6 h-6 text-slate-700 mb-2" />
                      <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Professional Stats */}
              <div className="bg-white rounded-professional-lg p-8 shadow-professional-lg border border-slate-200/50 hover-professional">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Metrics</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900">15+</div>
                    <div className="text-sm text-slate-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900">2+</div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600">Support Available</div>
                  </div>
                </div>
              </div>

              {/* Certifications & Learning */}
              <div className="bg-white rounded-professional-lg p-8 shadow-professional-lg border border-slate-200/50 hover-professional">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Continuous Development</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-slate-700" />
                    <span className="text-slate-700">Full Stack Web Development Certification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-slate-700" />
                    <span className="text-slate-700">MongoDB Database Administration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-slate-700" />
                    <span className="text-slate-700">AWS Cloud Practitioner (In Progress)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-slate-700" />
                    <span className="text-slate-700">Freelance Development Experience</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="text-center" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-3 text-lg font-semibold rounded-professional shadow-professional-lg hover:shadow-professional-xl transition-professional"
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
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
