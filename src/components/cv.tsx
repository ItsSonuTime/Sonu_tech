"use client"

import { Download, FileText, Award, Briefcase, GraduationCap, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function CV() {
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
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  const handleDownload = () => {
    // Create comprehensive CV content
    const cvContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sonu - CV</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
      line-height: 1.6; 
      color: #333; 
      background: #f5f5f5;
      padding: 15px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 20px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 3px solid #1e293b;
      text-align: center;
    }
    .photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #1e293b;
    }
    .header-info h1 {
      font-size: 1.8em;
      color: #1e293b;
      margin-bottom: 10px;
    }
    .header-info .title {
      font-size: 1em;
      color: #64748b;
      margin-bottom: 15px;
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 0.85em;
      width: 100%;
    }
    .contact-info span {
      display: flex;
      align-items: center;
      gap: 5px;
      justify-content: center;
    }
    .section {
      margin: 25px 0;
    }
    .section h2 {
      color: #1e293b;
      font-size: 1.4em;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e2e8f0;
    }
    .section h3 {
      color: #334155;
      font-size: 1.1em;
      margin: 15px 0 8px 0;
    }
    .section p, .section li {
      color: #475569;
      margin-bottom: 8px;
      font-size: 0.95em;
    }
    .section ul {
      margin-left: 15px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-top: 15px;
    }
    .skill-category {
      background: #f8fafc;
      padding: 12px;
      border-radius: 8px;
      border-left: 4px solid #3b82f6;
    }
    .skill-category h4 {
      color: #1e293b;
      margin-bottom: 8px;
      font-size: 0.95em;
    }
    .skill-category ul {
      list-style: none;
      margin-left: 0;
    }
    .skill-category li {
      padding: 2px 0;
      font-size: 0.85em;
    }
    .education-item {
      background: #f8fafc;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    .education-item h3 {
      color: #1e293b;
      margin-bottom: 5px;
      font-size: 0.95em;
    }
    .project-item {
      background: #f8fafc;
      padding: 12px;
      border-radius: 8px;
      margin-bottom: 12px;
    }
    .project-item h3 {
      color: #1e293b;
      margin-bottom: 5px;
      font-size: 0.95em;
    }
    .project-item p {
      font-size: 0.85em;
    }
    .strengths {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
      justify-content: center;
    }
    .strength-tag {
      background: #3b82f6;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.8em;
      white-space: nowrap;
    }
    @media (min-width: 600px) {
      .container {
        padding: 30px;
      }
      body {
        padding: 20px;
      }
      .header {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
      }
      .photo {
        width: 150px;
        height: 150px;
      }
      .header-info h1 {
        font-size: 2.5em;
      }
      .header-info .title {
        font-size: 1.2em;
      }
      .contact-info {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        font-size: 0.9em;
        justify-content: flex-start;
      }
      .contact-info span {
        justify-content: flex-start;
      }
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      }
      .section h2 {
        font-size: 1.8em;
      }
      .strengths {
        justify-content: flex-start;
      }
    }
    @media print {
      body { background: white; padding: 0; }
      .container { box-shadow: none; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div style="flex-shrink: 0;">
        <div style="width: 150px; height: 150px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; border: 4px solid #1e293b; color: white; font-size: 3em; font-weight: bold;">
        <img src="my.jpg" alt="Sonu" class="photo" />
        </div>
      </div>
      <div class="header-info">
        <h1>Sonu</h1>
        <div class="title">Web Developer | App Developer | MERN Stack Developer</div>
        <div class="contact-info">
          <span>📍 Lucknow (Gomti Nagar), Uttar Pradesh, India</span>
          <span>📧 techsonu360@gmail.com</span>
          <span>📱 +91 8467867135</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Profile Summary</h2>
      <p>Passionate and results-driven <strong>Web & App Developer</strong> with strong experience in <strong>MERN Stack development</strong> and backend systems. Skilled in building responsive web applications, scalable backend APIs, and modern mobile-ready solutions. Currently pursuing B.Tech in <strong>CSE (AI & ML)</strong> with a keen interest in real-world application development.</p>
    </div>

    <div class="section">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h4>Frontend Development</h4>
          <ul>
            <li>HTML5, CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Responsive UI Design</li>
          </ul>
        </div>
        <div class="skill-category">
          <h4>Backend Development</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>RESTful APIs</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>
        <div class="skill-category">
          <h4>Database & Cloud</h4>
          <ul>
            <li>MongoDB</li>
            <li>Firebase (Auth, Firestore)</li>
          </ul>
        </div>
        <div class="skill-category">
          <h4>App Development</h4>
          <ul>
            <li>Full-stack App Development</li>
            <li>Backend Integration</li>
          </ul>
        </div>
        <div class="skill-category">
          <h4>Tools & Technologies</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>Postman</li>
            <li>VS Code</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Education</h2>
      <div class="education-item">
        <h3>Bachelor of Technology (B.Tech)</h3>
        <p><strong>Computer Science Engineering (AI & ML)</strong></p>
        <p>Dr. A.P.J. Abdul Kalam Technical University</p>
        <p><em>Pursuing</em></p>
      </div>
    </div>

    <div class="section">
      <h2>Projects</h2>
      <div class="project-item">
        <h3>MERN Stack Web Applications</h3>
        <p>Built full-stack applications with secure authentication and database integration.</p>
      </div>
      <div class="project-item">
        <h3>Web Development Projects</h3>
        <p>Designed responsive and user-friendly websites.</p>
      </div>
      <div class="project-item">
        <h3>Backend APIs</h3>
        <p>Developed scalable REST APIs using Node.js and Express.</p>
      </div>
    </div>

    <div class="section">
      <h2>Strengths</h2>
      <div class="strengths">
        <span class="strength-tag">Strong problem-solving skills</span>
        <span class="strength-tag">Clean and maintainable code</span>
        <span class="strength-tag">Quick learner and adaptable</span>
        <span class="strength-tag">Team-oriented</span>
        <span class="strength-tag">Good communication skills</span>
      </div>
    </div>

    <div class="section">
      <h2>Career Objective</h2>
      <p>To secure a challenging role as a <strong>Web/App Developer</strong> where I can apply my MERN stack and backend skills to build impactful digital solutions while continuously growing as a software engineer.</p>
    </div>

    <div class="section">
      <h2>Personal Details</h2>
      <p><strong>Name:</strong> Sonu</p>
      <p><strong>Location:</strong> Lucknow (Gomti Nagar), India</p>
      <p><strong>Nationality:</strong> Indian</p>
    </div>
  </div>
</body>
</html>
    `
    
    const element = document.createElement('a')
    const file = new Blob([cvContent], {type: 'text/html'})
    element.href = URL.createObjectURL(file)
    element.download = 'Sonu_CV.html'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <section id="cv" ref={ref} className="relative py-12 md:py-16 lg:py-24 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="container px-3 sm:px-4 md:px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center space-y-4 sm:space-y-6 mb-12 md:mb-20" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full glass-premium px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-slate-700 shadow-professional border border-green-200/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Resume
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Professional CV
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
              Download my complete resume to learn more about my experience, skills, and achievements.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Left Column - CV Preview */}
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">CV Preview</h3>
                  </div>
                  
                  {/* Photo and Header */}
                  <div className="flex items-center gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-slate-200">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-200 flex-shrink-0">
                      <Image
                        src="/my.jpg"
                        alt="Sonu"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Sonu</h4>
                      <p className="text-sm text-slate-600">Web Developer | App Developer | MERN Stack</p>
                      <p className="text-xs text-slate-500 mt-1">B.Tech CSE (AI & ML) - Pursuing</p>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-slate-600" />
                      <span className="text-slate-700">Lucknow (Gomti Nagar), UP, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-slate-600" />
                      <span className="text-slate-700">Dr. A.P.J. Abdul Kalam Technical University</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-slate-600" />
                      <span className="text-slate-700">MERN Stack Developer</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-6 h-6 text-slate-700" />
                    <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800">Freelance Full Stack Developer</h4>
                      <p className="text-sm text-slate-600">2+ Years</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-600">
                        <li>• Developed 15+ full-stack web applications</li>
                        <li>• Built responsive UIs with React and Next.js</li>
                        <li>• Designed RESTful APIs and database schemas</li>
                        <li>• Delivered scalable solutions for clients</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Skills & Education */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-slate-700" />
                    <h3 className="text-2xl font-bold text-slate-900">Core Skills</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "JavaScript ES6+"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-slate-100 rounded-lg text-sm text-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-slate-100 rounded-lg text-sm text-slate-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-slate-700" />
                    <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-800">B.Tech - Computer Science Engineering</h4>
                      <p className="text-sm text-slate-600">Artificial Intelligence & Machine Learning</p>
                      <p className="text-sm text-slate-600 mt-1">Dr. A.P.J. Abdul Kalam Technical University</p>
                      <p className="text-xs text-slate-500 mt-1">Pursuing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-6 h-6 text-slate-700" />
                    <h3 className="text-2xl font-bold text-slate-900">Projects</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-800 text-sm">MERN Stack Web Applications</h4>
                      <p className="text-xs text-slate-600">Full-stack apps with authentication</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-800 text-sm">Web Development Projects</h4>
                      <p className="text-xs text-slate-600">Responsive and user-friendly websites</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <h4 className="font-semibold text-slate-800 text-sm">Backend APIs</h4>
                      <p className="text-xs text-slate-600">Scalable REST APIs with Node.js</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Download Button */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={handleDownload}
                className="tech-gradient text-white px-8 py-3 text-lg font-bold rounded-professional shadow-professional-lg hover:shadow-professional-xl transition-professional relative overflow-hidden group"
              >
                <Download className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Download CV</span>
                <div className="absolute inset-0 tech-shimmer opacity-0 group-hover:opacity-50 transition-opacity"></div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
