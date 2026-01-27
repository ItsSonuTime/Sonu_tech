"use client"

import { ArrowUpRight, ExternalLink, Github, Code, Database, Globe, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, payment integration, inventory management, and admin dashboard. Built with modern web technologies for optimal performance.",
      longDescription: "A comprehensive e-commerce platform featuring user registration/login, product catalog with search and filtering, shopping cart functionality, secure payment processing via Stripe, order management, and an admin panel for inventory and user management.",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "JWT"],
      image: "https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2025/12/693349cd45bdb682353992.jpg",
      demoUrl: "#",
      githubUrl: "#",
      features: ["User Authentication", "Payment Gateway", "Admin Dashboard", "Responsive Design"],
      techStack: {
        frontend: "React.js, Redux, Tailwind CSS",
        backend: "Node.js, Express.js, JWT",
        database: "MongoDB, Mongoose",
        deployment: "Vercel, MongoDB Atlas"
      }
    },
    {
      title: "Real-Time Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts. Features responsive design and offline capabilities.",
      longDescription: "A sophisticated weather dashboard that provides real-time weather data, 7-day forecasts, interactive maps, weather alerts, and historical weather patterns. Includes geolocation services and works offline with cached data.",
      tags: ["React.js", "Weather API", "Chart.js", "Geolocation", "PWA"],
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png",
      demoUrl: "#",
      githubUrl: "#",
      features: ["Real-time Data", "Interactive Maps", "Weather Alerts", "Offline Support"],
      techStack: {
        frontend: "React.js, Chart.js, Leaflet Maps",
        backend: "Node.js, Weather API Integration",
        database: "Local Storage, IndexedDB",
        deployment: "Netlify, PWA Configuration"
      }
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, file sharing, and progress tracking. Designed for remote teams and agile workflows.",
      longDescription: "A comprehensive task management system with project creation, task assignment, real-time collaboration, file uploads, progress tracking, team chat, and detailed analytics dashboard for project managers.",
      tags: ["React.js", "Socket.io", "Node.js", "MongoDB", "File Upload"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWWJp-4WF9-BXE09YUtqEdfXrOoBlkf8kzg&s",
      demoUrl: "#",
      githubUrl: "#",
      features: ["Real-time Collaboration", "File Sharing", "Progress Tracking", "Team Chat"],
      techStack: {
        frontend: "React.js, Socket.io Client, Material-UI",
        backend: "Node.js, Socket.io, Multer",
        database: "MongoDB, GridFS",
        deployment: "Heroku, MongoDB Atlas"
      }
    },
    {
      title: "Portfolio Website Builder",
      description: "Dynamic portfolio builder allowing users to create professional portfolios with customizable templates, drag-and-drop interface, and SEO optimization.",
      longDescription: "A SaaS platform for creating professional portfolios with multiple templates, drag-and-drop editor, custom domain support, SEO optimization, analytics dashboard, and social media integration.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      image: "https://themewagon.com/wp-content/uploads/2020/07/Beko-1.png",
      demoUrl: "#",
      githubUrl: "#",
      features: ["Drag & Drop Editor", "Custom Templates", "SEO Optimization", "Analytics"],
      techStack: {
        frontend: "Next.js, TypeScript, Tailwind CSS",
        backend: "Next.js API Routes, Prisma ORM",
        database: "PostgreSQL, Vercel Postgres",
        deployment: "Vercel, Custom Domains"
      }
    },
  ]

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
      },
    },
  }

  return (
    <section id="projects" ref={ref} className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container px-3 sm:px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-12 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full glass-premium px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-slate-700 shadow-professional border border-pink-200/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
              A showcase of full-stack applications demonstrating technical expertise, 
              problem-solving skills, and modern development practices.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm overflow-hidden group">
                {/* Project Image */}
                <div className="aspect-video w-full overflow-hidden relative bg-slate-100">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-slate-900 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-900 rounded-full text-white shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {/* Title and Description */}
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{project.description}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Technology Stack</h4>
                      <div className="space-y-1 text-sm">
                        <div><span className="font-medium">Frontend:</span> <span className="text-slate-600">{project.techStack.frontend}</span></div>
                        <div><span className="font-medium">Backend:</span> <span className="text-slate-600">{project.techStack.backend}</span></div>
                        <div><span className="font-medium">Database:</span> <span className="text-slate-600">{project.techStack.database}</span></div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                        onClick={() => window.open(project.demoUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="flex justify-center mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
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
              Let's Build Something Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
