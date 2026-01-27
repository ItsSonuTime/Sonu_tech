"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Layers, 
  Smartphone, 
  Cloud,
  Shield,
  Zap
} from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      description: "Modern UI/UX with responsive design and interactive user experiences",
      technologies: [
        { name: "React.js", level: 90, description: "Component-based architecture, hooks, context" },
        { name: "Next.js", level: 85, description: "SSR, SSG, API routes, performance optimization" },
        { name: "TypeScript", level: 80, description: "Type safety, interfaces, advanced types" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first styling, responsive design" },
        { name: "JavaScript ES6+", level: 90, description: "Modern syntax, async/await, modules" },
        { name: "HTML5/CSS3", level: 95, description: "Semantic markup, flexbox, grid, animations" }
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "Backend Development",
      icon: Server,
      description: "Scalable server-side applications and API development",
      technologies: [
        { name: "Node.js", level: 88, description: "Runtime environment, event-driven architecture" },
        { name: "Express.js", level: 90, description: "RESTful APIs, middleware, routing" },
        { name: "RESTful APIs", level: 85, description: "HTTP methods, status codes, best practices" },
        { name: "GraphQL", level: 70, description: "Query language, resolvers, schema design" },
        { name: "JWT Authentication", level: 80, description: "Secure token-based authentication" },
        { name: "Microservices", level: 65, description: "Service-oriented architecture patterns" }
      ],
      color: "from-green-500 to-green-700"
    },
    {
      category: "Database Management",
      icon: Database,
      description: "Data modeling, optimization, and management systems",
      technologies: [
        { name: "MongoDB", level: 85, description: "NoSQL, aggregation, indexing, Atlas" },
        { name: "Mongoose ODM", level: 88, description: "Schema design, validation, middleware" },
        { name: "PostgreSQL", level: 75, description: "Relational database, complex queries" },
        { name: "Redis", level: 70, description: "Caching, session storage, pub/sub" },
        { name: "Database Design", level: 80, description: "Normalization, relationships, optimization" },
        { name: "SQL", level: 78, description: "Queries, joins, stored procedures" }
      ],
      color: "from-purple-500 to-purple-700"
    },
    {
      category: "DevOps & Tools",
      icon: Cloud,
      description: "Development workflow, deployment, and infrastructure management",
      technologies: [
        { name: "Git/GitHub", level: 90, description: "Version control, branching, collaboration" },
        { name: "Docker", level: 75, description: "Containerization, multi-stage builds" },
        { name: "AWS Services", level: 70, description: "EC2, S3, Lambda, RDS deployment" },
        { name: "Vercel/Netlify", level: 85, description: "Frontend deployment, serverless functions" },
        { name: "CI/CD", level: 65, description: "Automated testing, deployment pipelines" },
        { name: "Linux/Ubuntu", level: 75, description: "Command line, server administration" }
      ],
      color: "from-orange-500 to-orange-700"
    }
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
    <section id="skills" ref={ref} className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
      <div className="container px-3 sm:px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-12 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full glass-premium px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-slate-700 shadow-professional border border-purple-200/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Technical Skills
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Technology Expertise
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
              Comprehensive skill set covering the full development lifecycle, from frontend user interfaces 
              to backend architecture and deployment strategies.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-0 shadow-professional-lg hover-professional bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${skillGroup.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <skillGroup.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-2xl font-bold text-slate-900 break-words">{skillGroup.category}</h3>
                      <p className="text-slate-600 text-xs sm:text-sm">{skillGroup.description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-semibold text-slate-800">{tech.name}</span>
                            <p className="text-xs text-slate-500">{tech.description}</p>
                          </div>
                          <span className="text-sm font-medium text-slate-600">{tech.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${skillGroup.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: index * 0.2 + techIndex * 0.1,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-slate-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Additional Competencies</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Smartphone, title: "Mobile-First Design", desc: "Responsive development" },
                { icon: Shield, title: "Security Best Practices", desc: "Data protection & validation" },
                { icon: Zap, title: "Performance Optimization", desc: "Speed & efficiency focus" },
                { icon: GitBranch, title: "Agile Development", desc: "Scrum & collaborative workflows" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-slate-600 text-xs">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}