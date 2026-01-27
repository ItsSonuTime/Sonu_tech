"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Footer() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const socialLinks = [
    {
      href: "https://github.com/ItsSonuTime",
      icon: Github,
      label: "GitHub",
      color: "hover:bg-slate-700"
    },
    {
      href: "https://www.linkedin.com/in/sonu-tech-ba0738348/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:bg-slate-600"
    },
    {
      href: "https://www.freelancer.in/u/Sonutech18",
      icon: () => (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.5 2H13v4H9V2H7.5v4H2v2h5.5v4H2v2h5.5v4H2v2h5.5v4H7v-4h4v4h1.5v-4H18v4h1.5v-4H24v-2h-4.5v-4H24v-2h-4.5v-4H24V6h-4.5V2H18v4h-4V2zm-2 6H9v4h3.5V8zm0 6H9v4h3.5v-4zm6 0h-3.5v4H18v-4zm0-6h-3.5v4H18V8z"/>
        </svg>
      ),
      label: "Freelancer",
      color: "hover:bg-slate-600"
    },
    {
      href: "mailto:techsonu360@gmail.com",
      icon: Mail,
      label: "Email",
      color: "hover:bg-slate-700"
    }
  ]

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <footer ref={ref} className="border-t border-gray-800 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Brand Section */}
          <motion.div className="space-y-3 sm:space-y-4 text-center sm:text-left" variants={itemVariants}>
            <motion.h3 
              className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Sonu
            </motion.h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
              Building the future of web development, one project at a time.
            </p>
            <motion.div 
              className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-3 h-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of coffee</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-3 sm:space-y-4 text-center sm:text-left" variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-gray-400 sm:block sm:space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link 
                    href={link.href} 
                    className="block py-1 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-3 sm:space-y-4 text-center sm:text-left col-span-1 sm:col-span-2 lg:col-span-1" variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold">Connect</h3>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`rounded-full bg-gray-800 p-2 sm:p-2.5 md:p-3 text-gray-400 hover:text-white transition-all duration-300 ${social.color} shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="mt-6 sm:mt-8 md:mt-12 border-t border-gray-800 pt-4 sm:pt-6 md:pt-8 text-center"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p 
            className="text-xs sm:text-sm text-gray-400"
            whileHover={{ color: "#ffffff" }}
          >
            © {new Date().getFullYear()} Sonu. All rights reserved.
          </motion.p>
          <motion.p 
            className="text-xs text-gray-500 mt-1 sm:mt-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            Designed & Developed with modern web technologies
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
