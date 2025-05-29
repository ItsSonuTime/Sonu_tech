import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl font-bold tracking-tight">Happy Coder</h3>
            <p className="text-sm text-gray-400 max-w-xs mx-auto sm:mx-0">
              Building the future of web development, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400 sm:block sm:space-y-2">
              <li>
                <Link 
                  href="#about" 
                  className="block py-1 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills" 
                  className="block py-1 hover:text-white transition-colors duration-300"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="block py-1 hover:text-white transition-colors duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="block py-1 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link 
                href="https://github.com/ItsSonuTime" 
                className="rounded-full bg-gray-800 p-2.5 sm:p-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/sonu-tech-ba0738348/" 
                className="rounded-full bg-gray-800 p-2.5 sm:p-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.freelancer.in/u/Sonutech18" 
                className="rounded-full bg-gray-800 p-2.5 sm:p-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Freelancer"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.5 2H13v4H9V2H7.5v4H2v2h5.5v4H2v2h5.5v4H2v2h5.5v4H7v-4h4v4h1.5v-4H18v4h1.5v-4H24v-2h-4.5v-4H24v-2h-4.5v-4H24V6h-4.5V2H18v4h-4V2zm-2 6H9v4h3.5V8zm0 6H9v4h3.5v-4zm6 0h-3.5v4H18v-4zm0-6h-3.5v4H18V8z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="rounded-full bg-gray-800 p-2.5 sm:p-3 text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Happy Coder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
