'use client'

import { services } from '@/data/data'
import { ChevronDown, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Footer() {
  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === '/'
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle hash navigation on homepage
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      const element = document.getElementById(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [isHomePage])

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      router.push(`/#${sectionId}`)
    }
    setIsServicesOpen(false)
  }

  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-16">
          
          {/* Brand Column - Full width on mobile, 5 cols on desktop */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl uppercase tracking-widest font-bold text-text-main-light dark:text-white mb-4">
                  White Noroh
                </h3>
                <p className="text-sm lg:text-base text-text-muted-light dark:text-text-muted-dark leading-relaxed max-w-lg">
                  A multidisciplinary studio focusing on minimal design, digital strategy, and creative storytelling. 
                  We craft meaningful experiences through thoughtful design.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-text-muted-light dark:text-text-muted-dark">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>
                <a
                  href="mailto:whitenoroh@gmail.com"
                  className="flex items-center gap-3 text-sm hover:text-text-main-light dark:hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4" />
                  <span className="underline-offset-4 hover:underline">whitenoroh@gmail.com</span>
                </a>
                <a
                  href="tel:+919389495430"
                  className="flex items-center gap-3 text-sm hover:text-text-main-light dark:hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4" />
                  <span className="underline-offset-4 hover:underline">+91 9389495430</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation and Services Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-text-main-light dark:text-white">
                Explore
              </h4>
              <nav className="space-y-4">
                {[
                  { id: 'home', label: 'Home', link: '/#home' },
                  { id: 'service', label: 'Services', link: '/#service' },
                  { id: 'contact', label: 'Contact', link: '/contact' }
                ].map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    className="block text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-text-main-light dark:text-white">
                  Services
                </h4>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="lg:hidden"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {/* Desktop Services List */}
              <div className="hidden lg:block space-y-3">
                {services.slice(0, 5).map((service) => (
                  <Link
                    key={service.id}
                    href={`/service/${service.id}`}
                    className="flex items-center gap-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-white transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    <span className="group-hover:ml-1 transition-all duration-200">{service.title}</span>
                  </Link>
                ))}
                <Link
                  href="/#service"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('service')
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group mt-4"
                >
                  View All Services
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Mobile Services Dropdown */}
              <div className="lg:hidden">
                <div className="space-y-3">
                  {isServicesOpen && services.slice(0, 5).map((service) => (
                    <Link
                      key={service.id}
                      href={`/service/${service.id}`}
                      onClick={() => setIsServicesOpen(false)}
                      className="flex items-center gap-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-3 h-3" />
                      <span>{service.title}</span>
                    </Link>
                  ))}
                  {isServicesOpen && (
                    <Link
                      href="/#service"
                      onClick={(e) => {
                        e.preventDefault()
                        setIsServicesOpen(false)
                        handleNavClick('service')
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group mt-4"
                    >
                      View All Services
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>



          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark font-medium tracking-wide">
              © 2025 White Noroh Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
             
              <div className="text-xs text-text-muted-light dark:text-text-muted-dark">
                Crafted with passion
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}