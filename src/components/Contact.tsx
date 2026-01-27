"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = "RggKAAF4Ze8itNfFk"
  const EMAILJS_SERVICE_ID = "service_17x01fm"
  const EMAILJS_TEMPLATE_ID = "template_0219lpe"
  const EMAILJS_AUTO_REPLY_TEMPLATE_ID = "template_pq7s5tj" // You can create a separate template for auto-reply

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    
    try {
      // Prepare template parameters for the main email to you
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Sonu",
        reply_to: formData.email,
      }

      // Send email to you (the owner)
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (response.status === 200 || response.text === "OK") {
        // Send auto-reply to the user
        try {
          const autoReplyParams = {
            to_name: formData.name,
            to_email: formData.email,
            from_name: "Sonu",
            from_email: "techsonu360@gmail.com",
            subject: "Thank you for contacting me!",
            message: `Hello ${formData.name},\n\nThank you for reaching out to me through my portfolio website! I've received your message and I'm excited to learn more about your project.\n\nI'll review your message and get back to you within 24-48 hours. If your inquiry is urgent, please feel free to contact me directly at techsonu360@gmail.com or +91 8467867135.\n\nBest regards,\nSonu\nMERN Stack Developer`,
            user_message: formData.message.substring(0, 200),
          }

          // Send auto-reply using the dedicated auto-reply template
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_AUTO_REPLY_TEMPLATE_ID, // Using dedicated auto-reply template
            {
              to_name: formData.name,
              to_email: formData.email,
              from_name: "Sonu",
              from_email: "techsonu360@gmail.com",
              subject: "Thank you for contacting me!",
              message: autoReplyParams.message,
              user_message: formData.message.substring(0, 200),
            },
            EMAILJS_PUBLIC_KEY
          )
        } catch (autoReplyError) {
          // Auto-reply failed but main email succeeded, so we still show success
          console.warn("Auto-reply failed (this is optional):", autoReplyError)
          // Don't throw error - main email was successful
        }

        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
      setErrorMessage(
        error.text || "Failed to send message. Please try again or contact me directly at techsonu360@gmail.com"
      )
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container px-3 sm:px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center mb-12 md:mb-20" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full glass-premium px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-slate-700 shadow-professional mb-4 md:mb-6 border border-indigo-200/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4 md:mb-6">
              Let's Work Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto px-2">
              Ready to bring your ideas to life? I'm always excited to discuss new projects 
              and opportunities. Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <a 
                      href="mailto:techsonu360@gmail.com"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-200 group border border-slate-200 hover:border-blue-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">Email</h4>
                        <p className="text-slate-600 group-hover:text-blue-600 font-medium">techsonu360@gmail.com</p>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V16a1 1 0 11-2 0V7.414L7.707 10.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>

                    <a 
                      href="tel:+918467867135"
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-green-50 transition-all duration-200 group border border-slate-200 hover:border-green-300 cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Phone className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900">Phone</h4>
                        <p className="text-slate-600 group-hover:text-green-600 font-medium">+91 8467867135</p>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V16a1 1 0 11-2 0V7.414L7.707 10.707a1 1 0 01-1.414-1.414l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </a>

                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=RXVW+JJX+Lucknow+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                        <MapPin className="w-6 h-6 text-slate-700 group-hover:text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Location</h4>
                        <p className="text-slate-600 group-hover:text-purple-600">Lucknow (Gomti Nagar), India</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <h4 className="font-semibold text-slate-900 mb-4">What I Can Help With</h4>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div>• Full-stack web application development</div>
                      <div>• MERN stack projects</div>
                      <div>• API development and integration</div>
                      <div>• Frontend UI/UX implementation</div>
                      <div>• Database design and optimization</div>
                      <div>• Technical consultation</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-professional-lg hover-professional bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell me about your project or how I can help..."
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white py-3 px-6 rounded-professional font-semibold transition-professional disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold">Message sent successfully!</p>
                            <p className="mt-1">I've received your message and an auto-reply has been sent to your email. I'll get back to you soon.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
                      >
                        {errorMessage || "Sorry, there was an error sending your message. Please try again or contact me directly at techsonu360@gmail.com"}
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}